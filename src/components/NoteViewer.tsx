import React, { useState, useRef, memo } from 'react';
import { motion } from 'framer-motion';
import { Note } from '../types';
import { X, Maximize2, Copy, BookOpen } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

interface NoteViewerProps {
  note: Note;
  onClose: () => void;
}

// Helper functions to identify and extract media links
const isYoutubeLink = (url: string): boolean => {
  return /youtube\.com\/watch\?v=|youtu\.be\//.test(url);
};

const isDriveLink = (url: string): boolean => {
  return /drive\.google\.com\/file\/d\/|drive\.google\.com\/open\?id=/.test(url);
};

const getYoutubeVideoId = (url: string): string | null => {
  const youtubeRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/;
  const match = url.match(youtubeRegex);
  return match ? match[1] : null;
};

const getDriveFileId = (url: string): string | null => {
  const driveRegex = /drive\.google\.com\/file\/d\/([^/]+)\/|drive\.google\.com\/open\?id=([^&\s]+)/;
  const match = url.match(driveRegex);
  return match ? (match[1] || match[2]) : null;
};

const NoteViewer = memo(({ note, onClose }: NoteViewerProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-1 bg-black/60"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.15 }}
        onClick={(e) => e.stopPropagation()}
        className={`bg-[#0B2E33]/95 w-full border border-[#4F7C82]/50 shadow-xl ${
          isFullscreen
            ? 'fixed inset-0 rounded-none'
            : 'rounded-xl max-w-[98%] sm:max-w-[95%] md:max-w-2xl lg:max-w-4xl max-h-[calc(95vh)]'
        }`}
      >
        <div className="px-3 sm:px-4 py-2 border-b border-[#4F7C82]/50 bg-[#0B2E33] rounded-t-xl sticky top-0 z-10 flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="p-1 rounded-lg bg-[#4F7C82]/30 hidden xs:flex">
              <BookOpen className="w-4 h-4 text-[#B8E3E9]" />
            </div>
            <div className="flex items-center gap-2 overflow-hidden">
              <h2 className="text-base font-bold text-white truncate">{note.subject}</h2>
              <span className="text-xs text-gray-400 whitespace-nowrap">({note.subjectCode})</span>
              <span className={`ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${
                note.progress === 'completed' ? 'bg-green-100/20 text-green-400 border border-green-500/30' :
                note.progress === 'in-progress' ? 'bg-yellow-100/20 text-yellow-400 border border-yellow-500/30' :
                'bg-red-100/20 text-red-400 border border-red-500/30'
              }`}>
                {note.progress.split('-').map(word =>
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ')}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 ml-2 shrink-0">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1 hover:bg-[#4F7C82] rounded-lg transition-colors"
              title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              <Maximize2 className="w-4 h-4 text-gray-400" />
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:bg-[#4F7C82] rounded-lg transition-colors"
              title="Close"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        <div
          className={`overflow-auto overscroll-none px-4 py-4 ${
            isFullscreen
              ? 'h-[calc(100vh-56px)]'
              : 'max-h-[calc(95vh-56px)]'
          }`}
          ref={contentRef}
        >
          <div className="prose prose-invert prose-headings:text-[#B8E3E9] prose-a:text-[#B8E3E9] prose-code:text-emerald-300 prose-pre:bg-[#0B2E33]/70 prose-blockquote:border-l-[#4F7C82] prose-blockquote:bg-[#0B2E33]/10 prose-blockquote:py-1 prose-blockquote:px-4 max-w-none prose-sm">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                img: ({ src, alt }) => {
                  if (!src) return null;

                  let imagePath = src;
                  if (!src.startsWith('http') && !src.startsWith('/')) {
                    imagePath = src.startsWith('./') ? src.slice(2) : src;
                    imagePath = `/${imagePath}`;
                  }

                  return (
                    <img
                      src={imagePath}
                      alt={alt || ''}
                      className="max-w-full rounded-lg border border-[#4F7C82]/50"
                      loading="lazy"
                    />
                  );
                },
                a: ({ node, href, children, ...props }) => {
                  if (!href) return (
                    <a {...props}>{children}</a>
                  );

                  // Handle YouTube links
                  if (isYoutubeLink(href)) {
                    const videoId = getYoutubeVideoId(href);
                    if (videoId) {
                      return (
                        <div className="my-4">
                          <div className="relative pt-[56.25%] w-full overflow-hidden rounded-lg border border-[#4F7C82]/50">
                            <iframe
                              src={`https://www.youtube.com/embed/${videoId}`}
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="absolute top-0 left-0 w-full h-full"
                            ></iframe>
                          </div>
                          <p className="text-center text-sm text-gray-400 mt-1">
                            <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#B8E3E9] hover:underline">
                              Open video in YouTube
                            </a>
                          </p>
                        </div>
                      );
                    }
                  }

                  // Handle Google Drive links
                  if (isDriveLink(href)) {
                    const fileId = getDriveFileId(href);
                    if (fileId) {
                      return (
                        <div className="my-4">
                          <div className="relative pt-[75%] w-full overflow-hidden rounded-lg border border-[#4F7C82]/50">
                            <iframe
                              src={`https://drive.google.com/file/d/${fileId}/preview`}
                              title="Google Drive file preview"
                              allow="autoplay"
                              className="absolute top-0 left-0 w-full h-full"
                            ></iframe>
                          </div>
                          <p className="text-center text-sm text-gray-400 mt-1">
                            <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#B8E3E9] hover:underline">
                              Open in Google Drive
                            </a>
                          </p>
                        </div>
                      );
                    }
                  }

                  // Regular link handling
                  return (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B8E3E9] hover:underline"
                      {...props}
                    >
                      {children}
                    </a>
                  );
                },
                code: ({ node, inline, className, children, ...props }: { node?: any; inline?: boolean; className?: string; children?: React.ReactNode }) => {
                  if (inline) {
                    return (
                      <code className="bg-[#0B2E33]/80 px-1 py-0.5 rounded-md text-emerald-300" {...props}>
                        {children}
                      </code>
                    );
                  }
                  return (
                    <div className="relative">
                      <button
                        className="absolute top-2 right-2 p-1 bg-[#4F7C82]/80 hover:bg-[#4F7C82] rounded-md text-gray-300 hover:text-white transition-colors"
                        onClick={() => {
                          let text = '';
                          if (typeof children === 'string') {
                            text = children;
                          } else if (Array.isArray(children)) {
                            text = children.join('');
                          }

                          if (text) {
                            navigator.clipboard.writeText(text);
                          }
                        }}
                      >
                        <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                      <pre className="rounded-lg bg-[#0B2E33]/70 border border-[#4F7C82]/50 p-2 sm:p-3 overflow-x-auto text-xs sm:text-sm">
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
      </motion.div>
    </motion.div>
  );
});

NoteViewer.displayName = 'NoteViewer';

export { NoteViewer };
