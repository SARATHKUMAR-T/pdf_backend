import jwt from "jsonwebtoken";
import { User } from "./Models/User.js";
import "dotenv/config";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers["x-auth-token"];

    if (!token) {
      return res.status(400).json({ message: "Access Denied" });
    }

    const decode = jwt.verify(token, process.env.SECRET);
    req.user = await User.findById(decode.id).select("_id username email");
    next();
  } catch (error) {
    console.error(error);

    if (error.name === "JsonWebTokenError") {
      return res.status(400).json({ message: "Invalid Authorization" });
    }

    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export { isAuthenticated };
