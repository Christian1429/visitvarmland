import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// English
const resources = {
  en: {
    translation: {
      hero: "Tips and Events",

      // Contact information (first page)
      contact_title: "Fill in your contact information",
      sub_title: "Follow all steps to create your event",
      name: "Your name",
      email: "Email",
      phone: "Phone number",
      address_1: "Address",

      // Organizer page (second page)
      dropdown_organizer_exist: "Already registered?",
      title_organizer: "Are you a new organizer, company or organization?",
      title: "Enter the name of your company, organization or association",
      address_2: "Address 2",
      zipcode: "Zip Code",
      city: "City",
      booking_link: "Booking link",
      website: "Website",
      erase_fields: "Erase inputs",

      // Event page (third page)
      event_title: "Date and time for your event",
      event_name: "Enter the name of your event",
      date_start: "Date From",
      date_end: "Date To",
      time_start: "Time From",
      time_end: "Time To",
      date_other_information: "Other information about the dates or times",
      description: "Description",
      sales_text: "Sales Text",
      presentation: "Presentation",
      open_times: "Open Times",
      ticket_information: "Ticket Information",
      other_info: "Other information",

      //Success modal
      success_title: "Thank you for the tip",
      success_message: "We'll process your tip soon.",
      success_close: "Close",

      // trail overlay
      trail_total_length: "Total length of the trail",
      number_of_trails: "Number of trails",
      trail_level: "Describe the trail's difficulty level",
      trail_time: "How long does it take to walk the trail?",
      trail_terrain: "Describe the terrain and / or other information",
      trail_save_btn: "Save",
      trail_time: "How long does it take to walk the trail?",
      trail_terrain: "Describe the terrain and / or other information",
      trail_save_btn: "Save",

      // some generic buttons, breadcrumbs and other.
      language_btn_en: 'English',
      language_btn_swe: 'Swedish',
      breadcrumbs_1: 'Step 1',
      breadcrumbs_2: 'Step 2',
      breadcrumbs_3: 'Step 3',
      trail_btn: 'Is it a trail?',
      next_btn: 'Next',
      submit_btn: 'Submit',
      images_title: 'Upload images. Max 2MB',
      gdpr: 'I consent to my information being stored and used in accordance with GDPR and agree that Visit Värmland reserves the right to modify or delete the information.',
    },
  },
  // Swedish
  sv: {
    translation: {
      hero: "Tips och Evengemang",

      // Contact information (first page)
      contact_title: "Fyll i din kontaktinformation",
      sub_title: "Följ alla steg",
      name: "Ditt namn",
      email: "E-post",
      phone: "Telefonnummer",
      address_1: "Adress",

      // Organizer page (second page)
      dropdown_organizer_exist: "Redan registrerad?",
      title_organizer: "Är du ny arrangör, företag eller förening?",
      title: "Namn på erat företag, förening eller organisation",
      address_2: "Adress 2",
      zipcode: "Postnummer",
      city: "Stad",
      booking_link: "Bokningslänk",
      website: "Hemsida",
      erase_fields: "Rensa fält",

      // Event page (third page)
      event_title: "Datum och tid för ditt event",
      event_name: "Ange namnet på ditt evenemang",
      date_start: "Datum Från",
      date_end: "Datum Till",
      time_start: "Tid Från",
      time_end: "Tid Till",
      date_other_information: "Övrig information om datumen eller tiderna",
      trail_btn: "Är det en stig?",
      description: "Beskrivning",
      sales_text: "Säljande Text",
      presentation: "Presentation",
      open_times: "Öppetider",
      ticket_information: "Biljettinformation",
      other_info: "Övrig information",

      //Success modal Form submitted! We'll process your request soon.
      success_title: "Tack för tipset",
      success_message: "Vi kommer att behandla ditt tips snart.",
      success_close: "Stäng",

      // trail overlay
      trail_total_length: "Stigens totala längd i km",
      number_of_trails: "Antal stigar",
      trail_level: "Beskriv stigens svårighetsgrad",
      trail_time: "Hur långt tid tar det att gå genom stigen?",
      trail_terrain: "Beskriv terräng och / eller övrig information",
      trail_save_btn: "Spara",

      // some generic buttons, breadcrumbs and other.
      language_btn_en: 'Engelska',
      language_btn_swe: 'Svenska',
      breadcrumbs_1: 'Steg 1',
      breadcrumbs_2: 'Steg 2',
      breadcrumbs_3: 'Steg 3',
      submit_btn: 'Skicka in',
      next_btn: 'Nästa',
      images_title: 'Ladda upp bilder. Max 2MB',
      gdpr: 'Jag samtycker till att mina uppgifter lagras och används enligt GDPR och godkänner att Visit Värmland förbehåller sig rätten att ändra eller ta bort uppgifterna.',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "sv",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
