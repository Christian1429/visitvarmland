const postForm = async (data) => {
  console.log("postForm", data);
  try {
    const response = await fetch("http://localhost:2000/api/data/", {
      method: "POST",
      mode: "cors",
      /* headers: {
        'Content-Type': 'application/json',
      }, */
      /* body: JSON.stringify(data), */
      body: data,
    });

    if (response.ok) {
      console.log("Form submitted successfully");
    } else {
      console.error("Form submission failed");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export default postForm;
