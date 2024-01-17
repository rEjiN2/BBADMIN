"use client";
import React, { useState } from 'react';
import { Typography, Paper, TextField,  Button,  Grid,  FormControl,  InputLabel,  Select,  MenuItem, TextareaAutosize, InputAdornment, Chip,  Box,} from '@mui/material';
import Image from 'next/image';
import { Add } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';

const AddCourse = () => {
  const [title,setTitle] = useState('')
  const [description, setDescription] = useState('');
  const maxCharacters = 60;
  const [image,setImage] = useState(null);
  const [price,setPrice]= useState(80)
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [dateTimeChips, setDateTimeChips] = useState([]);
  const [maxUsers,setMaxUser] = useState(50)
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
};
const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
};

const handleDescriptionChange = (e) => {
  const inputText = e.target.value;
  if (inputText.length <= maxCharacters) {
    setDescription(inputText);
  } else {
    // Truncate the input to the maximum allowed characters
    const truncatedText = inputText.slice(0, maxCharacters);
    setDescription(truncatedText);
  }
};

const addDateTime = () => {
    if (selectedDate && selectedTime) {
        const existingDate = dateTimeChips.find(entry => entry.date === selectedDate);
        if (existingDate) {        
            if (!existingDate.time.includes(selectedTime)) {
                existingDate.time.push(selectedTime);
                setDateTimeChips([...dateTimeChips]);
            } else {             
                alert("This time is already selected for the chosen date.");
            }
        } else {
            setDateTimeChips([...dateTimeChips, { date: selectedDate, time: [selectedTime] }]);
        }
        setSelectedTime('');
    }
};

const deleteChip = (date, timeToDelete) => {
  setDateTimeChips(dateTimeChips => {
  
    const updatedChips = dateTimeChips.map(entry => {
      if (entry.date === date) {
        return { ...entry, time: entry.time.filter(time => time !== timeToDelete) };
      }
      return entry;
    });

   
    return updatedChips.filter(entry => entry.time.length > 0);
  });
};


const handleSubmit = async(event)=>{
  event.preventDefault(); 

  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('price', price);
  formData.append('image', image);
  formData.append('maxUsers',maxUsers)
  formData.append('dateTimeChips', JSON.stringify(dateTimeChips)); 

  try {
    const response = await fetch('/api/addcourse', {
      method: 'POST',
      body: formData,
    });

    if(response.status==201){
      window.location.reload()
    }
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Handle the response from the server
    const result = await response.json();
    console.log('Server response:', result);
    // Reset form or redirect user based on the response
  } catch (error) {
    console.error('Submission error:', error);
  }
}
  


  const times = ['09:00', '12:00', '15:00', '18:00'];

  return (
    <Box sx={{display:'grid' ,placeItems:'center',height:'90dvh'}}>
    <Paper style={{ padding: '20px', margin: '20px', width: '60%', }}>
      <Typography variant="h6" style={{ marginBottom: '20px' }}>
        Add New Course
      </Typography>
      <form onSubmit={handleSubmit} >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Course Title"
              variant="outlined"
              fullWidth
              name="title"
           
              onChange={(e)=>{setTitle(e.target.value)}}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
             multiline
             rows={3}
             placeholder="Course Description"
             style={{
               width: '100%',
               borderRadius: '4px',
               fontSize: '16px',
               border: '1px solid #ced4da',
               padding: '8px',
               marginTop: '8px',
             }}
             name="description"
             value={description}
             onChange={handleDescriptionChange}
            />
          </Grid>
          <Grid item xs={12}>
          <TextField type='file' placeholder='Uplaod the image' sx={{width:'100%'}} onChange={(e)=>setImage(e.target.files[0])} /> 
        </Grid>
          <Grid item xs={12}>
            <TextField
              label="Price"
              variant="outlined"
              fullWidth
              name="price"
              
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              onChange={(e)=>{setPrice(e.target.value)}}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Max Users"
              variant="outlined"
              fullWidth
              type='number'
              name="users"
              onChange={(e)=>{setMaxUser(e.target.value)}}
            />
          </Grid>
          <Grid item xs={12}>
          <>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center',  justifyContent: 'center' }}>
                <TextField
                    type="date"
                    fullWidth
                    value={selectedDate}
                    sx={{ width: '20%',borderRadius:0 }}
                    onChange={handleDateChange}
                    InputProps={{style:{borderRadius:0}}}
                />
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedTime}
                    sx={{ width: '70%',borderRadius:0 }}
                    onChange={handleTimeChange}
                >
                    {times.map((time, index) => (
                        <MenuItem key={index} value={time}>{time}</MenuItem>
                    ))}
                </Select>
                <Button sx={{width:'10%',background:'#000',height:'55px',borderRadius:0,'&:hover':{background:'#000'}}} onClick={addDateTime}>
                    <Add style={{color:'white'}}/>
                </Button>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px',justifyContent:'center' }}>
                {dateTimeChips.map((entry, index) => (
                    <Box key={index}>
                        <Typography variant="subtitle1" fontSize='15px' fontWeight='bold'>{entry.date}</Typography>
                        {entry.time.map((time, timeIndex) => (
                            <Chip key={timeIndex} sx={{marginRight:'1rem',background:'#7f63f4'}}  label={time} 
                            onDelete={() => deleteChip(entry.date, time)}
                            deleteIcon={<CloseIcon />}
                            />
                        ))}
                    </Box>
                ))}
            </Box>
        </>
            

                

          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Add Course
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
    </Box>
  );
};

export default AddCourse;
