// Trong file routes của bạn
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');

// Đảm bảo các route này tồn tại trên server của bạn
router.get('/tasks', TaskController.getAllTask);
router.post('/tasks', TaskController.createTask);
router.get('/tasks/:id', TaskController.getTaskById);
router.put('/tasks/:id', TaskController.updateTask);
router.delete('/tasks/:id', TaskController.deleteTask);

module.exports = router;
