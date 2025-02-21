import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const SuccessModal = ({ open, onClose }) => {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{t("success_title")}</DialogTitle>
      <DialogContent>
        <DialogContentText>{t("success_message")}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} autoFocus>
          {t("close")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SuccessModal;
