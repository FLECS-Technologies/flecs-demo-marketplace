"use client";

import { FC } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Plus, ChevronRight, DollarSign } from 'lucide-react';

interface StepProps {
  onComplete: () => void;
  selectedApps?: string[];
  onAppSelectionChange?: (apps: string[]) => void;
}

export const SelectAppsStep: FC<StepProps> = ({ onComplete, selectedApps = [], onAppSelectionChange }) => {
  const apps = [
    { id: 'app1', name: 'Sample App 1', description: 'Description for app 1' },
    { id: 'app2', name: 'Sample App 2', description: 'Description for app 2' },
    { id: 'app3', name: 'Sample App 3', description: 'Description for app 3' },
  ];

  const handleAppToggle = (appId: string) => {
    const newSelection = selectedApps.includes(appId)
      ? selectedApps.filter(id => id !== appId)
      : [...selectedApps, appId];
    onAppSelectionChange?.(newSelection);
  };

  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold text-center mb-8">Select Apps for Your Marketplace</h3>
      <div className="space-y-4">
        {apps.map((app) => (
          <motion.div
            key={app.id}
            className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50"
            whileHover={{ scale: 1.02 }}
          >
            <Checkbox
              id={app.id}
              checked={selectedApps.includes(app.id)}
              onCheckedChange={() => handleAppToggle(app.id)}
            />
            <Label htmlFor={app.id} className="flex-1">
              <div className="font-medium">{app.name}</div>
              <div className="text-sm text-muted-foreground">{app.description}</div>
            </Label>
          </motion.div>
        ))}
      </div>
      <Button
        className="w-full mt-6"
        onClick={onComplete}
        disabled={selectedApps.length === 0}
      >
        Continue
        <ChevronRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
};

export const CreateCustomAppStep: FC<StepProps> = ({ onComplete }) => {
  return (
    <div className="p-6">
      <div className="max-w-md mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">Create Custom App</h3>
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium mb-2 block">
              App Name
            </label>
            <Input
              placeholder="Enter app name"
              className="w-full"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">
              Description
            </label>
            <Input
              placeholder="Enter app description"
              className="w-full"
            />
          </div>
          <Button
            className="w-full"
            onClick={onComplete}
          >
            <Plus className="w-4 h-4 mr-2" />
            Create App
          </Button>
        </div>
      </div>
    </div>
  );
};

export const RevenuePotentialStep: FC<StepProps> = ({ onComplete }) => {
  return (
    <div className="p-6">
      <div className="max-w-md mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">Revenue Potential</h3>
        <div className="space-y-6">
          <div className="rounded-xl bg-muted/50 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-medium">Estimated Monthly Revenue</div>
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary">$5,000 - $10,000</div>
            <div className="text-sm text-muted-foreground mt-2">
              Based on current marketplace trends and selected apps
            </div>
          </div>
          <Button
            className="w-full"
            onClick={onComplete}
          >
            Complete Setup
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};
