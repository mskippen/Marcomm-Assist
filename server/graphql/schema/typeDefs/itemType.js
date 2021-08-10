module.exports = `
    type Item {
        item_type: String!
        date_entered: String
        first_draft_due: String!
        final_draft_due: String!
        notes: String!
        completed_date: String!
        completed: Boolean!
        rate: Int
        items: [Item]
        campaign_item_types: [Campaign_Item_Types]
    }

    input Campaign_Item_Types {
        campaign_item_types: String
    }
`