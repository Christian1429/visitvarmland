import { useState, useEffect, useContext } from "react";
import { FormDataContext } from "../context/FormDataContext";
import {
  List,
  ListItem,
  ListItemText,
  Card,
  Typography,
  Box,
  Autocomplete,
  TextField,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function Places() {
  const { formData, setFormData } = useContext(FormDataContext); // Formulärsdatan
  const [data, setData] = useState([]); // API-datan från testplatser

  useEffect(() => {
    async function fetchPlaces() {
      try {
        const response = await fetch("http://localhost:2000/api/data/places");
        const data = await response.json();
        setData(data);
        console.log("Places från Backenden", data);
      } catch (error) {
        console.error("Fel vid hämtning av testplatser:", error);
      }
    }
    fetchPlaces();
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

  const removePlace = (id) => {
    setFormData((prevData) => {
      const updatedPlaces = prevData.places.filter((place) => place.id !== id);
      console.log("Valda platser efter borttagning:", updatedPlaces);
      return { ...prevData, places: updatedPlaces };
    });
  };

  return (
    <Box sx={{ marginTop: "0.5rem" }}>
      <Autocomplete
        options={data}
        getOptionLabel={(option) => option.title || ""}
        onChange={(event, newValue) => {
          if (newValue) {
            handlePlaceSelect(newValue);
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Välj en plats"
            placeholder="Skriv en plats..."
            autoComplete="on"
            variant="outlined"
          />
        )}
      />
      <Card
        sx={{
          marginTop: "0.8rem",
          boxShadow: "0px 4px 10px rgba(0, 67, 56, 0.2)",
          boxSizing: "border-box",
          padding: "0.5rem",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "var(--color-green-dark)",
            fontFamily: "'Noto Sans', sans-serif",
            fontWeight: 600,
            marginBottom: 1,
          }}
        >
          Valda platser:
        </Typography>
        <List
          sx={{
            padding: 0,
          }}
        >
          {formData.places.map((place) => (
            <ListItem
              key={place.id}
              sx={{
                width: "auto",
                backgroundColor: "var(--color-green-light)",
                color: "var(--color-background)",
                borderRadius: 1,
                marginBottom: 1,
                margin: 1,
                padding: 1,
                boxSizing: "border-box",
                gap: 1,
                "&:hover": { backgroundColor: "var(--color-green-dark)" },
              }}
            >
              <ListItemText
                primary={place.title}
                sx={{
                  fontFamily: "'Noto Serif', serif",
                  fontWeight: 500,
                }}
              />

              <IconButton
                onClick={() => removePlace(place.id)}
                sx={{
                  color: "var(--color-background)",
                  "&:hover": { color: "var(--color-red-light)" },
                }}
              >
                <CloseIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Card>
    </Box>
  );
}

export default Places;
