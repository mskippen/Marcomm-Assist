const Fund = require("../../models/Fund");
const User = require("../../models/User");

async function createFund(args, context) {
  try {
    // console.log(args, "args");
    const createdFund = await Fund.create(args.fundInput);
    const currUser = await User.findOne({ _id: context.user._id });

    const isUserExist = await createdFund.users.find((i) => {
      i._id == currUser._id;
    });

    if (isUserExist) {
      return;
    } else {
      currUser.funds.push(createdFund._id); //associate newly cretaed fund to the user

      createdFund.users.push(context.user._id);
      console.log(currUser, "ooo");
      await createdFund.save();
      await currUser.save();
    }

    return createdFund;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

async function getFunds(args) {
  // const id =[users[0]._id];
  try {
    const funds = await Fund.find().populate("campaigns").populate("users");
    return funds;
  } catch (error) {
    console.log(error, "error");
    throw new Error(error);
  }
}

module.exports = {
  createFund,
  getFunds,
};
