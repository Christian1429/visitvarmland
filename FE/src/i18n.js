import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// English
const resources = {
  en: {
    translation: {
      hero: 'Tips and Events',

      // Contact information (first page)
      contact_title: 'Fill in your contact information',
      sub_title: 'Follow all steps to create your event',
      name: 'Your name',
      email: 'Email',
      phone: 'Phone number',
      address_1: 'Address',

      // Organizer page (second page)
      dropdown_organizer_exist: 'Already registered?',
      title_organizer: 'Are you a new organizer, company or organization?',
      title: 'Title',
      address_2: 'Address 2',
      zipcode: 'Zip Code',
      city: 'City',
      booking_link: 'Booking link',
      website: 'Website',

      // Event page (third page)
      event_title: 'Date and time for your event',
      date_start: 'Date From',
      date_end: 'Date To',
      time_start: 'Time From',
      time_end: 'Time To',
      description: 'Description',
      sales_text: 'Sales Text',
      presentation: 'Presentation',
      open_times: 'Open Times',
      ticket_information: 'Ticket Information',

      // trail overlay
      trail_total_length: 'Total length of the trail',
      number_of_trails: 'Number of trails',
      trail_level: "Describe the trail's difficulty level",
      trail_time: 'How long does it take to walk the trail?',
      trail_terrain: 'Describe the terrain and / or other information',
      trail_save_btn: 'Save',

      // some generic buttons, breadcrumbs and other.
      language_btn_en: 'English',
      language_btn_swe: 'Swedish',
      language_btn_de: 'German',
      breadcrumbs_1: 'Step 1',
      breadcrumbs_2: 'Step 2',
      breadcrumbs_3: 'Step 3',
      trail_btn: 'Is it a trail?',
      next_btn: 'Next',
      submit_btn: 'Submit',
      images_title: 'Upload images. Max 2MB',
      gdpr: 'I agree to the terms and conditions of the use of my personal data and the organization.',
    },
  },
  // Swedish
  sv: {
    translation: {
      hero: 'Tips och Evengemang',

      // Contact information (first page)
      contact_title: 'Fyll i din kontaktinformation',
      sub_title: 'Följ alla steg',
      name: 'Ditt namn',
      email: 'E-post',
      phone: 'Telefonnummer',
      address_1: 'Adress',

      // Organizer page (second page)
      dropdown_organizer_exist: 'Redan registrerad?',
      title_organizer: 'Är du ny arrangör, företag eller förening?',
      title: 'Titel',
      address_2: 'Adress 2',
      zipcode: 'Postnummer',
      city: 'Stad',
      booking_link: 'Bokningslänk',
      website: 'Hemsida',

      // Event page (third page)
      event_title: 'Datum och tid för ditt event',
      date_start: 'Datum Från',
      date_end: 'Datum Till',
      time_start: 'Tid Från',
      time_end: 'Tid Till',
      trail_btn: 'Är det en stig?',
      description: 'Beskrivning',
      sales_text: 'Säljande Text',
      presentation: 'Presentation',
      open_times: 'Öppetider',
      ticket_information: 'Biljettinformation',

      // trail overlay
      trail_total_length: 'Stigens totala längd i km',
      number_of_trails: 'Antal stigar',
      trail_level: 'Beskriv stigens svårighetsgrad',
      trail_time: 'Hur långt tid tar det att gå genom stigen?',
      trail_terrain: 'Beskriv terräng och / eller övrig information',
      trail_save_btn: 'Spara',

      // some generic buttons, breadcrumbs and other.
      language_btn_en: 'Engelska',
      language_btn_swe: 'Svenska',
      language_btn_de: 'Tyska',
      breadcrumbs_1: 'Steg 1',
      breadcrumbs_2: 'Steg 2',
      breadcrumbs_3: 'Steg 3',
      submit_btn: 'Skicka in',
      next_btn: 'Nästa',
      images_title: 'Ladda upp bilder. Max 2MB',
      gdpr: 'Jag samtycker till att mina uppgifter lagras och används enligt GDPR.',
    },
  },
  // German
  de: {
    translation: {
      hero: 'Tipps und Events',

      // Contact information (first page)
      contact_title: 'Füllen Sie Ihre Kontaktdaten aus',
      sub_title: 'Befolgen Sie alle Schritte',
      name: 'Ihr Name',
      email: 'Email',
      address_1: 'Adresse',

      // Organizer page (second page)
      dropdown_organizer_exist: 'Bereits registriert?',
      title_organizer:
        'Sind Sie ein neuer Veranstalter, Unternehmen oder Organisation?',
      title: 'Titel',
      address_2: 'Adresse 2',
      zipcode: 'Postleitzahl',
      city: 'Stadt',
      booking_link: 'Buchungslink',
      website: 'Startseite',
      phone: 'Rufnummer',

      // Event page (third page)
      event_title: 'Datum und Uhrzeit för Ihr Event',
      date_start: 'Datum Von',
      date_end: 'Datum bis',
      time_start: 'Uhrzeit bis',
      time_end: 'Uhrzeit von',
      description: 'Beschreibung',
      sales_text: 'Verkaufstext',
      presentation: 'Präsentation',
      open_times: 'Öffnungszeiten',
      ticket_information: 'Ticketinformationen',

      // trail overlay
      trail_total_length: 'Streckenlänge in km',
      number_of_trails: 'Anzahl der Strecken',
      trail_level: 'Beschreiben Sie die Schwierigkeitsgrad der Strecke',
      trail_time: 'Wie lange dauert es, um die Strecke zu wandern?',
      trail_terrain:
        'Beschreiben Sie das Gelände und / oder weitere Informationen',
      trail_save_btn: 'Speichern',

      // some generic buttons, breadcrumbs and other.
      language_btn_en: 'Englisch',
      language_btn_swe: 'Schwedisch',
      language_btn_de: 'Deutsch',
      breadcrumbs_1: 'Schritt 1',
      breadcrumbs_2: 'Schritt 2',
      breadcrumbs_3: 'Schritt 3',
      next_btn: 'Weiter',
      trail_btn: 'Gibt es einen Weg?',
      submit_btn: 'Absenden',
      images_title: 'Bilder hochladen. Max 2MB',
      gdpr: 'Ich erkläre mich mit den Daten der Veranstaltung und der Organisation einverstanden, die für die Verarbeitung der Daten nach den Datenschutzbestimmungen der Europäischen Union (DSGVO) erforderlich ist.',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "sv",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
