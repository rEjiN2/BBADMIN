import React from 'react';
import { Container, Typography, Paper, TextField, Button, Grid } from '@mui/material';

const AccountSettings = () => {
  return (
    <Container>
      <Paper style={{ padding: 20, marginTop: 30 }}>
        <Typography variant="h5" style={{ marginBottom: 20 }}>
          Account Settings
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField label="First Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Last Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email Address" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type="password" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AccountSettings;
