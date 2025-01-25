import React, { useState, useEffect } from 'react';
import { Box, Typography, Breadcrumbs, Link, useMediaQuery, Button } from '@mui/material';
import Contact from '../components/Contact';
import ClientNew from '../components/ClientNew';
import DatePickerClient from '../components/DatePicker';
import Event from '../components/Event';
import BtnNext from '../components/Buttons/BtnNext';
import CloseBtn from '../components/Buttons/CloseBtn';
import { useTheme } from '@mui/material/styles';
import './Form.css';
import TestButton from '../components/Buttons/TestButton';
import GetButton from '../components/Buttons/getFrombtn';
import getForm from '../api/GetFrom';
import ClientExist from '../components/ClientExist';
import postForm from '../api/PostForm';

const Form = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentStep, setCurrentStep] = useState(0);
  const [organizers, setOrganizers] = useState(null);

  // Contact
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  // New Organizer
const [newOrganizerName, setNewOrganizerName] = useState('');
  const [newOrganizerStreet1, setNewOrganizerStreet1] = useState('');
  const [newOrganizerStreet2, setNewOrganizerStreet2] = useState('');
const [newOrganizerZipCode, setNewOrganizerZipCode] = useState('');
const [newOrganizerCity, setNewOrganizerCity] = useState('');
const [newOrganizerMunicipalityId, setNewOrganizerMunicipalityId] =
  useState('');
const [newOrganizerOrganizationId, setNewOrganizerOrganizationId] =
  useState('');
const [newOrganizerBookingLink, setNewOrganizerBookingLink] = useState('');
const [newOrganizerWebsite, setNewOrganizerWebsite] = useState('');
const [newOrganizerEmail, setNewOrganizerEmail] = useState('');
const [newOrganizerPhoneNumbers, setNewOrganizerPhoneNumbers] = useState([]);

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

  const handleClientSelect = (client) => {
    const organizer = client.organizers[0];
    if (organizer) {
      setNewOrganizerName(organizer.title || '');
      setNewOrganizerStreet1(organizer.street1 || '');
      setNewOrganizerStreet2(organizer.street2 || '');
      setNewOrganizerZipCode(organizer.zip_code || '');
      setNewOrganizerCity(organizer.city || '');
      setNewOrganizerMunicipalityId(organizer.municipality_id || '');
      setNewOrganizerOrganizationId(organizer.organization_id || '');
      setNewOrganizerBookingLink(organizer.booking_link || '');
      setNewOrganizerWebsite(organizer.website_link || '');
      setNewOrganizerEmail(organizer.email || '');
      setNewOrganizerPhoneNumbers(organizer.phone_numbers || []);
    }
  };

    const handleSubmit = async () => {
      const formData = {
        name,
        email,
        address,
        phone,
        newOrganizerName,
        newOrganizerStreet1,
        newOrganizerStreet2,
        newOrganizerZipCode,
        newOrganizerCity,
        newOrganizerMunicipalityId,
        newOrganizerOrganizationId,
        newOrganizerBookingLink,
        newOrganizerWebsite,
        newOrganizerEmail,
        newOrganizerPhoneNumbers,
        title,
        description,
        priser,
        hemsida,
        kontaktuppgifter,
        ovrigInformation,
      };

      await postForm(formData);
    };


  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <TestButton />
            <GetButton />
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
          </>
        );
      case 1:
        return (
          <>
            <ClientExist
              handleClientSelect={handleClientSelect}
              clients={organizers}
            />
            <ClientNew
              newOrganizerName={newOrganizerName}
              setNewOrganizerName={setNewOrganizerName}
              newOrganizerStreet1={newOrganizerStreet1}
              setNewOrganizerStreet1={setNewOrganizerStreet1}
              newOrganizerStreet2={newOrganizerStreet2}
              setNewOrganizerStreet2={setNewOrganizerStreet2}
              newOrganizerZipCode={newOrganizerZipCode}
              setNewOrganizerZipCode={setNewOrganizerZipCode}
              newOrganizerCity={newOrganizerCity}
              setNewOrganizerCity={setNewOrganizerCity}
              newOrganizerMunicipalityId={newOrganizerMunicipalityId}
              setNewOrganizerMunicipalityId={setNewOrganizerMunicipalityId}
              newOrganizerOrganizationId={newOrganizerOrganizationId}
              setNewOrganizerOrganizationId={setNewOrganizerOrganizationId}
              newOrganizerBookingLink={newOrganizerBookingLink}
              setNewOrganizerBookingLink={setNewOrganizerBookingLink}
              newOrganizerWebsite={newOrganizerWebsite}
              setNewOrganizerWebsite={setNewOrganizerWebsite}
              newOrganizerEmail={newOrganizerEmail}
              setNewOrganizerEmail={setNewOrganizerEmail}
              newOrganizerPhoneNumbers={newOrganizerPhoneNumbers}
              setNewOrganizerPhoneNumbers={setNewOrganizerPhoneNumbers}
            />
          </>
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
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Form;
