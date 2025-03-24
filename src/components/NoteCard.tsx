import React from 'react';
import { motion } from 'framer-motion';
import { Note } from '../types';
import { BookOpen } from 'lucide-react';
import { Badge } from './ui/Badge';

interface NoteCardProps {
  note: Note;
  onClick: () => void;
}

export function NoteCard({ note, onClick }: NoteCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{
        scale: 1.02,
        zIndex: 30 // Ensure hover doesn't get hidden behind other elements
      }}
      onClick={onClick}
      className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 cursor-pointer border border-gray-700/50 hover:border-gray-600 transition-colors shadow-lg relative z-20"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <BookOpen className="w-5 h-5 text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold text-white">{note.subject}</h3>
        </div>
        <span className="text-sm font-medium text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
          {note.subjectCode}
        </span>
      </div>
      <Badge progress={note.progress} />
    </motion.div>
  );
}
