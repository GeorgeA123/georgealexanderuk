# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based portfolio website for George Alexander, built with Vite, TypeScript, and Bun as the runtime. The project uses a component-based architecture with a custom theme system. Deployed to Cloudflare Pages via GitHub Actions on push to `main`.

## Development Commands

- **Install dependencies**: `bun install`
- **Start development server**: `bun dev` (uses Vite dev server)
- **Build for production**: `bun run build` (runs TypeScript compiler then Vite build)
- **Preview production build**: `bun run preview`
- **Lint code**: `bun run lint` (ESLint with TypeScript rules, max 0 warnings)

## Architecture & Patterns

### Component Structure
Components follow a consistent pattern with separate files for:
- `Component.tsx` - Main component implementation
- `Component.types.ts` - TypeScript interfaces and types
- `Component.css` - Component-specific styles

### Theme System
The project uses a centralized theme system:
- `ThemeProvider` manages global theme state via React Context
- Theme values are applied as CSS custom properties on `:root`
- Default theme defined in `src/theme/theme.ts` with color and font configuration
- Components access theme via `useTheme()` hook

### File Organization
- `src/components/` - Reusable UI components (Hero, Navigation)
- `src/pages/` - Page-level components (HomePage)
- `src/theme/` - Theme configuration and provider
- `src/styles/` - Global CSS styles
- `public/fonts/` - Custom font files (ABC Oracle typeface)

### TypeScript Configuration
- Uses modern TypeScript with strict mode enabled
- Path aliasing configured: `@/*` maps to `./src/*`
- Bundler module resolution for Vite compatibility
- No emit mode (bundler handles compilation)

### Styling Approach
- CSS custom properties for theme values (not CSS modules)
- Component-specific CSS files with BEM-like naming (e.g., `.hero__container`, `.hero__cta-icon`)
- Global styles in `src/styles/global.css`
- Custom font: ABC Oracle loaded from `/public/fonts/`

### Custom Hooks
- `useScrollDirection` - Returns scroll direction ('up'/'down') and scrollY position for scroll-based UI (e.g., hiding/showing navigation)

## Key Technologies

- **Runtime**: Bun v1.3.5+
- **Build Tool**: Vite 6.0+  
- **Framework**: React 18 with TypeScript
- **Styling**: CSS with custom properties
- **Linting**: ESLint with React and TypeScript plugins