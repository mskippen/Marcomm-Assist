module.exports = `
    type Property {
        _id: ID!
        property_address: String!
        property_state: String!
        property_suburb: String!
        property_postcode: String!
        abn: String!
        entity: String
        users: [User]
        campaign_id: [Campaign]
    }

    input PropertyInput {
        property_address: String!
        property_state: String!
        property_suburb: String!
        property_postcode: String!
        abn: String!
        entity: String!
        ## users: [User]
        ##fund_id: ID!
    }

     type Query {
        getProperties: [Property]!
    }

    type Mutation {
        createNewProperty(propertyInput: PropertyInput!): Property
    }
`;
