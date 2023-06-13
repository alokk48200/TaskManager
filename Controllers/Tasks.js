const express=require('express');
const app=express();
app.use(express.json);

const getAllTasks=(req, res)=>{
    res.send("get all the task");
  };

  const getOneTask= (req, res)=>{
    res.json({"name":"Alok"});
  };
  const deleteTask=(req, res)=>{
    res.send("succesfully deletd");
};
const createTask=(req, res)=>{
    res.json({"name":"Alok"});
  };
  const updateTask= (req, res)=>{
    res.send(req.params.id);
  };
  module.exports={getAllTasks, getOneTask, updateTask, deleteTask, createTask};