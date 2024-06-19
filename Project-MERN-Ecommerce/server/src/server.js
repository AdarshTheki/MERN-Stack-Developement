import { app } from "./app.js";
import { connectDB } from "./db/connectDB.js";

const ports = 4000;

connectDB()
    .then(() => {
        app.listen(ports, () => {
            console.log(`server connected PORT - http://localhost:${ports}`);
        });
    })
    .catch((err) => console.log(`mongoDb Failed !! ${err?.message}`));
