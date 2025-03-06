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
      upload_files: "Upload image",

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
      language_btn_en: "English",
      language_btn_swe: "Swedish",
      breadcrumbs_1: "Step 1",
      breadcrumbs_2: "Step 2",
      breadcrumbs_3: "Step 3",
      breadcrumbs_4: "Step 4",
      trail_btn: "Is it a trail?",
      next_btn: "Next",
      submit_btn: "Submit",
      images_title: "Upload images. Max 2MB",
      gdpr: "I consent to my information being stored and used in accordance with GDPR and agree that Visit Värmland reserves the right to modify or delete the information.",

      // Places
      select_place_label: "Select a place",
      select_place_placeholder: "Type a place...",
      selected_places_title: "Selected places:",
      duplicate_place_alert: "You cannot add the same place twice",

      //Price
      price_section_title: "Prices and additional information",
      price_type_label: "Price Type",
      price_label: "Price",
      seats_available_label: "Available Seats",
      price_description_label: "Description",

      // Tooltips
      tooltips_description:
        "Here you describe the event as detailed and as appealing as possible - the more information, the better for visitors! Possible length of performance or breaks. Accessibility information - for example wheelchair access or hearing loop. Possible age recommendations. Other: Is there anything else important that visitors need to know?",
      tooltips_eventname:
        "Write a suitable, impactful title for your event or tip so that it is easy to recognize.",
      tooltips_salestext: "A short, selling text to attract visitors",
      tooltip_ticketinformation:
        "Does the ticket need to be purchased in advance, is admission paid at the door, possible ticket resellers, different price types, etc.",
      /* Denna ligger på steg 4. Övriga steg 3 */
      tooltips_pricedescription:
        "Here you can enter prices for tickets (for example, child, adult, student, pensioner) and where to buy them, as well as other possible costs for visitors, e.g. 'Coffee 15 SEK''",
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
      zipcode: "Postadress",
      city: "Kommun",
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
      upload_files: "Ladda upp bild",

      //Success modal Form submitted! We'll process your request soon.
      success_title: "Tack för tipset!",
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
      language_btn_en: "Engelska",
      language_btn_swe: "Svenska",
      breadcrumbs_1: "Steg 1",
      breadcrumbs_2: "Steg 2",
      breadcrumbs_3: "Steg 3",
      breadcrumbs_4: "Steg 4",
      submit_btn: "Skicka in",
      next_btn: "Nästa",
      images_title: "Ladda upp bilder. Max 2MB",
      gdpr: "Jag samtycker till att mina uppgifter lagras och används enligt GDPR och godkänner att Visit Värmland förbehåller sig rätten att ändra eller ta bort uppgifterna.",

      // Places
      select_place_label: "Välj en plats",
      select_place_placeholder: "Skriv en plats...",
      selected_places_title: "Valda platser:",
      duplicate_place_alert: "Du kan inte lägga till samma plats två gånger",

      //Price
      price_section_title: "Priser och övrig information",
      price_type_label: "Pristyp",
      price_label: "Pris",
      seats_available_label: "Tillgängliga Platser",
      price_description_label: "Beskrivning",

      // Tooltips
      tooltips_eventname:
        "Skriv en passande, slagkraftig titel på ditt evenemang eller tips så att det blir lätt att känna igen.",
      tooltips_description:
        "Här beskriver du evenemanget så detaljerat och säljande som möjligt ju mer information, desto bättre för besökarna! Eventuell längd på föreställning eller pauser Tillgänglighetsinformation  exempelvis rullstolsanpassning eller hörslinga. Eventuella åldersrekommendationer. Övrigt: Finns det något annat viktigt som besökarna behöver känna till?",
      tooltips_salestext: "En kort, säljande text för att locka besökare",
      tooltip_ticketinformation:
        "Behöver biljett förköpas, betalas entré i dörren, ev. återförsäljare av biljetter, olika pristyper etc",
      /* Denna ligger på steg 4. Övriga steg 3 */
      tooltips_pricedescription:
        "Här kan du ange priser på bland annat biljetter (exempelvis barn, vuxen, student, pensionär) och var man kan köpa dessa samt andra eventuella kostnader för besökare t.ex 'Kaffe 15 kr'",
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
