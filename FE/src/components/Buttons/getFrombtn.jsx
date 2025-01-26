import React, { useContext } from 'react';
import getForm from '../../api/GetFrom';
import { FormDataContext } from '../../context/FormDataContext';

const GetButton = () => {
  const { setFormData } = useContext(FormDataContext);

  const handleClick = async () => {
    const data = await getForm();
    setFormData(data);
  };

  return <button onClick={handleClick}>Hämta DB data</button>;
};

export default GetButton;
