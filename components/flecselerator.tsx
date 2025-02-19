"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Rocket, Trophy, Clock, Users, Server, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function FLECSelerator() {
  const modules = [
    {
      week: "Week 1-2",
      title: "Foundation",
      icon: BookOpen,
      description: "Set up your digital infrastructure and integrate your hardware.",
      highlights: ["Platform setup", "Hardware integration", "Initial configuration"]
    },
    {
      week: "Week 3-4",
      title: "Development",
      icon: Rocket,
      description: "Build and customize your first digital products and services.",
      highlights: ["App development", "Marketplace setup", "Testing & validation"]
    },
    {
      week: "Week 5-6",
      title: "Launch",
      icon: Trophy,
      description: "Go live with your digital marketplace and start generating revenue.",
      highlights: ["Market launch", "Customer onboarding", "Revenue generation"]
    }
  ];

  return (
    <div className="bg-[#FAFAFA] dark:bg-black text-gray-900 dark:text-white py-24 sm:py-32 relative overflow-hidden">
      {/* Light mode background pattern */}
      <div className="absolute inset-0 opacity-100 dark:opacity-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 46, 99, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 46, 99, 0.05) 1px, transparent 1px),
            radial-gradient(rgba(255, 46, 99, 0.075) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '24px 24px, 24px 24px, 24px 24px',
          backgroundPosition: '0 0, 0 0, 12px 12px'
        }} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(250, 250, 250, 0) 0%, rgba(250, 250, 250, 0.8) 50%, rgba(250, 250, 250, 1) 100%)'
        }} />
      </div>

      {/* Dark mode background pattern */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(255, 46, 99, 0.15) 1px, transparent 0),
            linear-gradient(rgba(255, 46, 99, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 46, 99, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px, 48px 48px, 48px 48px'
        }} />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="h-6 w-6 text-[#FF2E63]" />
            <Badge variant="outline" className="text-[#FF2E63] border-[#FF2E63] bg-white/50 dark:bg-black/50 backdrop-blur-sm">
              FLECSelerator Program
            </Badge>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Your 6-Week Journey to
            <span className="text-[#FF2E63]"> Digital Success</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Transform your hardware business into a digital powerhouse with our proven accelerator program.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="p-8 rounded-3xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 h-full hover:border-[#FF2E63] transition-all duration-300 hover:bg-white dark:hover:bg-gray-900/70 hover:shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#FF2E63]/10 text-[#FF2E63]">
                    <module.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-[#FF2E63] font-medium">{module.week}</p>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{module.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {module.description}
                </p>
                <ul className="space-y-3">
                  {module.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF2E63]" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              {index < modules.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-[#FF2E63]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 text-center hover:bg-white dark:hover:bg-gray-900/70 transition-all duration-300 hover:shadow-lg"
          >
            <p className="text-4xl font-bold text-[#FF2E63] mb-2">95%</p>
            <p className="text-gray-600 dark:text-gray-300">Faster Time To Market</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 text-center hover:bg-white dark:hover:bg-gray-900/70 transition-all duration-300 hover:shadow-lg"
          >
            <p className="text-4xl font-bold text-[#FF2E63] mb-2">100+</p>
            <p className="text-gray-600 dark:text-gray-300">Successful Graduates</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 text-center hover:bg-white dark:hover:bg-gray-900/70 transition-all duration-300 hover:shadow-lg"
          >
            <p className="text-4xl font-bold text-[#FF2E63] mb-2">24/7</p>
            <p className="text-gray-600 dark:text-gray-300">Expert Support</p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button 
            size="lg" 
            className="bg-[#FF2E63] hover:bg-[#ff2e63]/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Join the Next Cohort
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}