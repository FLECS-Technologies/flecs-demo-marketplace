"use client";

import { FC } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface Step {
  id: string;
  title: string;
  description: string;
}

interface TutorialGuideProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (step: number) => void;
}

export const TutorialGuide: FC<TutorialGuideProps> = ({
  steps,
  currentStep,
  onStepClick,
}) => {
  return (
    <nav className="flex justify-between items-start">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;
        const isClickable = index <= currentStep;

        return (
          <div
            key={step.id}
            className={cn(
              "flex-1 relative",
              index !== steps.length - 1 && "mr-4"
            )}
          >
            {/* Progress Line */}
            {index !== steps.length - 1 && (
              <div
                className={cn(
                  "absolute top-4 left-full w-full h-[2px] -ml-2",
                  isCompleted ? "bg-primary" : "bg-muted"
                )}
              />
            )}

            {/* Step Circle */}
            <button
              onClick={() => isClickable && onStepClick(index)}
              className={cn(
                "relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors",
                isCompleted && "bg-primary border-primary text-primary-foreground",
                isCurrent && "border-primary",
                !isCompleted && !isCurrent && "border-muted",
                isClickable && "cursor-pointer hover:border-primary/70"
              )}
            >
              {isCompleted ? (
                <Check className="w-4 h-4" />
              ) : (
                <span className={cn(
                  "text-sm font-medium",
                  isCurrent && "text-primary"
                )}>
                  {index + 1}
                </span>
              )}
            </button>

            {/* Step Content */}
            <div className="mt-3">
              <h3 className={cn(
                "text-sm font-medium mb-1",
                (isCompleted || isCurrent) && "text-foreground",
                !isCompleted && !isCurrent && "text-muted-foreground"
              )}>
                {step.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </nav>
  );
};
