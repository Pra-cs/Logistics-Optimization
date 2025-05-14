const mongoose = require('mongoose');
const WorkflowSchema = new mongoose.Schema({
  name: String,
  nodes: [
    {
      id: String,
      type: String,
      data: mongoose.Schema.Types.Mixed,
    },
  ],
  transitions: [
    {
      from: String,
      to: String,
      condition: String,
    },
  ],
});
module.exports = mongoose.model('Workflow', WorkflowSchema);
