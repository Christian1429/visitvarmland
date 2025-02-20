import { useContext, useState } from "react";
import { FormDataContext } from "../context/FormDataContext";

function Price() {
  const { formData, setFormData } = useContext(FormDataContext);
  const [priceType, setPriceType] = useState("");
  const [price, setPrice] = useState("");
  const [seatsAvailable, setSeatsAvailable] = useState("");
  const [description, setDescription] = useState("");

  const handleAddPrice = (event) => {
    event.preventDefault();

    if (!priceType || !price) {
      alert("Både pris och pristyp måste anges!");
      return;
    }

    console.log("Lägger till nytt pris:");
    console.log("Pristyp:", priceType);
    console.log("Pris:", price);
    console.log("Tillgängliga platser:", seatsAvailable);
    console.log("Beskrivning:", description);

    setFormData((prevData) => {
      const updatedPrices = [
        ...prevData.prices,
        {
          price_type: priceType,
          price: price,
          seats_available: seatsAvailable,
          description: description,
        },
      ];
      return { ...prevData, prices: updatedPrices };
    });

    setPriceType("");
    setPrice("");
    setSeatsAvailable("");
    setDescription("");
  };

  return (
    <>
      <h2>Lägg till pris</h2>
      <form onSubmit={handleAddPrice}>
        <label>Pristyp:</label>
        <input
          type="text"
          value={priceType}
          onChange={(e) => setPriceType(e.target.value)}
        />
        <label>Pris:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>Tillgängliga Platser:</label>
        <input
          type="number"
          value={seatsAvailable}
          onChange={(e) => setSeatsAvailable(e.target.value)}
        />
        <label>Beskrivning:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Lägg till pris</button>
      </form>

      <h3>Inlagda priser:</h3>
      <ul>
        {formData.prices.map((item, index) => (
          <li key={index}>
            {item.price_type}: {item.price} kr ({item.seats_available} platser)
            - {item.description}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Price;
