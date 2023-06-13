const connectDB=require('./DB/Connect')
require('dotenv').config();
const express=require('express');

const app=express();

app.use(express.json());

   const task=require('./Routers/Task');
const e = require('express');
   
   app.use('/api/task', task);
   
 const start=async()=>{
  try {
            await connectDB(process.env.uri);
           app.listen(3000);
           console.log("succesfully connect....");
    
  } catch (error) {
      console.log(error);
  }
 }
 start();
 