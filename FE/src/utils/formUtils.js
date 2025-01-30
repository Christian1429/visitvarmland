export const handleChange = (e, setFormData) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

export const handleArrayChange = (
  e,
  index,
  arrayName,
  fieldName,
  setFormData
) => {
  const { value } = e.target;
  setFormData((prevData) => {
    const updatedArray = [...prevData[arrayName]];
    updatedArray[index][fieldName] = value;
    return {
      ...prevData,
      [arrayName]: updatedArray,
    };
  });
};