
import mongoose from 'mongoose';

export  const Connection = async (name,password) => {

  const URL = `mongodb://${name}:${password}@ac-jghc8qy-shard-00-00.qs8nk2q.mongodb.net:27017,ac-jghc8qy-shard-00-01.qs8nk2q.mongodb.net:27017,ac-jghc8qy-shard-00-02.qs8nk2q.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-los6oz-shard-0&authSource=admin&retryWrites=true&w=majority`
    
  
    try{
         await mongoose.connect(URL,{useUnifiedTopology : true,useNewUrlParser:true });
      console.log("database connected succesfully");

    }
    catch(error){
     console.log("error while connectiong",error.message);
    }
  
}

export default Connection;