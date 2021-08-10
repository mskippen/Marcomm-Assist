const {Schema, model} = require("mongoose")
const Campaign = require("./Campaign")

const invoiceSchema = new Schema({
    invoice_number: {
        type: String,
        required: true
    },
    issue_date: {
        type: Date,
        required: true
    },
    due_date: {
        type: Date,
        required: true
    },
    payment_terms: {
        type: Number,
        required: true
    },
    purchase_order_number: {
        type: String
    },
    fund_id: {
        // id: {
            type: Schema.Types.ObjectId,
            ref: "Fund"
        // }
    },
    properties: [
        {
            type: Schema.Types.ObjectId,
            ref: "Property"
        }
    ],
    subtotal_ex_gst: {
        type: Number,
        required: true
    },
    total_ex_gst: {
        type: Number,
        required: true
    },
    total_gst: {
        type: Number,
        required: true
    },
    total_inc_gst: {
        type: Number,
        required: true
    },
})

// invoiceSchema.pre("save", async function(next, info) {
//     let subtotal_ex_gst = 0;
//     let total_ex_gst = 0;
//     let total_gst = 0;
//     let total_inc_gst

//     Campaign.findById({_id: info._id})
//     next()
// })


module.exports = model("Invoice", invoiceSchema)