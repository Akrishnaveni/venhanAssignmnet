import { create } from 'zustand';
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MarkerType,
} from 'reactflow';

export const useFlowStore = create((set, get) => ({
  nodes: [],
  edges: [],
  selectedNode: null,
  isModalOpen: false,

  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),
  setSelectedNode: (node) => set({ selectedNode: node }),
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),

  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  onConnect: (params) => {
    const newEdge = {
      ...params,
      type: 'smoothstep',
      animated: true,
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
    };
    set({
      edges: addEdge(newEdge, get().edges),
    });
  },

  addNode: (nodeData) => {
    const newNode = {
      id: `node-${Date.now()}`,
      type: 'custom',
      position: nodeData.position,
      data: nodeData.data,
    };
    set({ nodes: [...get().nodes, newNode] });
  },

  updateNode: (nodeId, newData) => {
    set({
      nodes: get().nodes.map((node) =>
        node.id === nodeId ? { ...node, data: { ...node.data, ...newData } } : node
      ),
    });
  },

  deleteNode: (nodeId) => {
    set({
      nodes: get().nodes.filter((node) => node.id !== nodeId),
      edges: get().edges.filter(
        (edge) => edge.source !== nodeId && edge.target !== nodeId
      ),
    });
  },
}));