
import mongoose from 'mongoose';

export  const Connection = async () => {

  const URL = process.env.MONGO_URL
    
  
    try{
         await mongoose.connect(URL,{useUnifiedTopology : true,useNewUrlParser:true });
      console.log("database connected succesfully");

    }
    catch(error){
     console.log("error while connectiong",error.message);
    }
  
}

export default Connection;