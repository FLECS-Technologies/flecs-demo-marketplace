"use client";

import { FC, useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download, RefreshCw, ChevronRight, Package, Settings, Palette, Check, Loader2, ArrowRight, Building2, Rocket, Cog } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface StepProps {
  onComplete: () => void;
  companyName?: string;
  onCompanyNameChange?: (name: string) => void;
  brandColor?: string;
  onBrandColorChange?: (color: string) => void;
  selectedApp?: string;
  onAppSelect?: (appId: string) => void;
}

interface App {
  id: string;
  name: string;
  category: string;
  logo?: string;
}

const AppCard = ({ app }: { app: App }) => {
  return (
    <div className="rounded-2xl border bg-card p-6 flex flex-col items-center justify-center space-y-3">
      {app.logo ? (
        <Image
          src={app.logo}
          alt={`${app.name} logo`}
          width={48}
          height={48}
          className="rounded-xl"
        />
      ) : (
        <div className="w-12 h-12 rounded-xl bg-muted" />
      )}
      <div className="space-y-1 text-center">
        <h3 className="font-medium">{app.name}</h3>
        <p className="text-sm text-muted-foreground">{app.category}</p>
      </div>
    </div>
  );
};

export const AppDownloadStep: FC<StepProps> = ({ onComplete, onAppSelect, selectedApp }) => {
  const [downloading, setDownloading] = useState<number | null>(null);
  const [completed, setCompleted] = useState<number[]>([]);
  const [progress, setProgress] = useState<Record<number, number>>({});
  const progressIntervals = useRef<Record<number, NodeJS.Timeout>>({});

  const mainApps = [
    {
      id: 1,
      name: "Grafana",
      description: "Operational dashboards and data visualization platform",
      icon: "/images/logos/grafana-logo.svg",
      identifier: "grafana",
      featured: true,
    },
    {
      id: 2,
      name: "Node-RED",
      description: "Flow-based programming for the Internet of Things",
      icon: "/images/logos/node-red-logo.svg",
      identifier: "nodered",
      featured: true,
    },
  ];

  useEffect(() => {
    return () => {
      // Cleanup intervals on unmount
      Object.values(progressIntervals.current).forEach(clearInterval);
    };
  }, []);

  const handleDownload = (appId: number, appIdentifier: string) => {
    if (completed.includes(appId)) return;
    setDownloading(appId);
    setProgress(prev => ({ ...prev, [appId]: 0 }));
    
    // Simulate download progress
    progressIntervals.current[appId] = setInterval(() => {
      setProgress(prev => {
        const currentProgress = prev[appId] || 0;
        const increment = Math.random() * 15;
        const newProgress = Math.min(currentProgress + increment, 100);
        
        if (newProgress >= 100) {
          clearInterval(progressIntervals.current[appId]);
          setCompleted(prev => [...prev, appId]);
          setDownloading(null);
        }
        
        return { ...prev, [appId]: newProgress };
      });
    }, 200);
  };

  useEffect(() => {
    if (completed.length === 1) {
      const completedApp = mainApps.find(app => app.id === completed[0]);
      if (completedApp) {
        onAppSelect?.(completedApp.identifier);
        setTimeout(onComplete, 500);
      }
    }
  }, [completed, mainApps, onAppSelect, onComplete]);

  const backgroundApps = [
    { id: 3, name: "Data Analytics", icon: "📊" },
    { id: 4, name: "Calendar", icon: "📅" },
    { id: 5, name: "Notes", icon: "📝" },
    { id: 6, name: "Files", icon: "📁" },
  ];

  return (
    <div className="h-full p-8">
      <div className="h-full flex flex-col">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <h1 className="text-3xl font-bold">FLECS Marketplace</h1>
            <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">60+ Apps</span>
          </div>
          <p className="text-lg text-muted-foreground mb-4">
            Choose from our curated collection of industry-leading applications
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span>Communication <span className="text-muted-foreground">· 10 Apps</span></span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span>Control <span className="text-muted-foreground">· 6 Apps</span></span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-violet-500"></div>
              <span>Data Analysis <span className="text-muted-foreground">· 16 Apps</span></span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              <span>Fleet Management <span className="text-muted-foreground">· 5 Apps</span></span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-rose-500"></div>
              <span>Visu & Scada <span className="text-muted-foreground">· 7 Apps</span></span>
            </div>
          </div>
        </div>

        {/* First Row: 2 Real Apps + 1 Wireframe */}
        <div className="grid grid-cols-3 gap-6 mb-6 [&:hover_.install-button]:animate-none">
          {/* Real Apps */}
          {mainApps.map((app) => (
            <motion.div
              key={app.id}
              className="relative rounded-2xl bg-card border shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              layout
            >
              <div className="p-6 flex flex-col h-full">
                <div className="relative w-12 h-12 mb-3">
                  <Image
                    src={app.icon}
                    alt={`${app.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{app.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-2">{app.description}</p>
                
                {completed.includes(app.id) ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center text-green-500 font-medium p-2 bg-green-500/10 rounded-xl"
                  >
                    <Check className="w-5 h-5 mr-2" />
                    <span>Installed</span>
                  </motion.div>
                ) : (
                  <motion.div
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1 }}
                    className="install-button animate-[pulseButton_2s_ease-in-out_infinite]"
                  >
                    <Button
                      variant="default"
                      size="default"
                      className="w-full bg-primary hover:bg-[#FF2E63] transition-colors"
                      onClick={() => handleDownload(app.id, app.identifier)}
                      disabled={downloading !== null && downloading !== app.id}
                    >
                      {downloading === app.id ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Installing...
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4 mr-2" />
                          Install Now
                        </>
                      )}
                    </Button>
                  </motion.div>
                )}
                
                {(downloading === app.id || completed.includes(app.id)) && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-3"
                  >
                    <Progress 
                      value={progress[app.id] || 0}
                      className="h-1"
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}

          {/* First Wireframe App */}
          <motion.div
            className="rounded-2xl border bg-card/50 p-6 flex flex-col items-center justify-center space-y-3"
            whileHover={{ scale: 1 }}
          >
            <div className="w-12 h-12 rounded-xl bg-muted animate-pulse" />
            <div className="space-y-2 w-full">
              <div className="h-4 bg-muted rounded-full w-3/4 mx-auto animate-pulse" />
              <div className="h-3 bg-muted rounded-full w-1/2 mx-auto animate-pulse" />
            </div>
            <div className="w-full h-9 bg-muted rounded-lg animate-pulse mt-auto" />
          </motion.div>
        </div>

        {/* Second Row: 3 Wireframe Apps */}
        <div className="grid grid-cols-3 gap-6">
          {backgroundApps.slice(1).map((app) => (
            <motion.div
              key={app.id}
              className="rounded-2xl border bg-card/50 p-6 flex flex-col items-center justify-center space-y-3"
              whileHover={{ scale: 1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-muted animate-pulse" />
              <div className="space-y-2 w-full">
                <div className="h-4 bg-muted rounded-full w-3/4 mx-auto animate-pulse" />
                <div className="h-3 bg-muted rounded-full w-1/2 mx-auto animate-pulse" />
              </div>
              <div className="w-full h-9 bg-muted rounded-lg animate-pulse mt-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const VersionManagementStep: FC<StepProps> = ({ onComplete, selectedApp }) => {
  const [selectedVersion, setSelectedVersion] = useState<string | null>(null);
  const [updating, setUpdating] = useState(false);
  const [updateProgress, setUpdateProgress] = useState(0);
  const [updateComplete, setUpdateComplete] = useState(false);
  const progressInterval = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, []);

  const apps = {
    grafana: {
      name: "Grafana",
      description: "Operational dashboards and data visualization platform",
      icon: "/images/logos/grafana-logo.svg",
      currentVersion: "10.0.0",
      versions: [
        { version: "9.5.2", type: "Stable" },
        { version: "10.0.0", type: "Current" },
        { version: "10.1.0", type: "Beta" }
      ]
    },
    nodered: {
      name: "Node-RED",
      description: "Flow-based programming for the Internet of Things",
      icon: "/images/logos/node-red-logo.svg",
      currentVersion: "3.0.2",
      versions: [
        { version: "2.2.2", type: "Stable" },
        { version: "3.0.2", type: "Current" },
        { version: "3.1.0", type: "Beta" }
      ]
    }
  };

  if (!selectedApp) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">No App Selected</h2>
          <p className="text-muted-foreground">Please select an app in the previous step to continue.</p>
        </div>
      </div>
    );
  }

  const selectedAppData = apps[selectedApp.toLowerCase() as keyof typeof apps];
  
  if (!selectedAppData) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Invalid App Selected</h2>
          <p className="text-muted-foreground">The selected app is not available for version management.</p>
        </div>
      </div>
    );
  }

  const handleVersionSelect = (version: string) => {
    if (updating || updateComplete) return;
    setSelectedVersion(version);
  };

  const handleUpdate = () => {
    if (!selectedVersion || updating || updateComplete) return;
    setUpdating(true);
    setUpdateProgress(0);
    setUpdateComplete(false);

    progressInterval.current = setInterval(() => {
      setUpdateProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          if (progressInterval.current) {
            clearInterval(progressInterval.current);
          }
          setUpdating(false);
          setUpdateComplete(true);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return newProgress;
      });
    }, 500);
  };

  const getVersionTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'beta': return 'text-orange-500 bg-orange-500/10';
      case 'current': return 'text-green-500 bg-green-500/10';
      case 'stable': return 'text-blue-500 bg-blue-500/10';
      default: return 'text-gray-500 bg-gray-500/10';
    }
  };

  return (
    <div className="h-full flex items-center justify-center p-8">
      <div className="max-w-lg w-full">
        <motion.div 
          className="bg-card border rounded-2xl p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* App Info */}
          <div className="flex items-center gap-4 mb-8">
            <div className="relative w-12 h-12">
              <Image
                src={selectedAppData.icon}
                alt={`${selectedAppData.name} logo`}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{selectedAppData.name}</h2>
              <p className="text-sm text-muted-foreground">Current: v{selectedAppData.currentVersion}</p>
            </div>
          </div>

          {!updateComplete ? (
            <>
              {/* Version Selection */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {selectedAppData.versions.map((ver) => (
                  <motion.button
                    key={ver.version}
                    className={`p-3 border rounded-xl text-center transition-all ${
                      selectedVersion === ver.version
                        ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                        : 'hover:border-primary/50'
                    } ${updating ? 'opacity-50 pointer-events-none' : ''}`}
                    onClick={() => handleVersionSelect(ver.version)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="font-medium mb-1">v{ver.version}</div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getVersionTypeColor(ver.type)}`}>
                      {ver.type}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Update Button */}
              <div className="space-y-4">
                {selectedVersion && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-center text-sm text-muted-foreground"
                  >
                    Ready to update to version {selectedVersion}
                  </motion.div>
                )}

                <Button
                  variant="default"
                  size="lg"
                  className="w-full relative overflow-hidden"
                  disabled={!selectedVersion || updating}
                  onClick={handleUpdate}
                >
                  {updating ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Updating...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2" />
                      {selectedVersion ? `Update to v${selectedVersion}` : 'Select a Version'}
                    </>
                  )}
                  {updating && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-primary"
                      initial={{ width: "0%" }}
                      animate={{ width: `${updateProgress}%` }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Button>
              </div>
            </>
          ) : (
            <motion.div 
              className="text-center py-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-500 mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
              >
                <Check className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-6">Version {selectedVersion} Installed!</h3>
              <Button
                variant="default"
                size="lg"
                className="w-full"
                onClick={onComplete}
              >
                <ChevronRight className="w-4 h-4 mr-2" />
                Continue
              </Button>
            </motion.div>
          )}

          {/* Background Effect */}
          {updating && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export const CreateStoreStep: FC<StepProps> = ({ onComplete, companyName, onCompanyNameChange }) => {
  const [companyNameState, setCompanyNameState] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Preview apps for the marketplace
  const apps = [
    {
      id: "node-red",
      name: "Node-RED",
      category: "Flow Programming",
      logo: "/images/logos/node-red-logo.svg"
    },
    {
      id: "grafana",
      name: "Grafana",
      category: "Data Visualization",
      logo: "/images/logos/grafana-logo.svg"
    }
  ];

  const handleCompanyNameChange = (value: string) => {
    setCompanyNameState(value);
    setIsTyping(true);
    if (!value) {
      setIsTyping(false);
      setIsReady(false);
    } else {
      // Set ready after a brief delay to show the typing effect
      setTimeout(() => setIsReady(true), 500);
    }
    onCompanyNameChange?.(value);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Split View Layout */}
      <div className="h-full grid grid-cols-[45%,55%]">
        {/* Left Panel - Input Section */}
        <div className="p-12 flex flex-col justify-center bg-muted/30">
          <div className="max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Create Your Marketplace
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Start your journey by giving your marketplace a name. Make it memorable and aligned with your brand.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label htmlFor="companyName" className="text-sm font-medium">
                  Company Name
                </label>
                <div className="relative">
                  <Input
                    id="companyName"
                    className="text-lg py-6 pr-4 bg-background"
                    placeholder="e.g., Acme Industries"
                    value={companyNameState}
                    onChange={(e) => handleCompanyNameChange(e.target.value)}
                  />
                  {isReady && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      <Check className="w-5 h-5 text-primary" />
                    </motion.div>
                  )}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isReady ? 1 : 0 }}
                className="space-y-4"
              >
                {isReady && (
                  <Button
                    onClick={onComplete}
                    className="w-full py-6 text-lg relative group"
                    size="lg"
                  >
                    <span className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors rounded-md" />
                    <span className="relative flex items-center justify-center gap-2">
                      Create {companyNameState} Marketplace
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Right Panel - Preview Section */}
        <div className="p-12 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              filter: isTyping ? "blur(0px)" : "blur(1px)"
            }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Marketplace Header */}
            <div className="space-y-4">
              <motion.h1 
                className="text-3xl font-bold"
                animate={{ 
                  opacity: companyNameState ? 1 : 0.7,
                  scale: companyNameState ? 1 : 0.98
                }}
              >
                {companyNameState ? `${companyNameState} Marketplace` : "Your Marketplace"}
              </motion.h1>
              <div className="flex gap-2 mt-2">
                <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  60+ Apps
                </span>
                <span className="text-sm px-3 py-1 rounded-full bg-muted text-muted-foreground">
                  Enterprise Ready
                </span>
              </div>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-sm font-medium">Communication</span>
                </div>
                <p className="text-sm text-muted-foreground pl-4">10 Apps</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-sm font-medium">Control</span>
                </div>
                <p className="text-sm text-muted-foreground pl-4">6 Apps</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-violet-500" />
                  <span className="text-sm font-medium">Data Analysis</span>
                </div>
                <p className="text-sm text-muted-foreground pl-4">16 Apps</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-rose-500" />
                  <span className="text-sm font-medium">Visu & Scada</span>
                </div>
                <p className="text-sm text-muted-foreground pl-4">7 Apps</p>
              </div>
            </div>

            {/* App Preview Grid */}
            <div className="grid grid-cols-3 gap-4">
              {/* Real Apps */}
              {apps.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
              
              {/* Wireframe Apps */}
              {[...Array(4)].map((_, index) => (
                <motion.div
                  key={`wireframe-${index}`}
                  className="rounded-xl border bg-card/50 p-4 flex flex-col items-center justify-center space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="w-12 h-12 rounded-xl bg-muted animate-pulse" />
                  <div className="space-y-2 w-full">
                    <div className="h-4 bg-muted rounded-full w-3/4 mx-auto animate-pulse" />
                    <div className="h-3 bg-muted rounded-full w-1/2 mx-auto animate-pulse" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* More Apps Indicator */}
            <div className="mt-4 text-center">
              <span className="text-sm text-muted-foreground">
                And {54}+ more apps available in your marketplace
              </span>
            </div>
          </motion.div>

          {/* Overlay Message */}
          <AnimatePresence>
            {!companyNameState && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm"
              >
                <p className="text-lg text-muted-foreground text-center">
                  Enter your company name to preview your marketplace
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export const BrandingStep: FC<StepProps> = ({ onComplete, companyName, brandColor, onBrandColorChange }) => {
  const [selectedColor, setSelectedColor] = useState(brandColor || "#0091FF");
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [uploadedLogo, setUploadedLogo] = useState<string | null>(null);
  const [step, setStep] = useState<'logo' | 'color'>('logo');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedLogo(e.target?.result as string);
        setSelectedIcon(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const exampleIcons = [
    { icon: Rocket, name: "Rocket" },
    { icon: Building2, name: "Company" },
    { icon: Cog, name: "Machine" }
  ];

  const presetColors = [
    { name: "Ocean Blue", value: "#0091FF", description: "Trust & Reliability" },
    { name: "Forest Green", value: "#10B981", description: "Growth & Stability" },
    { name: "Royal Purple", value: "#8B5CF6", description: "Innovation & Creativity" },
    { name: "Sunset Orange", value: "#F97316", description: "Energy & Enthusiasm" },
    { name: "Ruby Red", value: "#EF4444", description: "Power & Passion" }
  ];

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    onBrandColorChange?.(color);
  };

  const exampleApps = [
    {
      name: "Grafana",
      description: "Data visualization & monitoring",
      logo: "/images/logos/grafana-logo.svg"
    },
    {
      name: "Node-RED",
      description: "Flow-based programming for IoT",
      logo: "/images/logos/node-red-logo.svg"
    }
  ];

  return (
    <div className="h-full grid grid-cols-[40%,60%] gap-0">
      {/* Left Panel - Controls */}
      <div className="h-full flex flex-col bg-muted/30 p-6">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {step === 'logo' ? 'Choose Your Logo' : 'Set Brand Color'}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {step === 'logo' 
              ? 'Upload your company logo or choose from our examples' 
              : 'Pick a color that represents your brand'}
          </p>
        </div>

        {/* Content Area */}
        <div className="flex-1 min-h-0 flex flex-col">
          <AnimatePresence mode="wait">
            {step === 'logo' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col"
              >
                {/* Logo Upload */}
                <div className="rounded-lg border bg-card p-4 mb-4">
                  <div 
                    className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-primary/50 transition-colors text-center"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    {uploadedLogo ? (
                      <div className="w-20 h-20 relative">
                        <img 
                          src={uploadedLogo} 
                          alt="Uploaded logo" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <>
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <ArrowRight className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">Upload Your Logo</p>
                          <p className="text-sm text-muted-foreground">
                            PNG, JPG or SVG
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept="image/*"
                    className="hidden"
                  />
                </div>

                {/* Example Icons */}
                <div className="space-y-3">
                  <h3 className="font-medium">Example Icons</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {exampleIcons.map(({ icon: Icon, name }) => (
                      <button
                        key={name}
                        onClick={() => {
                          setSelectedIcon(name);
                          setUploadedLogo(null);
                        }}
                        className="group relative"
                        title={`${name}`}
                      >
                        <div 
                          className={cn(
                            "w-full aspect-square rounded-lg transition-all",
                            selectedIcon === name ? "ring-2 ring-primary ring-offset-2" : "hover:ring-2 hover:ring-primary/50 hover:ring-offset-2"
                          )}
                          style={{ backgroundColor: selectedColor }}
                        />
                        <div className={cn(
                          "w-14 h-14 rounded-lg flex items-center justify-center transition-colors",
                          selectedIcon === name ? "bg-primary/20" : "bg-muted"
                        )}>
                          <Icon className="w-8 h-8" style={{ color: selectedColor }} />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Continue Button */}
                {(uploadedLogo || selectedIcon) && (
                  <Button
                    onClick={() => setStep('color')}
                    className="mt-4 h-12 text-base font-medium shadow-lg hover:shadow-xl transition-all"
                    style={{
                      background: `linear-gradient(135deg, ${selectedColor}, ${selectedColor}dd)`,
                    }}
                  >
                    Continue
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </motion.div>
                  </Button>
                )}
              </motion.div>
            )}

            {step === 'color' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {/* Color Preview */}
                <div className="rounded-lg border bg-card p-4 space-y-4">
                  <div className="aspect-video rounded-lg relative overflow-hidden">
                    <div 
                      className="absolute inset-0 transition-colors"
                      style={{ backgroundColor: selectedColor }}
                    />
                    <div className="absolute bottom-4 left-4">
                      <div className="font-mono text-white/90">{selectedColor}</div>
                    </div>
                  </div>

                  {/* Color Input */}
                  <div className="flex gap-3">
                    <Input
                      type="color"
                      value={selectedColor}
                      onChange={(e) => handleColorChange(e.target.value)}
                      className="w-11 h-11 p-1 rounded-lg cursor-pointer"
                    />
                    <Input
                      value={selectedColor}
                      onChange={(e) => handleColorChange(e.target.value)}
                      placeholder="#000000"
                      className="font-mono"
                    />
                  </div>
                </div>

                {/* Example Colors */}
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="font-medium mb-3">Example Colors</h3>
                  <div className="grid grid-cols-5 gap-2">
                    {presetColors.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => handleColorChange(color.value)}
                        className="group relative"
                        title={`${color.name}: ${color.description}`}
                      >
                        <div 
                          className={cn(
                            "w-full aspect-square rounded-lg transition-all",
                            selectedColor === color.value ? "ring-2 ring-primary ring-offset-2" : "hover:ring-2 hover:ring-primary/50 hover:ring-offset-2"
                          )}
                          style={{ backgroundColor: color.value }}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setStep('logo')}
                    className="h-12"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={onComplete}
                    className="flex-1 h-12 text-base font-medium shadow-lg hover:shadow-xl transition-all"
                    style={{
                      background: `linear-gradient(135deg, ${selectedColor}, ${selectedColor}dd)`,
                    }}
                  >
                    Launch Your Marketplace
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </motion.div>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Panel - Live Preview */}
      <div className="bg-background border-l">
        <div className="h-full flex flex-col">
          {/* Preview Header */}
          <div className="p-6 border-b bg-card" style={{ backgroundColor: selectedColor + '10' }}>
            <div className="flex items-center gap-4 mb-4">
              {uploadedLogo ? (
                <img src={uploadedLogo} alt="Uploaded logo" className="w-10 h-10 object-contain" />
              ) : selectedIcon ? (
                <div className="p-2 rounded-lg bg-background">
                  {selectedIcon === "Rocket" && <Rocket className="w-8 h-8" style={{ color: selectedColor }} />}
                  {selectedIcon === "Company" && <Building2 className="w-8 h-8" style={{ color: selectedColor }} />}
                  {selectedIcon === "Machine" && <Cog className="w-8 h-8" style={{ color: selectedColor }} />}
                </div>
              ) : (
                <div className="w-10 h-10 rounded-lg bg-muted animate-pulse" />
              )}
              <h2 className="text-2xl font-semibold">{companyName || 'Your Company'} Marketplace</h2>
            </div>

            <div className="flex gap-3">
              <div className="px-4 py-2 rounded-lg bg-background font-medium" style={{ color: selectedColor }}>
                All Apps
              </div>
              <div className="px-4 py-2 rounded-lg text-muted-foreground hover:bg-background/50 cursor-pointer transition-colors">
                Communication
              </div>
              <div className="px-4 py-2 rounded-lg text-muted-foreground hover:bg-background/50 cursor-pointer transition-colors">
                Data Analysis
              </div>
            </div>
          </div>

          {/* Preview Content */}
          <div className="flex-1 p-6">
            <div className="grid grid-cols-2 gap-6">
              {/* Example Apps */}
              {exampleApps.map((app, idx) => (
                <div key={idx} className="rounded-xl border bg-card p-6 flex flex-col">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 relative flex-shrink-0">
                      <Image
                        src={app.logo}
                        alt={`${app.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{app.name}</h3>
                      <p className="text-sm text-muted-foreground">{app.description}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button 
                      variant="outline" 
                      className="w-full"
                      style={{ 
                        borderColor: selectedColor + '40',
                        color: selectedColor
                      }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Install Now
                    </Button>
                  </div>
                </div>
              ))}

              {/* Additional App Placeholders */}
              {[...Array(4)].map((_, idx) => (
                <div key={`placeholder-${idx}`} className="rounded-xl border bg-card p-6 flex flex-col gap-3">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-muted animate-pulse" />
                    <div className="flex-1 space-y-2">
                      <div className="h-5 w-24 bg-muted rounded animate-pulse" />
                      <div className="h-4 w-32 bg-muted/50 rounded animate-pulse" />
                    </div>
                  </div>
                  <div className="mt-auto">
                    <div className="h-10 w-full bg-muted rounded-lg animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};