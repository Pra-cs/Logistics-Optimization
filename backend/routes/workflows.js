const express = require('express');
const Workflow = require('../models/Workflow');
module.exports = (io) => {
  const router = express.Router();

  router.post('/', async (req, res) => {
    const wf = new Workflow(req.body);
    await wf.save();
    res.status(201).send(wf);
  });

  router.get('/:id', async (req, res) => {
    const wf = await Workflow.findById(req.params.id);
    res.send(wf);
  });

  router.post('/:id/execute', async (req, res) => {
    const wf = await Workflow.findById(req.params.id);
    if (!wf) return res.status(404).send('Workflow not found');

    for (const node of wf.nodes) {
      io.emit('task-update', { nodeId: node.id, status: 'started' });
      await new Promise(r => setTimeout(r, 1000));
      io.emit('task-update', { nodeId: node.id, status: 'completed' });
    }

    res.send({ status: 'Executed' });
  });

  return router;
};
