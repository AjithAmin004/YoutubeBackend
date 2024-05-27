import mongoose from "mongoose";
import { dbName } from "../constants.js";

const url = process.env.MONGO_URL;

const dbConnection =async ()=>{ 
try {
  const dbInstance = await mongoose.connect(`${url}/${dbName}`);
  console.log("Database connected to ",dbInstance.connection.host)
} catch (err) {
  console.log("error while connecting db", err);
  process.exit(1);//only 0 is positive termination
}
}

export default dbConnection;
