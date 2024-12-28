import { Background, Controls, MiniMap, Panel } from 'reactflow';
import { CustomNode } from '../nodes';

const InfoPanel = () => (
  <Panel position="top-right" className="bg-white p-2 rounded-lg shadow-lg">
    <div className="text-sm text-gray-600">
      Drag between handles to connect nodes
    </div>
  </Panel>
);

export const FlowComponents = {
  Background,
  Controls,
  MiniMap,
  InfoPanel,
  nodeTypes: {
    custom: CustomNode,
  },
  styles: {
    background: '#f8fafc',
  },
  defaultEdgeOptions: {
    type: 'smoothstep',
    animated: true,
  },
};