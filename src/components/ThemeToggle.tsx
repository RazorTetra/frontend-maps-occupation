import { IconButton, useTheme as useMuiTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '../providers/themeProvider';

const ThemeToggle = () => {
  const { mode, toggleTheme } = useTheme();
  const muiTheme = useMuiTheme(); 

  return (
    <IconButton 
      onClick={toggleTheme} 
      sx={{
        color: mode === 'dark' ? muiTheme.palette.primary.contrastText : muiTheme.palette.primary.main,
      }}
    >
      {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeToggle;