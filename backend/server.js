const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const workflowRoutes = require('./routes/workflows');
const taskRoutes = require('./routes/tasks');
const authMiddleware = require('./middlewares/auth');
const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });

mongoose.connect('mongodb://localhost:27017/los', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());
app.use(authMiddleware);

app.use('/api/workflows', workflowRoutes(io));
app.use('/api/tasks', taskRoutes(io));

server.listen(5000, () => console.log('Server started on port 5000'));
