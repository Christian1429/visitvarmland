import React from "react";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const FormResetButton = () => {
  const { t } = useTranslation();
  return <Button>{t("erase_fields")}</Button>;
};

export default FormResetButton;
