import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Note, Progress } from "./types";
import { notes } from "./data/notes";
import { NoteViewer } from "./components/NoteViewer";
import { Footer } from "./components/Footer";
import {
  BookOpen, Search, X, ListFilter,
  CheckCircle2, Clock, AlertCircle, ChevronRight,
  GraduationCap
} from "lucide-react";
import { StudyThemeProvider } from "./components/StudyFeatures";
import { AddButton } from "./components/AddButton";

// Background images for each subject
const subjectBackgrounds = {
  "Intro to Python": "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=500",
  "Full Stack SD": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500",
  "Operating System": "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=500",
  "Machine Learning": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=500",
  "Unstructured DB": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=500",
  "IOT": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500",
  "OS Lab": "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=500",
  "UDB Lab": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=500"
};

export default function App() {
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [filter, setFilter] = useState<Progress | "all">("all");
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const controls = useAnimation();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Filter notes based on progress and search term
  const filteredNotes = notes.filter((note) => {
    const progressMatch = filter === "all" ? true : note.progress === filter;
    const searchMatch = searchTerm === ""
      ? true
      : note.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.subjectCode.toLowerCase().includes(searchTerm.toLowerCase());
    return progressMatch && searchMatch;
  });

  // Scroll to top when a note is closed
  useEffect(() => {
    if (!selectedNote && contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [selectedNote]);

  // Simulating page load effect
  useEffect(() => {
    const loadSequence = async () => {
      await controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      setIsLoaded(true);
    };

    loadSequence();
  }, [controls]);

  // Get icon for progress state
  const getProgressIcon = (progress: Progress) => {
    switch(progress) {
      case 'completed':
        return <CheckCircle2 className="text-emerald-500" size={16} />;
      case 'in-progress':
        return <Clock className="text-amber-500" size={16} />;
      case 'not-started':
        return <AlertCircle className="text-rose-500" size={16} />;
    }
  };

  return (
    <StudyThemeProvider hideStudyTools={selectedNote !== null}>
      <div className="min-h-screen bg-gradient-to-br from-[#4F7C82] via-[#0B2E33] to-[#0B2E33] text-white font-sans overscroll-none">
        {/* Custom Header */}
        <header className="bg-gradient-to-r from-[#4F7C82]/90 to-[#0B2E33]/90 border-b border-[#93B1B5]/50 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="p-2 rounded-lg bg-[#0B2E33] border border-[#4F7C82] shadow-md"
                  >
                    <GraduationCap className="w-6 h-6 text-[#B8E3E9] drop-shadow-sm" />
                  </motion.div>
                  <h1 className="text-xl font-bold">University Study Notes</h1>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Unified Search Bar with integrated filter button */}
                <div className="relative flex-1 max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    ref={searchInputRef}
                    className="w-full pl-10 pr-12 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 bg-[#0B2E33]/50 text-white border-[#4F7C82] focus:ring-[#4F7C82] transition-colors"
                    placeholder="Search notes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {searchTerm && (
                    <button
                      className="absolute inset-y-0 right-10 pr-2 flex items-center"
                      onClick={() => setSearchTerm('')}
                    >
                      <X size={14} className="text-gray-400 hover:text-gray-300" />
                    </button>
                  )}

                  {/* Filter Button Integrated with Search */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`absolute inset-y-0 right-0 pr-3 flex items-center ${
                      filter !== "all" ? "text-[#B8E3E9]" : "text-gray-400 hover:text-gray-300"
                    }`}
                    onClick={() => setShowFilters(!showFilters)}
                    aria-label="Filter notes"
                  >
                    <ListFilter size={18} />
                    {filter !== "all" && (
                      <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-2 h-2 bg-[#B8E3E9] rounded-full"></span>
                    )}
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Dropdown */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-4 sm:right-6 lg:right-8 top-16 z-50 mt-2 py-2 px-1 rounded-lg shadow-lg border bg-[#0B2E33] border-[#4F7C82] transition-colors max-w-xs w-[calc(100%-2rem)] sm:w-auto"
              >
                <div className="w-full sm:w-48">
                  {["all", "completed", "in-progress", "not-started"].map((status) => (
                    <button
                      key={status}
                      onClick={() => {
                        setFilter(status as Progress | "all");
                        setShowFilters(false);
                      }}
                      className={`w-full text-left py-2 px-3 text-sm rounded-md flex items-center gap-2 transition-colors mb-1 ${
                        filter === status
                          ? "bg-[#4F7C82]/20 text-[#B8E3E9]"
                          : "hover:bg-[#0B2E33]/70"
                      }`}
                    >
                      {status === "all"
                        ? <BookOpen size={16} />
                        : getProgressIcon(status as Progress)}

                      <span>
                        {status === "all" ? "All Notes" :
                        status === "completed" ? "Completed" :
                        status === "in-progress" ? "In Progress" : "Not Started"}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Main Content Area with proper padding to avoid footer overlap */}
        <div className="flex min-h-[calc(100vh-4rem)] overflow-hidden">
          <main className="flex-1 w-full" ref={contentRef}>
            {/* Add extra padding at the bottom to avoid footer overlap */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-32">
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      {filter !== "all" && (
                        <div className={`px-3 py-1 rounded-full text-sm ${
                          filter === 'completed'
                            ? 'bg-emerald-900/30 text-emerald-400'
                            : filter === 'in-progress'
                              ? 'bg-amber-900/30 text-amber-400'
                              : 'bg-rose-900/30 text-rose-400'
                        } transition-colors`}>
                          {filter === "completed" ? "Completed" :
                          filter === "in-progress" ? "In Progress" : "Not Started"}
                        </div>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-gray-400">
                      {filteredNotes.length} {filteredNotes.length === 1 ? 'note' : 'notes'} available
                      {searchTerm && ` matching "${searchTerm}"`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Notes Grid */}
              {filteredNotes.length > 0 ? (
                <motion.div
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
                  initial={{ opacity: 0 }}
                  animate={controls}
                >
                  <AnimatePresence mode="sync">
                    {filteredNotes.map((note, index) => (
                      <motion.div
                        key={note.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            delay: isLoaded ? 0 : 0.1 + index * 0.05,
                            duration: 0.4,
                          },
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.9,
                          transition: { duration: 0.3 },
                        }}
                        layoutId={`note-card-${note.id}`}
                        className="relative flex flex-col h-full"
                      >
                        <motion.div
                          whileHover={{ y: -5, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="overflow-hidden rounded-xl h-full cursor-pointer bg-[#0B2E33]/30 backdrop-blur-sm border border-[#4F7C82]/30 transition-all duration-300 shadow-lg"
                          onClick={() => setSelectedNote(note)}
                        >
                          {/* Card Header with Background Image */}
                          <div
                            className="h-28 sm:h-32 relative flex items-end"
                            style={{
                              backgroundImage: `linear-gradient(to bottom, rgba(79, 124, 130, 0.5), rgba(11, 46, 51, 0.9)), url(${subjectBackgrounds[note.subject as keyof typeof subjectBackgrounds]})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center'
                            }}
                          >
                            <div className="absolute top-3 right-3">
                              {getProgressIcon(note.progress)}
                            </div>

                            <div className="p-4 w-full">
                              <h3 className="text-base sm:text-lg font-semibold line-clamp-1 text-white">
                                {note.subject}
                              </h3>
                            </div>
                          </div>

                          {/* Card Body */}
                          <div className="p-3 sm:p-4 flex flex-col flex-grow">
                            <div className="flex justify-between items-center mb-2 sm:mb-3">
                              <span className="text-xs sm:text-sm font-medium px-2 py-0.5 rounded bg-[#0B2E33]/50">
                                {note.subjectCode}
                              </span>

                              <div className="flex items-center gap-1.5">
                                <span className={`text-xs ${
                                  note.progress === 'completed' ? 'text-emerald-500' :
                                  note.progress === 'in-progress' ? 'text-amber-500' : 'text-rose-500'
                                }`}>
                                  {note.progress.split('-').map(word =>
                                    word.charAt(0).toUpperCase() + word.slice(1)
                                  ).join(' ')}
                                </span>
                              </div>
                            </div>

                            {/* Preview of note content */}
                            <div className="text-xs sm:text-sm line-clamp-2 mt-1 sm:mt-2 text-gray-300">
                              {note.content.substring(0, 120).replace(/[#*_\[\]\(\)]/g, '') + '...'}
                            </div>

                            {/* Read More Button */}
                            <div className="mt-auto pt-3 sm:pt-4">
                              <div className="text-xs sm:text-sm font-medium flex items-center gap-1 text-[#B8E3E9]">
                                Read Notes
                                <ChevronRight size={16} />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center py-16 px-4 rounded-xl text-center bg-[#0B2E33]/40"
                >
                  <div className="p-6 rounded-full mb-4 bg-[#4F7C82]/50">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-gray-300">No notes found</h3>
                  <p className="max-w-md text-gray-400">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setFilter("all");
                    }}
                    className="mt-6 px-4 py-2 font-medium rounded-lg transition-colors bg-[#4F7C82] hover:bg-[#4F7C82]/80 text-white"
                  >
                    Clear filters
                  </button>
                </motion.div>
              )}
            </div>
          </main>
        </div>

        {/* Note Viewer */}
        <AnimatePresence mode="wait">
          {selectedNote && (
            <NoteViewer
              note={selectedNote}
              onClose={() => setSelectedNote(null)}
            />
          )}
        </AnimatePresence>

        {/* Add button with URL redirect - only visible when not viewing notes */}
        {!selectedNote && (
          <div className="fixed bottom-20 right-6 z-30">
            <AddButton
              url="https://forms.gle/q1P3Kk1rzuKPG6qk9"
              openInNewTab={true}
            />
          </div>
        )}

        {/* Footer with fixed position - hidden when viewing notes */}
        {!selectedNote && <Footer />}
      </div>
    </StudyThemeProvider>
  );
}
