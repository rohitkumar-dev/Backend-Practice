import dotenv from 'dotenv'
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

dotenv.config({
    path: './.env'
})

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MONGODB CONNECTED SUCCESSFULLY, DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB CONNECTION FAILED: ", error)
        //throw error
        process.exit(1)
    }
}

export default connectDB

