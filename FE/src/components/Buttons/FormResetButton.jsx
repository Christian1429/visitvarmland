import React from "react";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const FormResetButton = ({ setFormData, setEditable, resetSearchField }) => {
  const { t } = useTranslation();

  const reset = () => {
    setFormData((prevData) => ({
      ...prevData,
      organizers: [
        {
          title: "",
          street1: "",
          street2: "",
          zip_code: "",
          city: "",
          municipality_id: "",
          booking_link: "",
          website: "",
          email: "",
          phone_numbers: [],
        },
      ],
    }));
  };

  return (
    <Button
      onClick={() => {
        setEditable(true);
        reset();
        resetSearchField();
      }}
      sx={{
        width: { xs: "2rem", sm: "10rem", md: "10rem" },
        marginRight: { xs: "1rem", sm: "0rem", md: "0" },
      }}
    >
      {t("erase_fields")}
    </Button>
  );
};

export default FormResetButton;
