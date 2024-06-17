import { app } from "./app.js";
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config({ path: './.env' })


const connectDB = async () => {
    try {
        const res = await mongoose.connect(process.env.MONGODB_URI + 'demo-E-App')
        console.log('mongoDb connnected >> ', res.connection.host())
    } catch (error) {
        console.log('mongoDB connection Failed >> ', error?.message)
    }
}

const ports = process.env.PORT || 4000

connectDB().
    then(() => {
        app.listen(ports, () => {
            console.log('server connected PORT >> ', ports)
        })
    }
    ).catch(err => console.log('mongoDb failed >> ', err?.message))