"use client";

import { FC } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { AppWindow } from 'lucide-react';

interface SelectAppsStepProps {
  onComplete: () => void;
}

export const SelectAppsStep: FC<SelectAppsStepProps> = ({ onComplete }) => {
  return (
    <div className="p-6">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">
          <AppWindow className="w-6 h-6 inline-block mr-2" />
          Select Available Apps
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((app) => (
            <motion.div
              key={app}
              className="rounded-xl bg-muted/50 p-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-3">
                <Checkbox id={`app-${app}`} className="mt-1" />
                <div className="flex-1">
                  <Label 
                    htmlFor={`app-${app}`} 
                    className="text-base font-medium cursor-pointer"
                  >
                    Premium App {app}
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Description of premium app {app} and its unique features.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <Button
          className="w-full mt-8"
          onClick={onComplete}
        >
          Continue with Selected Apps
        </Button>
      </div>
    </div>
  );
};
