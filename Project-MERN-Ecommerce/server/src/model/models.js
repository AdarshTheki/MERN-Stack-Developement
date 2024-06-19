import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: { type: String, required: [true, "Please enter an name"] },
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "Please enter an password"],
        minlength: [6, "minimum password length must be 6 char..."],
    },
    register_date: { type: Date, default: Date.now },
});

const itemSchema = new Schema({
    title: { type: String, required: [true, "Please enter an title"] },
    description: {
        type: String,
        required: [true, "Please enter an description"],
    },
    category: { type: String, required: [true, "Please enter an category"] },
    price: { type: Number, required: [true, "Please enter an price"] },
    date_added: { type: Date, default: Date.now },
});

const cartSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    items: [
        {
            productId: { type: Schema.Types.ObjectId, ref: "Item" },
            quantity: Number,
        },
    ],
});

const orderSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    items: [
        {
            productId: { type: Schema.Types.ObjectId, ref: "Item" },
            quantity: {
                type: Number,
                required: true,
                min: [1, "Quantity can not be less then 1"],
                default: 1,
            },
        },
    ],
    bill: { type: Number, required: true, default: 0 },
    date_added: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
const Item = mongoose.model("Item", itemSchema);
const Cart = mongoose.model("Cart", cartSchema);
const Order = mongoose.model("Order", orderSchema);

export { User, Item, Cart, Order };
