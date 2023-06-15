const Task12=require('../models/task11');
const express=require('express');

const app=express();
app.use(express.json);


const getAllTasks=async(req, res)=>{
  try {
    const data= await Task12.find();
        
    res.json(data);
  } catch (error) {
    res.status(500).json({msg:error}); 
  }
 
  };

  const getOneTask= async(req, res)=>{
    try {
      const data= await Task12.findOne({task:req.params.id});
        
    res.json(data);
      
    } catch (error) {
      res.status(500).json({msg:error});
    }
        
  };
  const deleteTask=async(req, res)=>{
    try {
      const {id}=req.params;
      console.log(req.params);
      const task=await Task12.deleteOne({_id: id})
      console.log(task);
      if(!task) res.status(404).json({msg: notfound});
      res.send(task);
       
    } catch (error) {
      console.log(error);
      res.status(500).json({msg:"not found"});
    }
    
};
const createTask=async(req, res)=>{
  try {
    const task = await Task12.create(req.body);
    res.status(201).json(task);
  } catch (error) {
      res.status(500).json({msg:error});
  }
  
  };
  const updateTask=async (req, res)=>{
    try {
      const data=await Task12.updateOne({_id:req.params.id},{completed:req.params.completed});
      res.send(data);
      
    } catch (error) {
      res.status(501).json({msg:error});
    }
    
  };
  module.exports={getAllTasks, getOneTask, updateTask, deleteTask, createTask};
  