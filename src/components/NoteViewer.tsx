import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Note } from '../types';
import { X, Maximize2, Minimize2, ZoomIn, Download, Share2, BookOpen, Copy } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

interface NoteViewerProps {
  note: Note;
  onClose: () => void;
}

export function NoteViewer({ note, onClose }: NoteViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [expandedImage, setExpandedImage] = useState<{src: string, alt: string} | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const contentRef = useRef<HTMLDivElement>(null);

  // Get the base URL for the deployed environment
  const baseUrl = process.env.NODE_ENV === 'production'
    ? window.location.origin
    : '';

  // Reset zoom level when image changes
  useEffect(() => {
    setZoomLevel(1);
    setImageLoaded(false);
  }, [expandedImage]);

  // Handle notification timeout
  useEffect(() => {
    if (notificationVisible) {
      const timer = setTimeout(() => {
        setNotificationVisible(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [notificationVisible]);

  // Zoom in/out handler
  const handleZoom = (increment: boolean) => {
    if (increment && zoomLevel < 3) {
      setZoomLevel(prev => prev + 0.25);
    } else if (!increment && zoomLevel > 0.5) {
      setZoomLevel(prev => prev - 0.25);
    }
  };

  // Copy image link to clipboard
  const copyImageLink = () => {
    if (expandedImage) {
      navigator.clipboard.writeText(expandedImage.src)
        .then(() => {
          setNotificationMessage('Image link copied to clipboard');
          setNotificationVisible(true);
        })
        .catch(() => {
          setNotificationMessage('Failed to copy link');
          setNotificationVisible(true);
        });
    }
  };

  // Handle image download
  const downloadImage = () => {
    if (expandedImage) {
      const link = document.createElement('a');
      link.href = expandedImage.src;
      link.download = expandedImage.alt || 'study-note-image';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setNotificationMessage('Image download started');
      setNotificationVisible(true);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-1 sm:p-2 md:p-4"
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
              ? 'fixed inset-0 bottom-8 sm:bottom-12' // Add bottom margin for footer
              : 'rounded-xl max-w-[98%] sm:max-w-[95%] md:max-w-2xl lg:max-w-4xl max-h-[calc(95vh-36px)] sm:max-h-[calc(90vh-48px)]' // Account for footer
          }`}
        >
          {/* Custom gradient header */}
          <div className="p-3 sm:p-4 md:p-6 border-b border-gray-800/50 bg-gradient-to-r from-gray-900 via-blue-900/30 to-gray-900 rounded-t-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 rounded-lg bg-blue-500/20 hidden xs:block">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white line-clamp-1">{note.subject}</h2>
                  <p className="text-xs sm:text-sm text-gray-400">{note.subjectCode}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(30, 41, 59, 0.8)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-1.5 sm:p-2 hover:bg-gray-800 rounded-lg transition-colors touch-manipulation"
                  title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                  aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                >
                  {isFullscreen ? (
                    <Minimize2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  ) : (
                    <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  )}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(30, 41, 59, 0.8)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="p-1.5 sm:p-2 hover:bg-gray-800 rounded-lg transition-colors touch-manipulation"
                  title="Close"
                  aria-label="Close"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Status badge */}
          <div className="absolute top-14 sm:top-16 md:top-20 left-3 sm:left-4 md:left-6">
            <span className={`inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full text-xs font-medium ${
              note.progress === 'completed' ? 'bg-green-100/20 text-green-400 border border-green-500/30' :
              note.progress === 'in-progress' ? 'bg-yellow-100/20 text-yellow-400 border border-yellow-500/30' :
              'bg-red-100/20 text-red-400 border border-red-500/30'
            }`}>
              {note.progress.split('-').map(word =>
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </span>
          </div>

          <div
            className={`overflow-auto ${
              isFullscreen
                ? 'h-[calc(100vh-80px-32px)] sm:h-[calc(100vh-90px-40px)] md:h-[calc(100vh-97px-48px)]' // Subtract header height and footer height
                : 'max-h-[calc(95vh-80px-32px)] sm:max-h-[calc(90vh-90px-40px)] md:max-h-[calc(90vh-97px-48px)]' // Account for both in non-fullscreen mode
            }`}
            ref={contentRef}
          >
            <div className="p-3 sm:p-4 md:p-7">
              <div className="prose prose-invert prose-headings:text-blue-300 prose-a:text-blue-400 prose-code:text-emerald-300 prose-pre:bg-gray-800/70 prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-900/10 prose-blockquote:py-1 prose-blockquote:px-4 max-w-none prose-xs sm:prose-sm md:prose-base">
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
                      }

                      return (
                        <div className="image-container group relative inline-block my-2 sm:my-4">
                          <motion.div
                            className="rounded-lg overflow-hidden shadow-xl transform-gpu transition-all"
                            whileHover={{
                              scale: 1.02,
                              boxShadow: "0 15px 20px -5px rgba(0, 0, 0, 0.5), 0 8px 8px -5px rgba(0, 0, 0, 0.2)"
                            }}
                          >
                            <img
                              src={imagePath}
                              alt={alt || ''}
                              className="max-w-full rounded-lg border border-gray-700/50 cursor-pointer"
                              loading="lazy"
                              onClick={() => setExpandedImage({ src: imagePath, alt: alt || '' })}
                              onError={(e) => {
                                console.error(`Failed to load image: ${imagePath}`);
                                // e.target.src = '/fallback-image.png';
                              }}
                            />
                          </motion.div>
                        </div>
                      );
                    },
                    br: () => <br className="my-1 sm:my-2" />,
                    // Enhanced styling for other elements
                    h1: ({ children }) => (
                      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mt-4 sm:mt-6 md:mt-8 mb-3 sm:mb-4 md:mb-6">{children}</h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold border-b border-blue-700/30 pb-1 sm:pb-2 mt-3 sm:mt-4 md:mt-6 mb-2 sm:mb-3 md:mb-4">{children}</h2>
                    ),
                    code: ({ node, inline, className, children, ...props }: { node?: any; inline?: boolean; className?: string; children?: React.ReactNode }) => {
                      if (inline) {
                        return (
                          <code className="bg-gray-800/80 px-1 sm:px-1.5 py-0.5 rounded-md text-emerald-300" {...props}>
                            {children}
                          </code>
                        );
                      }
                      return (
                        <div className="relative">
                          <button
                            className="absolute top-2 right-2 p-1 sm:p-1.5 bg-gray-700/80 hover:bg-gray-600/80 rounded-md text-gray-300 hover:text-white transition-colors touch-manipulation"
                            onClick={() => {
                              if (typeof children === 'string') {
                                navigator.clipboard.writeText(children);
                                setNotificationMessage('Code copied to clipboard');
                                setNotificationVisible(true);
                              }
                            }}
                            aria-label="Copy code"
                          >
                            <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                          <pre className="rounded-lg bg-gray-800/70 border border-gray-700/50 p-2 sm:p-3 md:p-4 overflow-x-auto text-xs sm:text-sm">
                            <code className={`language-${className?.replace(/language-/, '') || 'text'}`} {...props}>
                              {children}
                            </code>
                          </pre>
                        </div>
                      );
                    }
                  }}
                >
                  {note.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Full-screen image viewer with enhanced features */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900/90 backdrop-blur-md z-60 flex flex-col items-center justify-center p-2 sm:p-3 md:p-6"
            onClick={() => setExpandedImage(null)}
          >
            {/* Top bar with controls */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-2 sm:p-3 md:p-4 flex items-center justify-between z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2">
                <span className="font-medium text-white/90 text-xs sm:text-sm truncate max-w-[100px] xs:max-w-[150px] sm:max-w-xs md:max-w-sm">
                  {expandedImage.alt || 'Image Preview'}
                </span>
              </div>
              <div className="flex gap-1 sm:gap-2">
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
                  whileTap={{ scale: 0.9 }}
                  className="p-1 sm:p-1.5 md:p-2 bg-gray-800/50 hover:bg-blue-600/20 rounded-full text-white transition-all touch-manipulation"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleZoom(true);
                  }}
                  aria-label="Zoom in"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
                  whileTap={{ scale: 0.9 }}
                  className="p-1 sm:p-1.5 md:p-2 bg-gray-800/50 hover:bg-blue-600/20 rounded-full text-white transition-all touch-manipulation"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleZoom(false);
                  }}
                  aria-label="Zoom out"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(239, 68, 68, 0.3)' }}
                  whileTap={{ scale: 0.9 }}
                  className="p-1 sm:p-1.5 md:p-2 bg-gray-800/50 hover:bg-red-600/20 rounded-full text-white transition-all touch-manipulation"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedImage(null);
                  }}
                  aria-label="Close image viewer"
                >
                  <X className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Image container with zoom effect */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="w-full h-full flex items-center justify-center"
              style={{ cursor: imageLoaded ? 'grab' : 'wait' }}
              onClick={(e) => e.stopPropagation()}
            >
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-3 sm:border-4 border-t-blue-500 border-blue-200 rounded-full animate-spin"></div>
                </div>
              )}
              <motion.div
                className="overflow-hidden max-w-full max-h-[80vh] relative"
                style={{
                  transform: `scale(${zoomLevel})`,
                  transition: 'transform 0.3s ease-out',
                }}
                drag={imageLoaded}
                dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                dragElastic={0.1}
              >
                <img
                  src={expandedImage.src}
                  alt={expandedImage.alt}
                  className={`w-auto h-auto max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-300`}
                  onLoad={() => setImageLoaded(true)}
                />
              </motion.div>
            </motion.div>

            {/* Zoom indicator - Simplified for mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800/80 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
                <span className="text-gray-400 text-xs">Zoom:</span>
                <div className="flex gap-1 sm:gap-2">
                  {[0.5, 1, 1.5, 2, 3].map((level) => (
                    <button
                      key={level}
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                        zoomLevel === level ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setZoomLevel(level);
                      }}
                      aria-label={`Set zoom to ${level * 100}%`}
                    />
                  ))}
                </div>
                <span className="text-white text-xs">{Math.round(zoomLevel * 100)}%</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notification toast */}
      <AnimatePresence>
        {notificationVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 bg-gray-800 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-lg z-70 flex items-center gap-2 text-xs sm:text-sm"
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
            {notificationMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
