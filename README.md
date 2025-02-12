## **Project Overview**
This project is a frontend application fork of the [Supercake Coding Challenge](https://github.com/maximilianschmitt/supercake-coding-challenge). It is a React-based project that uses **Next.js**, with **TypeScript** for type-safety, **TailwindCSS** for styling, and several other modern tools and libraries to streamline development, manage state, and enhance functionality.

[Task Description](https://maxschmitt.notion.site/Supercake-Coding-Challenge-17f414f335b580bbb980f75bb37394e6)

## **Short description**
The task requires pretending to be a real app, not just a concept. So, I created a folder structure (see below) and some reusable components. I used `zustand` for state management, `react-query` for data fetching, `lucide-react` for icons, and `tailwindcss` for styling. Additionally, I created some custom hooks for state management and other functionalities. For data fetching and caching, I used `@tanstack/react-query`. I also added global styles and custom types for TypeScript.

For custom SVG icons, I enhanced the Webpack configuration to handle SVG imports as React components. I also added a script to handle SVG imports as URLs (see in the description below). And created a custom component for importing SVG icons dynamically by name via webpack context.

I wrote a custom animation for the popover. Normally, I use `react-spring` for animations, but I didn't use it here because it was a simple animation. Unfortunately, this library still does not support React 19 (as of 12.02.25).

## **Demo**

https://github.com/user-attachments/assets/975cfbf7-1f0a-4d22-8ec3-687965cad899


## **Project Structure**
📁 **src/**
- 📁 **app/**: Core of application with pages, api, layout etc.
- 📁 **components/**: Reusable React components.
- 📁 **components/ui/**: UI components like buttons, inputs, etc.
- 📁 **hooks/**: Custom hooks for state management and other functionalities.
- 📁 **providers/**: Context providers for global state management.
- 📁 **public/**: Static assets like images, fonts, etc.
- 📁 **store/**: Global state management using Zustand.
- 📁 **types/**: Custom TypeScript types and interfaces.

## **Key Dependencies**
### **Production Dependencies**
- `@tailwindcss/postcss`: Extends TailwindCSS functionality for PostCSS.
- `@tanstack/react-query`: Handles server-side data synchronization for React components.
- `lucide-react`: A library of beautiful, consistent SVG icons for React.
- `zustand`: State management library for predictable and simple global state handling.

### **Development Dependencies**
- `@svgr/webpack`: Facilitates the use of SVG files as React components during development.

## **Package Configuration (`package.json`)**
- The `scripts` section contains commands for essential development tasks:
    - **`dev`**: Start the Next.js development server.
    - **`build`**: Build the application for production.
    - **`start`**: Start the production server.
    - **`lint`**: Run ESLint to identify issues in the codebase.
    - **`format`**: Automatically format the code using Prettier.
    - **`typecheck`**: Check for TypeScript type errors.
    - **`checks`**: Run a combination of linting, type-checking, and format validation for overall sanity checking of the codebase.

## **Webpack Customization in `next.config.ts`**
The Webpack configuration has been extended to:
1. Handle **SVG imports** as URLs if they are suffixed with `?url`.
2. Convert other **SVG imports** into React components via `@svgr/webpack`.
3. Update the rule for file-loader to exclude `.svg` files explicitly handled by the above rules.

## **How to Get Started**
### **Initial Setup**
1. Clone the repository and install dependencies:
``` bash
   npm install
```
1. Run the development server:
``` bash
   npm run dev
```
### **Scripts in `package.json`**
The project contains several utility scripts to facilitate development:
- **`dev`**: Local development server.
- **`lint`**: Identify and fix linting issues.
- **`format`**: Automatically format all supported files (`.js`, `.ts`, etc.).
- **`typecheck`**: Ensure TypeScript types are sound.
- **`checks`**: Run a full set of tests (type-checking, linting, formatting checks) for pre-commit validations.

### **Building for Production**
1. Generate production build:
``` bash
   npm run build
```
1. Start the production server:
``` bash
   npm run start
```
### **SVG Handling with Webpack**
SVG files can now be imported in two different ways:
- As a URL:
``` tsx
  import logoUrl from './logo.svg?url';
  console.log(logoUrl); // Outputs the URL to the SVG file
```
- As a React Component:
``` tsx
  import { ReactComponent as Logo } from './logo.svg';
  <Logo />;
```

