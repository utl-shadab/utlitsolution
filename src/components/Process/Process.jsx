import React, { useCallback , useState } from 'react';
import {
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import CustomEdge from './CustomEdge';
import './Process.css';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: 'a', position: { x: 0, y: 0 }, data: { label: 'Client Idea ' }, style: { backgroundColor: '#ffcc00', color: '#000' } },
  { id: 'b', position: { x: 0, y: 100 }, data: { label: 'Business Analysis' }, style: { backgroundColor: '#00ccff', color: '#000' } },
  { id: 'c', position: { x: 200, y: 0 }, data: { label: 'UI/UX Design' }, style: { backgroundColor: '#ff6699', color: '#000' } },
  { id: 'd', position: { x: 200, y: 100 }, data: { label: 'Development' }, style: { backgroundColor: '#66ff66', color: '#000' } },
  { id: 'e', position: { x: 400, y: 0 }, data: { label: 'Testing' }, style: { backgroundColor: '#ff9966', color: '#000' } }, 
  { id: 'f', position: { x: 400, y: 100 }, data: { label: 'Final Delivery' }, style: { backgroundColor: '#6699ff', color: '#000' } }, 
  { id: 'g', position: { x: 600, y: 0 }, data: { label: 'Client Feedback' }, style: { backgroundColor: '#ff66cc', color: '#000' } }, 
  { id: 'h', position: { x: 600, y: 100 }, data: { label: 'Post Delivery Support' }, style: { backgroundColor: '#cc66ff', color: '#000' } }, // Changed color
];

const initialEdges = [
  { id: 'a->b', type: 'custom-edge', source: 'a', target: 'b', style: { stroke: '#ffcc00' } },
  { id: 'b->c', type: 'custom-edge', source: 'b', target: 'c', style: { stroke: '#00ccff' } },
  { id: 'c->d', type: 'custom-edge', source: 'c', target: 'd', style: { stroke: '#ff6699' } },
  { id: 'd->e', type: 'custom-edge', source: 'd', target: 'e', style: { stroke: '#66ff66' } },
  { id: 'e->f', type: 'custom-edge', source: 'e', target: 'f', style: { stroke: '#ff9966' } }, 
  { id: 'f->g', type: 'custom-edge', source: 'f', target: 'g', style: { stroke: '#6699ff' } }, 
  { id: 'g->h', type: 'custom-edge', source: 'g', target: 'h', style: { stroke: '#ff66cc' } }, 
  { id: 'h->h', type: 'custom-edge', source: 'h', target: 'h', style: { stroke: '#cc66ff' } }, 
];

const edgeTypes = {
  'custom-edge': CustomEdge,
};
const messages = {
  a: "Continue your UI design with Figma and complete the course of it!😉",
  b: "Analyze the business requirements thoroughly!📊",
  c: "Design the best UI/UX for the project!🎨",
  d: "Develop the project with clean code!💻",
  e: "Test the project rigorously!🧪",
  f: "Deliver the final product to the client!📦",
  g: "Gather feedback from the client!📝",
  h: "Provide post-delivery support!🛠️",
};
function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const onConnect = useCallback(
    (connection) => {
      const edge = { ...connection, type: 'custom-edge' };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges],
  );
  const onNodeClick = (node) => { 
    setMessage(messages[node.id]);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 4000);
  };
  return (
   <div style={{ height: '600px', width: '100%' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                
                onConnect={onConnect}
                edgeTypes={edgeTypes}
                fitView
                onNodeClick={onNodeClick}
            />
            {showMessage && (
                <div className="message-container">
                    {message}
                </div>
            )}
        </div>
  );
}

export default Flow;