import React from 'react'

//nav bar imports:
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

//styling for nav bar:
const useStyles = makeStyles((theme) => ({ //when we call makeStyles it returns a hook
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

const NavBar = () => {

    const classes = useStyles();  //calling useStyles and setting it to classes to use dot notation to change the styling 

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Project Name 
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Sign Up</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar