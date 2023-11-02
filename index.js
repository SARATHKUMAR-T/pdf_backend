import express from "express";
import cors from "cors";
import "dotenv/config";
import dbConnection from "./dbconnection.js";
import { userRouter } from "./Routers/UserRoute.js";
import { pdfRouter } from "./Routers/PdfRoute.js";
import { isAuthenticated } from "./auth.js";

const app = express();
app.use(express.json());
app.use(cors());

// app.use("/pdfs", express.static("files"));

// const upload = multer({ dest: "uploads/" });

dbConnection();

app.listen(9000, () => {
  console.log("Server Running Successfully!");
});

app.use("/api", userRouter);
// app.use("/files", cors(corsOptions), express.static("files"));
app.use("/api", isAuthenticated, pdfRouter);
