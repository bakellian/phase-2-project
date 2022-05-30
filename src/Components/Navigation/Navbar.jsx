import React from 'react'

//nav bar imports:
import { Link } from 'react-router-dom';
//things like these need to be in curly braces because they are being exported by their actual name / curly brackets = export / non curly brackets = export default 
//link helps us naviage without a refresh - keeps it a single page application - it's just manipulating the DOM. 
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
// handing down loggedin status from the app component
const NavBar = ( {loggedIn, userLogout, user }) => {

    const classes = useStyles();  //calling useStyles and setting it to classes to use dot notation to change the styling 

    const loggedInNav = () => {

        const handleOnClick = e => {
            e.preventDefault();
            userLogout();
        }

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                        { loggedIn ? <div>Pet Creator</div> : null }
                        </Typography>
                        <Button color="inherit" to='/' component={ Link }>Home</Button> 
                        {/* give it s component - say you want it to be a link and say here go to this route */ }{/* https://v4.mui.com/components/buttons/#third-party-routing-library */}
                        <Button color="inherit" to='/petlist' component={ Link }>Your Pets</Button>
                        <Button color="inherit" to='/petlist/new' component={ Link }>Create a Pet</Button>
                        <Button color="inherit" onClick={handleOnClick}>Logout</Button> 
                        {/* get logout to link to home */}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }

    const loggedOutNav = () => {
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Pet Creator
                        </Typography>
                        <Button color="inherit" to='/' component={ Link }>Home</Button> 
                        {/* give it s component - say you want it to be a link and say here go to this route */ }{/* https://v4.mui.com/components/buttons/#third-party-routing-library */}
                        <Button color="inherit" to='/signup' component={ Link }>Sign Up</Button>
                        <Button color="inherit" to='/login' component={ Link }>Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }

  return (
    <div>
        { loggedIn ? loggedInNav() : loggedOutNav() }
    </div>
  )
}

export default NavBar