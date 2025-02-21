import React from "react";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const FormResetButton = ({ formData, setFormData }) => {
  const { t } = useTranslation();

  const reset = () => {
    setFormData();
  };

  return <Button onClick={() => reset(formData)}>{t("erase_fields")}</Button>;
};

export default FormResetButton;
