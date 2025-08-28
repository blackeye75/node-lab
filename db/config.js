import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGO_URI)
    console.log("Mongo db connected",  res.connection.host);
  } catch (error) {
    console.log("MongDB Errro", error.message);
    process.exit(1)
  }

}