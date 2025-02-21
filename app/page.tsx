"use client";

import { motion } from "framer-motion";
import { MacWindow } from "@/components/ui/mac-window";
import { MarketplaceDemo } from "@/components/interactive-tutorial/marketplace-demo";

export default function Home() {
  return (
    <>
      {/* Exit Button */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed top-6 right-6 z-50"
      >
        <a
          href="https://flecs.tech"
          className="px-4 py-2 rounded-full bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-sm text-sm font-medium transition-colors duration-200 flex items-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to flecs.tech
        </a>
      </motion.div>

      {/* Main Window */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center"
      >
        <div className="w-[1200px]">
          <MacWindow>
            <MarketplaceDemo className="w-full h-full" />
          </MacWindow>
        </div>
      </motion.div>

      {/* Subtle Watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 text-sm text-muted-foreground/50"
      >
        FLECS Marketplace Demo
      </motion.div>
    </>
  );
}