"use client";

import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import {
  AppDownloadStep,
  VersionManagementStep,
  CreateStoreStep,
  BrandingStep,
} from './tutorial-steps';
import {
  SelectAppsStep,
  CreateCustomAppStep,
  RevenuePotentialStep,
} from './tutorial-steps/final-steps';

interface MarketplaceDemoProps {
  className?: string;
}

export const MarketplaceDemo: FC<MarketplaceDemoProps> = ({ className }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [companyName, setCompanyName] = useState('');
  const [brandColor, setBrandColor] = useState('#6366f1');
  const [selectedApps, setSelectedApps] = useState<string[]>([]);
  const [selectedApp, setSelectedApp] = useState<string>('');

  const handleStepComplete = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className={className}>
      <div className="relative h-full">
        {/* Tutorial Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="h-full"
          >
            <CurrentStepComponent
              onComplete={handleStepComplete}
              companyName={companyName}
              onCompanyNameChange={setCompanyName}
              brandColor={brandColor}
              onBrandColorChange={setBrandColor}
              selectedApps={selectedApps}
              onAppSelectionChange={setSelectedApps}
              selectedApp={selectedApp}
              onAppSelect={setSelectedApp}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const steps = [
  {
    id: 'download',
    title: 'Download Apps',
    description: 'Start by downloading sample apps for your marketplace.',
    component: AppDownloadStep,
  },
  {
    id: 'versions',
    title: 'Manage Versions',
    description: 'Keep your apps up to date with version management.',
    component: VersionManagementStep,
  },
  {
    id: 'store',
    title: 'Create Store',
    description: 'Set up your branded marketplace store.',
    component: CreateStoreStep,
  },
  {
    id: 'branding',
    title: 'Brand Your Store',
    description: 'Customize the look and feel of your marketplace.',
    component: BrandingStep,
  },
  {
    id: 'select-apps',
    title: 'Select Apps',
    description: 'Choose which apps to offer in your marketplace.',
    component: SelectAppsStep,
  },
  {
    id: 'custom-app',
    title: 'Create Custom App',
    description: 'Design a unique app for your marketplace.',
    component: CreateCustomAppStep,
  },
  {
    id: 'revenue',
    title: 'Revenue Potential',
    description: 'See the potential earnings from your marketplace.',
    component: RevenuePotentialStep,
  },
];
