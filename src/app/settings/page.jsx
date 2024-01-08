"use client";
import React, { useState } from 'react';
import { Container, Typography, Paper, TextField, Button, Grid, Switch, FormControlLabel, Tab, Tabs, Box, Avatar } from '@mui/material';
import { CameraAlt as CameraAltIcon, Edit as EditIcon, Save as SaveIcon, Close as CloseIcon } from '@mui/icons-material';

const AccountSettings = () => {
  const [selectedTab, setSelectedTab] = useState('account');
  const [editMode, setEditMode] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    // Add logic to handle the image file, such as uploading to a server or displaying it.
    setProfileImage(imageFile);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleToggleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {

    setEditMode(false);
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={selectedTab} onChange={handleTabChange} aria-label="account settings tabs">
            <Tab label="Account" value="account" />
            <Tab label="Password" value="password" />
          </Tabs>
        </Box>

        {selectedTab === 'account' && (
          <Grid container spacing={2} style={{ marginTop: '20px' }}>
            <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
              <Avatar style={{ width: 80, height: 80, margin: 'auto' }} />
              <label htmlFor="image-upload">
  <Button component="span" size="small" startIcon={<CameraAltIcon />} style={{ marginTop: '10px' }}>
    Upload
  </Button>
</label>

            </Grid>

            <Grid item xs={12} sm={8}>
              <TextField label="Username" variant="outlined" fullWidth margin="normal" disabled={!editMode} />
              <TextField label="First Name" variant="outlined" fullWidth margin="normal" disabled={!editMode} />
              <TextField label="Last Name" variant="outlined" fullWidth margin="normal" disabled={!editMode} />
              <TextField label="Email" variant="outlined" fullWidth margin="normal" disabled={!editMode} />
              <TextField label="Phone Number" variant="outlined"  fullWidth margin="normal" disabled={!editMode} />
              <FormControlLabel 
                control={<Switch disabled={!editMode} />} 
                label="Email Alerts" 
                style={{ margin: 'normal' }} 
              />
              <FormControlLabel 
                control={<Switch disabled={!editMode} />} 
                label="More Options" 
                style={{ margin: 'normal' }} 
              />
            
              <Button 
                startIcon={editMode ? <SaveIcon /> : <EditIcon />} 
                onClick={editMode ? handleSave : handleToggleEdit}
                style={{ marginTop: '10px' }}
              >
                {editMode ? 'Save' : 'Edit'}
              </Button>
              {editMode && (
                <Button 
                  startIcon={<CloseIcon />} 
                  onClick={() => setEditMode(false)}
                  style={{ marginTop: '10px', marginLeft: '10px' }}
                >
                  Close
                </Button>
              )}
            </Grid>
          </Grid>
        )}

        {selectedTab === 'password' && (
          <Grid container spacing={2} style={{ marginTop: '20px' }}>
            <Grid item xs={12}>
              <TextField label="Current Password" type="password" variant="outlined" fullWidth margin="normal" />
              <TextField label="New Password" type="password" variant="outlined" fullWidth margin="normal" />
              <TextField label="Confirm New Password" type="password" variant="outlined" fullWidth margin="normal" />
              <Button 
                variant="contained" 
                color="primary" 
                style={{ marginTop: '20px' }}
              >
                Change Password
              </Button>
            </Grid>
          </Grid>
        )}

    

      </Paper>
    </Container>
  );
};

export default AccountSettings;
