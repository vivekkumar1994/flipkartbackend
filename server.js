import express  from "express";
import Connection from "./database/db.js";
import Defaultdata from "./default.js";
import dotenv from 'dotenv';
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from "body-parser";
import {v4 as uuid} from "uuid"


dotenv.config();

const app = express();

const PORT = process.env.PORT ||3006 ;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


Connection(username,password)


app.listen(PORT,()=> console.log(`server running on port ${PORT}`))
Defaultdata();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/',Router)


export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback'
paytmParams['EMAIL'] = 'viveksnh933@gmail.com'
paytmParams['MOBILE_NO'] = '9540581437'