import React, { createContext, useState } from "react";

export const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    sales_text: "",
    presentation: "",
    ticket_information: "",
    open_times: "",
    booking_link: "",
    website_link: "",
    contact: [
      {
        contact_name: "",
        contact_email: "",
        contact_address: "",
        contact_number: "",
      },
    ],
    organizers: [
      {
        title: "",
        street1: "",
        street2: "",
        zip_code: "",
        city: "",
        municipality_id: 0,
        booking_link: "",
        website_link: "",
        email: "",
        phone_numbers: [""],
      },
    ],
    websites: [""],
    prices: [
      {
        price_type: "",
        price: "",
        seats_available: "",
        description: "",
      },
    ],
    phone_numbers: [""],
    images: [],
    files: [
      {
        link: "",
        title: "",
        size: "",
      },
    ],
    // categories: [
    //   {
    //     title: "",
    //   },
    // ],
    places: [
      {
        id: 0,
        title: "",
        presentation: "",
        latitude: "",
        longitude: "",
        accessibility: [
          {
            title: "",
            more_information: "",
          },
        ],
      },
    ],
    data: [
      {
        id: 0,
        name: "",
        edit: "",
        endpointType: "",
        thumbnail: "",
      },
    ],
    is_trail: 0,
    trail_code_snippet: "",
    trail_total_length: 0,
    number_of_trails: 0,
    trail_level: "",
    trail_terrain: "",
    trail_time: "",
    primary_image: {
      large: "",
      medium: "",
      small: "",
    },
    occasions: [
      {
        date_start: "",
        date_end: "",
        time_start: "",
        time_end: "",
      },
    ],
  });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
