"use client";
import React, { useState } from 'react';
import {
  Box, TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid, Typography, Card, CardContent, CardActions, IconButton, Checkbox
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

const FeatureCard = ({ feature, onFeatureChange, onFeatureToggleEdit, onSaveFeature }) => {
  const [editFeatureName, setEditFeatureName] = useState(feature.name);

  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Grid container alignItems="center">
          <Grid item xs={feature.editing ? 8 : 10}>
            {feature.editing ? (
              <TextField
                fullWidth
                value={editFeatureName}
                onChange={(e) => setEditFeatureName(e.target.value)}
                variant="standard"
              />
            ) : (
              <Typography variant="body1">{feature.name}</Typography>
            )}
          </Grid>
          <Grid item xs={2}>
            <Checkbox
              checked={feature.included}
              onChange={() => onFeatureChange(feature.id)}
            />
          </Grid>
          <Grid item xs={2}>
            <IconButton size="small" onClick={() => feature.editing ? onSaveFeature(feature.id, editFeatureName) : onFeatureToggleEdit(feature.id)}>
              {feature.editing ? <SaveIcon /> : <EditIcon />}
            </IconButton>
            {feature.editing && (
              <IconButton size="small" onClick={() => onFeatureToggleEdit(feature.id)}>
                <CancelIcon />
              </IconButton>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const Page = () => {
  const [subscription, setSubscription] = useState({
    title: '',
    amount: '',
    frequency: 'monthly',
    details: '',
    features: [
      { id: 1, name: 'Newsletter access', included: false, editing: false },
      { id: 2, name: 'Mailing Address', included: true, editing: false },
      { id: 3, name: 'Mail Scanning & Security', included: true, editing: false },
      { id: 4, name: 'HD Audio & Video Calls', included: true, editing: false },
      { id: 5, name: 'No Telegram Access', included: false, editing: false }
    ]
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSubscription({ ...subscription, [name]: value });
  };

  const handleFeatureChange = (featureId) => {
    const newFeatures = subscription.features.map((f) => {
      if (f.id === featureId) {
        return { ...f, included: !f.included };
      }
      return f;
    });
    setSubscription({ ...subscription, features: newFeatures });
  };

  const toggleFeatureEdit = (featureId) => {
    const newFeatures = subscription.features.map((f) => {
      if (f.id === featureId) {
        return { ...f, editing: !f.editing };
      }
      return f;
    });
    setSubscription({ ...subscription, features: newFeatures });
  };

  const saveFeatureName = (featureId, newName) => {
    const newFeatures = subscription.features.map((f) => {
      if (f.id === featureId) {
        return { ...f, name: newName, editing: false };
      }
      return f;
    });
    setSubscription({ ...subscription, features: newFeatures });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submission logic here
    console.log(subscription);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 4 }}>
      <Typography variant="h4" gutterBottom>Add Subscription</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* Subscription Details */}
          {/* Title */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={subscription.title}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          {/* Amount */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Amount"
              name="amount"
              value={subscription.amount}
              onChange={handleChange}
              type="number"
              variant="outlined"
              required
            />
          </Grid>
          {/* Frequency */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Frequency</InputLabel>
              <Select
                fullWidth
                name="frequency"
                value={subscription.frequency}
                onChange={handleChange}
                required
              >
                <MenuItem value="monthly">Monthly</MenuItem>
                <MenuItem value="yearly">Yearly</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* Details */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Details"
              name="details"
              value={subscription.details}
              onChange={handleChange}
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>
          {/* Features */}
          <Grid item xs={12}>
            <Typography variant="h6">Features</Typography>
            {subscription.features.map((feature) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                onFeatureChange={handleFeatureChange}
                onFeatureToggleEdit={toggleFeatureEdit}
                onSaveFeature={saveFeatureName}
              />
            ))}
          </Grid>
          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{background:"#32385a"}}
            >
              Add Subscription
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Page;
