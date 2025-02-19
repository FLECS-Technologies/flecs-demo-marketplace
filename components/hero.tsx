"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Building2, Cpu, Server, Wrench, Cog } from "lucide-react";
import { useCallback, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { MarketplaceDemo } from "./interactive-tutorial/marketplace-demo";

export const Hero = () => {
  const [currentBenefitIndex, setCurrentBenefitIndex] = useState(0);
  const [builderCount, setBuilderCount] = useState("30");
  const dynamicTexts = [
    "Recurring Revenue",
    "Customer Loyalty",
    "Market Leadership",
    "Business Growth"
  ];
  const { resolvedTheme } = useTheme();
  const demoRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const updateWindowPosition = useCallback(() => {
    if (demoRef.current) {
      const rect = demoRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowCenter = windowHeight / 2;
      const elementCenter = rect.top + (rect.height / 2);
      
      // If the element is already centered in viewport, don't move it
      if (Math.abs(elementCenter - windowCenter) < 50) {
        setTranslateY(0);
        return;
      }

      // Calculate how much we need to move to center the element
      const moveDistance = windowCenter - elementCenter;
      setTranslateY(moveDistance);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBenefitIndex((prevIndex) => (prevIndex + 1) % dynamicTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateWindowPosition);
    return () => window.removeEventListener('scroll', updateWindowPosition);
  }, [updateWindowPosition]);

  const currentBenefit = dynamicTexts[currentBenefitIndex];

  const handleControlClick = () => {
    const storySection = document.querySelector('#story-section');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const calculateCenterPosition = useCallback(() => {
    if (demoRef.current) {
      const rect = demoRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowCenter = windowHeight / 2;
      const elementCenter = rect.top + (rect.height / 2);
      
      // Calculate the distance needed to center the element
      return windowCenter - elementCenter;
    }
    return 0;
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 sm:pb-32 lg:px-8 lg:pt-20">
          <div className="flex flex-col items-center text-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-8 max-w-3xl mx-auto"
            >
              <motion.h1 
                className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl flex flex-col items-center gap-2"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                  Turn Hardware into
                </span>
                <motion.span
                  key={currentBenefitIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-[#FF2E63] min-h-[64px] flex items-center"
                >
                  {currentBenefit}
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-2xl"
              >
                Launch your own app marketplace in weeks, not months. Create new revenue streams and delight customers with software that sells itself.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col items-center gap-8 w-full max-w-[500px] mt-4"
              >
                {/* Primary CTA with Success Momentum */}
                <div className="flex flex-col items-center gap-3 w-full">
                  <Button 
                    size="lg" 
                    className="w-full bg-[#FF2E63] hover:bg-[#ff2e63]/90 px-8 py-6 text-lg relative group overflow-hidden transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    onClick={() => {
                      const demoSection = document.querySelector('#interactive-demo');
                      if (demoSection) {
                        demoSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 font-semibold">
                      Try Free Today
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#ff2e63]/0 via-[#ff2e63]/50 to-[#ff2e63]/0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                  </Button>
                  <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#FF2E63] rounded-full animate-pulse" />
                    30+ automation builders launched
                  </span>
                </div>

                {/* Secondary CTA with Curiosity Gap */}
                <div className="flex flex-col items-center gap-2 w-full">
                  <Button 
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      setIsHovered(true);
                      // Remove hover effect after 2 seconds
                      setTimeout(() => setIsHovered(false), 2000);
                    }}
                    className="w-full border-[#FF2E63] text-[#FF2E63] hover:bg-[#FF2E63] hover:text-white py-6 text-lg relative group transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <motion.span 
                      className="relative z-10 flex items-center justify-center gap-2"
                      initial={false}
                    >
                      Preview Your Marketplace
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF2E63] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF2E63]"></span>
                      </span>
                    </motion.span>
                  </Button>
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-[#FF2E63]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Interactive Demo
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-[#FF2E63]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      No Setup Required
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Interactive Demo Window */}
            <motion.div
              id="interactive-demo"
              ref={demoRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative w-full max-w-5xl mt-20"
            >
              <div 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative transition-all duration-700 ease-in-out transform cursor-pointer"
                style={{
                  transform: `translateY(${isHovered ? calculateCenterPosition() : 0}px) scale(${isHovered ? 1.1 : 1})`,
                  willChange: 'transform',
                }}
              >
                {/* Window Frame */}
                <div className="gradient-border-wrapper">
                  <div className="gradient-border">
                    <div className="overflow-hidden rounded-2xl border bg-background/95 shadow-2xl backdrop-blur supports-[backdrop-filter]:bg-background/60">
                      {/* macOS Window */}
                      <div className="rounded-2xl overflow-hidden border border-border bg-background/50 backdrop-blur-xl shadow-2xl">
                        {/* Window Controls */}
                        <div className="h-12 bg-muted/50 border-b border-border flex items-center px-4 gap-2">
                          <button 
                            onClick={handleControlClick}
                            className="w-3 h-3 rounded-full bg-[#FF5F57] transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer relative group/controls"
                            aria-label="Close window and scroll to story section"
                          >
                            <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 group-hover/controls:opacity-100 text-black text-[10px] font-medium select-none">
                              ×
                            </span>
                          </button>
                          <button 
                            onClick={handleControlClick}
                            className="w-3 h-3 rounded-full bg-[#FFBD2E] transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer relative group/controls"
                            aria-label="Minimize window and scroll to story section"
                          >
                            <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 group-hover/controls:opacity-100 text-black text-[10px] font-medium select-none transform translate-y-[-1px]">
                              −
                            </span>
                          </button>
                          <button 
                            onClick={handleControlClick}
                            className="w-3 h-3 rounded-full bg-[#28C840] transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer relative group/controls"
                            aria-label="Expand window and scroll to story section"
                          >
                            <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 group-hover/controls:opacity-100 text-black text-[10px] font-medium select-none transform translate-y-[-1px]">
                              +
                            </span>
                          </button>
                        </div>
                        
                        {/* Interactive Marketplace Demo */}
                        <MarketplaceDemo className="h-[600px]" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Background Glow Effect */}
                <div className="absolute -inset-0.5 -z-10 bg-gradient-to-b from-primary/20 via-primary/5 to-transparent blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
              </div>
            </motion.div>

            {/* Trust Indicators Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col items-center gap-8 mt-32 w-full"
            >
              <div className="px-6 py-2 bg-muted/30 rounded-full">
                <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#FF2E63]">
                  Trusted by Industry Leaders
                </span>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-12 px-4 w-full max-w-5xl">
                <div className="flex flex-wrap justify-center items-center gap-16">
                  <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="h-16 w-16 rounded-xl bg-muted/30 flex items-center justify-center transition-all duration-300 group-hover:bg-[#FF2E63]/10 group-hover:scale-110">
                      <Factory className="h-8 w-8 text-muted-foreground transition-all duration-300 group-hover:text-[#FF2E63]" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground transition-all duration-300 group-hover:text-[#FF2E63]">
                      Manufacturing
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="h-16 w-16 rounded-xl bg-muted/30 flex items-center justify-center transition-all duration-300 group-hover:bg-[#FF2E63]/10 group-hover:scale-110">
                      <Building2 className="h-8 w-8 text-muted-foreground transition-all duration-300 group-hover:text-[#FF2E63]" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground transition-all duration-300 group-hover:text-[#FF2E63]">
                      Enterprise
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="h-16 w-16 rounded-xl bg-muted/30 flex items-center justify-center transition-all duration-300 group-hover:bg-[#FF2E63]/10 group-hover:scale-110">
                      <Cpu className="h-8 w-8 text-muted-foreground transition-all duration-300 group-hover:text-[#FF2E63]" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground transition-all duration-300 group-hover:text-[#FF2E63]">
                      Hardware
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="h-16 w-16 rounded-xl bg-muted/30 flex items-center justify-center transition-all duration-300 group-hover:bg-[#FF2E63]/10 group-hover:scale-110">
                      <Server className="h-8 w-8 text-muted-foreground transition-all duration-300 group-hover:text-[#FF2E63]" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground transition-all duration-300 group-hover:text-[#FF2E63]">
                      Infrastructure
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="h-16 w-16 rounded-xl bg-muted/30 flex items-center justify-center transition-all duration-300 group-hover:bg-[#FF2E63]/10 group-hover:scale-110">
                      <Wrench className="h-8 w-8 text-muted-foreground transition-all duration-300 group-hover:text-[#FF2E63]" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground transition-all duration-300 group-hover:text-[#FF2E63]">
                      Automation
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};