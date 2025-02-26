import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
import getForm from "../api/GetFrom";
import { useTranslation } from "react-i18next";
import FormResetButton from "../components/Buttons/FormResetButton";
import Searchfield from "./Searchfield";

const ClientExist = ({ formData, setFormData, Editable, setEditable }) => {
  const [clients, setClients] = useState([]);
  const [dropdownValueExisting, setDropdownValueExisting] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    const fetchClients = async () => {
      const data = await getForm();
      console.log("Fetched clients:", data);
      setClients(data);
    };

    fetchClients();
  }, []);

  const handleClientSelect = (client) => {
    const organizers = client.organizers[0];
    if (organizers) {
      setFormData((prevData) => ({
        ...prevData,
        organizers: [
          {
            id: organizers.id || 0,
            name: organizers.title || "",
            street1: organizers.street1 || "",
            street2: organizers.street2 || "",
            zip_code: organizers.zip_code || "",
            city: organizers.city || "",
            municipality_id: organizers.municipality_id || "",
            booking_link: organizers.booking_link || "",
            website: organizers.website_link || "",
            email: organizers.email || "",
            phone_numbers: organizers.phone_numbers || [],
          },
        ],
      }));
    }
  };

  const handleChange = (event) => {
    const selectedClient = clients.find(
      (client) => client.id === event.target.value
    );
    console.log("Selected client:", selectedClient);
    setDropdownValueExisting(event.target.value);
    handleClientSelect(selectedClient);
  };

  return (
    <Box display="flex" alignItems="center" gap={4} marginY={2}>
      <FormControl sx={{ width: "15rem" }}>
        <InputLabel id="dropdown-label-existing">
          {t("dropdown_organizer_exist")}
        </InputLabel>
        <Select
          labelId="dropdown-label-existing"
          id="dropdown-existing"
          value={dropdownValueExisting}
          onChange={handleChange}
          label="Redan registrerad?"
        >
          {clients.map((client) => (
            <MenuItem key={client.id} value={client.id}>
              {client.title}
            </MenuItem>
          ))}
        </Select>
        <Searchfield setEditable={setEditable} />
      </FormControl>
      <FormResetButton setFormData={setFormData} />
    </Box>
  );
};

export default ClientExist;
