import React, { useState } from 'react';
import { TextField, Button, Card, CardContent } from '@mui/material';

function StepTwo({ updateForm, formData, nextStep, prevStep }) {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    updateForm({ [e.target.name]: e.target.value });
  };

  const validateFields = () => {
    const newErrors = {};
    if (!formData.AddressLine1.trim()) {
      newErrors.AddressLine1 = "Address Line 1 is required";
    }
    if (!formData.City.trim()) {
      newErrors.City = "City is required";
    }
    if (!formData.State.trim()) {
      newErrors.State = "State is required";
    }
    if (!/^\d{5}$/.test(formData.ZipCode)) {
      newErrors.ZipCode = "Zip Code must be exactly 5 digits";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // True if no errors
  };

  const handleNext = () => {
    if (validateFields()) nextStep(); // Proceed only if validation passes
  };

  return (
    <Card>
      <CardContent>
       
        <TextField
          label="Address Line 1"
          name="AddressLine1"
          value={formData.AddressLine1}
          onChange={handleChange}
          error={!!errors.AddressLine1}
          helperText={errors.AddressLine1 || ''}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Address Line 2"
          name="AddressLine2"
          value={formData.AddressLine2}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="City"
          name="City"
          value={formData.City}
          onChange={handleChange}
          error={!!errors.City}
          helperText={errors.City || ''}
          fullWidth
          margin="normal"
        />
        <TextField
          label="State"
          name="State"
          value={formData.State}
          onChange={handleChange}
          error={!!errors.State}
          helperText={errors.State || ''}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Zip Code"
          name="ZipCode"
          type="text"
          value={formData.ZipCode}
          onChange={handleChange}
          error={!!errors.ZipCode}
          helperText={errors.ZipCode || ''}
          fullWidth
          margin="normal"
        />
        <div>
          <Button variant="outlined" color="secondary" onClick={prevStep}>
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default StepTwo;
