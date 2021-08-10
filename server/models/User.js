const {Schema, model} = require("mongoose")

const userSchema = new Schema({
    user_type: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true,
    },
    abn: {
        type: String,
        required: true,
    },
    suburb: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    postcode: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean
    },
    properties: [
        {
            type: Schema.Types.ObjectId,
            ref: "Property"
        }
    ],
    funds: [
        {
            type: Schema.Types.ObjectId,
            ref: "Fund"
        }
    ]
})

module.exports = model("User", userSchema)