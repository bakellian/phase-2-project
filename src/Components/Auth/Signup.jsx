import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const Signup = () => {

    const classes = useStyles();

    const [userName, setUserName] = React.useState('');
    
    const handleChange = (event) => {
    setUserName(event.target.value);

  };
    
  return (
    <div>
        <h1>Sign Up</h1>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="filled-name"
          label="Username"
          value={userName}
          onChange={handleChange}
          variant="filled"
        />
         <input type="submit" value="Sign Up" />
    </form>
    </div>

  )
}

export default Signup