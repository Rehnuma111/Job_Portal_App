import express from "express";
const app = express();
import connectDB from "./config/db.js";
// import UserRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";


//middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser)

const corsOptions ={
    origin:"http//localhost:5173",
    credentails:true
}

app.use(cors(corsOptions))

// app.use("/api/v1/users", UserRoutes);

app.get("/", (req, res) => {
  res.send("API Is Running");
});

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on Port ${PORT}`);
});
