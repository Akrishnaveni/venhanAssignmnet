import React from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Panel,
} from 'reactflow';
import 'reactflow/dist/style.css';

import useStore from './store/useStore';
import CustomNode from './components/CustomNode';
import Sidebar from './components/Sidebar';
import NodeModal from './components/NodeModal';

const nodeTypes = {
  custom: CustomNode,
};

const flowStyles = {
  background: '#f8fafc',
};

function App() {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore();

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          style={flowStyles}
          defaultEdgeOptions={{
            type: 'smoothstep',
            animated: true,
          }}
        >
          <Background />
          <Controls />
          <MiniMap />
          <Panel position="top-right" className="bg-white p-2 rounded-lg shadow-lg">
            <div className="text-sm text-gray-600">
              Drag between handles to connect nodes
            </div>
          </Panel>
        </ReactFlow>
      </div>
      <NodeModal />
    </div>
  );
}

export default App;