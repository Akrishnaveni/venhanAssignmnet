import React, { useState, useEffect } from 'react';
import { useFlowStore } from '../../store/flowStore';

export const NodeForm = () => {
  const { setIsModalOpen, selectedNode, addNode, updateNode } = useFlowStore();
  const [formData, setFormData] = useState({ label: '', description: '' });

  useEffect(() => {
    if (selectedNode) {
      setFormData({
        label: selectedNode.data.label || '',
        description: selectedNode.data.description || '',
      });
    } else {
      setFormData({ label: '', description: '' });
    }
  }, [selectedNode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedNode) {
      updateNode(selectedNode.id, formData);
    } else {
      addNode({
        data: formData,
        position: { x: Math.random() * 300 + 100, y: Math.random() * 300 + 100 },
      });
    }
    setIsModalOpen(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Label
        </label>
        <input
          type="text"
          value={formData.label}
          onChange={(e) => setFormData({ ...formData, label: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          autoFocus
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
        />
      </div>
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={() => setIsModalOpen(false)}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {selectedNode ? 'Update' : 'Add'}
        </button>
      </div>
    </form>
  );
};