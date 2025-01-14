import React, { useState } from 'react';
import postForm from '../api/PostForm';
import {
  Box,
  Typography,
  Paper,
} from '@mui/material';

import './Form.css';
import DatePickerClient from './DatePicker';
import CloseBtn from './CloseBtn';
import Contact from './Contact';
import SendBtn from './SendBtn';

const Form = () => {
  // Contact
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  // Date
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const handleFromDateChange = (newValue) => {
    setFromDate(
      newValue ? newValue.toDate().toLocaleDateString('sv-SE') : null
    );
  };

  const handleToDateChange = (newValue) => {
    setToDate(newValue ? newValue.toDate().toLocaleDateString('sv-SE') : null);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { name, email };
    await postForm(data);
  };

  return (
    <Box component="main" maxWidth="xs" className="container">
      <form onSubmit={handleSubmit}>
        <CloseBtn redirectUrl="https://visitvarmland.com" />
        <Typography component="h1" variant="h5" align="center" gutterBottom>
          Kontakt uppgifter
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center">
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
          <DatePickerClient
            fromDate={fromDate}
            toDate={toDate}
            handleFromDateChange={handleFromDateChange}
            handleToDateChange={handleToDateChange}
          />
          <SendBtn />
        </Box>
      </form>
    </Box>
  );
};

export default Form;
