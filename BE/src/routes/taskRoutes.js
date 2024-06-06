const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// CRUD routes
router.post('/tasks', taskController.createTask);
router.get('/tasks', taskController.getAllTask);
router.get('/task/:id', taskController.getTaskById);
router.put('/task/:id', taskController.updateTask);
router.delete('/task/:id', taskController.deleteTask);

module.exports = router;