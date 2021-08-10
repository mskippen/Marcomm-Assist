// const db = require("../config/connection");
const mongoose = require("mongoose");
const User = require("../models/User");
const Property = require("../models/Property");
const Campaign = require("../models/Campaign");
const Fund = require("../models/Fund");
const Invoice = require("../models/Invoice");
const Item = require("../models/Item")

const userSeeds = require("./userSeeds.json");
const propertySeeds = require("./propertySeeds");
const campaignSeeds = require("./campaignSeeds");
const fundSeeds = require("./fundSeeds");
const invoiceSeeds = require("./invoiceSeeds");
const itemSeeds = require("./itemSeeds")

mongoose.connection.dropDatabase("marcomm_app");

function calculateRate(info) {}

mongoose
  .connect("mongodb://localhost/marcomm_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected");
    Promise.all([
      User.create(userSeeds),
      Item.create(itemSeeds),
      // Campaign.create(campaignSeeds),
    ]).then(([users, item]) => {
      propertySeeds.users.push(users[0]._id);
      fundSeeds.users.push(users[0]._id);
     
      campaignSeeds[0].items.push(item[0]._id)
      campaignSeeds[0].items.push(item[1]._id)
      return Campaign.create(campaignSeeds[0])
      .then(createdCampaign => {
        fundSeeds.campaigns.push(createdCampaign._id);
        return Property.create(propertySeeds).then((property) => {
          fundSeeds.properties.push(property._id);
          Fund.create(fundSeeds).then((data) => {
            invoiceSeeds.fund_id = data._id;
            invoiceSeeds.properties.push(property._id);
            // invoiceSeeds.rate = campaigns[0].rate
            return Fund.find({ _id: data._id }) // find all campaign by fund
              .populate("campaigns")
              .then((foundCampaign) => {
                 foundCampaign.forEach((campaign) => {
                  campaign.campaigns.forEach((campaignItem) => {
                    let total_gst = 0
                    let subtotal_ex_gst = 0
                    let total_ex_gst = 0
                    let total_inc_gst = 0
                    if (campaignItem.completed) {
                      // console.log(campaignItem)
                      campaignItem.items.forEach(({_id}) => {
                        Item.find({_id}).then(foundItem => {
                          // console.log(foundItem[0])
                          invoiceSeeds.total_gst = (foundItem[0].rate / 100) * 10;
                          total_gst =  (foundItem[0].rate / 100) * 10;
                          subtotal_ex_gst = foundItem[0].rate + subtotal_ex_gst
                          total_ex_gst = subtotal_ex_gst 
                          total_inc_gst = total_ex_gst + total_gst
                          // console.log(total_inc_gst)
                        })
                      })
                      
                      // invoiceSeeds.rate = foundItem[0].rate;
                      // // invoiceSeeds.subtotal_ex_gst =
                      // //   campaignItem.rate + invoiceSeeds.rate;
                      //   invoiceSeeds.subtotal_ex_gst = campaign.campaigns.reduce((acc, curr) => (
                      //       acc + curr.rate
                      //   ), 0)
                      //   invoiceSeeds.total_ex_gst = invoiceSeeds.subtotal_ex_gst + invoiceSeeds.subtotal_ex_gst
                      
                      return Invoice.create(invoiceSeeds).then((invoice) => {
                        process.exit(0);
                      });
                    }
                  });
                });
              });
          });
        });
      })

    
    });
  });
