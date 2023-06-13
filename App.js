require('./DB/Connect')
const express=require('express');

 const app=express();

app.use(express.json());

   const task=require('./Routers/Task');
   
   app.use('/api/task', task);

 app.listen(3000);
 