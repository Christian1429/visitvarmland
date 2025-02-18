import postForm from "../api/PostForm";
import {
  mapPrices,
  mapImages,
  mapFiles,
  mapPlaces,
  mapOccasions,
  mapOrganizers,
  mapData,
} from "./mappers";

const handleSubmit = async (formData) => {
  const dataToSubmit = {
    ...formData,
    title: formData.title || "",
    description: formData.description || "",
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
    // categories: mapCategories(formData.categories),
    places: mapPlaces(formData.places),
    data: mapData(formData.data),
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
    // past_occasions: mapOccasions(formData.past_occasions),
    // related_products: mapRelatedItems(formData.related_products),
    // related_events: mapRelatedItems(formData.related_events),
  };
  console.log("handleSubmit output:", dataToSubmit);
  await postForm(dataToSubmit);
};

export default handleSubmit;
