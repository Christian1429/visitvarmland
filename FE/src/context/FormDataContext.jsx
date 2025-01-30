import React, { createContext, useState } from 'react';

export const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    id: 0,
    title: '',
    description: '',
    sales_text: '',
    presentation: '',
    open_hours: '',
    ticket_information: '',
    ticket_info: '',
    open_times: '',
    meta_title: '',
    meta_keywords: '',
    meta_description: '',
    booking_link: '',
    website_link: '',
    contact: [
      {
        contact_name: '',
        contact_email: '',
        contact_address: '',
        contact_number: '',
      },
    ],
    organizers: [
      {
        id: 0,
        title: '',
        street1: '',
        street2: '',
        zip_code: '',
        city: '',
        municipality_id: 0,
        organization_id: 0,
        booking_link: '',
        website_link: '',
        email: '',
        phone_numbers: [''],
      },
    ],
    websites: [''],
    prices: [
      {
        price_type: '',
        price: '',
        seats_available: '',
        description: '',
      },
    ],
    phone_numbers: [''],
    images: [
      {
        large: '',
        medium: '',
        small: '',
        alt_text: '',
        copyright: '',
        description: '',
        photographer: '',
        year: 0,
      },
    ],
    files: [
      {
        link: '',
        title: '',
        size: '',
      },
    ],
    categories: [
      {
        id: 0,
        title: '',
        slug: '',
      },
    ],
    places: [
      {
        id: 0,
        title: '',
        presentation: '',
        latitude: '',
        longitude: '',
        accessibility: [
          {
            title: '',
            more_information: '',
          },
        ],
      },
    ],
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
    occasions: [
      {
        date_start: '',
        date_end: '',
        time_start: '',
        time_end: '',
      },
    ],
    past_occasions: [
      {
        date_start: '',
        date_end: '',
        time_start: '',
        time_end: '',
      },
    ],
    related_products: [
      {
        id: 0,
        title: '',
      },
    ],
    related_events: [
      {
        id: 0,
        title: '',
      },
    ],
  });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
