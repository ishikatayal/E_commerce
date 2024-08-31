// const express = require('express')
// const colors = require('colors')
//const type is used in ES5 import is used in ES6 and other latest version of JS
import express from 'express'
import colors from "colors"
import dotenv from 'dotenv'
import morgan from 'morgan'
import { connect } from 'mongoose';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
import cors from 'cors'

//config env
dotenv.config();

//database config
connectDB();

//rest object
const app = express()

//middel ware
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth', authRoutes)

//rest api
app.get('/', (req, res) => {
    // res.send({
    //     message: "Welcome to my Bazzar",
    // })
    res.send("<h1>Welcome to ecommerce app</h1>");
})

//port react = 3000,angular=4200,react=8000 or 8080
const PORT = process.env.PORT || 8080;//8081

//run listen
app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
        .white)
});