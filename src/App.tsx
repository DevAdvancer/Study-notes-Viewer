import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Note, Progress } from './types';
import { notes } from './data/notes';
import { NoteCard } from './components/NoteCard';
import { NoteViewer } from './components/NoteViewer';
import { SortControls } from './components/SortControls';
import { Footer } from './components/Footer';
import { BookOpen } from 'lucide-react';

export default function App() {
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [filter, setFilter] = useState<Progress | 'all'>('all');

  const filteredNotes = notes.filter(note =>
    filter === 'all' ? true : note.progress === filter
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <div className="max-w-6xl mx-auto p-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <BookOpen className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold">Study Notes</h1>
        </motion.div>

        <SortControls onSortChange={setFilter} currentFilter={filter} />

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredNotes.map(note => (
              <NoteCard
                key={note.id}
                note={note}
                onClick={() => setSelectedNote(note)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedNote && (
            <NoteViewer
              note={selectedNote}
              onClose={() => setSelectedNote(null)}
            />
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}
