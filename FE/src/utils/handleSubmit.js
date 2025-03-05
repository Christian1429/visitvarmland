import { toast } from "react-toastify";
import postForm from "../api/PostForm";
import {
  mapPrices,
  mapImages,
  mapFiles,
  mapPlaces,
  mapOccasions,
  mapOrganizers,
} from "./mappers";

const handleSubmit = async (formData) => {
  const dataToSubmit = {
    ...formData,
    title: formData.title || "Ingen titel angiven",
    description: formData.description || "Ingen beskrivning",
    sales_text: formData.sales_text || "",
    presentation: formData.presentation || "",
    open_hours: formData.open_hours || "",
    ticket_information: formData.ticket_information || "",
    open_times: formData.open_times || "",
    booking_link: formData.booking_link || "",
    website_link: formData.website_link || "",
    organizers: mapOrganizers(formData.organizers),
    websites: [],
    prices: mapPrices(formData.prices),
    phone_numbers: [],
    images: mapImages(formData.images),
    files: mapFiles(formData.files),
    places: mapPlaces(formData.places),

    is_trail: 0,
    trail_code_snippet: formData.trail_code_snippet || "",
    trail_total_length: formData.trail_total_length || 0,
    number_of_trails: formData.number_of_trails || 0,
    trail_level: formData.trail_level || "",
    trail_terrain: formData.trail_terrain || "",
    trail_time: formData.trail_time || "",
    primary_image: {
      large: "",
      medium: "",
      small: "",
    },
    occasions: mapOccasions(formData.occasions),
    gdpr_consent: formData.gdpr_consent,
  };

  try {
    console.log("Submitting form data:", dataToSubmit);

    const response = await postForm(dataToSubmit);

    if (response) {
      console.log("Form submitted successfully!");

      // ✅ Toast-notis vid lyckad submission
      toast.success(`🎉 Formulär skickat!\nTitel: ${dataToSubmit.title}\nBeskrivning: ${dataToSubmit.description}`, {
        autoClose: 5000, // Visas i 5 sekunder istället för standard (ofta ~3s)
        hideProgressBar: false, // Visar progress-baren (kan sättas till true om du vill dölja den)
        closeOnClick: true, // Stänger toasten om användaren klickar på den
        pauseOnHover: true, // Pausar timern om musen är över toasten
        draggable: true, // Tillåter att man drar bort toasten
        progress: undefined, // Använder standardprogress
      });

      return true; // Success
    } else {
      console.error("Form submission failed.");

      // ❌ Toast-notis vid misslyckad submission
      toast.error("Något gick fel vid inskickning av formuläret. Försök igen.");
      
      return false; // Failure
    }
  } catch (error) {
    console.error("Error submitting form:", error);

    // ❌ Toast-notis vid nätverksfel
    toast.error("Nätverksfel, kontrollera din anslutning och försök igen.");
    
    return false; // Failure
  }
};

export default handleSubmit;
