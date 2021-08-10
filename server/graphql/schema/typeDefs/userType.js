module.exports = `
    type User {
        _id: ID!
        email: String!
        first_name: String!
        last_name: String!
        username: String!
        phone: String!
        password: String!
        position: String!
        company: String!
        address: String!
        abn: String!
        suburb: String!
        state: String!
        active: Boolean
        properties: [Property]
        funds: [Fund]
    }
    
    type Query {
        getUser: User!
    }
`