import { useState, useEffect, useContext } from "react";
import { FormDataContext } from "../../../context/FormDataContext";
import { useTranslation } from "react-i18next";
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
  const { formData, setFormData } = useContext(FormDataContext);
  const [data, setData] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const { t } = useTranslation();

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

  const toogler = () => {
    setVisibility(true);
  };

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
        window.alert(t("duplicate_place_alert"));
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
    setVisibility(true);
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
        onClick={toogler}
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
            label={t("select_place_label")}
            placeholder={t("select_place_placeholder")}
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
          {t("selected_places_title")}
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
                backgroundColor: visibility
                  ? "var(--color-green-light)"
                  : undefined,
                color: "var(--color-background)",
                borderRadius: 1,
                marginBottom: 1,
                margin: 1,
                padding: 1,
                boxSizing: "border-box",
                gap: 1,
                "&:hover": {
                  backgroundColor: visibility
                    ? "var(--color-green-dark)"
                    : undefined,
                },
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
                  "&:hover": {
                    color: visibility ? "var(--color-red-light)" : undefined,
                  },
                }}
              >
                {visibility ? <CloseIcon /> : null}
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Card>
    </Box>
  );
}

export default Places;
