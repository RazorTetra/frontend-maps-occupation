import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery, useTheme } from '@mui/material';
import { Drawer, IconButton, Box } from '@mui/material';
import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';

interface SidebarProps {
  content: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarVariants = {
    open: { width: 240, transition: { duration: 0.3 } },
    closed: { width: 60, transition: { duration: 0.3 } },
  };

  const bottomBarVariants = {
    open: { height: '50vh', transition: { duration: 0.3 } },
    closed: { height: 0, transition: { duration: 0.3 } },
  };

  if (isMobile) {
    return (
      <>
        <IconButton
          onClick={toggleSidebar}
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            zIndex: theme.zIndex.drawer + 2,
            bgcolor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            '&:hover': {
              bgcolor: theme.palette.primary.dark,
            },
          }}
        >
          <MenuIcon />
        </IconButton>
        <motion.div
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={bottomBarVariants}
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            background: theme.palette.background.paper,
            zIndex: theme.zIndex.drawer + 1,
            overflow: 'hidden',
            boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Box sx={{ height: '100%', overflow: 'auto', p: 2 }}>
            {content}
          </Box>
        </motion.div>
      </>
    );
  }

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebarVariants}
    >
      <Drawer
        variant="permanent"
        sx={{
          width: isOpen ? 240 : 60,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: isOpen ? 300 : 60,
            boxSizing: 'border-box',
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
            // Subtle top margin adjustment
            marginTop: theme.spacing(8), // Adjust this value as needed
            height: `calc(100% - ${theme.spacing(1)}px)`, // Adjust to match marginTop
          },
        }}
      >
        <IconButton onClick={toggleSidebar} sx={{ m: 1 }}>
          {isOpen ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
        {isOpen && <Box sx={{ p: 2 }}>{content}</Box>}
      </Drawer>
    </motion.div>
  );
};

export default Sidebar;