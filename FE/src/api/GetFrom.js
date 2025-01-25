const getForm = async () => {
  try {
    const response = await fetch('http://localhost:2000/api/data/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Failed to fetch data');
      return [];
    }
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};

export default getForm;
