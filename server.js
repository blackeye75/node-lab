import express from 'express'
import dotenv from "dotenv"
import { connectDB } from './db/config.js'
dotenv.config()

import authRouter from './routes/authRoutes.js'

const app = express()

app.get('/hello',(req,res)=>{
  res.send("Hello world")
})

app.use(express.json())

app.use('/api/auth',authRouter)

app.listen(process.env.PORT , ()=>{
  connectDB();
  console.log(`App is listening on port ${process.env.PORT}`);
  
})