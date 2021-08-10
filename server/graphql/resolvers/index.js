const user = require("./user");
const fund = require("./fund");
const property = require("./property");
const campaign = require("./campaign");

module.exports = {
  ...user,
  ...fund,
  ...property,
  ...campaign,
};
