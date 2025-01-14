import { useState } from 'react';
import postForm from '../api/PostForm';
import { Box, Typography } from '@mui/material';
import './Form.css';
import Event from '../components/Event';
import Contact from '../components/Contact';
import DatePickerClient from '../components/DatePicker';
import CloseBtn from '../components/CloseBtn';
import SendBtn from '../components/SendBtn';

const Form = () => {

  // Contact
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  // Date
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  // Event
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priser, setPriser] = useState('');
  const [hemsida, setHemsida] = useState('');
  const [kontaktuppgifter, setKontaktuppgifter] = useState('');
  const [ovrigInformation, setOvrigInformation] = useState('');
  const [befintligArrangor, setBefintligArrangor] = useState(false);
  const [nyArrangor, setNyArrangor] = useState(false);

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
    const data = {
      name,
      email,
      address,
      phone,
      fromDate,
      toDate,
      title,
      description,
      priser,
      hemsida,
      kontaktuppgifter,
      ovrigInformation,
      befintligArrangor,
      nyArrangor,
    };
    await postForm(data);
  };

  return (
    <Box component="main" maxWidth="xs" className="container">
      <form onSubmit={handleSubmit}>
        <CloseBtn redirectUrl="https://visitvarmland.com" />
        <Box>
          <img
            src="/assets/logotyp-visitvarmland-svart.svg"
            alt="Visit Värmland Logo"
            style={{
              width: '150px',
              marginBottom: '20px',
              position: 'absolute',
              top: '10px',
              left: '20px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          />
        </Box>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          gutterBottom
          sx={{ color: '#004338', fontWeight: 'bold', paddingTop: '4rem', paddingBottom: '1rem', fontFamily: 'Noto Serif' }}
        >
          Tips och evenemang
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
          <SendBtn/>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
