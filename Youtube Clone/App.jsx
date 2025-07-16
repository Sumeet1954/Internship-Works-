import React, { useState } from 'react';
import { Box } from '@mui/material';
import YouTubeTopBar from './components/YouTubeTopBar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css'

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleDrawer = () => setSidebarOpen(prev => !prev);

  return (
    <Box sx={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
      {/* Fixed Top Bar */}
      <YouTubeTopBar toggleDrawer={toggleDrawer} />

      {/* Body: Sidebar + Main Content */}
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Sidebar open={sidebarOpen} />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            transition: 'margin 0.3s',
            ml: sidebarOpen ? '240px' : '80px',  // Dynamically shift content
            mt: '64px', // Offset for AppBar
            height: 'calc(100vh - 64px)',
            overflowY: 'auto',
            p: 2,
          }}
        >
          <Content />
        </Box>
      </Box>
    </Box>
  );
};

export default App;
