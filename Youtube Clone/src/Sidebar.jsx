import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Avatar,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const menuItems = [
  { text: 'Home', icon: <HomeIcon /> },
  { text: 'Shorts', icon: <MovieIcon /> },
  { text: 'Subscriptions', icon: <SubscriptionsIcon /> },
];

const youItems = [
  { text: 'History', icon: <HistoryIcon /> },
  { text: 'Playlists', icon: <LibraryBooksIcon /> },
  { text: 'Your videos', icon: <VideoLibraryIcon /> },
  { text: 'Your courses', icon: <YouTubeIcon /> },
  { text: 'Watch later', icon: <WatchLaterIcon /> },
  { text: 'Liked videos', icon: <ThumbUpIcon /> },
];

const subscriptions = [
  { name: 'Nancy Solanki', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { name: 'JavaScript Mastery', avatar: 'https://yt3.googleusercontent.com/ytc/AGIKgqMDOa-LOGO=s88-c-k-c0x00ffffff-no-rj' },
];

const Sidebar = ({ open }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Drawer
      variant="permanent"
      open={open}
      PaperProps={{
        sx: {
          width: open ? 240 : 80,
          transition: 'width 0.3s',
          position: 'fixed',
          top: '64px',
          left: 0,
          height: 'calc(100vh - 64px)',
          overflowX: 'hidden',
          borderRight: '1px solid #ddd',
        },
      }}
    >
      <Box sx={{ overflowY: 'auto', height: '100%', pr: 1, pt: 2.5 }}> {/* 20px padding */}
        <List>
          {menuItems.map(({ text, icon }) => (
            <ListItem
              button
              key={text}
              sx={{
                px: open ? 2 : 1,
                justifyContent: 'center',
                flexDirection: open ? 'row' : 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <ListItemIcon sx={{ color: '#111', minWidth: 0, mb: open ? 0 : 0.5 }}>
                {icon}
              </ListItemIcon>
              {open && <ListItemText primary={text} />}
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 1 }} />
        {open && <Typography variant="subtitle2" sx={{ pl: 2 }}>You</Typography>}

        <List>
          {youItems.map(({ text, icon }) => (
            <ListItem
              button
              key={text}
              sx={{
                px: open ? 2 : 1,
                justifyContent: 'center',
                flexDirection: open ? 'row' : 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <ListItemIcon sx={{ color: '#111', minWidth: 0, mb: open ? 0 : 0.5 }}>
                {icon}
              </ListItemIcon>
              {open && <ListItemText primary={text} />}
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 1 }} />
        {open && <Typography variant="subtitle2" sx={{ pl: 2 }}>Subscriptions</Typography>}

        <List>
          {subscriptions.map(({ name, avatar }) => (
            <ListItem
              button
              key={name}
              sx={{
                px: open ? 2 : 1,
                justifyContent: 'center',
                flexDirection: open ? 'row' : 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <ListItemIcon sx={{ minWidth: 0, mb: open ? 0 : 0.5 }}>
                <Avatar src={avatar} sx={{ width: 24, height: 24 }} />
              </ListItemIcon>
              {open && <ListItemText primary={name} />}
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
