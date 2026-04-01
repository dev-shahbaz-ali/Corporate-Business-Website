import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const ChatButton = () => {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-black text-white rounded-full flex items-center justify-center shadow-2xl border border-white/10 group"
    >
      <MessageSquare
        size={24}
        className="group-hover:rotate-12 transition-transform"
      />
      {/* Availability Status */}
      <span className="absolute top-4 right-4 w-3 h-3 bg-emerald-500 rounded-full border-2 border-black animate-pulse" />
    </motion.button>
  );
};

export default ChatButton;
