"use client";

import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Building2,
  Check,
  Code,
  Heart,
  Link,
  Puzzle,
  Rocket,
  Shield,
  Timer,
  Users
} from 'lucide-react';
import Image from 'next/image';

const impactStories = [
  {
    title: "Your Digital Layer",
    description: "Build and customize your marketplace exactly how you envision it",
    icon: Code,
    proof: {
      quote: "FLECS gave us the foundation to build our perfect marketplace. Every feature, every workflow - exactly as we needed it. The ability to customize everything means we can deliver exactly what our customers expect.",
      author: "Michael Weber",
      role: "Chief Technology Officer",
      company: "Smart Factory Systems",
      image: "/images/profiles/michael.jpg",
      metric: "100% ownership",
      impact: "Reduced development time by 80%",
      location: "Munich, Germany"
    },
    benefit: "Complete flexibility to shape your digital future",
    color: "from-violet-500 to-violet-600",
    bgColor: "from-violet-50/50 to-transparent"
  },
  {
    title: "Your Customer Relations",
    description: "Build lasting relationships directly with your customers",
    icon: Heart,
    proof: {
      quote: "Our customer engagement skyrocketed once we could interact with them directly through our FLECS marketplace. We now have a direct line to our customers, understanding their needs better than ever.",
      author: "Sarah Chen",
      role: "Head of Digital",
      company: "Industrial Solutions GmbH",
      image: "/images/profiles/sarah.jpg",
      metric: "2.3x engagement",
      impact: "Customer satisfaction up 45%",
      location: "Hamburg, Germany"
    },
    benefit: "Direct connection with your customers",
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50/50 to-transparent"
  },
  {
    title: "Your System Landscape",
    description: "Integrate smoothly with your existing infrastructure",
    icon: Puzzle,
    proof: {
      quote: "The integration was seamless. FLECS adapted to our systems, not the other way around. We were able to maintain our existing workflows while adding powerful new capabilities.",
      author: "Anna Martinez",
      role: "Product Director",
      company: "AutoTech Solutions",
      image: "/images/profiles/anna.jpg",
      metric: "3 days setup",
      impact: "Zero disruption to operations",
      location: "Stuttgart, Germany"
    },
    benefit: "Perfect fit with your infrastructure",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "from-emerald-50/50 to-transparent"
  }
];

const transformationPoints = [
  {
    before: "2 Years Development Time",
    after: "6 Weeks to Launch",
    icon: Timer,
    color: "from-violet-500 to-violet-600"
  },
  {
    before: "Complex Integration",
    after: "Seamless Connection",
    icon: Link,
    color: "from-blue-500 to-blue-600"
  },
  {
    before: "Indirect Customer Relations",
    after: "Direct Customer Ownership",
    icon: Users,
    color: "from-emerald-500 to-emerald-600"
  }
];

const valueProposition = [
  {
    title: "Launch Fast",
    description: "From concept to market in 6 weeks",
    icon: Rocket,
    stats: "75% faster",
    detail: "than traditional development"
  },
  {
    title: "Keep Control",
    description: "Direct customer relationships",
    icon: Shield,
    stats: "100%",
    detail: "customer data ownership"
  },
  {
    title: "Scale Seamlessly",
    description: "Perfect fit with existing systems",
    icon: Puzzle,
    stats: "Zero",
    detail: "disruption to current operations"
  }
];

const successStories = [
  {
    name: "Sarah Chen",
    role: "Head of Digital Transformation",
    company: "Industrial Solutions GmbH",
    image: "/images/profiles/sarah.jpg",
    quote: "In just 6 weeks, we launched our digital marketplace. What previously seemed like a 2-year project became reality in weeks.",
    metrics: [
      { label: "Time Saved", value: "18 months" },
      { label: "Customer Retention", value: "97%" },
      { label: "ROI", value: "312%" }
    ]
  },
  {
    name: "Michael Weber",
    role: "CTO",
    company: "Smart Factory Systems",
    image: "/images/profiles/michael.jpg",
    quote: "The direct customer relationships we've built through our marketplace have transformed our business model completely.",
    metrics: [
      { label: "Customer Growth", value: "156%" },
      { label: "Time to Market", value: "6 weeks" },
      { label: "Revenue Increase", value: "243%" }
    ]
  },
  {
    name: "Anna Martinez",
    role: "Product Director",
    company: "AutoTech Solutions",
    image: "/images/profiles/anna.jpg",
    quote: "The seamless integration with our existing systems made the transition smooth. Our team was amazed by the simplicity.",
    metrics: [
      { label: "Integration Time", value: "3 days" },
      { label: "System Uptime", value: "99.9%" },
      { label: "Team Adoption", value: "100%" }
    ]
  }
];

const features = [
  {
    title: "Your Marketplace",
    description: "Launch your branded digital marketplace with complete control",
    icon: Heart,
    benefits: ["Custom branding", "Full ownership", "Flexible pricing"]
  },
  {
    title: "Your Integration",
    description: "Seamlessly connects with your existing automation landscape",
    icon: Puzzle,
    benefits: ["No disruption", "API-first", "Automated setup"]
  },
  {
    title: "Your Data",
    description: "Keep complete control of your customer relationships",
    icon: Shield,
    benefits: ["Data ownership", "Direct relations", "Complete privacy"]
  }
];

const MotionDiv = motion.div;

export const Story: FC = () => {
  return (
    <section 
      id="story-section" 
      className="w-full max-w-7xl mx-auto px-6 py-24 scroll-mt-20"
    >
      {/* Vision Section */}
      <div className="mb-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Own Your Digital Layer,
            <br />
            Own Your Customer Relations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take control of your digital future
          </p>
        </div>

        <div className="space-y-32">
          {impactStories.map((story, index) => (
            <MotionDiv
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="max-w-5xl mx-auto"
            >
              {/* Story Section */}
              <div className="text-center mb-16">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${story.color} flex items-center justify-center text-white mb-6 mx-auto shadow-lg`}>
                  <story.icon className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold mb-4">{story.title}</h3>
                <p className="text-xl text-muted-foreground mb-6">{story.description}</p>
                <div className="text-lg font-medium text-primary">{story.benefit}</div>
              </div>

              {/* Enhanced Proof Point */}
              <div className="bg-background rounded-3xl p-12 border shadow-lg">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <div className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={story.proof.image}
                        alt={story.proof.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-grow">
                    <blockquote className="text-2xl italic mb-8 text-foreground/90 leading-relaxed">
                      "{story.proof.quote}"
                    </blockquote>
                    
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                      {/* Author Info */}
                      <div>
                        <div className="text-xl font-semibold">{story.proof.author}</div>
                        <div className="text-lg text-muted-foreground mb-1">{story.proof.role}</div>
                        <div className="text-sm text-muted-foreground">{story.proof.company}</div>
                        <div className="text-sm text-muted-foreground">{story.proof.location}</div>
                      </div>

                      {/* Impact Metrics */}
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-primary">{story.proof.metric}</div>
                        <div className="text-sm text-muted-foreground">{story.proof.impact}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Connection */}
              {index < impactStories.length - 1 && (
                <div className="h-24 w-px bg-gradient-to-b from-primary/20 to-transparent mx-auto mt-24" />
              )}
            </MotionDiv>
          ))}
        </div>

        {/* FLECSelerator CTA */}
        <div className="mt-32 text-center bg-gradient-to-br from-background to-primary/5 rounded-3xl p-12 border shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Ready to Launch Your Marketplace?</h3>
          <p className="text-xl text-muted-foreground mb-8">
            Get started with FLECSelerator and launch in just 6 weeks
          </p>
          <Button
            size="lg"
            className="h-14 px-8 text-lg font-medium bg-primary hover:bg-primary/90"
          >
            Start with FLECSelerator
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      {/* Hero Section - Transformation Focus */}
      <div className="text-center mb-32">
        <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary mb-8">
          <Rocket className="w-4 h-4 mr-2" />
          Launch Your Digital Marketplace in Weeks, Not Years
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent leading-tight">
          Own Your Digital Layer,
          <br />
          Own Your Customer Relations
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
          Transform your automation business into a digital powerhouse while maintaining direct customer relationships
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button
            size="lg"
            className="h-14 px-8 text-lg font-medium bg-primary hover:bg-primary/90"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-14 px-8 text-lg font-medium"
          >
            Watch Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      {/* Transformation Section */}
      <div className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            The Transformation
          </h2>
          <p className="text-xl text-muted-foreground">
            See how your business transforms with a digital marketplace
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformationPoints.map((point, index) => (
            <MotionDiv
              key={point.before}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative p-8 rounded-2xl border bg-gradient-to-b from-background to-background/50"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${point.color} flex items-center justify-center text-white mb-6`}>
                <point.icon className="w-8 h-8" />
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-muted-foreground line-through">
                    {point.before}
                  </div>
                  <div className="text-2xl font-semibold text-foreground">
                    {point.after}
                  </div>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>

      {/* Value Proposition with Stats */}
      <div className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Clear Benefits, Real Results
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need for digital success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProposition.map((value, index) => (
            <MotionDiv
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300"
            >
              <value.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground mb-6">{value.description}</p>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">
                  {value.stats}
                </div>
                <div className="text-sm text-muted-foreground">
                  {value.detail}
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>

      {/* Success Stories - Now with Metrics */}
      <div className="mb-32 bg-gradient-to-b from-background via-primary/5 to-background py-20 -mx-6 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Customer Success Stories
          </h2>
          <p className="text-xl text-muted-foreground">
            See how companies are transforming their business
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <MotionDiv
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-background rounded-2xl p-8 border shadow-lg relative"
            >
              <div className="flex items-center mb-8">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden mr-6">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-xl">{story.name}</div>
                  <div className="text-muted-foreground">{story.role}</div>
                  <div className="text-primary">{story.company}</div>
                </div>
              </div>
              <blockquote className="text-lg mb-8 text-foreground/90 leading-relaxed">
                "{story.quote}"
              </blockquote>
              <div className="grid grid-cols-3 gap-4">
                {story.metrics.map((metric) => (
                  <div key={metric.label} className="text-center">
                    <div className="text-xl font-bold text-primary">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>

      {/* Features with Benefits */}
      <div className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground">
            A complete solution for your digital transformation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <MotionDiv
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-2xl border bg-gradient-to-b from-background to-background/50"
            >
              <feature.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground mb-6">{feature.description}</p>
              <ul className="space-y-3">
                {feature.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-primary mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </MotionDiv>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-b from-background to-primary/5 rounded-3xl p-16 border shadow-lg">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Join the companies who are building stronger customer relationships through digital innovation
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="h-14 px-8 text-lg font-medium bg-primary hover:bg-primary/90 w-full sm:w-auto"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-14 px-8 text-lg font-medium w-full sm:w-auto"
          >
            Schedule Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
