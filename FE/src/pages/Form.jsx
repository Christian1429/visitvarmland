import React, { useState, useContext } from "react";
import {
  Box,
  Typography,
  Breadcrumbs,
  Link,
  useMediaQuery,
  Button,
} from "@mui/material";
import Contact from "../components/pages/contact/Contact";
import Searchfield from "../components/pages/organizer/Searchfield";
import ClientNew from "../components/pages/organizer/ClientNew";
import DatePickerClient from "../components/pages/event/DatePicker";
import Step4 from "../components/pages/placeholder4/step4";
import Event from "../components/pages/event/Event";
import NextBtn from "../components/buttons/NextBtn";
import CloseBtn from "../components/buttons/CloseBtn";
import TranslationBtn from "../components/buttons/TranslationBtn";
import handleSubmit from "../utils/handleSubmit";

import { useTheme } from "@mui/material/styles";
import "./Form.css";
import { FormDataContext } from "../context/FormDataContext";
import { handleChange, handleArrayChange } from "../utils/formUtils";
import { useTranslation } from "react-i18next";
import SuccessModal from "../components/Confirmation_modal";

const Form = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [currentStep, setCurrentStep] = useState(0);
  const { formData, setFormData } = useContext(FormDataContext);
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [Editable, setEditable] = useState(true);

  const handleNext = () => {
    if (currentStep === 0) {
      const { contact_name, contact_email, contact_number } =
        formData.contact[0];
      if (!contact_name || !contact_email || !contact_number) {
        window.alert("Vänligen fyll i alla kontaktuppgifter.");
        return;
      }
    }

    if (currentStep === 1) {
      const {
        title,
        street1,
        zip_code,
        municipality_id,
        email,
        phone_numbers,
      } = formData.organizers[0];

      if (
        !title ||
        !street1 ||
        !zip_code ||
        municipality_id === 0 ||
        !email ||
        !phone_numbers ||
        phone_numbers.length === 0 ||
        !phone_numbers[0].trim()
      ) {
        window.alert("Vänligen fyll i alla arrangerörsuppgifter.");
        return;
      }
    }
    if (currentStep === 2) {
      const { title, description, sales_text } = formData;
      if (!title || !description || !sales_text) {
        window.alert("Vänligen fyll i alla evenemangsuppgifter.");
        return;
      }
    }

    setCurrentStep((prevStep) => prevStep + 1);
  };
  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  const handleSubmitWithModal = async (formData) => {
    if (!formData.gdpr_consent) {
      window.alert("Vänligen tryck i GDPR-rutan.");
      return;
    }

    if (!formData.occasions || !formData.occasions[0].date_start) {
      window.alert("Vänligen välj ett datum.");
      return;
    }

    if (!formData.occasions[0].time_start || !formData.occasions[0].time_end) {
      window.alert("Vänligen välj en start- och sluttid.");
      return;
    }

    const isSubmitted = await handleSubmit(formData);

    if (!isSubmitted) {
      console.log("Form submission failed. Please try again.");
      alert("Form submission failed. Please try again.");
      return;
    }

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <Contact formData={formData} setFormData={setFormData} />
          </>
        );
      case 1:
        return (
          <>
            <Searchfield setEditable={setEditable} />
            <ClientNew
              formData={formData}
              setFormData={setFormData}
              handleChange={handleChange}
              handleArrayChange={handleArrayChange}
              Editable={Editable}
            />
          </>
        );
      case 2:
        return (
          <>
            <Event
              formData={formData}
              setFormData={setFormData}
              handleChange={handleChange}
              handleArrayChange={handleArrayChange}
            />
          </>
        );
      case 3:
        return (
          <>
            <DatePickerClient formData={formData} setFormData={setFormData} />
            <Step4 />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Box className="container">
      <TranslationBtn />
      <form onSubmit={handleSubmit}>
        <Box sx={{ paddingTop: "1rem", paddingLeft: "1rem" }}>
          <img
            src="/assets/logotyp-visitvarmland-svart.svg"
            alt="Logo"
            className="logo"
            width={isMobile ? 100 : 150}
            sx={{ paddingTop: "10rem" }}
          />
        </Box>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          gutterBottom
          sx={{
            color: "#004338",
            fontWeight: "bold",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          {t("hero")}
        </Typography>
        <CloseBtn />
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            marginBottom: "1rem",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
          }}
        >
          <Breadcrumbs aria-label="breadcrumb" separator=">">
            <Link
              color={currentStep === 0 ? "textPrimary" : "inherit"}
              onClick={() => handleStepClick(0)}
              sx={{ cursor: "pointer" }}
            >
              {t("breadcrumbs_1")}
            </Link>
            <Link
              color={currentStep === 1 ? "textPrimary" : "inherit"}
              onClick={() => handleStepClick(1)}
              sx={{ cursor: "pointer" }}
            >
              {t("breadcrumbs_2")}
            </Link>
            <Link
              color={currentStep === 2 ? "textPrimary" : "inherit"}
              onClick={() => handleStepClick(2)}
              sx={{ cursor: "pointer" }}
            >
              {t("breadcrumbs_3")}
            </Link>
            <Link
              color={currentStep === 3 ? "textPrimary" : "inherit"}
              onClick={() => handleStepClick(3)}
              sx={{ cursor: "pointer" }}
            >
              {t("breadcrumbs_4")}
            </Link>
          </Breadcrumbs>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box sx={{ mb: 4 }}>{renderStep()}</Box>
          {currentStep < 3 && <NextBtn onClick={handleNext} />}
          {currentStep === 3 && (
            <Button
              onClick={() => handleSubmitWithModal(formData)}
              sx={{ marginBottom: "2rem", width: "8rem" }}
            >
              {t("submit_btn")}
            </Button>
          )}
          <SuccessModal open={showModal} onClose={handleCloseModal} />
        </Box>
      </form>
    </Box>
  );
};

export default Form;
