import React, { useState } from 'react';
import { Box, Typography, Breadcrumbs, Link, useMediaQuery } from '@mui/material';
import Contact from '../components/Contact';
import ClientNew from '../components/ClientNew';
import DatePickerClient from '../components/DatePicker';
import Event from '../components/Event';
import BtnNext from '../components/BtnNext';
import { useTheme } from '@mui/material/styles';
import './Form.css';

const Form = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentStep, setCurrentStep] = useState(0);

  // Contact
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  // Date
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  // New Organizer
  const [newOrganizerName, setNewOrganizerName] = useState('');
  const [newOrganizerAddress, setNewOrganizerAddress] = useState('');
  const [newOrganizerWebsite, setNewOrganizerWebsite] = useState('');
  const [organizationNumber, setOrganizationNumber] = useState('');
  const [location, setLocation] = useState('');

  // Event
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priser, setPriser] = useState('');
  const [hemsida, setHemsida] = useState('');
  const [kontaktuppgifter, setKontaktuppgifter] = useState('');
  const [ovrigInformation, setOvrigInformation] = useState('');
  const [befintligArrangor, setBefintligArrangor] = useState(false);
  const [nyArrangor, setNyArrangor] = useState(false);

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
          <Contact
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            address={address}
            setAddress={setAddress}
            phone={phone}
            setPhone={setPhone}
          />
        );
      case 1:
        return (
          <ClientNew
            newOrganizerName={newOrganizerName}
            setNewOrganizerName={setNewOrganizerName}
            newOrganizerAddress={newOrganizerAddress}
            setNewOrganizerAddress={setNewOrganizerAddress}
            newOrganizerWebsite={newOrganizerWebsite}
            setNewOrganizerWebsite={setNewOrganizerWebsite}
            organizationNumber={organizationNumber}
            setOrganizationNumber={setOrganizationNumber}
            location={location}
            setLocation={setLocation}
          />
        );
      case 2:
        return (
          <>
            <Event
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
              priser={priser}
              setPriser={setPriser}
              hemsida={hemsida}
              setHemsida={setHemsida}
              kontaktuppgifter={kontaktuppgifter}
              setKontaktuppgifter={setKontaktuppgifter}
              ovrigInformation={ovrigInformation}
              setOvrigInformation={setOvrigInformation}
              befintligArrangor={befintligArrangor}
              setBefintligArrangor={setBefintligArrangor}
              nyArrangor={nyArrangor}
              setNyArrangor={setNyArrangor}
            />
            <DatePickerClient />
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
      <Box display="flex" justifyContent="center" sx={{ marginBottom: '1rem' }}>
        <Breadcrumbs
          aria-label="breadcrumb"
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
        <BtnNext onClick={handleNext} />
      </Box>
    </Box>
  );
};

export default Form;
