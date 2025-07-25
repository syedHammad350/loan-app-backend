import mongoose from "mongoose";
 const mongo_connect=()=>{
    try {
        const connect= mongoose.connect(process.env.MONGO_DB_URL)
        console.log('mongodb is connected')
    } catch (error) {
         console.log('mongodb is not connected')
    }

 }
 export default mongo_connect