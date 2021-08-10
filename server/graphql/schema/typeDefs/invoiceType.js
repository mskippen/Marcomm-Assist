module.exports = `
    type Invoice {
        _id: ID!
        invoice_number: String!
        issue_date: String!
        due_date: String!
        payment_terms: Int!
        purchase_order_number: String
        fund_id: ID
        properties: [Property]
        subtotal_ex_gst: Int!
        total_gst: Int!
        total_inc_gst: Int!
    }
`