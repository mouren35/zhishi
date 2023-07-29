import {
  AppBar,
  Box,
  Drawer,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';
import KnowlengePoint from '../KnowledgePoint';

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

const ITEM_HEIGHT = 48;


function Home() {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isKeyboardOpen = window.innerHeight < window.outerHeight;
      setIsKeyboardOpen(isKeyboardOpen);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Box>
            <Typography variant="h6">
              AnkiDroid
            </Typography>
            <Typography variant="subtitle2">
              xxx张卡片待复习（）
            </Typography>
          </Box>
          <div style={{ marginLeft: 'auto' }}>
            <IconButton color="inherit" aria-label="search">
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="refresh">
              <RefreshIcon />
            </IconButton>
            <IconButton
              color='inherit'
              aria-label="more"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '20ch',
                },
              }}
            >
              {options.map((option) => (
                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button>
            <ListItemText primary="菜单项1" />
          </ListItem>
          <ListItem>
            <ListItemText primary="菜单项2" />
          </ListItem>
          <ListItem>
            <ListItemText primary="菜单项3" />
          </ListItem>
        </List>
      </Drawer>

      <KnowlengePoint/>
      <KnowlengePoint/>
      <KnowlengePoint/>

      <div style={{ position: 'fixed', bottom: isKeyboardOpen ? '72px' : '36px', right: '36px' }}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>

      <footer style={{ display: 'flex', justifyContent: 'center', position: 'fixed', bottom: '6px', left: '0', right: '0' }}>
        <p>今天学习xxx张卡片，用了xx分钟</p>
      </footer>
    </div>
  );
};

export default Home;