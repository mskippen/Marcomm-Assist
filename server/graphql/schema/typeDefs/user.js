module.exports = `
    type User {
        _id: ID!
        user_type: String!
        email: String!
        first_name: String!
        last_name: String!
        username: String!
        password: String!
        phone: String!
        position: String!
        address: String!
        company: String!
        abn: String!
        suburb: String!
        postcode: String!
        active: Boolean
        state: String!
        properties: [Property]
        funds: [Fund]
        token: String
    }

    input UserInput {
        user_type: String!
        email: String!
        first_name: String!
        last_name: String!
        username: String!
        password: String!
        phone: String!
        position: String!
        address: String!
        company: String!
        abn: String!
        suburb: String!
        postcode: String!
        active: Boolean
        state: String
    }

    type Query {
        getUserById(user_id: String!): User
        decodeToken(token: String!): User
    }
    
    type Mutation {
        registerUser(userInput: UserInput!): User!
        loginUser(email: String!, password: String!): User!
    }
`;
