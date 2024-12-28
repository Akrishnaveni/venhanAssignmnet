import React from 'react';
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';

import { FlowComponents } from './components/flow';
import { Sidebar } from './components/sidebar';
import { NodeModal } from './components/modal';
import { useFlowStore } from './store/flowStore';

function App() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useFlowStore();

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
          nodeTypes={FlowComponents.nodeTypes}
          fitView
          style={FlowComponents.styles}
          defaultEdgeOptions={FlowComponents.defaultEdgeOptions}
        >
          <FlowComponents.Background />
          <FlowComponents.Controls />
          <FlowComponents.MiniMap />
          <FlowComponents.InfoPanel />
        </ReactFlow>
      </div>
      <NodeModal />
    </div>
  );
}

export default App;