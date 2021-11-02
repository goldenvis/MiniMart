import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from './AddList.css';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}))

var latitude;
var longitude;

const AddList = () => {
  const classes = useStyles()
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), firstName: '', lastName: '',startDate:'',endDate:'' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setInputFields(newInputFields);
  }

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(),  category: '', subCategory: '' }])
  }

  const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }
  

  navigator.geolocation.getCurrentPosition(function(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    //console.log("Latitude is :", position.coords.latitude);
    //console.log("Longitude is :", position.coords.longitude);
  });



 /* fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + latitude + ',' + longitude + '&key=' + myApiKey)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson));
}) */

  const userId = "6787878677678248";
  const place = "Chennai";
  return (

  
    <div class="container">
  <div class="row">
      <h1> Welcome User: {userId}</h1>
      <h2>Your at Geo Location </h2>
      <h3>Latitude:  {latitude}      Longitude: {longitude}</h3>
      <h3> Your Place: {place}</h3>
      <h1>Add New Items</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        { inputFields.map(inputField => (
          <div key={inputField.id}>
          
            <TextField
              name="category"
              label="Category"
              variant="filled"
              value={inputField.category}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
            <TextField
              name="subcategory"
              label="Sub category"
              variant="filled"
              value={inputField.subcategory}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
            
           
            
            <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
              <RemoveIcon />
            </IconButton>
            <IconButton
              onClick={handleAddFields}
            >
              <AddIcon />
            </IconButton>
            <DatePicker
               selected={startDate}
                  onChange={onChange}
                 startDate={startDate}
                  endDate={endDate}
                   selectsRange
                     inline
                
                    />
            </div>

          
        )) }

        <Button
          className={classes.button}
          variant="contained" 
          color="primary" 
          type="submit" 
          endIcon={<Icon>send</Icon>}
          onClick={handleSubmit}
        >Send</Button>
      </form>
    </div>
    </div>
  );
  console.log(endDate);
}


export default AddList;