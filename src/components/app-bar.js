import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../static/images/logo-loones.jpg'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function AppBarComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
            <img src={logo} alt="Loones Logo"/>
        </Toolbar>
      </AppBar>
    </div>
  );
}