import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { NodeControls } from './NodeControls';
import { useFlowStore } from '../../store/flowStore';

const CustomNode = ({ id, data }) => {
  const { deleteNode, setSelectedNode, setIsModalOpen } = useFlowStore();

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
      <Handle type="target" position={Position.Top} isConnectable={true} />
      <div className="flex items-center">
        <div className="flex-1">
          <div className="text-lg font-bold">{data.label}</div>
          {data.description && (
            <div className="text-gray-500 text-sm">{data.description}</div>
          )}
        </div>
        <NodeControls onEdit={handleEdit} onDelete={handleDelete} />
      </div>
      <Handle type="source" position={Position.Bottom} isConnectable={true} />
    </div>
  );
};

export default memo(CustomNode);