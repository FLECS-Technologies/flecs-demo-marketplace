"use client";

import { motion } from "framer-motion";
import { 
  MonitorSmartphone,
  Puzzle,
  ShoppingBag,
  CloudCog,
  ArrowRight,
  ArrowDown
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const steps = [
  {
    number: "01",
    title: "Connect Hardware",
    description: "Connect your automation hardware to our digital platform with our simple integration process.",
    icon: MonitorSmartphone,
    color: "text-blue-500",
    ringColor: "ring-blue-500/20"
  },
  {
    number: "02",
    title: "Create Apps",
    description: "Build and deploy apps that extend your hardware's functionality and create new value for customers.",
    icon: Puzzle,
    color: "text-purple-500",
    ringColor: "ring-purple-500/20"
  },
  {
    number: "03",
    title: "Launch Marketplace",
    description: "Set up your branded marketplace where customers can discover and purchase your digital solutions.",
    icon: ShoppingBag,
    color: "text-pink-500",
    ringColor: "ring-pink-500/20"
  },
  {
    number: "04",
    title: "Manage Platform",
    description: "Control your platform with powerful tools for user management, analytics, and app deployment.",
    icon: CloudCog,
    color: "text-green-500",
    ringColor: "ring-green-500/20"
  }
];

export function ProductJourney() {
  return (
    <section className="overflow-hidden py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="mb-3">
            How It Works
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">
            Your Journey to Digital Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Follow our proven process to transform your hardware business into a digital powerhouse.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mx-auto mt-20 max-w-3xl">
          <div className="space-y-16 sm:space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="relative shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardHeader className="flex flex-row items-start space-y-0 p-6 sm:p-8">
                    <div className="flex-1">
                      <div className="flex items-center space-x-6">
                        <span className="text-5xl font-bold text-[#FF2E63] font-mono">{step.number}</span>
                        <div className={`w-14 h-14 rounded-xl ring-2 ${step.ringColor} flex items-center justify-center`}>
                          <step.icon className={`w-7 h-7 ${step.color}`} />
                        </div>
                      </div>
                      <CardTitle className="mt-6 text-xl">{step.title}</CardTitle>
                      <CardDescription className="mt-3 text-base leading-relaxed">{step.description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                {index < steps.length - 1 && (
                  <div className="absolute left-[2.75rem] top-full h-16 sm:h-20 w-px bg-border">
                    <ArrowDown className="absolute -bottom-2 left-1/2 h-5 w-5 -translate-x-1/2 text-muted-foreground" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mx-auto mt-24 sm:mt-32 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            size="lg" 
            className="bg-[#FF2E63] hover:bg-[#ff2e63]/90 px-8"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
