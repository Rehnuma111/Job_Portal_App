import express from "express";
const app = express();
import connectDB from "./config/db.js";
import UserRoutes from "./routes/user.routes.js";
import CompanyRoutes from "./routes/company.route.js";
import JobRoutes from "./routes/job.routes.js";
import ApplicationRoutes from "./routes/application.route.js";

import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

//middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser())

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions))
//API
app.use("/api/v1/users", UserRoutes);
app.use("/api/v1/company", CompanyRoutes);
app.use("/api/v1/job", JobRoutes);
app.use("/api/v1/application", ApplicationRoutes);

app.get("/", (req, res) => {
  res.send("API Is Running");
});

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on Port ${PORT}`);
});
