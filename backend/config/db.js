import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://aarushibhatia27:project@cluster0.nlev6.mongodb.net/flavorly').then(()=>console.log("DB Connected"));
}