import React from "react";
import { Container } from "semantic-ui-react";
import Campaign from "../components/campaign/Campaign";

const CampaignPage = () => {
  return (
    <div className="CampaignPage">
      <Container>
        <Campaign />
      </Container>
    </div>
  );
};

export default CampaignPage;
