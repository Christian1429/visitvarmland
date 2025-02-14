const postForm = async (formDataToSend) => {
  /*   console.log("postForm", data); */

  /* try {
    const requestOptions = {
      method: "POST",
      mode: "cors",
      body: data,
    };

    const response = await fetch(
      "http://localhost:2000/api/data/",
      requestOptions
    ).catch((error) => {
      console.error("fetch error", error);
    });
    if (!response.ok) {
      throw new Error(`Failed to submit data: ${JSON.stringify(response)}`);
    } else {
      console.log("Form submitted successfully");
    }
  } catch (error) {
    console.error("Error:", error);
  } */

  try {
    const response = await fetch("http://localhost:2000/api/data/upload", {
      method: "POST",
      mode: "cors",
      body: formDataToSend,
    });
    if (!response.ok) {
      throw new Error(`Failed to submit data: ${await response.text()}`);
    }
    console.log("Images uploaded successfully!");
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export default postForm;
