import express from "express";
import cors from "cors";
import "dotenv/config";
import dbConnection from "./dbconnection.js";
import { userRouter } from "./Routers/UserRoute.js";
import { pdfRouter } from "./Routers/PdfRoute.js";

const app = express();
app.use(express.json());

// app.use("/pdfs", express.static("files"));

// const upload = multer({ dest: "uploads/" });

dbConnection();
// app.use(cors());

var whitelist = ["http://localhost:3000"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.listen(9000, () => {
  console.log("Server Running Successfully!");
});

app.use("/api", cors(), userRouter);
app.use("/files", cors(corsOptions), express.static("files"));
app.use("/api", cors(), pdfRouter);
