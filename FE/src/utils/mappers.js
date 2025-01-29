

export const mapOrganizers = (organizers) =>
  organizers.map((organizer) => ({
    id: organizer.id || 0,
    title: organizer.title || '',
    street1: organizer.street1 || '',
    street2: organizer.street2 || '',
    zip_code: organizer.zip_code || '',
    city: organizer.city || '',
    municipality_id: organizer.municipality_id || 0,
    organization_id: organizer.organization_id || 0,
    booking_link: organizer.booking_link || '',
    website_link: organizer.website_link || '',
    email: organizer.email || '',
    phone_numbers:
      organizer.phone_numbers.length > 0 ? organizer.phone_numbers : [''],
  }));

export const mapPrices = (prices) =>
  prices.map((price) => ({
    price_type: price.price_type,
    price: price.price,
    seats_available: price.seats_available,
    description: price.description,
}));

export const mapImages = (images) =>
  images.map((image) => ({
    large: image.large,
    medium: image.medium,
    small: image.small,
    alt_text: image.alt_text,
    copyright: image.copyright,
    description: image.description,
    photographer: image.photographer,
    year: image.year,
}));

export const mapFiles = (files) =>
  files.map((file) => ({
    link: file.link,
    title: file.title,
    size: file.size,
}));

export const mapCategories = (categories) =>
  categories.map((category) => ({
    id: category.id,
    title: category.title,
    slug: category.slug,
}));

export const mapPlaces = (places) =>
  places.map((place) => ({
    id: place.id,
    title: place.title,
    presentation: place.presentation,
    latitude: place.latitude,
    longitude: place.longitude,
    accessibility: place.accessibility.map((access) => ({
      title: access.title,
      more_information: access.more_information,
    })),
}));

export const mapOccasions = (occasions) =>
  occasions.map((occasion) => ({
    date_start: occasion.date_start,
    date_end: occasion.date_end,
    time_start: occasion.time_start,
    time_end: occasion.time_end,
}));

export const mapPastOccasions = (past_occasions) =>
  past_occasions.map((occasion) => ({
    date_start: occasion.date_start,
    date_end: occasion.date_end,
    time_start: occasion.time_start,
    time_end: occasion.time_end,
}));

export const mapRelatedProducts = (related_products) =>
  related_products.map((product) => ({
    id: product.id,
    title: product.title,
}));

export const mapRelatedEvents = (related_events) =>
  related_events.map((event) => ({
    id: event.id,
    title: event.title,
}));

export const mapRelatedItems = (items) =>
  items.map((item) => ({
    id: item.id,
    title: item.title,
  }));