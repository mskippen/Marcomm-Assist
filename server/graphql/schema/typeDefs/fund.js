module.exports = `
    type Fund {
        _id: ID!
        fund_name: String!
        abn: String!
        entity: String!
        campaigns: [Campaign]
        properties: [Property]
        users: [User]
    }

    input FundInput {
        fund_name: String!
        abn: String!
        entity: String!
    }

    type Query {
        getFunds(fund_id: String!): [Fund]!
    }

    type Mutation {
        createFund(fundInput: FundInput!): Fund
    }
    
`;
