const { mergeTypeDefs } = require("@graphql-tools/merge");

// schema
const user = require("./typeDefs/user");
const property = require("./typeDefs/property");
const campaign = require("./typeDefs/campaign");
const fund = require("./typeDefs/fund");
const item = require("./typeDefs/item");
const invoice = require("./typeDefs/invoice");

module.exports = mergeTypeDefs([user, property, fund, campaign, item, invoice]);
