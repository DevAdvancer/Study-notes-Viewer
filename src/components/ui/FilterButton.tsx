import React from 'react';
import { motion } from 'framer-motion';
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

  // Get a highlight color based on status for the hover effect
  const getHighlightColor = (): string => {
    if (status === 'all') return 'rgba(59, 130, 246, 0.5)'; // blue
    
    const highlightColors = {
      'completed': 'rgba(34, 197, 94, 0.3)', // green
      'in-progress': 'rgba(234, 179, 8, 0.3)', // yellow
      'not-started': 'rgba(239, 68, 68, 0.3)' // red
    };
    
    return highlightColors[status as Progress];
  };

  return (
    <motion.button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm transition-colors ${getButtonStyle()} relative overflow-hidden`}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.15)"
      }}
      transition={{
        scale: { type: "spring", stiffness: 400, damping: 10 }
      }}
    >
      {/* Animated background that slides in from left on hover */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0"
        style={{ 
          backgroundColor: getHighlightColor(),
          zIndex: 0
        }}
        initial={{ x: '-100%', opacity: 0 }}
        whileHover={{ 
          x: 0, 
          opacity: 1,
          transition: { 
            x: { type: "spring", stiffness: 100, damping: 15 },
            opacity: { duration: 0.2 }
          }
        }}
      />
      
      {/* Text content with elevated z-index to appear above the animated background */}
      <motion.span className="relative z-10">
        {status === 'all' ? 'All' : status.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ')}
      </motion.span>
    </motion.button>
  );
}