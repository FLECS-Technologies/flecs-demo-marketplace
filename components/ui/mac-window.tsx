"use client";

import { FC } from 'react';
import { motion } from 'framer-motion';

interface MacWindowProps {
  children: React.ReactNode;
  className?: string;
}

export const MacWindow: FC<MacWindowProps> = ({ children, className }) => {
  return (
    <div className={`rounded-xl border bg-card shadow-lg overflow-hidden w-[1200px] ${className}`}>
      {/* Mac Window Controls */}
      <div className="h-12 bg-muted border-b flex items-center px-4 relative">
        <div className="flex items-center space-x-2 z-50">
          <button className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors duration-200 relative group cursor-default">
            <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] opacity-0 group-hover:opacity-100 !important transition-opacity duration-200" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2l6 6M2 8l6-6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200 relative group cursor-default">
            <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] opacity-0 group-hover:opacity-100 !important transition-opacity duration-200" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 5h5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-200 relative group cursor-default">
            <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] opacity-0 group-hover:opacity-100 !important transition-opacity duration-200" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 2.5h5v5h-5z" stroke="white" strokeWidth="1.5"/>
            </svg>
          </button>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 text-sm font-medium text-muted-foreground">
          FLECS Marketplace
        </div>
      </div>
      
      {/* Window Content */}
      <div className="h-[700px] overflow-hidden">
        {children}
      </div>
    </div>
  );
};
