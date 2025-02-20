import React, { useState, useEffect, useContext } from "react";
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

function Field() {
  const { formData, setFormData } = useContext(FormDataContext); // Formulärsdatan
  const [data, setData] = useState([]); // API-datan från testplatser

  useEffect(() => {
    async function fetchTestplatser() {
      try {
        const response = await fetch(
          "http://localhost:2000/api/data/testplatser"
        );
        const json = await response.json();
        setData(json);
        console.log("Testplatser från Backenden", json);
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

  const removePlace = (id) => {
    setFormData((prevData) => {
      const updatedPlaces = prevData.places.filter((place) => place.id !== id);
      console.log("Valda platser efter borttagning:", updatedPlaces);
      return { ...prevData, places: updatedPlaces };
    });
  };

  return (
    <Box sx={{ width: 400, margin: "0 auto", padding: 2 }}>
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
          borderRadius: 2,
          padding: 2,
          marginTop: 2,
          boxShadow: "0px 4px 10px rgba(0, 67, 56, 0.2)",
          width: "100%",
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
        <List sx={{ display: "flex", flexDirection: "column" }}>
          {formData.places.map((place) => (
            <ListItem
              key={place.id}
              sx={{
                backgroundColor: "var(--color-green-light)",
                color: "var(--color-background)",
                borderRadius: 1,
                marginBottom: 1,
                padding: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
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

export default Field;
