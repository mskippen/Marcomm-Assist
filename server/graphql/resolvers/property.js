const User = require("../../models/User");
const Property = require("../../models/Property");

async function createNewProperty(args, context) {
  try {
    console.log(args);
    const createdProperty = await Property.create(args.propertyInput);
    const user = await User.findOne({ _id: context.user._id });
    // const fund = await Fund.findOne({ _id: args.PropertyInput.fund_id });
    // fund.properties.push(createdProperty._id);
    user.properties.push(createdProperty._id);
    createdProperty.users.push(context.user._id);
    await user.save();
    await createdProperty.save();

    // Promise.all([user.save(), fund.save()]);

    return createdProperty;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

async function getProperties(args) {
  try {
    const properties = await Property.find()
      .populate("campaigns")
      .populate("users");
    return properties;
  } catch (error) {
    console.log(error, "error");
    throw new Error(error);
  }
}

module.exports = {
  getProperties,
  createNewProperty,
};
