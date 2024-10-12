import React from 'react';
import { Button, Card, CardContent, Typography, Box, Grid, Paper } from '@mui/material';

const StepThree = ({ formData, prevStep, onSubmit }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h4" gutterBottom align="center">
          Confirmation
        </Typography>
        <Typography variant="h6" gutterBottom align="center">
          Review your information:
        </Typography>
        <Paper elevation={2} style={{ padding: '16px', marginBottom: '16px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1"><strong>Name:</strong> {formData.Name}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1"><strong>Email:</strong> {formData.Email}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1"><strong>Phone:</strong> {formData.Phone}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1"><strong>Address Line 1:</strong> {formData.AddressLine1}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1"><strong>Address Line 2:</strong> {formData.AddressLine2}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1"><strong>City:</strong> {formData.City}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1"><strong>State:</strong> {formData.State}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1"><strong>Zip Code:</strong> {formData.ZipCode}</Typography>
            </Grid>
          </Grid>
        </Paper>
        <Box display="flex" justifyContent="space-between">
          <Button variant="outlined" color="secondary" onClick={prevStep}>
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={onSubmit}>
            Submit
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StepThree;
