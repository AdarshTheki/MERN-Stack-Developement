import jwt from "jsonwebtoken";
import { config } from "../constant.js";
import { User } from "../model/models.js";

export const verifyAuth = async (req, res, next) => {
    try {
        req.cookies.accessToken ||
            req.headers["authorization"]?.replace("Bearer ", "");

        if (!token) {
            return res
                .status(404)
                .send("Token not Founding! Un-Authorized Request");
        }

        const decodedToken = jwt.verify(token, config.ACCESS_TOKEN_SECRET);
        if (!decodedToken) {
            return res.status(404).send("Your Token has been expired");
        }

        const user = await User.findById(decodedToken._id).select("-password");

        if (!user) {
            return res.status(401).send("User not Founded");
        }

        req.user = user;
        next();
    } catch (err) {
        console.log(err?.message);
        res.status(500).send("Error middleware");
    }
};
