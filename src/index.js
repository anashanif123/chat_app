
import express from 'express';
import dotenv from 'dotenv';
import authroutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import { connectDB } from './lib/db.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authroutes)

app.listen(PORT,()  => {
    console.log("Server started on port PORT:", + PORT);
    connectDB()
})