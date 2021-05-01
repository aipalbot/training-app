import React, { useState, useEffect } from 'react';
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

//create a model that looks like what API is expecting
const trainingRequest = {
  "costPerTraining": 5,
"durationPerMonth":7
}

export default function TrainingForm() {
  const classes = useStyles();

  const [data, setData] = useState(trainingRequest);
  const [cost, setCost] = useState("");
 

  //create a function called handleInputChange
  const handleInputChange = e => {

    e.preventDefault();
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value
    });

  }




    const submitClick = () => {
      // compute hours per month
      const numberOfWeeks = 4;
      const numberOfHoursWeek = 4;
      const hoursPerMonth = numberOfWeeks * numberOfHoursWeek;
      const costPerHour = data.costPerTraining / (data.durationPerMonth * hoursPerMonth);
      
      setCost(costPerHour);
      console.log(data);
    }

    return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <br></br>

        <TextField 
        name="costPerTraining"
        value={data.costPerTraining} 
        label="Training Cost" 
        id="standard-size-small" 
        placeholder="Cost Per Training" 
        size="small"
        onChange={handleInputChange}
        /> <br/>

        <TextField 
        name="durationPerMonth"
        value={data.durationPerMonth}
        label="Duration" 
        id="standard-size-small"
        placeholder="Duration (Months)" 
        size="small"       
        onChange={handleInputChange}
           /><br/>
        

        <TextField 
        label="Cost/Hour" 
        id="standard-size-small" 
        placeholder="Cost Per Hour" 
        size="small" 
        name = "costPerHour"
        value={cost}
        /> <br />
        
        <Button 
        variant="contained" 
        color="secondary"
        onClick={submitClick}>
        Calculate Cost
        </Button>

      </div>
      
    </form>
  );
}
