import React from 'react';
import { Progress } from '../../types';

interface FilterButtonProps {
  status: Progress | 'all';
  isActive: boolean;
  onClick: () => void;
}

export function FilterButton({ status, isActive, onClick }: FilterButtonProps) {
  const getButtonStyle = () => {
    if (!isActive) return 'bg-gray-800/50 text-gray-400 hover:bg-gray-800';
    if (status === 'all') return 'bg-blue-500 text-white';
    const statusColors = {
      'completed': 'text-green-500',
      'in-progress': 'text-yellow-500',
      'not-started': 'text-red-500'
    };
    return `bg-gray-800 ${statusColors[status as Progress]}`;
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm transition-colors ${getButtonStyle()}`}
    >
      {status === 'all' ? 'All' : status.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')}
    </button>
  );
}