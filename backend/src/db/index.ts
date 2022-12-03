import mongoose from "mongoose";

export const connectDB =  () => {
    mongoose.connect(
    `mongodb://127.0.0.1:27017?retryWrites=true&w=majority`,{
        dbName: process.env.DB_NAME,
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD        
    }
  ).then(db => {
    console.log(`Connected successfully to ${db.connection.name}`);
  }).catch(err=>{
    console.log("connection error: ")
  })
};
