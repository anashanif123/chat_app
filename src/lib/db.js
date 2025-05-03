import mongoose from "mongoose";

export const connectDB = async () => {
  try {
 
    const coneected = await mongoose.connect(process.env.MONGODB_URI);
   console.log(`MongoDB connected: ${coneected.connection.host}`);
   

} catch (err) {
    console.log("mongodb error ",err.message);
  }
};
