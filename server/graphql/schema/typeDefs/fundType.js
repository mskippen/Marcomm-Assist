module.exports = `
    type Fund {
        _id: ID!
        fund_name: String!
        abn: String!
        entity: String!
        users: [User]
        campaigns: [Campaign]
        properties: [Property]
    }
    type Query {
        getUser: User
    }
`