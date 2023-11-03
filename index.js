import express from "express";
import cors from "cors";
import "dotenv/config";
import dbConnection from "./dbconnection.js";
import { userRouter } from "./Routers/UserRoute.js";
import { pdfRouter } from "./Routers/PdfRoute.js";
import { isAuthenticated } from "./auth.js";

// Initializing the server
const app = express();
app.use(express.json());
app.use(cors());

// Connecting to MongoDB
dbConnection();

// Listening on port
app.listen(9000, () => {
  console.log("Server Running Successfully!");
});

// Separate Routers
app.use("/api", userRouter);

// Route is protected with Authentication Middleware
app.use("/api", isAuthenticated, pdfRouter);
