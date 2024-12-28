import React from 'react';
import { useFlowStore } from '../../store/flowStore';
import { NodeForm } from './NodeForm';

const NodeModal = () => {
  const { isModalOpen, selectedNode } = useFlowStore();

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-xl">
        <h2 className="text-xl font-bold mb-4">
          {selectedNode ? 'Edit Node' : 'Add Node'}
        </h2>
        <NodeForm />
      </div>
    </div>
  );
};

export default NodeModal;