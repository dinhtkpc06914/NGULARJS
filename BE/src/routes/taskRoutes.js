// Trong file routes của bạn
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');
const Task = require ('../models/task')

// Đảm bảo các route này tồn tại trên server của bạn
router.get('/tasks', TaskController.getAllTask);
router.post('/tasks', TaskController.createTask);
router.get('/update-tasks/:id', TaskController.getTaskById);
router.put('/update-tasks/:id', TaskController.updateTask);
router.delete('/tasks/:id', TaskController.deleteTask);

module.exports = router;
