

import { products } from "./constants/data.js";
import Product from "./modal/productSchema.js";

const Defaultdata = async()  => {
    try{
       await Product.insertMany(products);
        console.log('data import sucessfully');
    }

    catch(err){
        console.log("error while inserting default",err.message);
    }
}

export default Defaultdata;