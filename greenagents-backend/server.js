import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("GreenAgents API running"));

import spotsRoutes from "./src/routes/spots.js";
app.use("/api/spots", spotsRoutes);

app.listen(process.env.PORT || 5000, () =>
  console.log(`API running on port ${process.env.PORT || 5000}`)
);
