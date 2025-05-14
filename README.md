# Process Flow Creator for Logistics Optimization

## Tech Stack

- **Frontend**: React, React Flow Renderer, TailwindCSS
- **Backend**: Node.js, Express.js, MongoDB, Socket.IO
- **Auth**: JWT (stubbed)
- **Real-Time**: WebSockets

## Features

- Visual drag-and-drop workflow builder
- Workflow execution engine (FSM-based)
- Real-time dashboard with status updates
- API-first architecture

## 🛠️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/process-flow-creator.git
cd process-flow-creator
```

### 2. Start Backend

```bash
cd backend
npm install
npm start
```

### 3. Start Frontend

```bash
cd frontend
npm install
npm run dev
```

### 4. MongoDB

Make sure MongoDB is running locally on default port.

### 5. Run Sample Workflow

- POST to `/api/workflows` with sample JSON.
- Call `/api/workflows/:id/execute`
- Watch task statuses in frontend UI.

## 🧪 Testing

- Use `Vitest` or `Jest` for unit tests in `backend/tests`
- Cypress for frontend (optional)

## 🧰 API Endpoints

| Method | Endpoint                   | Description           |
| ------ | -------------------------- | --------------------- |
| POST   | /api/workflows             | Create a new workflow |
| GET    | /api/workflows/:id         | Retrieve a workflow   |
| POST   | /api/workflows/:id/execute | Execute a workflow    |
| GET    | /api/tasks                 | List all tasks        |

## 🔐 Auth

- JWT-based (stubbed in middleware for prototype)
- Admin/operator roles possible

## 🧠 Architecture Highlights

- MVC structured codebase
- Reusable components & schemas
- Observer pattern (Socket.IO)
- FSM for flow execution

## 📈 Scalability Plan

- Use Redis cache for workflows
- Use message queue for task execution (e.g., RabbitMQ)
- Stateless APIs for horizontal scaling

## 🔒 Security Plan

- Input validation and sanitization
- HTTPS + WSS for transport
- Role-based access (RBAC)
