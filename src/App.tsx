import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Note, Progress } from "./types";
import { notes } from "./data/notes";
import { NoteViewer } from "./components/NoteViewer";
import { Footer } from "./components/Footer";
import {
  BookOpen, Search, Menu, X, ListFilter,
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const controls = useAnimation();
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close sidebar on wider screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle body scroll lock when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSidebarOpen]);

  // Filter notes based on progress and search term
  const filteredNotes = notes.filter((note) => {
    const progressMatch = filter === "all" ? true : note.progress === filter;
    const searchMatch = searchTerm === ""
      ? true
      : note.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.subjectCode.toLowerCase().includes(searchTerm.toLowerCase());
    return progressMatch && searchMatch;
  });

  // Function to focus search input
  const focusSearch = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  // Simulating page load effect
  useEffect(() => {
    const loadSequence = async () => {
      await controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
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
    <StudyThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950/30 to-gray-900 text-white font-sans">
        {/* Custom Header */}
        <header className="bg-gradient-to-r from-gray-800 via-blue-900/40 to-gray-800 border-b border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg mr-3 lg:hidden hover:bg-gray-700"
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                  <Menu size={20} />
                </motion.button>
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="p-2 rounded-lg bg-blue-500/20"
                  >
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                  </motion.div>
                  <h1 className="text-xl font-bold hidden sm:block">University Study Notes</h1>
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
                    className="w-full pl-10 pr-12 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 bg-gray-800/50 text-white border-gray-700 focus:ring-blue-500 transition-colors"
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
                      filter !== "all" ? "text-blue-400" : "text-gray-400 hover:text-gray-300"
                    }`}
                    onClick={() => setShowFilters(!showFilters)}
                    aria-label="Filter notes"
                  >
                    <ListFilter size={18} />
                    {filter !== "all" && (
                      <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-2 h-2 bg-blue-500 rounded-full"></span>
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
                className="absolute right-4 sm:right-6 lg:right-8 top-16 z-50 mt-2 py-2 px-1 rounded-lg shadow-lg border bg-gray-800 border-gray-700 transition-colors max-w-xs w-[calc(100%-2rem)] sm:w-auto"
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
                          ? "bg-blue-600/20 text-blue-400"
                          : "hover:bg-gray-700"
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

        {/* Mobile sidebar overlay */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            >
              <motion.div
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ type: "spring", damping: 25 }}
                className="w-3/4 max-w-xs h-full bg-gray-900 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4 border-b border-gray-800/50 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                      <GraduationCap className="w-5 h-5 text-blue-400" />
                    </div>
                    <h2 className="font-bold">Study Notes</h2>
                  </div>
                  <button
                    className="p-2 rounded-lg hover:bg-gray-800"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="p-4">
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-2 text-gray-400">Filter by Status</h3>
                    <div className="space-y-1">
                      {["all", "completed", "in-progress", "not-started"].map((status) => (
                        <button
                          key={status}
                          onClick={() => {
                            setFilter(status as Progress | "all");
                            setIsSidebarOpen(false);
                          }}
                          className={`w-full text-left py-2 px-3 text-sm rounded-lg transition-colors flex items-center gap-2 ${
                            filter === status
                              ? "bg-blue-600/20 text-blue-400"
                              : "hover:bg-gray-800"
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
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2 text-gray-400">Subjects</h3>
                    <div className="space-y-1">
                      {notes.map((note) => (
                        <button
                          key={note.id}
                          onClick={() => {
                            setSelectedNote(note);
                            setIsSidebarOpen(false);
                          }}
                          className="w-full text-left py-2 px-3 text-sm rounded-lg transition-colors flex items-center gap-2 hover:bg-gray-800"
                        >
                          <div className="flex-grow">
                            <div className="flex justify-between items-center">
                              <span className="truncate">{note.subject}</span>
                              <ChevronRight size={14} className="text-gray-500" />
                            </div>
                            <div className="flex items-center gap-1 mt-0.5">
                              <span className="text-xs opacity-60">{note.subjectCode}</span>
                              <span className="inline-block w-1 h-1 bg-gray-500 rounded-full mx-1"></span>
                              <div className="flex items-center">
                                {getProgressIcon(note.progress)}
                                <span className={`text-xs ml-1 ${
                                  note.progress === 'completed' ? 'text-emerald-500' :
                                  note.progress === 'in-progress' ? 'text-amber-500' : 'text-rose-500'
                                }`}>
                                  {note.progress.split('-').map(word =>
                                    word.charAt(0).toUpperCase() + word.slice(1)
                                  ).join(' ')}
                                </span>
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content Area - ONLY THIS SECTION IS SCROLLABLE */}
        <div className="flex h-[calc(100vh-4rem)] overflow-hidden"> {/* 4rem = h-16 header height */}
          <main className="flex-1 overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20">
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h1 className="text-2xl sm:text-3xl font-bold">My Study Notes</h1>
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
                          className="overflow-hidden rounded-xl h-full cursor-pointer bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 transition-all duration-300"
                          onClick={() => setSelectedNote(note)}
                        >
                          {/* Card Header with Background Image */}
                          <div
                            className="h-28 sm:h-32 relative flex items-end"
                            style={{
                              backgroundImage: `linear-gradient(to bottom, rgba(17, 24, 39, 0.5), rgba(17, 24, 39, 0.9)), url(${subjectBackgrounds[note.subject as keyof typeof subjectBackgrounds]})`,
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
                              <span className="text-xs sm:text-sm font-medium px-2 py-0.5 rounded bg-gray-700/50">
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
                            <div className="text-xs sm:text-sm line-clamp-2 mt-1 sm:mt-2 text-gray-400">
                              {/* Simple markdown content preview */}
                              {note.content.substring(0, 120).replace(/[#*_\[\]\(\)]/g, '') + '...'}
                            </div>

                            {/* Read More Button */}
                            <div className="mt-auto pt-3 sm:pt-4">
                              <div className="text-xs sm:text-sm font-medium flex items-center gap-1 text-blue-400">
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
                  className="flex flex-col items-center justify-center py-16 px-4 rounded-xl text-center bg-gray-800/40"
                >
                  <div className="p-6 rounded-full mb-4 bg-gray-700/50">
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
                    className="mt-6 px-4 py-2 font-medium rounded-lg transition-colors bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Clear filters
                  </button>
                </motion.div>
              )}
            </div>
          </main>
        </div>

        {/* Note Viewer that appears directly without overlay */}
        <AnimatePresence>
          {selectedNote && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedNote(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    damping: 25,
                    stiffness: 300,
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  transition: { duration: 0.2 },
                }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full"
                layoutId={`note-card-${selectedNote.id}`}
              >
                <NoteViewer
                  note={selectedNote}
                  onClose={() => setSelectedNote(null)}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add button with URL redirect */}
        <AddButton
          url="https://forms.gle/q1P3Kk1rzuKPG6qk9"
          openInNewTab={true}
        />

        <Footer />
      </div>
    </StudyThemeProvider>
  );
}
