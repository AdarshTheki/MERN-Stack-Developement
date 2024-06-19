import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ limit: "16kb", extended: true }));

app.use(express.static("public"));

app.use(cors({ origin: "*", credentials: true }));

app.use(cookieParser());

import { router } from "./route/routes.js";

app.use("/api/v1", router);

export { app };
