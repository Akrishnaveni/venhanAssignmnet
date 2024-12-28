import React from 'react';
import { Trash2, Edit } from 'lucide-react';

export const NodeControls = ({ onEdit, onDelete }) => (
  <div className="flex gap-2 ml-2">
    <button
      onClick={onEdit}
      className="p-1 hover:bg-gray-100 rounded-full nodrag"
      title="Edit node"
    >
      <Edit size={16} />
    </button>
    <button
      onClick={onDelete}
      className="p-1 hover:bg-gray-100 rounded-full text-red-500 nodrag"
      title="Delete node"
    >
      <Trash2 size={16} />
    </button>
  </div>
);