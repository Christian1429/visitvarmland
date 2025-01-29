import postForm from '../api/PostForm';
import { mapPrices, mapImages, mapFiles, mapCategories, mapPlaces, mapOccasions, mapRelatedItems, mapOrganizers} from './mappers';

const handleSubmit = async (formData) => {
  const dataToSubmit = {
    ...formData,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    title: formData.title || '',
    description: formData.description || '',
    sales_text: formData.sales_text || '',
    presentation: formData.presentation || '',
    open_hours: formData.open_hours || '',
    ticket_information: formData.ticket_information || '',
    ticket_info: formData.ticket_info || '',
    open_times: formData.open_times || '',
    meta_title: formData.meta_title || '',
    meta_keywords: formData.meta_keywords || '',
    meta_description: formData.meta_description || '',
    booking_link: formData.booking_link || '',
    website_link: formData.website_link || '',
    organizers: mapOrganizers(formData.organizers),
    websites: [],
    prices: mapPrices(formData.prices),
    phone_numbers: [],
    images: mapImages(formData.images),
    files: mapFiles(formData.files),
    categories: mapCategories(formData.categories),
    places: mapPlaces(formData.places),
    distance: '',
    slugs: {
      sv: {
        slug: '',
        full_slug: '',
      },
      en: {
        slug: '',
        full_slug: '',
      },
    },
    is_trail: 0,
    trail_code_snippet: '',
    trail_total_length: 0,
    number_of_trails: 0,
    trail_level: '',
    trail_terrain: '',
    trail_time: '',
    slug: '',
    primary_image: {
      large: '',
      medium: '',
      small: '',
    },
    occasions: mapOccasions(formData.occasions),
    past_occasions: mapOccasions(formData.past_occasions),
    related_products: mapRelatedItems(formData.related_products),
    related_events: mapRelatedItems(formData.related_events),
  };
  console.log(dataToSubmit);
  await postForm(dataToSubmit);
};

export default handleSubmit;
