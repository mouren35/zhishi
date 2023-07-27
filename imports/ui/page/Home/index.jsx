import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function Home() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div style={{ height: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            知识
          </Typography>
        </Toolbar>
      </AppBar>

      <div style={{ height: '100%' }}>
        111
      </div>

      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Recents" icon={<MenuBookIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FormatListBulletedIcon />} />
      </BottomNavigation>
    </div>
  );
}
