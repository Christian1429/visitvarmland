import getForm from '../../api/GetFrom';

const GetButton = () => {
  const handleClick = () => {
    getForm();
  };

  return <button onClick={handleClick}>Test Get Form</button>;
};

export default GetButton;
