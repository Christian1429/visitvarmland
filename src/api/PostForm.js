const postForm = async (data) => {
  try {
    const response = await fetch('https:// ---- / ----', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log('Form submitted successfully');
    } else {
      console.error('Form submission failed');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

export default postForm;
