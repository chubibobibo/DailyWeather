import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();

//router imports
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

//middleware to parse json
app.use(express.json());
app.use(cookieParser());

//connect to mongo
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

//routers
app.use("/api/users/", userRoutes);
app.use("/api/admin/", adminRoutes);

//middleware to handle page not found
app.use("*", (req, res, next) => {
  res.status(404).json({ message: "Page not Found" });
  next();
});

//express error handler
app.use((err, req, res, next) => {
  const status = err.status || 400;
  const message = err.message || "Something went wrong";
  res.status(status).json({ message: message });
});

app.listen(process.env.PORT, () => {
  console.log(`SERVING PORT ${process.env.PORT}`);
});
