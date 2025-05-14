const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
  workflowId: mongoose.Schema.Types.ObjectId,
  nodeId: String,
  status: String,
  timestamp: Date,
});
module.exports = mongoose.model('Task', TaskSchema);
