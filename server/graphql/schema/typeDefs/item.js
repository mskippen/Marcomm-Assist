module.exports = `
    type Item {
        _id: ID!
        date_entered: String
        first_draft_due: String
        final_draft_due: String
        completed_date: String
        notes: String
        item_type: String
        rate: Int
        completed: Boolean
    }
`;
