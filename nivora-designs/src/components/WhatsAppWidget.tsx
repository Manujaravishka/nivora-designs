"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "947XXXXXXXX";
const LS_KEY = "nivora_whatsapp_bubble_seen";

export default function WhatsAppWidget() {
  const [showBubble, setShowBubble] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem(LS_KEY);
    if (!seen) {
      const timer = setTimeout(() => {
        setShowBubble(true);
        localStorage.setItem(LS_KEY, "1");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (showBubble) {
      const timer = setTimeout(() => setShowBubble(false), 9000);
      return () => clearTimeout(timer);
    }
  }, [showBubble]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-[260px] rounded-lg border border-white/10 bg-[#1a1a1a] px-4 py-3 shadow-xl"
          >
            <button
              onClick={() => setShowBubble(false)}
              className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[10px] text-white/60 transition-colors hover:bg-white/20 hover:text-white"
              aria-label="Close"
            >
              ✕
            </button>
            <p className="text-sm leading-relaxed text-white/90">
              Hi 👋 Need help? Chat with us on WhatsApp!
            </p>
            <div className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 bg-[#1a1a1a]" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-white/10 px-3 py-1 text-[10px] tracking-wider text-white/70 backdrop-blur-sm"
            >
              Chat with us
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />

        <motion.a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-shadow hover:shadow-[#25D366]/30"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.524-.075-.153-.725-1.609-.948-2.203-.22-.592-.446-.497-.668-.497-.223 0-.476.007-.678.007-.21 0-.51.075-.78.472-.27.396-1.043 1.175-1.043 2.871 0 1.697 1.235 3.335 1.41 3.565.174.23 2.386 3.542 5.694 4.952 3.315 1.415 3.315.943 3.915.885.292-.027.94-.383 1.073-.753.133-.37.133-.688.098-.838-.05-.15-.2-.245-.447-.394z"/>
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.512 3.66 1.395 5.174L2.53 21.47a.75.75 0 0 0 .937.937l4.296-1.865A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
          </svg>
        </motion.a>
      </div>
    </div>
  );
}
