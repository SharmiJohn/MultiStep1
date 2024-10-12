import React, { useState } from 'react';
import { TextField, Button, Card, CardContent } from '@mui/material';

function StepOne({ updateForm, formData, nextStep }) {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    updateForm({ [e.target.name]: e.target.value });
  };

  const validateFields = () => {
    const newErrors = {};
    if (formData.Name.trim().split(' ').length < 2) {
      newErrors.Name = "Name must contain at least 2 words";
    }
    if (!formData.Email.endsWith('@gmail.com') && !formData.Email.endsWith('@email.com')) {
      newErrors.Email = "Email should end with gmail.com or email.com";
    }
    if (!/^\d{10}$/.test(formData.Phone)) {
      newErrors.Phone = "Phone number must be exactly 10 digits";
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
          label="Name"
          name="Name"
          value={formData.Name}
          onChange={handleChange}
          error={!!errors.Name}
          helperText={errors.Name || ''}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="Email"
          type="email"
          value={formData.Email}
          onChange={handleChange}
          error={!!errors.Email}
          helperText={errors.Email || ''}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone"
          name="Phone"
          type="tel"
          value={formData.Phone}
          onChange={handleChange}
          error={!!errors.Phone}
          helperText={errors.Phone || ''}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </CardContent>
    </Card>
  );
}

export default StepOne;
