import { useQuery } from "@apollo/react-hooks";
import React, { useEffect, useState } from "react";
import { GET_ALL_CAMPAIGN_FUNDS } from "../../graphql/queries";
import { Header, Table } from "semantic-ui-react";

const ProjectContainer = ({ projectData }) => {
  const userDetails = JSON.parse(localStorage.getItem("user_details"));
  const [fundData, setFundData] = useState([]);

  const { data } = useQuery(GET_ALL_CAMPAIGN_FUNDS, {
    variables: {
      fund_id: "6111c5ed9cff5c47946c4b5a",
    },
  });
  const funds = data?.getFunds || [];

  useEffect(() => {
    const filteredData = funds.filter(
      (i) => i.users.map((x) => x._id) == userDetails._id
    ); //filter out user that mathche current user from fund
    setFundData(filteredData);
    console.log(projectData);
  }, [funds]);

  return (
    <div className="Projects__container">
      {fundData?.map((item) => {
        const { fund_name, entity, abn, campaigns, properties } = item;
        return (
          <>
            <h4>Funds</h4>
            <Table celled padded>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell singleLine>{fund_name}</Table.HeaderCell>
                  <Table.HeaderCell>{entity}</Table.HeaderCell>
                  <Table.HeaderCell>{abn}</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              {campaigns.length > 0 ? (
                campaigns.map((camp, index) => {
                  const { campaign_name, campaign_type, items } = camp;
                  return (
                    <>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell singleLine>
                            Campaign Name
                          </Table.HeaderCell>
                          <Table.HeaderCell>Campaign Type</Table.HeaderCell>
                          <Table.HeaderCell>Campaign Item</Table.HeaderCell>
                          <Table.HeaderCell>Date Entered</Table.HeaderCell>
                          <Table.HeaderCell>First Date</Table.HeaderCell>
                          <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>
                            <Header as="h4" textAlign="center">
                              {campaign_name}
                            </Header>
                          </Table.Cell>
                          <Table.Cell singleLine>{campaign_type}$</Table.Cell>
                          <Table.Cell>{items[index]?.item_type}$</Table.Cell>
                          <Table.Cell textAlign="right">
                            {items[index]?.date_entered}$
                          </Table.Cell>
                          <Table.Cell>
                            {items[index]?.first_draft_due}$
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </>
                  );
                })
              ) : (
                <h5>No Campaign yet for this fund</h5>
              )}
            </Table>
          </>
        );
      })}
    </div>
  );
};

export default ProjectContainer;
