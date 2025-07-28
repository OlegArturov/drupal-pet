import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box, Typography, Button, Card, CardContent, AppBar, Toolbar, Container } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import DashboardPage from 'drupal-dashboard';

console.log('React version:', React.version);
console.log('createRoot available:', typeof createRoot !== 'undefined');

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'page1':
        return (
          <Card sx={{ maxWidth: 600, mx: 'auto', mt: 3 }}>
            <CardContent>
              <Typography variant="h4" component="h2" gutterBottom>
                This is the first page
              </Typography>
              <Typography variant="body1" color="text.secondary">
                This page demonstrates React 19.1.0+ with Material-UI integration in Drupal.
              </Typography>
            </CardContent>

            <DashboardPage />
          </Card>
        );
      case 'page2':
        return (
          <Card sx={{ maxWidth: 600, mx: 'auto', mt: 3 }}>
            <CardContent>
              <Typography variant="h4" component="h2" gutterBottom>
                This is the second page
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Another page showing the power of React and MUI in Drupal.
              </Typography>
            </CardContent>
          </Card>
        );
      default:
        return (
          <Card sx={{ maxWidth: 600, mx: 'auto', mt: 3 }}>
            <CardContent>
              <Typography variant="h4" component="h2" gutterBottom>
                This is the test front page
              </Typography>
              <Typography variant="body1" color="text.secondary">
                React 19.1.0+ with Material-UI in Drupal!
              </Typography>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <HomeIcon sx={{ mr: 2 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              React + MUI Demo (Main React App Wrapper)
            </Typography>
          </Toolbar>
        </AppBar>
        
        <Container sx={{ mt: 3 }}>
          <Box sx={{ mb: 3, display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button 
              variant={currentPage === 'home' ? 'contained' : 'outlined'}
              onClick={() => setCurrentPage('home')}
              startIcon={<HomeIcon />}
            >
              Base Page
            </Button>
            <Button 
              variant={currentPage === 'page1' ? 'contained' : 'outlined'}
              onClick={() => setCurrentPage('page1')}
              startIcon={<InfoIcon />}
            >
              Page with module form package
            </Button>
            <Button 
              variant={currentPage === 'page2' ? 'contained' : 'outlined'}
              onClick={() => setCurrentPage('page2')}
              startIcon={<InfoIcon />}
            >
              Page number two
            </Button>
          </Box>
          
          {renderPage()}
        </Container>
      </Box>
    </ThemeProvider>
  );
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, looking for react-root element...');
  const container = document.getElementById('react-root');
  if (container) {
    console.log('Found react-root, initializing React...');
    try {
      const root = createRoot(container);
      root.render(<App />);
      console.log('React app initialized successfully!');
    } catch (error) {
      console.error('Error initializing React:', error);
    }
  } else {
    console.error('react-root element not found!');
  }
});

window.ReactApp = {
  App,
  theme,
}; 