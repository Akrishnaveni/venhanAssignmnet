import React from 'react';
import { Plus } from 'lucide-react';
import useStore from '../../store/useStore';
import { Instructions } from './Instructions';

const Sidebar = () => {
  const { setIsModalOpen, setSelectedNode } = useStore();

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
      <Instructions />
    </div>
  );
};

export default Sidebar;