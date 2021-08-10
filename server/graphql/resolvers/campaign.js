const User = require("../../models/User");
const Property = require("../../models/Property");
const Fund = require("../../models/Fund");
const Campaign = require("../../models/Campaign");
const Item = require("../../models/Item");

async function addCampaignToFund(args, context) {
  try {
    const createdCampaign = await Campaign.create(args.campaignInput);
    const createdItem = await Item.create(args.itemInput);
    // const user = await User.findOne({ _id: context.user._id });
    const fund = await Fund.findOne({ _id: args.campaignInput.fund_id });

    fund.campaigns.push(createdCampaign._id);
    createdCampaign.items.push(createdItem._id);
    console.log(fund, "fund");

    // await user.save();
    await fund.save();
    await createdCampaign.save();

    return createdCampaign;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

async function addCampaignToProperty(args, context) {
  try {
    console.log(args);
    const createdCampaign = await Campaign.create(args.campaignInput);
    const createdItem = await Item.create(args.itemInput);
    const user = await User.findOne({ _id: context.user._id });
    const property = await Property.findOne({
      _id: args.campaignInput.property_id,
    });

    property.campaign_id.push(createdCampaign._id);
    createdCampaign.items.push(createdItem._id);

    await property.save();
    await createdCampaign.save();

    return createdCampaign;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

async function addFullCampaign(args, context) {
  try {
    const createdCampaign = await Campaign.create(args.campaignInput);
    const createdItem = await Item.create(args.itemInput);
    const user = await User.findOne({ _id: context.user._id });
    const fund = await Fund.findOne({ _id: args.campaignInput.fund_id });

    fund.campaigns.push(createdCampaign._id);

    property.campaigns.push(createdCampaign._id);
    createdCampaign.items.push(createdItem._id);

    await user.save();
    await createdCampaign.save();

    return createdCampaign;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

module.exports = {
  addCampaignToFund,
  addCampaignToProperty,
};
