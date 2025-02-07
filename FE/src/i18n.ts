import i18n from "i18next";
import { initReactI18next, Translation } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      tips_events: "Tips and Events",
      event_date: "Date for your event",
      from: "From",
      to: "To",
      language_english: "English",
      language_swedish: "Swedish",
      language_de: "German",
      contact_details: "Fill in your contact information",
      steps: "Follow all Steps",
      name: "Your name",
      email: "Email",
      address1: "Address1",
      address2: "Address2",
      postnummer: "Zip Code",
      city: "City",
      organisationNumber: "Organization Number",
      Bokningslink: "Booking link",
      Hemsida: "Website",
      phone: "Phone number",
      dateFrom: "Date From",
      dateTo: "Date To",
      TimeFrom: "Time From",
      TimeTo: "Time To",
      option: "Are you a new organizer or company?",
      title: "Titleeng",
      Description: "Description",
      SellingText: "Selling Text",
      Presentation: "Presentation",
      Open_Hours: "Open Hours",
      BiljetInformation: "Ticket Information",
    },
  },
  sv: {
    translation: {
      tips_events: "Tips och Evengemang",
      event_date: "Datum för ditt event",
      from: "Från",
      to: "Till",
      language_english: "Engelska",
      language_swedish: "Svenska",
      language_de: "Tyska",
      contact_details: "Fyll i din kontaktinformation",
      steps: "Följ alla steg",
      name: "Ditt namn",
      email: "E-post",
      address1: "Adress1",
      address2: "Adress2",
      postnummer: "Postnummer",
      city: "Stad",
      organisationNumber: "Organisations Number",
      Bokningslink: "Boknings länk",
      Hemsida: "Hemsida",
      phone: "Telefonnummer",
      dateFrom: "Datum Från",
      dateTo: "Datum Till",
      TimeFrom: "Tid Från",
      TimeTo: "Tid Till",
      option: "Är du ny arrangör eller företag?",
      title: "Titelswe",
      Description: "Beskrivning",
      SellingText: "Säljande Text",
      Presentation: "Presentation",
      Open_Hours: "Öppetider",
      BiljetInformation: "Biljettinformation",
    },
  },
  de: {
    translation: {
      tips_events: "Tipps und Events",
      event_date: "Das Datum für Ihre Veranstaltung",
      from: "Von",
      to: "Bis",
      language_english: "Englisch",
      language_swedish: "Schwedisch",
      language_de: "Deutsch",
      contact_details: "Füllen Sie Ihre Kontaktdaten aus",
      steps: "Befolgen Sie alle Schritte",
      address1: "Adresse1",
      address2: "Adresse2",
      postnummer: "PLZ",
      city: "Stadt",
      organisationNumber: "Nummer der Organisation",
      Bokningslink: "Buchungslink",
      Hemsida: "Startseite",
      name: "Ihr Name",
      email: "E-Mail",
      phone: "Rufnummer",
      dateFrom: "Datum Von",
      dateTo: "Datum bis",
      TimeFrom: "Uhrzeit bis",
      TimeTo: "Uhrzeit von",
      option: "Sind Sie ein neuer Veranstalter oder ein neues Unternehmen?",
      title: "Titelde",
      Description: "Beschreibung",
      SellingText: "Verkaufstext",
      Presentation: "Präsentation",
      Open_Hours: "Öffnungszeiten,",
      BiljetInformation: "Ticketinformationen:",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
