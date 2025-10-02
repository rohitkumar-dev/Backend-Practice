import mongoose, { mongo } from "mongoose";

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems: {
        type: []
    }
}, {timestamps: true})

export const Order = mongoose.model("Order", orderSchema)