import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// English
const resources = {
  en: {
    translation: {
      hero: 'Suggest an event',

      // Contact information (first page)
      contact_title: 'Fill in your contact information',
      name: 'Your name',
      email: 'Email',
      phone: 'Phone number',
      address_1: 'Address',

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
      event_title: 'Add information about your event here',
      event_name: 'Enter the name of your event',
      event_description: 'Description',
      ticket_information: 'Ticket Information',
      tooltips_eventname: 'Here you will write a good, powerful title on your tip or event',
      tooltips_description: 'Here you describe the event as detailed and as appealing as possible - the more information, the better for visitors! Possible length of performance or breaks. Accessibility information - for example wheelchair access or hearing loop. Possible age recommendations. Other: Is there anything else important that visitors need to know?',
      tooltips_ticketinformation: 'Does the ticket need to be purchased in advance, is entry paid at the door, are there any ticket resellers, different price categories, etc.',

      // Other information page (fourth page)
      other_info_title: 'Date and time for your event',
      date_start: 'Date From',
      date_end: 'Date To',
      time_start: 'Time From',
      time_end: 'Time To',
      date_other_information: 'Other information about the dates or times',
      other_info: 'Other information',
      upload_files: 'Upload image',
      tooltips_priceinformation: 'Here you can enter prices for tickets (e.g., child, adult, student, senior) and where they can be purchased, as well as any other potential costs for visitors, such as "Coffee 15 SEK."',

      //Success modal
      success_title: "Thank you for the tip about ",
      success_message: "We'll process your tip soon.",
      success_btn_close: 'Close',

      // some generic buttons, breadcrumbs and other.
      language_btn_en: 'English',
      language_btn_swe: 'Swedish',
      breadcrumbs_1: 'Contact >',
      breadcrumbs_2: 'Organizer >',
      breadcrumbs_3: 'Event >',
      breadcrumbs_4: 'Additional information >',
      next_btn: 'Next',
      submit_btn: 'Submit',
      images_title: 'Upload images. Max 2MB',
      gdpr: 'I consent to my information being stored and used in accordance with GDPR and agree that Visit Värmland reserves the right to modify or delete the information.',

      // Places
      select_place_label: "Select a place",
      select_place_placeholder: "Type a place...",
      selected_places_title: "Selected places:",
      duplicate_place_alert: "You cannot add the same place twice",

      //Price
      price_section_title: 'Prices and additional information',
      price_description_label: 'Price description',
    },
  },
  // Swedish
  sv: {
    translation: {
      hero: 'Tipsa om evenemang',

      // Contact information (first page)
      contact_title: 'Fyll i din kontaktinformation',
      name: 'Ditt namn',
      email: 'E-post',
      phone: 'Telefonnummer',
      address_1: 'Adress',

      // Organizer page (second page)
      dropdown_organizer_exist: "Redan registrerad?",
      title_organizer: "Är du ny arrangör, företag eller förening?",
      title: "Namn på erat företag, förening eller organisation",
      address_2: "Adress 2",
      zipcode: "Postadress",
      city: "Kommun",
      booking_link: "Bokningslänk",
      website: "Hemsida",
      erase_fields: "Rensa fält",

      // Event page (third page)
      event_title: 'Lägg till information om ditt event här',
      event_name: 'Ange namnet på ditt evenemang',
      event_description: 'Beskrivning',
      ticket_information: 'Biljettinformation',
      tooltips_eventname: 'Här skriver du en bra, slagkraftig titel till ditt tips eller event',
      tooltips_description: 'Här beskriver du evenemanget så detaljerat och säljande som möjligt, ju mer information, desto bättre för besökarna! Eventuell längd på föreställning eller pauser Tillgänglighetsinformation  exempelvis rullstolsanpassning eller hörslinga. Eventuella åldersrekommendationer. Övrigt: Finns det något annat viktigt som besökarna behöver känna till?',
      tooltips_ticketinformation: 'Behöver biljett förköpas, betalas entré i dörren, ev. återförsäljare av biljetter, olika pristyper etc',

      // Other information page (fourth page)
      other_info_title: 'Datum och tid för ditt event',
      date_start: 'Datum Från',
      date_end: 'Datum Till',
      time_start: 'Tid Från',
      time_end: 'Tid Till',
      date_other_information: 'Övrig information om datum eller tider',
      other_info: 'Övrig information',
      upload_files: 'Ladda upp bild',
      tooltips_priceinformation: 'Här kan du ange priser på bland annat biljetter (exempelvis barn, vuxen, student, pensionär) och var man kan köpa dessa samt andra eventuella kostnader för besökare t.ex "Kaffe 15 kr" ',

      //Success modal Form submitted! We'll process your request soon.
      success_title: 'Tack för tipset om ',
      success_message: 'Vi kommer att behandla ditt tips snart.',
      success_btn_close: 'Stäng',

      // some generic buttons, breadcrumbs and other.
      language_btn_en: 'Engelska',
      language_btn_swe: 'Svenska',
      breadcrumbs_1: 'Kontaktuppgifter >',
      breadcrumbs_2: 'Arrangör >',
      breadcrumbs_3: 'Event >',
      breadcrumbs_4: 'Övrig information',
      submit_btn: 'Skicka in',
      next_btn: 'Nästa',
      images_title: 'Ladda upp bilder. Max 2MB',
      gdpr: 'Jag samtycker till att mina uppgifter lagras och används enligt GDPR och godkänner att Visit Värmland förbehåller sig rätten att ändra eller ta bort uppgifterna.',

      // Places
      select_place_label: "Välj en plats",
      select_place_placeholder: "Skriv en plats...",
      selected_places_title: "Valda platser:",
      duplicate_place_alert: "Du kan inte lägga till samma plats två gånger",

      //Price
      price_section_title: 'Priser och övrig information',
      price_description_label: 'Prisinformation',
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
