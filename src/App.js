import React, { useState, useEffect } from 'react';
import { Grid, Container, Stepper, Step, StepLabel } from '@mui/material';
import StepOne from './Component/StepOne'; // Step 1 Component
import StepTwo from './Component/StepTwo'; // Step 2 Component
import StepThree from './Component/StepThree'; // Step 3 Component

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    AddressLine1: "",
    AddressLine2: "",
    City: "",
    State: "",
    ZipCode: ""
  });

  // Load data from local storage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('formData'));
    if (storedData) {
      setFormData(storedData);
    }
  }, []);

  // Save form data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  // Function to update form data
  const updateForm = (input) => {
    setFormData((prev) => ({ ...prev, ...input }));
  };

  // Function to handle final submission
  const handleFinalSubmit = () => {
    alert("Successfully submitted!"); // Show success alert
    console.log("Form Submitted", formData);
    
    // Clear the form data from local storage upon submission
    localStorage.removeItem('formData');
    
    // Optionally reset form data or navigate to a success page
    setFormData({
      Name: "",
      Email: "",
      Phone: "",
      AddressLine1: "",
      AddressLine2: "",
      City: "",
      State: "",
      ZipCode: ""
    });
    setStep(1); // Reset to the first step
  };

  // Function to handle step click
  const handleStepClick = (index) => {
    if (index < step - 1) {
      // Allow navigating back to previous steps without validation
      setStep(index + 1);
    } else if (index === step - 1) {
      // Prevent going forward if there are validation errors
      if (step === 1) {
        if (!validateStepOne()) return;
      } else if (step === 2) {
        if (!validateStepTwo()) return;
      }
      setStep(index + 1);
    }
  };

  // Validation for Step One
  const validateStepOne = () => {
    const errors = {};
    if (formData.Name.trim().split(' ').length < 2) {
      errors.Name = "Name must contain at least 2 words";
    }
    if (!formData.Email.endsWith('@gmail.com') && !formData.Email.endsWith('@email.com')) {
      errors.Email = "Email should end with gmail.com or email.com";
    }
    if (!/^\d{10}$/.test(formData.Phone)) {
      errors.Phone = "Phone number must be exactly 10 digits";
    }
    return Object.keys(errors).length === 0; // True if no errors
  };

  // Validation for Step Two
  const validateStepTwo = () => {
    const errors = {};
    if (!formData.AddressLine1.trim()) {
      errors.AddressLine1 = "Address Line 1 is required";
    }
    if (!formData.City.trim()) {
      errors.City = "City is required";
    }
    if (!formData.State.trim()) {
      errors.State = "State is required";
    }
    if (!/^\d{5}$/.test(formData.ZipCode)) {
      errors.ZipCode = "Zip Code must be exactly 5 digits";
    }
    return Object.keys(errors).length === 0; // True if no errors
  };

  return (
    <Container component="main" maxWidth="sm" style={{ marginTop: '5rem' }}>

      <h1 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Multi-Step Form</h1>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Stepper activeStep={step - 1} alternativeLabel>
            <Step>
              <StepLabel onClick={() => handleStepClick(0)}>Personal Information</StepLabel>
            </Step>
            <Step>
              <StepLabel onClick={() => handleStepClick(1)}>Address Information</StepLabel>
            </Step>
            <Step>
              <StepLabel onClick={() => handleStepClick(2)}>Confirmation</StepLabel>
            </Step>
          </Stepper>

          {step === 1 && (
            <StepOne 
              updateForm={updateForm} 
              formData={formData} 
              nextStep={() => setStep(2)} 
            />
          )}
          {step === 2 && (
            <StepTwo 
              updateForm={updateForm} 
              formData={formData} 
              nextStep={() => setStep(3)} 
              prevStep={() => setStep(1)} 
            />
          )}
          {step === 3 && (
            <StepThree 
              formData={formData} 
              prevStep={() => setStep(2)} 
              onSubmit={handleFinalSubmit} 
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
