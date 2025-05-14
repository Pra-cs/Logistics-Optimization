import React, { useEffect, useState } from 'react';
import ReactFlow, { MiniMap, Controls } from'reactflow';
import io from 'socket.io-client';
const socket = io('http://localhost:5000');

function App() {
  const [nodes, setNodes] = useState([]);
  const [taskStatus, setTaskStatus] = useState({});

  useEffect(() => {
    socket.on('task-update', ({ nodeId, status }) => {
      setTaskStatus(prev => ({ ...prev, [nodeId]: status }));
    });
  }, []);

  const fetchWorkflow = async () => {
    const res = await fetch('http://localhost:5000/api/workflows/WORKFLOW_ID');
    const data = await res.json();
    setNodes(data.nodes.map(n => ({ id: n.id, data: { label: `${n.type} (${taskStatus[n.id] || 'pending'})` }, position: { x: 100, y: 100 } })));
  };

  return (
    <div className="h-screen">
      <button onClick={fetchWorkflow} className="m-2 p-2 bg-blue-500 text-white">Load Workflow</button>
      <ReactFlow elements={nodes} style={{ width: '100%', height: '90%' }}>
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
}
export default App;
