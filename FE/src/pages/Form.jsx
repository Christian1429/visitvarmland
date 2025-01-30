import React, { useState, useEffect, useContext } from 'react';
import { Box, Typography, Breadcrumbs, Link, useMediaQuery, Button } from '@mui/material';
import Contact from '../components/Contact';
import ClientNew from '../components/ClientNew';
import ClientEvent from '../components/ClientEvent';
import BtnNext from '../components/Buttons/BtnNext';
import CloseBtn from '../components/Buttons/CloseBtn';
import { useTheme } from '@mui/material/styles';
import './Form.css';
import ClientExist from '../components/ClientExist';
import { FormDataContext } from '../context/FormDataContext';
import handleSubmit from '../utils/handleSubmit';
import { handleChange, handleArrayChange} from '../utils/formUtils';

const Form = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentStep, setCurrentStep] = useState(0);
  const { formData, setFormData } = useContext(FormDataContext);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <Contact formData={formData} setFormData={setFormData} />
          </>
        );
      case 1:
        return (
          <>
            <ClientExist setFormData={setFormData} />
            <ClientNew
              formData={formData}
              setFormData={setFormData}
              handleChange={handleChange}
              handleArrayChange={handleArrayChange}
            />
          </>
        );
      case 2:
       return (
         <>
           <ClientEvent
             formData={formData}
             setFormData={setFormData}
             handleChange={handleChange}
             handleArrayChange={handleArrayChange}
           />
         </>
       );
      default:
        return null;
    }
  };

  return (
    <Box className="container">
      <Box sx={{ paddingTop: '1rem', paddingLeft: '1rem' }}>
        <img
          src="/assets/logotyp-visitvarmland-svart.svg"
          alt="Logo"
          className="logo"
          width={isMobile ? 100 : 150}
          sx={{ paddingTop: '10rem' }}
        />
      </Box>
      <Typography
        component="h1"
        variant="h5"
        align="center"
        gutterBottom
        sx={{
          color: '#004338',
          fontWeight: 'bold',
          paddingTop: '1rem',
          paddingBottom: '1rem',
        }}
      >
        Tips och evenemang
      </Typography>
      <CloseBtn redirectUrl="https://visitvarmland.com" />
      <Box display="flex" justifyContent="center" sx={{ marginBottom: '1rem' }}>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator=">"
          sx={{
            marginBottom: '1rem',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
          }}
        >
          <Link
            color={currentStep === 0 ? 'textPrimary' : 'inherit'}
            onClick={() => handleStepClick(0)}
            sx={{ cursor: 'pointer' }}
          >
            Steg 1
          </Link>
          <Link
            color={currentStep === 1 ? 'textPrimary' : 'inherit'}
            onClick={() => handleStepClick(1)}
            sx={{ cursor: 'pointer' }}
          >
            Steg 2
          </Link>
          <Link
            color={currentStep === 2 ? 'textPrimary' : 'inherit'}
            onClick={() => handleStepClick(2)}
            sx={{ cursor: 'pointer' }}
          >
            Steg 3
          </Link>
        </Breadcrumbs>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box sx={{ mb: 4 }}>{renderStep()}</Box>
        {currentStep < 2 && <BtnNext onClick={handleNext} />}
        {currentStep === 2 && (
          <button onClick={() => handleSubmit(formData)}>Submit</button>
        )}
      </Box>
    </Box>
  );
};

export default Form;
