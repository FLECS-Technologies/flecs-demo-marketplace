'use client'

import { useCallback, useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { 
  Cpu, 
  Network, 
  Globe, 
  AlertTriangle, 
  Rocket, 
  Building2, 
  Code2, 
  Factory, 
  Lock, 
  LucideIcon, 
  Clock, 
  TrendingDown, 
  PieChart, 
  Merge, 
  Calendar, 
  Server, 
  Battery, 
  Timer, 
  Box, 
  Store, 
  Users, 
  DollarSign, 
  Trophy, 
  Crown, 
  LayoutGrid, 
  Heart, 
  TrendingUp, 
  Calculator, 
  Gauge, 
  Check,
  Brain,
  PiggyBank,
  ArrowRight
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"

const timelineData = [
  {
    year: "1969",
    title: "First PLC",
    icon: Cpu,
    color: "text-[#FF2E63]",
    ringColor: "ring-[#FF2E63]/20",
    delay: 0.1
  },
  {
    year: "1989",
    title: "PC-Based Control",
    icon: Network,
    color: "text-[#FF2E63]",
    ringColor: "ring-[#FF2E63]/20",
    delay: 0.2
  },
  {
    year: "2010",
    title: "Industry 4.0",
    icon: Globe,
    color: "text-[#FF2E63]",
    ringColor: "ring-[#FF2E63]/20",
    delay: 0.3
  }
]

interface TimelineNodeProps {
  icon: LucideIcon
  title: string
  description?: string
  color: string
  ringColor: string
  delay?: number
}

const generateStages = () => {
  const stages = [];
  // Stage 1: 1.0x to 2.0x
  for (let i = 0; i <= 10; i++) {
    const multiplier = 1 + (i * 0.1);
    stages.push({
      level: multiplier,
      title: `Hardware ${multiplier.toFixed(1)}x`,
      description: i === 10 
        ? "Basic software features unlocked!" 
        : `Enhancing hardware capabilities - ${((i + 1) * 10)}% progress`,
      color: "text-[#FF2E63]",
      features: [
        "Remote Monitoring",
        "Basic Analytics",
        "Simple Dashboards",
        "Data Collection"
      ]
    });
  }
  // Stage 2: 2.0x to 3.0x
  for (let i = 1; i <= 10; i++) {
    const multiplier = 2 + (i * 0.1);
    stages.push({
      level: multiplier,
      title: `Software ${multiplier.toFixed(1)}x`,
      description: i === 10 
        ? "Advanced features unlocked!" 
        : `Building software capabilities - ${(i * 10)}% progress`,
      color: "text-[#FF2E63]",
      features: [
        "Predictive Maintenance",
        "Custom Workflows",
        "Data Integration",
        "API Access"
      ]
    });
  }
  // Stage 3: 3.0x to 4.0x
  for (let i = 1; i <= 10; i++) {
    const multiplier = 3 + (i * 0.1);
    stages.push({
      level: multiplier,
      title: `Advanced ${multiplier.toFixed(1)}x`,
      description: i === 10 
        ? "Premium features unlocked!" 
        : `Advancing capabilities - ${(i * 10)}% progress`,
      color: "text-[#FF2E63]",
      features: [
        "AI Optimization",
        "Digital Twin",
        "Advanced Analytics",
        "Custom Plugins"
      ]
    });
  }
  // Stage 4: 4.0x to 5.0x
  for (let i = 1; i <= 10; i++) {
    const multiplier = 4 + (i * 0.1);
    stages.push({
      level: multiplier,
      title: `Premium ${multiplier.toFixed(1)}x`,
      description: i === 10 
        ? "Full platform achieved!" 
        : `Maximizing potential - ${(i * 10)}% progress`,
      color: "text-[#FF2E63]",
      features: [
        "Full Automation",
        "Industry Integration",
        "Marketplace",
        "Developer SDK"
      ]
    });
  }
  return stages;
};

const multiplierStages = generateStages();

interface ROIInputs {
  baseRevenue: number | null;
  softwareMultiplier: number;
}

function ROICalculator() {
  const [inputs, setInputs] = useState<ROIInputs>({
    baseRevenue: null,
    softwareMultiplier: 1
  });
  const [isStarted, setIsStarted] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isAnimating && currentStage < multiplierStages.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStage(prev => prev + 1);
        setInputs(prev => ({ ...prev, softwareMultiplier: multiplierStages[currentStage + 1].level }));
      }, 500); // Faster progression for smoother animation
      
      return () => clearTimeout(timer);
    } else if (currentStage === multiplierStages.length - 1) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [currentStage, isAnimating]);

  const startJourney = () => {
    if (!inputs.baseRevenue) return;
    setIsStarted(true);
    setIsAnimating(true);
    setCurrentStage(0);
    setInputs(prev => ({ ...prev, softwareMultiplier: 1 }));
  };

  const calculateProjections = () => {
    if (!inputs.baseRevenue) return null;
    const additionalRevenue = inputs.baseRevenue * (inputs.softwareMultiplier - 1);
    const implementationCost = inputs.baseRevenue * 0.15;
    return {
      projectedRevenue: inputs.baseRevenue * inputs.softwareMultiplier,
      additionalRevenue,
      implementationCost,
      roi: (additionalRevenue - implementationCost) / implementationCost * 100
    };
  };

  const projections = calculateProjections();
  const currentStageData = multiplierStages[currentStage];

  return (
    <div className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl border border-[#FF2E63]/20 max-w-7xl mx-auto w-full">
      {!isStarted ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-[#FF2E63]/10 text-[#FF2E63] px-4 py-2 rounded-full text-sm font-medium"
            >
              <TrendingUp className="w-4 h-4" />
              <span>Unlock Your Hardware's Full Potential</span>
            </motion.div>
            
            <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/80">
              Transform Hardware into a 5X Revenue Engine
            </h3>
            
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-muted-foreground">
                See how software can multiply your revenue through:
              </p>
              
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { icon: Users, label: "Customer Retention", value: "Deeper Engagement", description: "Build lasting relationships through personalized experiences" },
                  { icon: PiggyBank, label: "Revenue Streams", value: "Recurring Revenue", description: "Transform one-time sales into continuous revenue streams" },
                  { icon: Globe, label: "Network Effects", value: "Exponential Growth", description: "Scale value through connected product networks" }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                  >
                    <feature.icon className="w-8 h-8 text-[#FF2E63] mb-3" />
                    <div className="text-lg font-semibold text-[#FF2E63]">{feature.value}</div>
                    <div className="text-sm font-medium mb-2">{feature.label}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{feature.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-xl p-10 backdrop-blur-sm"
          >
            <div className="text-center mb-4">
              <h4 className="text-xl font-semibold mb-2">Calculate Your Potential</h4>
              <p className="text-sm text-muted-foreground">Enter your annual revenue to see your personalized growth projection</p>
            </div>
            
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-muted-foreground">$</span>
              <input
                type="number"
                value={inputs.baseRevenue || ''}
                onChange={(e) => setInputs(prev => ({ ...prev, baseRevenue: Number(e.target.value) }))}
                placeholder="Annual revenue"
                className="w-full pl-10 pr-4 py-4 text-2xl rounded-lg border border-[#FF2E63]/20 bg-background focus:ring-2 focus:ring-[#FF2E63]/20 transition-all"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={startJourney}
              disabled={!inputs.baseRevenue}
              className={cn(
                "w-full mt-4 flex items-center justify-center space-x-2 py-4 px-8 rounded-lg text-white font-medium transition-all",
                inputs.baseRevenue 
                  ? "bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/80 hover:from-[#FF2E63]/90 hover:to-[#FF2E63]/70" 
                  : "bg-gray-300 cursor-not-allowed"
              )}
            >
              <Calculator className="w-5 h-5" />
              <span>See Your Growth Potential</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-12"
        >
          {/* Main Display */}
          <div className="relative max-w-4xl mx-auto">
            {/* Multiplier Display */}
            <div className="relative mb-32">
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#FF2E63]/10 via-transparent to-transparent blur-3xl"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="relative flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#FF2E63] to-[#FF2E63]/80 tracking-tight">
                  {inputs.softwareMultiplier.toFixed(1)}x
                </div>
                <div className="mt-4 text-base text-[#FF2E63]/60 font-medium tracking-wide uppercase">
                  Revenue Multiplier
                </div>
              </motion.div>
            </div>

            {/* Stage Display */}
            {(() => {
              const stages = [
                { icon: Factory, label: "Hardware Product", range: [1, 2], description: "Traditional hardware with basic capabilities", features: ["Physical Product", "Manual Operation", "Basic Functions"] },
                { icon: Code2, label: "Connected Product", range: [2, 3], description: "Hardware enhanced with software features", features: ["Remote Monitoring", "Basic Analytics", "Mobile App"] },
                { icon: Brain, label: "Intelligent Product", range: [3, 4], description: "AI-powered smart product", features: ["AI Optimization", "Predictive Analytics", "Digital Twin"] },
                { icon: Globe, label: "Software Platform", range: [4, 5], description: "Complete software-defined ecosystem", features: ["Full Automation", "App Marketplace", "Developer SDK"] }
              ];
              
              const currentStage = stages.find(stage => 
                inputs.softwareMultiplier >= stage.range[0] && 
                inputs.softwareMultiplier < stage.range[1]
              );

              return currentStage && (
                <motion.div
                  key={currentStage.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Stage Progress */}
                  <div className="absolute -top-6 left-0 right-0 flex justify-between items-center px-12">
                    {stages.map((stage, index) => (
                      <motion.div
                        key={stage.label}
                        className="relative"
                        animate={{
                          opacity: inputs.softwareMultiplier >= stage.range[0] ? 1 : 0.3
                        }}
                      >
                        <div className={cn(
                          "w-1 h-1 rounded-full",
                          inputs.softwareMultiplier >= stage.range[0] ? "bg-[#FF2E63]" : "bg-[#FF2E63]/20"
                        )} />
                      </motion.div>
                    ))}
                  </div>

                  {/* Current Stage Card */}
                  <div className="relative backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF2E63]/5 via-background to-background" />
                    
                    <div className="relative p-12">
                      <div className="flex items-center space-x-8">
                        {/* Icon */}
                        <motion.div
                          animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.8, 1, 0.8],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="relative"
                        >
                          <div className="absolute inset-0 bg-[#FF2E63] blur-2xl opacity-20" />
                          <div className="relative w-20 h-20 rounded-2xl bg-[#FF2E63] flex items-center justify-center">
                            <currentStage.icon className="w-10 h-10 text-white" />
                          </div>
                        </motion.div>

                        {/* Stage Info */}
                        <div className="flex-1">
                          <motion.h2 
                            className="text-3xl font-semibold tracking-tight text-[#FF2E63] mb-2"
                            animate={{
                              opacity: [0.8, 1, 0.8],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            {currentStage.label}
                          </motion.h2>
                          <p className="text-lg text-foreground/60 max-w-2xl">
                            {currentStage.description}
                          </p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mt-12 grid grid-cols-3 gap-6">
                        {currentStage.features.map((feature, index) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-6 h-6 rounded-full bg-[#FF2E63]/10 flex items-center justify-center">
                              <Check className="w-3 h-3 text-[#FF2E63]" />
                            </div>
                            <span className="text-sm font-medium text-foreground/80">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Progress Bar */}
                      <div className="mt-12">
                        <div className="flex justify-between text-sm text-foreground/40 mb-2">
                          <span>{currentStage.range[0].toFixed(1)}x</span>
                          <span>{currentStage.range[1].toFixed(1)}x</span>
                        </div>
                        <div className="h-1 bg-[#FF2E63]/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/80"
                            animate={{
                              width: `${((inputs.softwareMultiplier - currentStage.range[0]) / 
                                (currentStage.range[1] - currentStage.range[0])) * 100}%`
                            }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })()}

            {/* Revenue Impact */}
            {projections && (
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="relative backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF2E63]/5 via-background to-background" />
                  <div className="relative">
                    <div className="grid grid-cols-2 divide-x divide-white/5">
                      <div className="p-8">
                        <div className="text-sm text-foreground/40 font-medium mb-2">Current Revenue</div>
                        <div className="text-3xl font-semibold tracking-tight">
                          ${inputs.baseRevenue?.toLocaleString()}
                        </div>
                      </div>
                      <div className="p-8">
                        <div className="text-sm text-foreground/40 font-medium mb-2">Projected Revenue</div>
                        <motion.div
                          key={projections.projectedRevenue}
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="text-3xl font-semibold tracking-tight text-[#FF2E63]"
                        >
                          ${projections.projectedRevenue.toLocaleString()}
                        </motion.div>
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/5">
                      <div className="text-center text-sm">
                        <span className="text-foreground/40">Additional Revenue: </span>
                        <span className="text-[#FF2E63] font-semibold">
                          +${projections.additionalRevenue.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default function StorySection() {
  return (
    <section 
      className="relative py-32 overflow-hidden bg-background/50"
      aria-label="Industrial Automation Evolution"
    >
      {/* Hero Section - Setting the Stage */}
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative max-w-3xl mx-auto px-6 mb-32 pt-20 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block mb-6 px-4 py-1 rounded-full bg-[#FF2E63]/10 text-sm font-medium text-[#FF2E63]"
        >
          Industrial Evolution Story
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-8"
        >
          From Hardware
          <br className="hidden sm:block" /> 
          <span className="text-[#FF2E63] bg-clip-text text-transparent bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/80">
            to Software-Defined
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Witness the transformation of industrial products through the ages, as we evolve from hardware-centric to software-defined solutions.
        </motion.p>
        
        {/* Story Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center space-x-8"
        >
          {['Past', 'Present', 'Future'].map((stage, index) => (
            <motion.a
              key={stage}
              href={`#${stage.toLowerCase()}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="group relative flex flex-col items-center"
            >
              <div className="w-3 h-3 rounded-full bg-[#FF2E63] mb-3 group-hover:scale-125 transition-transform" />
              <span className="text-sm font-medium group-hover:text-[#FF2E63] transition-colors">{stage}</span>
              {index < 2 && (
                <div className="absolute top-[5px] left-[24px] w-[72px] h-[2px] bg-gradient-to-r from-[#FF2E63] to-transparent md:block hidden" />
              )}
            </motion.a>
          ))}
        </motion.div>
      </motion.header>

      {/* Past Section */}
      <section id="past" className="relative max-w-[90rem] mx-auto px-6 mb-40">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-[#FF2E63] mb-4">01 · THE PAST</span>
          <h2 className="text-3xl font-bold mb-4">The Journey So Far</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From simple automation to the dawn of digital control
          </p>
        </motion.div>

        {/* Timeline visualization */}
        <div className="relative min-h-[200px]">
          {/* Timeline Items */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {timelineData.map((item, index) => (
              <div key={item.year} className="relative flex flex-col items-center">
                {/* Connector Lines */}
                {index < timelineData.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: item.delay }}
                    className="absolute top-[3rem] left-[60%] w-[calc(100%-3rem)] origin-left hidden md:block"
                    style={{ transform: 'translateY(-50%)' }}
                  >
                    <div className="absolute inset-0 h-[2px] bg-[#FF2E63]/20" />
                    <div className="absolute inset-0 h-[2px] overflow-hidden">
                      <div className="absolute inset-0 flex">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="warp-particle"
                            style={{
                              '--particle-delay': `${i * 0.2}s`,
                              '--particle-duration': '1.5s',
                              left: `${i * 12.5}%`
                            } as React.CSSProperties}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Circle Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  className="relative z-10 flex flex-col items-center"
                >
                  <div className="w-24 h-24 rounded-xl ring-2 bg-background/80 backdrop-blur-sm flex items-center justify-center transition-shadow hover:shadow-lg hover:shadow-[#FF2E63]/5">
                    <div className={cn(
                      "w-20 h-20 rounded-xl ring-2 flex items-center justify-center",
                      item.ringColor
                    )}>
                      <item.icon className={cn("w-10 h-10", item.color)} />
                    </div>
                  </div>

                  <div className="text-center mt-6">
                    <div className="text-2xl font-bold mb-2 font-mono text-[#FF2E63]">{item.year}</div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Evolution Arrow */}
        <motion.div 
          className="mt-20 flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#FF2E63] to-transparent" />
        </motion.div>
      </section>

      {/* Present Section */}
      <section id="present" className="relative max-w-[90rem] mx-auto px-6 mb-40">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-[#FF2E63] mb-4">02 · THE PRESENT</span>
          <h2 className="text-3xl font-bold mb-4">The Digital Transformation</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We stand at a pivotal moment in industrial evolution
          </p>
        </motion.div>

        {/* Evolution States with Connection Lines */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Factory,
              title: "Traditional Hardware",
              description: "Fixed functionality, limited adaptability",
              state: "past"
            },
            {
              icon: Code2,
              title: "Digital Integration",
              description: "Software enhancing hardware capabilities",
              state: "present"
            },
            {
              icon: Brain,
              title: "Software-Defined",
              description: "Full software control and flexibility",
              state: "future"
            }
          ].map((stage, index) => (
            <div key={stage.title} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={cn(
                  "relative p-8 rounded-2xl border backdrop-blur-sm",
                  stage.state === "present" ? "border-[#FF2E63] bg-[#FF2E63]/5" : "border-white/10 bg-white/5"
                )}
              >
                <stage.icon className={cn(
                  "w-12 h-12 mb-6",
                  stage.state === "present" ? "text-[#FF2E63]" : "text-white/60"
                )} />
                <h3 className="text-xl font-bold mb-2">{stage.title}</h3>
                <p className="text-muted-foreground">{stage.description}</p>
              </motion.div>
              {index < 2 && (
                <div className="absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-[#FF2E63] to-transparent md:block hidden" />
              )}
            </div>
          ))}
        </div>

        {/* Evolution Arrow */}
        <motion.div 
          className="mt-20 flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#FF2E63] to-transparent" />
        </motion.div>
      </section>

      {/* Future Section */}
      <section id="future" className="relative max-w-[90rem] mx-auto px-6 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-[#FF2E63] mb-4">03 · THE FUTURE</span>
          <h2 className="text-3xl font-bold mb-4">Software-Defined Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The next evolution in industrial innovation
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background/80 backdrop-blur-sm p-12 rounded-3xl border border-[#FF2E63]/20"
          >
            <div className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: Brain,
                    title: "Intelligent",
                    description: "AI-powered optimization and decision making"
                  },
                  {
                    icon: Globe,
                    title: "Connected",
                    description: "Seamless integration with digital ecosystems"
                  },
                  {
                    icon: Rocket,
                    title: "Adaptable",
                    description: "Rapid evolution through software updates"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <feature.icon className="w-10 h-10 text-[#FF2E63] mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#FF2E63] text-white font-medium cursor-pointer"
                onClick={() => {
                  const calculator = document.getElementById('roi-calculator');
                  calculator?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Discover Your Potential →
              </motion.div>
            </div>
          </motion.div>

          {/* Connection to ROI */}
          <div className="relative h-64 my-32">
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px]">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF2E63]/0 via-[#FF2E63] to-[#FF2E63]/0">
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: ['linear-gradient(to bottom, #FF2E6300 0%, #FF2E63 50%, #FF2E6300 100%)',
                               'linear-gradient(to bottom, #FF2E63 0%, #FF2E6300 50%, #FF2E63 100%)']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
            </div>
            
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-[#FF2E63]"
                  animate={{
                    y: [-10, 270],
                    opacity: [0, 1, 0],
                    scale: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-full">
              <div className="relative max-w-md mx-auto">
                <motion.div
                  className="text-center bg-background/80 backdrop-blur-sm px-6 py-3 rounded-xl border border-[#FF2E63]/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg font-medium text-[#FF2E63]">Transform Your Business</p>
                  <p className="text-base text-foreground">Calculate the impact of software-defined products</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Bridge - Transition to ROI */}
      <section className="relative w-full bg-gradient-to-b from-background via-background/95 to-background py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:32px] opacity-10" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.5, 0.3, 0.5],
                y: [0, -20, 0],
                x: [0, 10, 0]
              }}
              transition={{
                duration: 4,
                delay: i * 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute"
              style={{
                top: `${20 + i * 30}%`,
                left: `${10 + i * 30}%`,
                width: '300px',
                height: '300px',
                background: `radial-gradient(circle at center, rgba(255,46,99,0.1) 0%, transparent 70%)`,
                borderRadius: '50%',
                filter: 'blur(40px)',
                transform: 'translate(-50%, -50%)'
              }}
            />
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-sm font-medium text-[#FF2E63]/80 mb-4">TRANSFORM YOUR BUSINESS</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Step into the
              <br />
              <span className="text-[#FF2E63]">Software-Defined Future?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Calculate the potential impact on your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Revenue Growth",
                description: "Unlock new revenue streams through software-enabled features"
              },
              {
                title: "Cost Reduction",
                description: "Lower operational costs with automated processes"
              },
              {
                title: "Market Advantage",
                description: "Stay ahead with rapid innovation capabilities"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center p-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF2E63]/10 flex items-center justify-center mb-4">
                    <Trophy className="w-6 h-6 text-[#FF2E63]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center px-8 py-3 rounded-xl bg-[#FF2E63] text-white font-medium overflow-hidden transition-all duration-300"
              onClick={() => {
                const calculator = document.getElementById('roi-calculator');
                calculator?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full" />
              <span className="relative">Calculate Your ROI</span>
              <ArrowRight className="w-4 h-4 ml-2 relative" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section id="roi-calculator" className="relative max-w-[90rem] mx-auto px-6 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-[#FF2E63] mb-4">ROI CALCULATOR</span>
            <h2 className="text-3xl font-bold mb-4">See Your Potential Returns</h2>
            <p className="text-lg text-muted-foreground">
              Estimate the value of transitioning to software-defined products
            </p>
          </div>
          <div className="relative z-10">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <ROICalculator />
            </div>
          </div>
        </motion.div>
      </section>
      <style jsx>{`
        .warp-particle {
          position: absolute;
          width: 30px;
          height: 2px;
          background: linear-gradient(
            to right,
            transparent,
            #FF2E63,
            transparent
          );
          filter: blur(1px);
          opacity: 0;
          animation: warpEffect var(--particle-duration) linear infinite;
          animation-delay: var(--particle-delay);
        }

        @keyframes warpEffect {
          0% {
            transform: translateX(-100%) scaleX(0.1);
            opacity: 0;
          }
          50% {
            opacity: 0.8;
            transform: translateX(0%) scaleX(1);
          }
          100% {
            transform: translateX(100%) scaleX(0.1);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}
