const postForm = async (data) => {
  /*   console.log("postForm", data); */

  try {
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
  }
};

export default postForm;
