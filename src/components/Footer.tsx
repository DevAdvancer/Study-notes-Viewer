import React from 'react';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-[#0B2E33]/80 backdrop-blur-sm border-t border-[#4F7C82]/50 py-3 px-8 z-20"
    >
      <div className="max-w-6xl mx-auto text-center text-[#B8E3E9] text-sm">
        © {currentYear} Developed By Abhirup Kumar
      </div>
    </motion.footer>
  );
}
