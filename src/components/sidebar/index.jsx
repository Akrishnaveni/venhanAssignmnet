import React from 'react';
import { Plus } from 'lucide-react';
import { useFlowStore } from '../../store/flowStore';

export const Sidebar = () => {
  const { setIsModalOpen, setSelectedNode } = useFlowStore();

  const handleAddNode = () => {
    setSelectedNode(null);
    setIsModalOpen(true);
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <h2 className="text-lg font-bold mb-4">Diagram Tools</h2>
      <button
        onClick={handleAddNode}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        <Plus size={20} />
        Add Node
      </button>
      <div className="mt-4">
        <h3 className="font-medium text-gray-700 mb-2">Instructions:</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• Click "Add Node" to create a new node</li>
          <li>• Drag nodes to reposition them</li>
          <li>• Connect nodes by dragging from handles</li>
          <li>• Edit or delete nodes using their buttons</li>
        </ul>
      </div>
    </div>
  );
};