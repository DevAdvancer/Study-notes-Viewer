import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Note, Progress } from "./types";
import { notes } from "./data/notes";
import { NoteCard } from "./components/NoteCard";
import { NoteViewer } from "./components/NoteViewer";
import { SortControls } from "./components/SortControls";
import { Footer } from "./components/Footer";
import { BookOpen, Sparkles } from "lucide-react";
import { StudyThemeProvider } from "./components/StudyFeatures";
import { AddButton } from "./components/AddButton";

export default function App() {
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [filter, setFilter] = useState<Progress | "all">("all");
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();

  const filteredNotes = notes.filter((note) =>
    filter === "all" ? true : note.progress === filter
  );

  // Simulating page load effect
  useEffect(() => {
    const loadSequence = async (): Promise<void> => {
      await controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
      setIsLoaded(true);
    };

    loadSequence();
  }, [controls]);

  return (
    <StudyThemeProvider>
      <motion.div
        className="min-h-screen bg-gray-900 text-white font-sans"
        style={{
          background:
            "radial-gradient(circle at 10% 10%, rgb(33, 41, 63) 0%, rgb(17, 24, 39) 100%)",
          overflow: "hidden",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          backgroundPosition: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}>
        {/* Floating particles effect */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(20)].map((_, i: number) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500/10"
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                scale: Math.random() * 0.5 + 0.5,
                opacity: Math.random() * 0.3 + 0.1,
              }}
              animate={{
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              style={{
                width: `${Math.random() * 100 + 20}px`,
                height: `${Math.random() * 100 + 20}px`,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto p-8 pb-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-8 heading">
            <motion.div
              className="p-2 bg-blue-500/10 rounded-lg"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                backgroundColor: "rgba(59, 130, 246, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 300 }}>
              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}>
                <BookOpen className="w-8 h-8 text-blue-400" />
              </motion.div>
            </motion.div>
            <h1 className="text-3xl font-bold">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}>
                Study Notes
              </motion.span>
              <motion.span
                className="inline-block ml-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.2,
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                }}>
                <Sparkles className="w-6 h-6 text-yellow-400 inline" />
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="heading">
            <SortControls onSortChange={setFilter} currentFilter={filter} />
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20" // Added bottom margin
            initial={{ opacity: 0 }}
            animate={controls}>
            <AnimatePresence mode="sync">
              {filteredNotes.map((note, index) => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: isLoaded ? 0 : 0.2 + index * 0.1,
                      duration: 0.5,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    transition: { duration: 0.3 },
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    zIndex: 30, // Add z-index for proper stacking
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  layoutId={`note-card-${note.id}`}
                  className="note-card relative z-20" // Add positioning context
                >
                  <NoteCard note={note} onClick={() => setSelectedNote(note)} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <AnimatePresence>
            {selectedNote && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
                onClick={() => setSelectedNote(null)}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      damping: 25,
                      stiffness: 300,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    y: 20,
                    transition: { duration: 0.2 },
                  }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative"
                  layoutId={`note-card-${selectedNote.id}`}>
                  <NoteViewer
                    note={selectedNote}
                    onClose={() => setSelectedNote(null)}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Add button with URL redirect */}
        <AddButton
          url="https://forms.gle/q1P3Kk1rzuKPG6qk9"
          openInNewTab={true}
        />

        <Footer />
      </motion.div>
    </StudyThemeProvider>
  );
}
