# Drupal React Test Project

Project for testing React modules in Drupal.

## Installation and Setup

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd drupal-test
```

### 2. Start DDEV (will install Drupal dependencies)
```bash
ddev start
```

This will automatically:
- Install PHP dependencies via Composer
- Create database
- Configure web server

### 3. Install Node.js dependencies
```bash
npm install
```

This will install:
- React and React DOM
- Material-UI components
- Webpack and Babel for building
- All necessary dev dependencies

### 4. Build React applications
```bash
# For development (with watch mode)
npm run dev

# For production
npm run build
```

## Project Structure

```
drupal-test/
├── web/                          # Drupal root directory
│   ├── modules/custom/my_demo/   # Custom module
│   ├── themes/custom/react_theme/ # React theme
│   └── libraries/react-app/      # Built React files
├── package.json                  # Node.js dependencies
├── webpack.config.js            # Build configuration
└── test-react.html              # Test HTML file
```

## Available Commands

- `npm run dev` - build in development mode with watch
- `npm run build` - production build
- `npm run update-dashboard` - update drupal-dashboard
- `npm run upd-react-custom` - update and rebuild

## Important Files

- `package.json` - Node.js dependencies (tracked in Git)
- `webpack.config.js` - build configuration (tracked in Git)
- `test-react.html` - test file (tracked in Git)
- `node_modules/` - NOT tracked in Git (added via npm install)

## Notes

- All important configuration files are tracked in Git
- `node_modules` and other dependencies are excluded from Git
- After cloning the repository, run `npm install` to install Node.js dependencies
- After `npm install`, run `npm run upd-react-custom` to be sure that we have latest react component packages