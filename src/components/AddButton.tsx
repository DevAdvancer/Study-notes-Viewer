import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, FileText } from 'lucide-react';

interface AddButtonProps {
  url: string;
  openInNewTab?: boolean;
}

export const AddButton: React.FC<AddButtonProps> = ({ 
  url, 
  openInNewTab = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = () => {
    if (openInNewTab) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = url;
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 flex items-center justify-center">
      {/* Text tooltip that appears on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute right-16 bg-gray-800 text-white py-2 px-3 rounded-lg shadow-lg flex items-center"
          >
            <span className="whitespace-nowrap font-medium text-sm">Add your Notes in .md Format</span>
            <div className="absolute right-0 transform translate-x-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative bg-blue-600 text-white rounded-full p-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 overflow-hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          type: 'spring', 
          stiffness: 300, 
          damping: 15 
        }}
        aria-label="Add your docs"
      >
        {/* Background pulse effect */}
        <motion.div 
          className="absolute inset-0 bg-blue-500 rounded-full"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0, 0.3, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />

        {/* Icon transition */}
        <AnimatePresence initial={false} mode="wait">
          {!isHovered ? (
            <motion.div
              key="plus"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Plus className="w-6 h-6 relative z-10" />
            </motion.div>
          ) : (
            <motion.div
              key="file"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FileText className="w-6 h-6 relative z-10" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};