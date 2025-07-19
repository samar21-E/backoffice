import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import compression from "compression";
import connectDB from "./database";
import router from "./router";

dotenv.config();
const app = express();
connectDB();

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/api", router()); // ✅ attach router

const server = http.createServer(app);
server.listen(8080, () => {
  console.log("Server running on http://localhost:8080/");
});
