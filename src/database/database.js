import mongoose, { Mongoose } from "mongoose";

const mongodb= process.env.MONGODN_URI;

mongoose.connect(mongodb)

const conexion =  mongoose.connection;

conexion.once('open', ()=>{
    console.log('Base de datos conectada :)')
})