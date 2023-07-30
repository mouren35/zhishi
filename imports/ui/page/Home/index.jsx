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
  Typography, BottomNavigation, BottomNavigationAction
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import { makeStyles } from '@mui/styles';

import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';
import KnowlengePoint from '../KnowledgePoint';
import BookIcon from '@mui/icons-material/Book';
import AssignmentIcon from '@mui/icons-material/Assignment';

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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const [value, setValue] = useState(0);
  const [pageTitle, setPageTitle] = useState('知识点');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setPageTitle('知识点');
    } else if (newValue === 1) {
      setPageTitle('任务');
    }
  };


  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Box>
            <Typography variant="h6">
              {pageTitle}
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

      {value === 0 ? <KnowlengePoint /> : (
        <List>
          <ListItem>
            <ListItemText primary="列表项1" />
          </ListItem>
        </List>
      )}

      <div style={{ position: 'fixed', bottom: '72px', right: '36px' }}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>

      {/* <footer style={{ display: 'flex', justifyContent: 'center', position: 'fixed', bottom: '6px', left: '0', right: '0' }}>
        <p>今天学习xxx张卡片，用了xx分钟</p>
      </footer> */}

      <BottomNavigation value={value} onChange={handleChange} style={{ bottom: '0', position: 'fixed', width: '100%', justifyContent: 'space-around' }}>
        <BottomNavigationAction label="知识点" icon={<BookIcon />} />
        <BottomNavigationAction label="任务" icon={<AssignmentIcon />} />
      </BottomNavigation>

    </div>
  );
};

export default Home;