import gql from "graphql-tag";

export const GET_USER_DETAILS = gql`
  query getProfile($user_id: String!) {
    getUserById(user_id: $user_id) {
      _id
      email
      username
      first_name
      last_name
      properties {
        _id
        abn
        entity
      }
      funds {
        _id
        fund_name
      }
    }
  }
`;

export const GET_ALL_CAMPAIGN_FUNDS = gql`
  query getFunds($fund_id: String!) {
    getFunds(fund_id: $fund_id) {
      fund_name
      abn
      entity
      users {
        _id
      }
      properties {
        _id
        entity
      }
      campaigns {
        
        _id
        campaign_name
        campaign_type
        items {
          _id
          item_type
          date_entered
          first_draft_due
          final_draft_due
        }
      }
    }
  }
`;

export const GET_ALL_CAMPAIGN_PROPERTIES = gql`
  query getProperties {
    getProperties {
      property_state
      property_postcode
      property_suburb
      abn
      entity
      users {
        _id
      }
      campaign_id {
        _id
        campaign_name
        campaign_type
        items {
          _id
          item_type
          date_entered
          first_draft_due
          final_draft_due
        }
      }
    }
  }
`;
