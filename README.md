# Aman Tokyo

A Vue 3 + Vite rebuild of the Aman Tokyo hotel page.

## Requirements

- [Node.js](https://nodejs.org/) 18 or newer (includes npm)

## Getting started

Install dependencies (only needed the first time, or after pulling new changes):

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the URL shown in the terminal (by default http://localhost:5173). The page reloads automatically as you edit files.

## Production build

Create an optimized build in the `dist/` folder:

```bash
npm run build
```

Preview that production build locally:

```bash
npm run preview
```

## Project structure

```
src/
├── main.js        Mounts the app
├── App.vue        Composes all sections
├── assets/        Global styles (main.css)
├── data/          Page content (content.js)
└── components/    Section components (Header, Hero, Gallery, etc.)
```
