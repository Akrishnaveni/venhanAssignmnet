import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { Trash2, Edit } from 'lucide-react';
import useStore from '../store/useStore';

const CustomNode = ({ id, data }) => {
  const { deleteNode, setSelectedNode, setIsModalOpen } = useStore();

  const handleEdit = (e) => {
    e.stopPropagation();
    setSelectedNode({ id, data });
    setIsModalOpen(true);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteNode(id);
  };

  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-gray-200">
      <Handle 
        type="target" 
        position={Position.Top} 
        isConnectable={true}
      />
      <div className="flex items-center">
        <div className="flex-1">
          <div className="text-lg font-bold">{data.label}</div>
          {data.description && (
            <div className="text-gray-500 text-sm">{data.description}</div>
          )}
        </div>
        <div className="flex gap-2 ml-2">
          <button
            onClick={handleEdit}
            className="p-1 hover:bg-gray-100 rounded-full nodrag"
            title="Edit node"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={handleDelete}
            className="p-1 hover:bg-gray-100 rounded-full text-red-500 nodrag"
            title="Delete node"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      <Handle 
        type="source" 
        position={Position.Bottom} 
        isConnectable={true}
      />
    </div>
  );
};

export default memo(CustomNode);