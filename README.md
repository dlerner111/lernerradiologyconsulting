# David Lerner Web

Portfolio website built with React and Tailwind CSS.

## Tech Stack

- React (`react-scripts`)
- Tailwind CSS

## Prerequisites

Install the following on your machine:

- Node.js (recommended: `18.x` or `20.x`)
- npm (comes with Node) or Yarn

Check versions:

```bash
node -v
npm -v
```

## Run Locally

1. Clone the repository:

```bash
git clone <your-repo-url>
cd <project-folder-name>
```

1. Install dependencies:

Using npm:

```bash
npm install
```

Using Yarn:

```bash
yarn install
```

1. Start the development server:

Using npm:

```bash
npm run start
```

Using Yarn:

```bash
yarn run start
```

The app runs at:

- `http://localhost:3000`

## Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in development mode.
- `npm test` - Launches the test runner in interactive watch mode.
- `npm run build` - Builds the app for production in the `build` folder.
- `npm run eject` - Ejects Create React App configuration (irreversible).

If you use Yarn, replace `npm run <script>` with `yarn <script>`.

## Production Build (Local)

Create an optimized production build:

```bash
npm run build
```

Serve the production build locally (optional):

```bash
npx serve -s build
```

Then open:

- `http://localhost:3000`

## Project Structure (Important Files)

- `src/App.js` - Main app composition
- `src/components/` - UI sections (`Header`, `MiddleSection`, `Footer`)
- `src/utils/data.js` - Page content/data source
- `src/index.css` - Global styles and Tailwind setup
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS plugins

## Troubleshooting

- If dependencies fail to install, delete `node_modules` and lock file, then reinstall:

```bash
rm -rf node_modules
npm install
```

- If port `3000` is busy, React prompts for another port automatically.

