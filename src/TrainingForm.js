import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function TrainingForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <br></br>
        <TextField label="Training Cost" id="standard-size-small" defaultValue="Cost Per Training" size="small" /> <br/>
        <TextField label="Duration" id="standard-size-small" defaultValue="Duration (Months)" size="small" /><br/>
        <TextField label="Cost/Hour" id="standard-size-small" defaultValue="Cost Per Hour" size="small" /> <br />
        <Button variant="contained" color="primary">
        Calculate Cost
      </Button>
      </div>
      
    </form>
  );
}
