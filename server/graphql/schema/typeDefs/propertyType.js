module.exports = `
    type Property {
        _id: ID!
        property_address: String!
        property_suburb: String!
        property_state: String!
        property_postcode: String!
        abn: String!
        entity: String!
        users: [User]
        campaign_id: [Campaign]
    }
    type Query {
        getUser: User
    }
`