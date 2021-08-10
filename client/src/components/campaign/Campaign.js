import React, { useContext, useEffect, useState } from "react";
import { Grid, Form, Input, Button, Icon } from "semantic-ui-react";
import { handleChange } from "../../utils/handleChange";
import { AuthContext } from "../../contexts/AuthContext";
import { useQuery } from "@apollo/react-hooks";
import { GET_USER_DETAILS } from "../../graphql/queries";

const Campaign = () => {
  const user_id = JSON.parse(localStorage.getItem("user_details"))._id;
  console.log(user_id);
  const {
    // state: { userInfo },
    createNewFund,
    getProfile,
    createNewProperty,
    addCampaignToFund,
    addCampaignToProperty,
  } = useContext(AuthContext);

  const { data } = useQuery(GET_USER_DETAILS, {
    variables: {
      user_id,
    },
  });

  const userInfo = data?.getUserById || [];

  useEffect(() => {
    // getProfile();
    console.log(userInfo);
  }, []);

  const [value, setValue] = useState("");
  const [proceed, setProceed] = useState(false);
  const [fundDropdownValue, setFormDropdownValue] = useState({
    fund_id: "",
    fund_name: "",
  });
  const [fundValues, setFundVlaues] = useState({
    fund_name: "",
    abn: "",
    entity: "",
  });
  const [propertyValues, setPropertyValues] = useState({
    property_address: "",
    property_suburb: "",
    property_postcode: "",
    property_state: "",
    abn: "",
    entity: "",
  });
  const [itemValues, setItemValues] = useState({
    item_type: "",
    first_draft_due: "",
    final_draft_due: "",
    date_entered: new Date(),
  });
  const [campaignValues, setCampaignValues] = useState({
    campaign_name: "",
    campaign_type: "IM",
    date_entered: new Date(),
    fund_id: "",
    property_id: "",
  });

  function handleFormValidation() {
    if (fundDropdownValue.fund_name && fundValues.fund_name) {
      alert("you can only add a new fund or seklect from dropdown");
      setProceed(false);
    } else {
      setProceed(true);
    }
  }

  function checkProperties(obj) {
    //check if every item is empty
    // for (var key in obj) {
    //   if (obj[key] != "") return false;
    // }
    // return true;
    if (
      Object.keys(obj).every(function (x) {
        return obj[x] === "" || obj[x] === null;
      }) === false
    ) {
      return true;
    } else {
      return false;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    handleFormValidation();
    if (
      checkProperties(campaignValues.fund_id) &&
      checkProperties(campaignValues.property_id)
    ) {
      alert("you can only select either a fund a a property");
      return;
    }
    // else {
    //   alert("Okay cool");
    //   addCampaignToFund(campaignValues, itemValues);
    // }
    if (checkProperties(campaignValues.property_id))
      addCampaignToProperty(campaignValues, itemValues);
    if (checkProperties(campaignValues.fund_id))
      addCampaignToFund(campaignValues, itemValues);
    // if (proceed) {
    // }
  }

  async function handleCreateNewFund() {
    if (checkProperties(fundValues)) {
      createNewFund(fundValues);
    } else {
      alert("you need to fill out all fund field");
    }
  }

  function handleItemClick(item) {
    setItemValues({ ...itemValues, item_type: item });
  }

  async function handleCreateNewProperty() {
    if (checkProperties(propertyValues)) {
      createNewProperty(propertyValues);
    } else {
      alert("you need to fill out all property field");
    }
  }

  // async function handleAddCampaignToFund() {
  //   handleFormValidation();
  //   addCampaignToFund(campaignValues, itemValues);
  // }

  return (
    <div className="campaign">
      <Grid columns={2}>
        <Form>
          <Grid.Row>
            <Form.Group widths="equal">
              <select
                name="fund_id"
                disabled={
                  userInfo?.funds && userInfo?.funds.length ? false : true
                }
                onChange={(e) => {
                  handleChange(e, setCampaignValues, campaignValues);
                }}
              >
                <option value="">Select Fund</option>
                {userInfo?.funds &&
                  userInfo?.funds.length &&
                  userInfo.funds.map((item) => (
                    <>
                      <option value={item._id}>{item.fund_name}</option>
                    </>
                  ))}
              </select>
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                name="fund_name"
                placeholder="Fund Name"
                onChange={(e) => handleChange(e, setFundVlaues, fundValues)}
              />
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                name="abn"
                placeholder="ABN"
                onChange={(e) => handleChange(e, setFundVlaues, fundValues)}
              />
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                name="entity"
                placeholder="Entity"
                onChange={(e) => handleChange(e, setFundVlaues, fundValues)}
              />
              <Button color="black" basic onClick={handleCreateNewFund}>
                <Icon style={{ color: "#fff" }} name="plus circle" />
              </Button>
            </Form.Group>
            <Form.Group widths="equal">
              <select
                name="property_id"
                disabled={
                  userInfo?.properties && userInfo?.properties.length
                    ? false
                    : true
                }
                onChange={(e) => {
                  handleChange(e, setCampaignValues, campaignValues);
                }}
              >
                <option value="">Select Property</option>
                {userInfo?.properties &&
                  userInfo?.properties.length &&
                  userInfo.properties.map((item) => (
                    <>
                      <option value={item._id}>{item.entity}</option>
                    </>
                  ))}
              </select>
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                name="property_address"
                placeholder="Property Address"
                onChange={(e) =>
                  handleChange(e, setPropertyValues, propertyValues)
                }
              />
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                name="property_suburb"
                placeholder="Suburb"
                onChange={(e) =>
                  handleChange(e, setPropertyValues, propertyValues)
                }
              />
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                name="property_postcode"
                placeholder="Postcode"
                onChange={(e) =>
                  handleChange(e, setPropertyValues, propertyValues)
                }
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                name="abn"
                placeholder="ABN"
                onChange={(e) =>
                  handleChange(e, setPropertyValues, propertyValues)
                }
              />
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                name="entity"
                placeholder="Entity"
                onChange={(e) =>
                  handleChange(e, setPropertyValues, propertyValues)
                }
              />
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                name="property_state"
                placeholder="Property State"
                onChange={(e) =>
                  handleChange(e, setPropertyValues, propertyValues)
                }
              />

              <Button color="black" basic onClick={handleCreateNewProperty}>
                <Icon
                  style={{ color: "#fff" }}
                  name="plus circle white"
                  style={{ color: "#fff" }}
                />
              </Button>
            </Form.Group>
            <h1 style={{ color: "#eee" }}>New Campign</h1>
            <br />
            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                name="campaign_name"
                placeholder="Campaign Name"
                onChange={(e) =>
                  handleChange(e, setCampaignValues, campaignValues)
                }
              />
              <select
                name="campaign_type"
                onChange={(e) =>
                  handleChange(e, setCampaignValues, campaignValues)
                }
              >
                <option value="">Select Campaign Type</option>
                <option value="Invest">Invest</option>
                <option value="Lease">Lease</option>
              </select>
            </Form.Group>
          </Grid.Row>
          <Grid.Row>
            <Form.Group widths="equal">
              <Button color="facebook">IM</Button>
              <input
                type="date"
                name="first_draft_due"
                onChange={(e) => handleChange(e, setItemValues, itemValues)}
              />
              <input
                type="date"
                name="final_draft_due"
                onChange={(e) => handleChange(e, setItemValues, itemValues)}
              />
              <Button color="black" basic>
                <Icon style={{ color: "#fff" }} name="plus circle" />
              </Button>
              <Button color="black" basic onClick={() => handleItemClick("Im")}>
                <Icon style={{ color: "#fff" }} name="plus circle" />
              </Button>
            </Form.Group>
            <Form.Group widths="equal">
              <Button color="facebook">SignBoard</Button>
              <input
                type="date"
                name="first_draft_due"
                onChange={(e) => handleChange(e, setValue, value)}
              />
              <input
                type="date"
                name="final_draft_due"
                onChange={(e) => handleChange(e, setValue, value)}
              />
              <Button color="black" basic>
                <Icon style={{ color: "#fff" }} name="plus circle" />
              </Button>
              <Button
                color="black"
                basic
                onClick={() => handleItemClick("SignBoard")}
              >
                <Icon style={{ color: "#fff" }} name="plus circle" />
              </Button>
            </Form.Group>
          </Grid.Row>
          <Form.Field
            onClick={handleSubmit}
            id="form-button-control-public"
            control={Button}
            content="Submit"
          />
        </Form>
      </Grid>
    </div>
  );
};

//    <Form.Field
//      id="form-button-control-public"
//      control={Button}
//      content="Submit"
//    />;

export default Campaign;
