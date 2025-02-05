const postForm = async (data) => {
  console.log("Postform", data);
  try {
    const response = await fetch("http://localhost:2000/api/data/", {
      method: "POST",
      body: data,
    });
    console.log("Postform", data);

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
