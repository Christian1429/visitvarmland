import React, { useState, useEffect, useContext } from "react";
import { FormDataContext } from "../context/FormDataContext";

function Field() {
  const { formData, setFormData } = useContext(FormDataContext); // Formulärsdatan
  const [data, setData] = useState([]); // API-datan från testplatser
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    async function fetchTestplatser() {
      try {
        const response = await fetch(
          "http://localhost:2000/api/data/testplatser"
        );
        const json = await response.json();
        setData(json);
        console.log("Testplatser från API:", json);
      } catch (error) {
        console.error("Fel vid hämtning av testplatser:", error);
      }
    }
    fetchTestplatser();
  }, []);

  const handlePlaceSelect = (selectedPlace) => {
    setFormData((prevData) => {
      let existingPlaces = prevData.places;
      if (existingPlaces.length === 1 && existingPlaces[0].title === "") {
        existingPlaces = [];
      }

      const alreadyExists = existingPlaces.some(
        (place) => place.id === selectedPlace.id
      );

      if (alreadyExists) {
        window.alert("Du kan inte lägga till samma plats två gånger");
        return prevData;
      }

      const updatedPlaces = [...existingPlaces, selectedPlace];
      const updatedFormData = {
        ...prevData,
        places: updatedPlaces,
      };

      console.log("Valda platser:", updatedPlaces);
      return updatedFormData;
    });
  };

  useEffect(() => {
    if (inputValue === "") return;
    const matchingPlace = data.find((plats) => plats.title === inputValue);
    if (matchingPlace) {
      handlePlaceSelect(matchingPlace);
    }
  }, [inputValue, data]);

  return (
    <>
      <label htmlFor="place">Välj en plats:</label>
      <input
        id="place"
        type="text"
        list="places"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Skriv en plats..."
        autoComplete="on"
      />
      <datalist id="places">
        {data.map((plats) => (
          <option key={plats.id} value={plats.title} />
        ))}
      </datalist>
    </>
  );
}

export default Field;

/*   const handleChange = (event) => {
    const selectedClient = clients.find(
      (client) => client.id === event.target.value
    );
    console.log('Selected client:', selectedClient);
    setDropdownValueExisting(event.target.value);
    handleClientSelect(selectedClient);
  }; Lägg på en sån här funktion här inne så den går efter places istället. Kolla flödet i clientexist. Behöver göra så att det title: "",
        presentation: "",
        latitude: "",
        longitude: "",
        accessibility: [
          {
            title: "",
            more_information: "", här dyker upp för den platsen man valt när man väljer platsen. Det viktiga är att det läggs till i objektet när man valt det. Så fokusera inte på att göra massa fält där man ser informationen. Se till att datan skickas vidare bara. Den behöver inte visas visuellt. Kommer inte skapa något nytt egentligen utan bara lägga till det i den befintliga. Tjuvkika i de andra funktioner för att få mer hum på hur det läggs till. 
*/
/*  Så här ska objektet se ut för att skicka datan vidare fast typa upp som formdatacontexten för places.
  const handleClientSelect = (client) => {
    const organizers = client.organizers[0];
    if (organizers) {
      setFormData((prevData) => ({
        ...prevData,
        organizers: [
          {
            id: organizers.id || 0,
            name: organizers.title || '',
            street1: organizers.street1 || '',
            street2: organizers.street2 || '',
            zip_code: organizers.zip_code || '',
            city: organizers.city || '',
            municipality_id: organizers.municipality_id || '',
            booking_link: organizers.booking_link || '',
            website: organizers.website_link || '',
            email: organizers.email || '',
            phone_numbers: organizers.phone_numbers || [],
          },
        ],
      }));
    }
  }; */
/* Det här måste skickas med i input fältet tillsammans med platsen:  places: [
      {
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
    ], */
