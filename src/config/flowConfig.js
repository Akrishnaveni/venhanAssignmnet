import { CustomNode } from '../components/nodes';

export const flowConfig = {
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