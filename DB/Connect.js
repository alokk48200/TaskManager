const mongoose=require('mongoose');
const connectionString='';

const connectDB=(url)=>{
    return mongoose.connect(url).then((data)=>{
        console.log("connection with databse............");
    }).catch((e)=>console.log(e));
}

module.exports=connectDB;


