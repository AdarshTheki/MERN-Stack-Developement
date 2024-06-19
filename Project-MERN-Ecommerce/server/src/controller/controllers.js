import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { User, Item, Order, Cart } from "../model/models.js";
import { config } from "../constant.js";

export const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).send("Please Enter All the Fields Refired");
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).send("User already exists!");
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashPassword,
        });

        res.status(200).json(newUser);
    } catch (error) {
        console.log(error?.message);
        res.status(500).send("Error signUp User");
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const tempUser = await User.findOne({ email });
        if (!tempUser) {
            return res.status(400).send("user does not exist");
        }

        const isPasswordValid = await bcrypt.compare(
            password,
            tempUser.password
        );
        if (!isPasswordValid) {
            return res.status(400).send("password does not match");
        }

        const accessToken = jwt.sign(
            { _id: tempUser._id },
            config.ACCESS_TOKEN_SECRET,
            { expiresIn: 3600 }
        );

        const user = await User.findById(tempUser._id).select("-password");

        res.status(200)
            .cookie("accessToken", accessToken)
            .json({ accessToken, user });
    } catch (error) {
        console.log(error?.message);
        res.status(500).send("Error Login User");
    }
};

export const getUser = async (req, res) => {
    try {
        const { user } = req;
        if (!user) {
            res.status(400).send("User not founded! Please Login User");
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error?.message);
        res.status(500).send("Error get current User");
    }
};

export const postItem = async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(200).json(newItem);
    } catch (error) {
        console.log(error?.message);
        res.status(500).send("Error creating Item");
    }
};

export const updateItem = async (req, res) => {
    try {
        const query = { _id: new Object(req.params.id) };
        const updatedItem = await Item.updateOne(query, {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
        });

        res.status(200).json(updatedItem);
    } catch (error) {
        console.log(error?.message);
        res.status(500).send("Error updating Item");
    }
};

export const deleteItem = async (req, res) => {
    try {
        const query = { _id: new Object(req.params.id) };
        await Item.deleteOne(query);

        res.status(200).send("Item deleting success");
    } catch (error) {
        console.log(error?.message);
        res.status(500).send("Error deleting Item");
    }
};

export const getItem = async (req, res) => {
    try {
        const { sortBy = "date_added", limit = 20 } = req.query;

        const items = await Item.find()
            .sort({ [`${sortBy}`]: -1 })
            .limit(limit)
            .exec();

        res.status(200).json(items);
    } catch (error) {
        console.log(error?.message);
        res.status(500).send("Error Get All Items");
    }
};

export const postCart = async (req, res) => {
    const { userId } = req.params;
    const { items } = req.body;

    try {
        let cart = await Cart.findOne({ userId });
        if (cart) {
            cart.items = items;
        } else {
            cart = new Cart({ userId, items });
        }
        await cart.save();

        res.status(200).json(cart);
    } catch (error) {
        console.log(error?.message);
        return res.status(500).send("Error Creating Cart");
    }
};

export const getCart = async (req, res) => {
    const query = { userId: new Object(req.params.userId) };
    try {
        const cart = await Cart.findOne(query).populate("items.productId");
        res.status(200).json(cart);
    } catch (error) {
        console.log(error?.message);
        return res.status(500).send("Error Get All Cart Items");
    }
};

export const checkoutOrder = async (req, res) => {
    const { items, bill } = req.body;
    const { userId } = req.params;
    try {
        const order = await Order.create({
            userId,
            items,
            bill,
        });
        const query = { userId: new Object(userId) };
        await Cart.updateOne(query, { $set: { items: [] } });

        res.status(200).json(order);
    } catch (error) {
        console.log(error?.message);
        res.status(500).send("Error checkout order");
    }
};

export const getOrder = async (req, res) => {
    const query = { userId: new Object(req.params.userId) };
    try {
        const order = await Order.find(query).populate("items.productId");
        res.status(200).json(order);
    } catch (error) {
        console.log(error?.message);
        res.status(500).send("Error Get All Orders");
    }
};
