import React from "react";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const FormResetButton = ({ setFormData, setEditable }) => {
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

  return <Button onClick={() => {
    setEditable(true)
    reset();
  }}>
  {t("erase_fields")}</Button>;
};

export default FormResetButton;
