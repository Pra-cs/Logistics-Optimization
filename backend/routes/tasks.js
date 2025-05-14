const express = require('express');
const Task = require('../models/Task');
module.exports = () => {
  const router = express.Router();
  router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.send(tasks);
  });
  return router;
};
