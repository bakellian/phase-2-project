import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({ 
    root: {
        flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    }, 
}));

const NavBar = ( {loggedIn, userLogout, user }) => {

    const classes = useStyles();
    const navigate = useNavigate();

    const loggedInNav = () => {
        const handleOnClick = e => {
            e.preventDefault();
            userLogout();
            navigate('/login');
        }
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                        { loggedIn ? <div>Pet Creator</div> : null }
                        </Typography>
                        <Button color="inherit" to='/' component={ Link }>Home</Button> 
                        {/* https://v4.mui.com/components/buttons/#third-party-routing-library */}
                        <Button color="inherit" to='/petlist' component={ Link }>Your Pets</Button>
                        <Button color="inherit" to='/petlist/new' component={ Link }>Create a Pet</Button>
                        <Button color="inherit" onClick={handleOnClick}>Logout</Button> 
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