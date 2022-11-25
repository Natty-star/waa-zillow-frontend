import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Select } from '@mui/material';
import { InputLabel } from '@mui/material';
import './addProperty.css'
import { useState,useRef,useEffect } from 'react';
import { MenuItem , Button} from '@mui/material';
import axios from 'axios';

export default function AddressForm() {

  const [selected, setSelected] = useState('');

  const newPropertiesForm= useRef();

  const selectionChangeHandler = (event) => {
    setSelected(event.target.value);
  };

  const [selectedCategory, setSelectedCategory] = useState('');

  const selectionCategoryChangeHandler = (event) => {
    setSelectedCategory(event.target.value);
  };

  const [selectedFile, setSelectedFile] = useState('');

  function handleImage(e){
      console.log(e.target.files)
      setSelectedFile(e.target.files[0])
  }

  function handleApi(){
    const formData= new FormData()
    formData.append('selectedFile', selectedFile)
    axios.post('url',formData).then((res)=> {
      console.log(res)
    })
  }

  const propertyHandler = () =>{
      const form =newPropertiesForm.current
      const data={
        name:form['title'].value,
        email:form['email'].value,
        bedrooms: form['bedrooms'].value,
        bathrooms: form['bathrooms'].value,
        price:form['price'].value,
        area: form['area'].value,
        latitude: form['latitude'].value,
        longitude:form['longitude'].value,
        hometype: form['hometype'].value,
        category: form['category'].value,
        file: form['file'].value
      };
      console.log(data);
        axios.post('http://localhost:8080/api/v1/properties', data)
        .then(data => {
            console.log('Success', data);
        })
        .catch(error => {
            console.error('Error:', error);
        })
    }

  // useEffect(  ()=> {
  //     newPropertiesForm.current['name'].value= "Dean";
  // } , []);


  return (
    <div className="NewProperties">
      <form ref={newPropertiesForm}>
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Add Property
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            required
            id="title"
            name="title"
            label="Title"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} >
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
        
        <TextField

          required
          id="bedrooms"
          name="bedrooms"
          label="Bedrooms"
          input type="number"
          fullWidth
          autoComplete="bedroom"
          variant="standard"
      />
        </Grid>


        <Grid item xs={12} sm={6}>
        
        <TextField

          required
          id="bathrooms"
          name="bathrooms"
          label="Bathrooms"
          input type="number"
          fullWidth
          autoComplete="bathroom"
          variant="standard"
      />
        </Grid>


        <Grid item xs={12} sm={6}>
        
        <TextField
          required
          id="price"
          name="price"
          label="Price"
          input type="number"
          step="0.1"
          min='0'
          max='20'
          fullWidth
          autoComplete="bedroom"
          variant="standard"
      />
     </Grid>


     <Grid item xs={12} sm={6}>
        
        <TextField
          required
          id="area"
          name="area"
          label="Area"
          input type="number"
          step="0.1"
          min='0'
          max='20'
          fullWidth
          autoComplete="area"
          variant="standard"
      />
     </Grid>


     <Grid item xs={12} sm={6}>
        
        <TextField
          required
          id="latitude"
          name="latitude"
          label="Latitude"
          input type="number"
          step="0.1"
          min='0'
          max='20'
          fullWidth
          autoComplete="latitude"
          variant="standard"
      />
     </Grid>

     <Grid item xs={12} sm={6}>
        
        <TextField
          required
          id="longitude"
          name="longitude"
          label="Longitude"
          input type="number"
          step="0.1"
          min='0'
          max='20'
          fullWidth
          autoComplete="longitude"
          variant="standard"
      />
     </Grid>

     <Grid item xs={6}>

        <InputLabel id="label" required>Home Type</InputLabel>
       
        <Select labelId="label" id="select" name='hometype' value={selected} onChange={selectionChangeHandler} fullWidth>
          <MenuItem value="Home">Home</MenuItem>
          <MenuItem value="Apartment">Apartment</MenuItem>
          <MenuItem value="TownHouse">TownHouse</MenuItem>
        </Select>
            
    </Grid>
   
    <Grid item xs={6}>
      <InputLabel id="label"  required> Category </InputLabel>

      <Select labelId="label" id="select" name='category' value={selectedCategory} onChange={selectionCategoryChangeHandler} fullWidth>
        <MenuItem value="Sell">Sell</MenuItem>
        <MenuItem value="Rent">Rent</MenuItem>
        
      </Select>
     
      </Grid>
      
      <Grid item  xs={5}>
      
      <Button  id= "uploadButton"
         onClick={handleApi}
         variant="contained"
         component="label">
        <input
          type="file"
          name= 'file'
          onClick={handleImage}
          
        />
        
      </Button>
      </Grid>
  

   
      </Grid>
    </React.Fragment>
    </form>

    <div className="button">
      <br />
    <button onClick={propertyHandler }> Add Property </button>
    </div>
   
    </div>
  );
}