module.exports = `
    type Campaign {
        date_entered: String!
        completed: Boolean!
        completed_date: String
        campaign_name: String!
        campaign_item_types: [Campaign_Item_Types]
        property_category: String!
        property_estate_name: String!
        property_address: String!
    }

    input Campaign_Item_Types {
        campaign_item_types: String
    }
`