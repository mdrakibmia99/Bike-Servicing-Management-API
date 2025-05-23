import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import { notFoundApi } from "./app/middlewares/notFoundApi";

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.get("/", (req, res) => {
    res.json("Welcome to the Bike Servicing Management API");
});

// all routes 
app.use('/api', router)

// global error handling
app.use(globalErrorHandler)

// api not found 
app.use(notFoundApi)

export default app;
