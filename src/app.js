import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// 🔐 CORS (important for frontend + cookies)
app.use(
  cors({
    origin: "http://0.0.0.0:4000", // change to your frontend URL
    credentials: true,
  })
);

// 📦 Middlewares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 🧪 Health check route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API is running 🚀",
  });
});

// 🔗 Routes
import authRoutes from "./routes/auth.routes.js";

app.use("/api/auth", authRoutes);

export default app;