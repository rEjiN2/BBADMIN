import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const AddAdmin = () => {
  return (
    <Card sx={{ margin: '1rem' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
        <Typography sx={{ padding: '1rem', fontFamily: 'Rubik', fontSize: '25px' }}>Add Admin</Typography>
      </Box>

      <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, padding: '1rem' }}>
        <div>
          <TextField required id="name" label="Name" variant="outlined" />
          <TextField required id="email" label="Email" variant="outlined" />
          <TextField
            id="role"
            label="Role"
            variant="outlined"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
        </div>
        <div>
          <FormLabel component="legend">Action</FormLabel>
          <RadioGroup row aria-label="action" name="row-radio-buttons-group">
            <FormControlLabel value="add" control={<Radio />} label="Admin" />
            <FormControlLabel value="cancel" control={<Radio />} label="Super Admin" />
          </RadioGroup>
        </div>
        <Button variant='outlined' sx={{ width: '200px', border: '2px solid #f3f3f3', background: '#f9d423', textTransform: 'none', color: '#fff', borderRadius: '17px', '&:hover': { border: '2px solid #f3f3f3', background: '#f9d423' } }}>
          Submit
        </Button>
      </Box>
    </Card>
  );
};

export default AddAdmin;
