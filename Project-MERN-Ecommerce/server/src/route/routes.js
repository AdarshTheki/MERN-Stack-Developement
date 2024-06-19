import { Router } from "express";
import {
    checkoutOrder,
    deleteItem,
    getCart,
    getItem,
    getOrder,
    getUser,
    login,
    postCart,
    postItem,
    signUp,
    updateItem,
} from "../controller/controllers.js";
import { verifyAuth } from "../middleware/middleware.js";

const router = Router();

router.post("/register", signUp);
router.post("/login", login);
router.get("/user", verifyAuth, getUser); // middleware

router.get("/items", getItem);
router.post("/items", postItem);
router.patch("/items/:id", updateItem);
router.delete("/items/:id", deleteItem);

router.get("/cart/:userId", getCart);
router.post("/cart/:userId", postCart);

router.get("/order/:userId", getOrder);
router.post("/order/:userId", checkoutOrder);

export { router };
