"use client";
import React from 'react';
import { Box, Card, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const AddCustomer = () => {
  // State for form fields
  const [customer, setCustomer] = React.useState({
    name: '',
    email: '',
    subtype: '',
    price: '',
    package: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCustomer(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(customer);
  };

  return (
    <Card sx={{margin: '1rem'}}>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem'}}>
        <Typography padding='1rem' fontFamily='Rubik' fontSize='25px'>Add Customer</Typography>
      </Box>
      <Box component="form" onSubmit={handleSubmit} sx={{ padding: '1rem' }}>
        <TextField label="Name" variant="outlined" fullWidth margin="normal" name="name" value={customer.name} onChange={handleChange} />
        <TextField label="Email" variant="outlined" fullWidth margin="normal" name="email" value={customer.email} onChange={handleChange} />
        <FormControl fullWidth margin="normal">
          <InputLabel>Subscription Type</InputLabel>
          <Select
            value={customer.subtype}
            label="Subscription Type"
            onChange={handleChange}
            name="subtype"
          >
            <MenuItem value="monthly">Monthly</MenuItem>
            <MenuItem value="yearly">Yearly</MenuItem>
          </Select>
        </FormControl>
        <TextField label="Price" variant="outlined" fullWidth margin="normal" name="price" value={customer.price} onChange={handleChange} />
        <TextField label="Package" variant="outlined" fullWidth margin="normal" name="package" value={customer.package} onChange={handleChange} />
        <Button type="submit" variant='outlined' sx={{ width: '200px', marginY: '1rem', border: '2px solid #f3f3f3', background: '#f9d423', textTransform: 'none', color: '#fff', borderRadius: '17px', '&:hover': { border: '2px solid #f3f3f3', background: '#f9d423' }}}>
          Add Customer
        </Button>
      </Box>
    </Card>
  );
};

export default AddCustomer;
