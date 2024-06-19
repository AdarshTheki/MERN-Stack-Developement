import mongoose from "mongoose";
import { config } from "../constant.js";

export const connectDB = async () => {
    try {
        const res = await mongoose.connect(
            config.MONGODB_URI + config.DATABASE_NAME
        );
        console.log(`mongoDb connected - ${res.connection.host}`);
    } catch (error) {
        console.log(`mongoDB Failed !! ${error?.message}`);
    }
};
