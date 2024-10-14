import React, { createContext, useContext, useState, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('light');

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            light: '#4dabf5',
            main: '#2196f3',
            dark: '#1769aa',
            contrastText: '#FFFFFF',
          },
          secondary: {
            light: '#f73378',
            main: '#f50057',
            dark: '#ab003c',
            contrastText: '#FFFFFF',
          },
          background: {
            default: mode === 'light' ? '#F5F5F5' : '#121212',
            paper: mode === 'light' ? '#FFFFFF' : '#1E1E1E',
          },
          text: {
            primary: mode === 'light' ? '#333333' : '#FFFFFF',
            secondary: mode === 'light' ? '#757575' : '#B0B0B0',
          },
          error: {
            main: '#f44336',
          },
          warning: {
            main: '#ff9800',
          },
          info: {
            main: '#2196f3',
          },
          success: {
            main: '#4caf50',
          },
          grey: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#eeeeee',
            300: '#e0e0e0',
            400: '#bdbdbd',
            500: '#9e9e9e',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
          },
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontWeight: 700,
            fontSize: '2.5rem',
          },
          h2: {
            fontWeight: 600,
            fontSize: '2rem',
          },
          h3: {
            fontWeight: 600,
            fontSize: '1.75rem',
          },
          h4: {
            fontWeight: 600,
            fontSize: '1.5rem',
          },
          h5: {
            fontWeight: 600,
            fontSize: '1.25rem',
          },
          h6: {
            fontWeight: 600,
            fontSize: '1rem',
          },
          subtitle1: {
            fontSize: '1rem',
            fontWeight: 500,
          },
          subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 500,
          },
          body1: {
            fontSize: '1rem',
          },
          body2: {
            fontSize: '0.875rem',
          },
          button: {
            fontWeight: 600,
            textTransform: 'none',
          },
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: {
                boxShadow: 'none',
                borderBottom: `1px solid ${mode === 'light' ? '#E0E0E0' : '#424242'}`,
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: '8px',
                padding: '8px 16px',
              },
              contained: {
                boxShadow: 'none',
                '&:hover': {
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                },
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: '12px',
                boxShadow: mode === 'light' 
                  ? '0 4px 6px rgba(0, 0, 0, 0.05)' 
                  : '0 4px 6px rgba(255, 255, 255, 0.05)',
              },
            },
          },
          MuiTextField: {
            styleOverrides: {
              root: {
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                },
              },
            },
          },
        },
        shape: {
          borderRadius: 8,
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};