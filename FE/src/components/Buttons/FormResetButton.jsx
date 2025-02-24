import React from "react";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const FormResetButton = ({ setFormData }) => {
  const { t } = useTranslation();

  const reset = () => {
    setFormData((prevData) => ({
      ...prevData,
      organizers: [
        {
          name: "",
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

  return <Button onClick={() => reset()}>{t("erase_fields")}</Button>;
};

export default FormResetButton;
