import { useState, useEffect } from "react";

function Field() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    async function fetchTestplatser() {
      try {
        const response = await fetch(
          "http://localhost:2000/api/data/testplatser"
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Fel vid hämtning av testplatser:", error);
      }
    }
    fetchTestplatser();
  }, []);

  return (
    <form>
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
    </form>
  );
}

export default Field;
