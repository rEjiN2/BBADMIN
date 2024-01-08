"use client";
import React, { useState } from 'react';
import {
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextareaAutosize,
  InputAdornment,
  Chip,
} from '@mui/material';
import Image from 'next/image';

const AddCourse = () => {
  const [courseDetails, setCourseDetails] = useState({
    title: '',
    description: '',
    image: '',
    price: '',
    selectedDateTimes: [],
  });


  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setCourseDetails({ ...courseDetails, image: file, previewImage: URL.createObjectURL(file) });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCourseDetails({ ...courseDetails, [name]: value });
  };

  const handleTimeChange = (dateIndex, time) => {
    const updatedDateTimes = [...courseDetails.selectedDateTimes];
    updatedDateTimes[dateIndex].times.push(time);
    setCourseDetails({ ...courseDetails, selectedDateTimes: updatedDateTimes });
  };

  const handleDateChange = (event) => {
    const { value } = event.target;
    setCourseDetails({
      ...courseDetails,
      selectedDateTimes: [...courseDetails.selectedDateTimes, { date: value, times: [] }],
    });
  };

  const handleChipDelete = (dateIndex, timeIndex) => {
    const updatedDateTimes = [...courseDetails.selectedDateTimes];
    updatedDateTimes[dateIndex].times.splice(timeIndex, 1);

    if (updatedDateTimes[dateIndex].times.length === 0) {
      updatedDateTimes.splice(dateIndex, 1);
    }

    setCourseDetails({ ...courseDetails, selectedDateTimes: updatedDateTimes });
  };

  const handleDateDelete = (dateIndex) => {
    const updatedDateTimes = [...courseDetails.selectedDateTimes];
    updatedDateTimes.splice(dateIndex, 1);
    setCourseDetails({ ...courseDetails, selectedDateTimes: updatedDateTimes });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(courseDetails);
  };

  const times = ['09:00', '12:00', '15:00', '18:00'];

  return (
    <Paper style={{ padding: '20px', margin: '20px', width: '60%' }}>
      <Typography variant="h6" style={{ marginBottom: '20px' }}>
        Add New Course
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Course Title"
              variant="outlined"
              fullWidth
              name="title"
              value={courseDetails.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
              minRows={3}
              placeholder="Course Description"
              style={{
                width: '100%',
                borderRadius: '4px',
                fontSize: '16px',
                border: '1px solid #ced4da', // Standard border color
                padding: '8px', // Standard padding
                marginTop: '8px', // Standard margin top
              }}
              name="description"
              value={courseDetails.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="image-upload"
            type="file"
            onChange={handleImageChange}
          />
          <label htmlFor="image-upload">
            <Button variant="contained" color="primary" component="span">
              Upload Image
            </Button>
          </label>
          {courseDetails.image && (
            <>
              <Typography variant="body2" style={{ marginLeft: '10px' }}>
                {courseDetails.image.name}
              </Typography>
              <Image
                src={courseDetails.previewImage}
                alt="Preview"
                style={{ marginTop: '10px', maxWidth: '100%', maxHeight: '200px' }}
              />
            </>
          )}
        </Grid>
          <Grid item xs={12}>
            <TextField
              label="Price"
              variant="outlined"
              fullWidth
              name="price"
              value={courseDetails.price}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            {courseDetails.selectedDateTimes.map((dateTime, dateIndex) => (
              <div key={dateIndex} style={{ marginBottom: '10px' }}>
                <Typography variant="subtitle1">{`Date: ${dateTime.date}`}</Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  onClick={() => handleDateDelete(dateIndex)}
                  style={{ marginBottom: '5px' }}
                >
                  Delete Date
                </Button>
                <div>
                  {dateTime.times.map((time, timeIndex) => (
                    <Chip
                      key={timeIndex}
                      label={time}
                      onDelete={() => handleChipDelete(dateIndex, timeIndex)}
                      style={{ marginRight: '5px', marginBottom: '5px' }}
                    />
                  ))}
                </div>
                <FormControl fullWidth>
                  {/* <InputLabel>Available Times</InputLabel> */}
                  <Select
                    multiple
                    value={[]}
                    onChange={(event) => handleTimeChange(dateIndex, event.target.value)}
                    renderValue={(selected) => (
                      <div>
                        {selected.map((value, index) => (
                          <Chip
                            key={index}
                            label={value}
                            onDelete={() => handleChipDelete(dateIndex, index)}
                            style={{ marginRight: '5px', marginBottom: '5px' }}
                          />
                        ))}
                      </div>
                    )}
                  >
                    {times.map((time) => (
                      <MenuItem key={time} value={time}>
                        {time}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            ))}
            <Typography>Date & Time</Typography>
            <TextField
              // label="Select Date"
              type="date"
              fullWidth
              name="selectedDate"
              value={courseDetails.selectedDate}
              onChange={handleDateChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Add Course
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default AddCourse;
