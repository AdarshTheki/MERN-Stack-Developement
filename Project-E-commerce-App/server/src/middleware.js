import jwt from "jsonwebtoken";

const verifyAuth = async (req, res, next) => {
    const token = req.cookies.accessToken || req.header("x-auth-token");

    if (!token) {
        return res
            .status(401)
            .json({ message: "No token founded, UnAuthorized Request" });
    }

    const decodedToken = await jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET
    );

    const user = await 
};
