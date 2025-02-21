# Flecs Marketplace Tutorial - Product Requirements Document

## Overview
Transform the existing Flecs Marketplace tutorial component into a standalone demo application at demo.flecs.tech. Users will be directed here from the "Live Demo" button on flecs.tech for an immediate, interactive learning experience.

## Current State Analysis
- Tutorial exists as part of larger website in `components/interactive-tutorial/`
- Main components:
  - `marketplace-demo.tsx`: Core tutorial logic
  - `tutorial-guide.tsx`: Tutorial instructions
  - `tutorial-steps/`: Step components
  - UI components in `components/ui/`

## Goals
- Convert tutorial component into standalone application at demo.flecs.tech
- Remove non-tutorial website elements
- Create focused user journey
- Provide clear exit path back to flecs.tech

## Technical Requirements

### Component Retention
#### Keep:
- `components/interactive-tutorial/*`
- Essential UI components from `components/ui/`
- Core styling and animation dependencies

#### Remove:
- Hero section
- Story section
- Product Journey
- FLECSelerator
- Other marketing components

### Dependencies
Essential packages to retain:
- framer-motion (animations)
- radix-ui components (UI elements)
- tailwind (styling)
- react/next.js core

### File Structure
```
flecs-demo-marketplace/
├── app/
│   ├── page.tsx (immediate tutorial start)
│   └── layout.tsx (simplified)
├── components/
│   ├── interactive-tutorial/
│   └── ui/ (essential only)
└── styles/
    └── globals.css
```

## User Flow

### 1. Entry Flow
- User clicks "Live Demo" on flecs.tech
- Redirects to demo.flecs.tech
- Tutorial starts immediately
- Progress indicator shows step 1/7

### 2. Tutorial Flow
Existing steps to maintain:
1. Download Apps Demo
2. Version Management
3. Store Creation
4. Branding Customization
5. App Selection
6. Custom App Creation
7. Revenue Potential Overview

### 3. Navigation & UI
- Header with Flecs branding
- Progress indicator
- Step navigation (Previous/Next)
- Persistent "Exit to flecs.tech" button
- Full-screen tutorial view

## Implementation Phases

### Phase 1: Component Isolation (1-2 days)
- Remove non-tutorial components
- Modify app/page.tsx for immediate tutorial start
- Clean up dependencies

### Phase 2: UI Enhancement (2-3 days)
- Implement new header
- Add progress indicator
- Create navigation controls
- Design exit flow

### Phase 3: Polish (2-3 days)
- Add transitions between steps
- Implement progress saving
- Add analytics tracking
- Mobile responsiveness

## Success Metrics
- Tutorial completion rate
- Time per step
- Exit click-through rate to flecs.tech
- Error/drop-off points

## Technical Details

### State Management
- Maintain existing tutorial state in marketplace-demo.tsx
- Add progress tracking
- Implement exit handling

### Styling
- Keep existing Tailwind configuration
- Maintain Flecs brand guidelines
- Focus on readability and clear CTAs

### Performance
- Remove unused dependencies
- Optimize component loading
- Minimize bundle size

## Timeline
- Component Isolation: 2 days
- UI Enhancement: 3 days
- Polish & Testing: 3 days

Total estimated time: 8 working days

## Exit Strategy
- Clear completion screen
- Direct CTA to flecs.tech
- Optional feedback form
- Tutorial restart option

## Deployment
- Deploy to demo.flecs.tech
- Set up SSL certificate
- Configure redirect from flecs.tech "Live Demo" button
- Monitor initial user flow and analytics
