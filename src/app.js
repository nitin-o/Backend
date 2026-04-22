import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/nitin", (req, res) => {
  res.send("Hellojbjbjb W you nana!");
});

export default app;
