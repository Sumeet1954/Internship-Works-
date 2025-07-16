// YouTubeTopBar.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  Avatar,
  Button,
  Box,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import AddIcon from "@mui/icons-material/Add";
import NotificationsIcon from "@mui/icons-material/Notifications";

const SearchContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f1f1f1",
  padding: "4px 10px",
  borderRadius: 24,
  flex: 1,
  maxWidth: 500,
}));

const YouTubeTopBar = ({ toggleDrawer }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "#fff",
        color: "black",
        boxShadow: 1,
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 1, sm: 2 },
          py: 1,
        }}
      >
        {/* Left: Menu + Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Box
            component="img"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube"
            sx={{ height: 24, ml: 1 }}
          />
        </Box>

        {/* Center: Search */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <SearchContainer>
            <InputBase placeholder="Search" fullWidth sx={{ fontSize: 14 }} />
            <IconButton type="submit" size="small">
              <SearchIcon />
            </IconButton>
          </SearchContainer>
          <IconButton sx={{ ml: 1 }}>
            <MicIcon />
          </IconButton>
        </Box>

        {/* Right: Create + Notifications + Avatar */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {!isMobile && (
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              sx={{
                textTransform: "none",
                borderRadius: "20px",
                fontSize: 13,
                mr: 2,
              }}
            >
              Create
            </Button>
          )}
          <IconButton>
            <Badge badgeContent={9} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar
            alt="User"
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            sx={{ width: 32, height: 32, ml: 2 }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default YouTubeTopBar;
