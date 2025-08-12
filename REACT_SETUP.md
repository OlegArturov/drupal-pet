# React 19.1.0+ and MUI Setup for Drupal

This project is configured to use React 19.1.0+, React-DOM 19.1.0+ and Material-UI in Drupal.

## Installing Dependencies

1. Install Node.js dependencies:
```bash
npm install
```

2. Build React application:
```bash
npm run build
```

## Project Structure

### React and MUI Libraries
- **React 19.1.0+** - available globally via CDN
- **React-DOM 19.1.0+** - available globally via CDN  
- **Material-UI 6.0.0+** - loaded separately with custom theme

### Custom Theme
- `web/themes/custom/react_theme/` - custom Drupal theme with React integration
- `web/themes/custom/react_theme/css/` - styles for React and MUI
- `web/themes/custom/react_theme/templates/` - Twig templates

### React Components
- `web/modules/custom/my_demo/js/react-app.js` - main React component
- `web/libraries/react-app/` - built React files

## Usage

### Activating Theme
1. Go to Drupal admin panel
2. Appearance → Themes
3. Activate "React Theme"

### Using in Modules
```php
return [
  '#type' => 'markup',
  '#markup' => '<div id="react-root"></div>',
  '#attached' => [
    'library' => [
      'react_theme/react-app',
    ],
  ],
];
```

### Custom MUI Theme
MUI theme is configured with:
- Primary color: #1976d2 (blue)
- Secondary color: #dc004e (pink)
- Font: Roboto

## Development

### Development Mode
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

## Features

1. **Global Access**: React and React-DOM are available globally via `window.React` and `window.ReactDOM`
2. **Custom MUI Theme**: Separate theme created with color and typography settings
3. **Webpack Build**: Build configured with Babel for modern JavaScript support
4. **Drupal Integration**: Full integration with Drupal library system

## Configuration Files

- `package.json` - Node.js dependencies
- `webpack.config.js` - build configuration
- `web/themes/custom/react_theme/react_theme.libraries.yml` - Drupal libraries
- `web/themes/custom/react_theme/react_theme.info.yml` - theme information 