import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { CallMissedSharp } from '@material-ui/icons';

const useStyles = makeStyles({
  primaryButtonColor: {
    backgroundColor: 'pink'
  }
})

const App = () => { //changed to arrow function to keep it up to date with ES6 best practices
  const classes = useStyles();
  
  return (
    <div>
      <h1>Hello!</h1>
      <Button variant="contained" className={ classes.primaryButtonColor }>Primary button</Button>
      <Button variant="outlined" color="primary">Secondary button</Button>
    </div>
  );
}

export default App;
