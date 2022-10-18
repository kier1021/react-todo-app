import React from "react"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import SideBar from './SideBar';

const Header = ({ title }) => {

  const [sideBarOpen, setSideBarOpen] = React.useState(false);

  const handleSideBarOpen = () => {
      setSideBarOpen(true);
  };

  const handleSideBarClose = () => {
    setSideBarOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleSideBarOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
        </Toolbar>
        <SideBar handleSideBarClose={handleSideBarClose} sideBarOpen={sideBarOpen}></SideBar>
      </AppBar>
    </Box>
  );
};

Header.defaultProps = {
  title: "Todo App",
};

export default Header;
