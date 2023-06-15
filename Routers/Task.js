  const express=require('express');
  const router=express.Router();
  const {getAllTasks, getOneTask, createTask, deleteTask,updateTask}=require('../Controllers/Task');
router.get('/', getAllTasks)
router.post('/', createTask)
router.patch('/:id/:completed',updateTask)
router.get('/:id',getOneTask)
  
router.delete('/:id', deleteTask);

  module.exports=router;