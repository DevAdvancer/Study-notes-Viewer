import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Note } from '../types';
import { X, Maximize2, Minimize2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

interface NoteViewerProps {
  note: Note;
  onClose: () => void;
}

export function NoteViewer({ note, onClose }: NoteViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const FOOTER_HEIGHT = 48; // in pixels

  // Get the base URL for the deployed environment
  const baseUrl = process.env.NODE_ENV === 'production'
    ? window.location.origin
    : '';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            width: isFullscreen ? '100%' : 'auto',
            height: isFullscreen ? '100%' : 'auto',
          }}
          transition={{ type: "spring", duration: 0.5 }}
          className={`bg-gray-900/95 backdrop-blur-sm w-full border border-gray-800/50 shadow-xl ${
            isFullscreen
              ? 'fixed inset-0 bottom-12' // Add bottom margin for footer
              : 'rounded-xl max-w-[95%] md:max-w-2xl lg:max-w-4xl max-h-[calc(90vh-48px)]' // Account for footer
          }`}
        >
          <div className="p-6 border-b border-gray-800/50">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">{note.subject}</h2>
                <p className="text-gray-400">{note.subjectCode}</p>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                >
                  {isFullscreen ? (
                    <Minimize2 className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Maximize2 className="w-5 h-5 text-gray-400" />
                  )}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  title="Close"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </motion.button>
              </div>
            </div>
          </div>
          <div className={`overflow-auto ${
            isFullscreen
              ? 'h-[calc(100vh-97px-48px)]' // Subtract header height (97px) and footer height
              : 'max-h-[calc(90vh-97px-48px)]' // Account for both in non-fullscreen mode
          }`}>
            <div className="p-7">
              <div className="prose prose-invert max-w-none">
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    img: ({ src, alt }) => {
                      if (!src) return null;

                      // Process the image source path
                      let imagePath = src;

                      // Handle relative paths (without leading slash)
                      if (!src.startsWith('http') && !src.startsWith('/')) {
                        // Remove ./ prefix if it exists
                        imagePath = src.startsWith('./') ? src.slice(2) : src;
                        // Add leading slash for consistent path handling
                        imagePath = `/${imagePath}`;
                      }

                      // For absolute paths (starting with /) or converted paths,
                      // ensure they're properly prefixed in production environments
                      if (imagePath.startsWith('/')) {
                        // Remove any duplicate leading slashes
                        imagePath = imagePath.replace(/^\/+/, '/');

                        // In production, prefix with the site's base URL if needed
                        // Note: You may need to adjust this depending on your deployment setup
                        imagePath = `${baseUrl}${imagePath}`;
                      }

                      return (
                        <img
                          src={imagePath}
                          alt={alt || ''}
                          className="max-w-full"
                          loading="lazy"
                          onError={(e) => {
                            console.error(`Failed to load image: ${imagePath}`);
                            // Optionally provide a fallback image
                            // e.target.src = '/fallback-image.png';
                          }}
                        />
                      );
                    },
                    br: () => <br className="my-2" />,
                  }}
                >
                  {note.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
