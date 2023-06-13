const mongoose=require('mongoose');
const connectionString='mongodb+srv://alokk48200:Ak2020@nodejs.pi78j1a.mongodb.net/Nodejs?retryWrites=true&w=majority';
mongoose.connect(connectionString).then((data)=>{
    console.log("connection with databse............");
}).catch((err)=>{
    console.log(err);
})