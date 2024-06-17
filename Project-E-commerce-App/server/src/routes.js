import { Router } from "express";

const router = Router();

router.post("/register");
router.post("/login");
router.get("/user");

router.get("/items");
router.post("/items");
router.put("/items/:id");
router.delete("/items/:id");

export { router };
