import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      _id
      username
      email
      token
    }
  }
`;

export const REGISTER_USER = gql`
  mutation registerUser($userInput: UserInput!) {
    registerUser(userInput: $userInput) {
      _id
      username
      email
      token
    }
  }
`;

export const CREATE_NEW_FUND = gql`
  mutation createFund($fundInput: FundInput!) {
    createFund(fundInput: $fundInput) {
      _id
      fund_name
      abn
      entity
      users {
        _id
        username
        email
      }
    }
  }
`;

export const CREATE_NEW_PROPERTY = gql`
  mutation createNewProperty($propertyInput: PropertyInput!) {
    createNewProperty(propertyInput: $propertyInput) {
      _id
      property_address
      property_state
      abn
      entity
      users {
        _id
      }
    }
  }
`;

export const ADD_CAMPAIGN_tO_FUND = gql`
  mutation addCampaignToFund(
    $campaignInput: CampaignInput!
    $itemInput: ItemInput!
  ) {
    addCampaignToFund(campaignInput: $campaignInput, itemInput: $itemInput) {
      _id
      campaign_name
    }
  }
`;

export const ADD_CAMPAIGN_tO_PROPERTY = gql`
  mutation addCampaignToProperty(
    $campaignInput: CampaignInput!
    $itemInput: ItemInput!
  ) {
    addCampaignToProperty(
      campaignInput: $campaignInput
      itemInput: $itemInput
    ) {
      _id
      campaign_name
    }
  }
`;
