import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/MongoDBManager.js";
import { routes } from "./web-layer/routes/ProductRoutes.js";

dotenv.config();

// connect mongodb
connectDB();

const app = express(); // ✅ FIXED

app.use(cors());
app.use(express.json());

// initialize routes
app.use("/api/products", routes);

const port = process.env.PORT || 5000;

// server listening
app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
