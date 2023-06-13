  const express=require('express');
  const router=express.Router();
  const {getAllTasks, getOneTask, createTask, deleteTask,updateTask}=require('../Controllers/Tasks');
router.get('/', getAllTasks)
router.post('/', createTask)
router.patch('/:id',updateTask)
router.get('/:id',getOneTask)
  
router.delete('/:id', deleteTask);

  module.exports=router;