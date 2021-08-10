module.exports = `
    type Campaign {
        _id: ID!
        date_entered: String!
        completed_date: String!
        campaign_name: String!
        property_category: String!
        property_estate_name: String!
        property_address: String!
        campaign_type: String!
        completed: Boolean!
        items: [Item]
    }

    ##Might this part to a different module soon
    input ItemInput {
        date_entered: String!
        first_draft_due: String!
        final_draft_due: String!
        item_type: String!
    }
    ##ends here

    input CampaignInput {
        date_entered: String!
        campaign_name: String!
        campaign_type: String!
        fund_id: String
        property_id: String
    }

    type Mutation {
        addCampaignToFund(campaignInput: CampaignInput!, itemInput: ItemInput!): Campaign
        addCampaignToProperty(campaignInput: CampaignInput!, itemInput: ItemInput!): Campaign
    } 
`;
