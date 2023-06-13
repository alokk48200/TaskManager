   const path=require('path');
const file=(req,res)=>{
    // console.log(req);
     res.status(200).sendFile(path.resolve(__dirname, './frontend/index.html'));
  };
  const login=(req, res)=>{
    const {name, email}= req.body ;
    console.log(name, req.body);
    res.send(`succesfully recieved welcom ${name} , ${email}`);
 };
const data=(req, res)=>{
  
    res.send(`succesfully data is fetched`);
 };

 module.exports={file, login , data};