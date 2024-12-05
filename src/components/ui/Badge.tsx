import React from 'react';
import { Progress } from '../../types';

interface BadgeProps {
  progress: Progress;
}

const progressColors = {
  'completed': 'text-green-500',
  'in-progress': 'text-yellow-500',
  'not-started': 'text-red-500'
};

const progressDotColors = {
  'completed': 'bg-green-500',
  'in-progress': 'bg-yellow-500',
  'not-started': 'bg-red-500'
};

export function Badge({ progress }: BadgeProps) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${progressDotColors[progress]}`} />
      <span className={`text-sm ${progressColors[progress]}`}>
        {progress.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ')}
      </span>
    </div>
  );
}