import mongoose from 'mongoose'
import { app } from './app.js';
import express from 'express'
import { DB_NAME } from './constants.js';
import connectDB from './db/db.js';


//const app = express()
const PORT = process.env.PORT || 8080

connectDB()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server listening at http://localhost:${PORT}`)
    })
})
.catch((error)=> {
    console.log("ERROR: ", error)
})






/*
;( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", ()=>{
            console.log("ERROR: ", error)
            throw error
        }) 

        app.listen(PORT, ()=>{
            console.log(`Server listening at http://localhost:${PORT}`)
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw error
    }
})()
*/

