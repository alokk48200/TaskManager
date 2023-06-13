const express=require('express');
const router=express.Router();

const {file, login, data}=require('../Controllers/controllers');
  router.get('/ward', file)
  router.post('/login', login);
  router.get('/data', data);

 module.exports=router;