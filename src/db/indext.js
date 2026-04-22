import mongoose from "mongoose";
import { DB_Name , DB_URL } from "../constants.js";

import dns from "dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);


const uri =`${DB_URL}/${DB_Name}`;

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Connection error:", error.message);
    process.exit(1);
  }
}




export default connectDB; 