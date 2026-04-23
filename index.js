import connectDB from "./src/db/index.js";
import app from "./src/app.js";
import { PORT } from "./src/constants.js";

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1); // exit process if DB fails
  }
};

startServer();