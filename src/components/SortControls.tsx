import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Progress } from '../types';
import { FilterButton } from './ui/FilterButton';

interface SortControlsProps {
  onSortChange: (progress: Progress | 'all') => void;
  currentFilter: Progress | 'all';
}

export function SortControls({ onSortChange, currentFilter }: SortControlsProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-2 mb-6"
    >
      <AnimatePresence>
        {(['all', 'completed', 'in-progress', 'not-started'] as const).map((status) => (
          <motion.div
            key={status}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2 }}
          >
            <FilterButton
              status={status}
              isActive={currentFilter === status}
              onClick={() => onSortChange(status)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}