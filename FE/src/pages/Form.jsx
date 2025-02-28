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
  const formRef = React.useRef();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [currentStep, setCurrentStep] = useState(0);
  const { formData, setFormData } = useContext(FormDataContext);
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [Editable, setEditable] = useState(true);

  const handleNext = () => {
    if (formRef.current.reportValidity()) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  /* const handleSubmitWithModal = async (formData) => {
    formRef.current.reportValidity();

    // Validate all steps before submitting
    const allFieldsValid = validateAllSteps();

    if (!allFieldsValid) {
      alert(t("alert_fill_in_all_fields"));
      return;
    }

    if (!formData.images || formData.images.length === 0) {
      alert(t("alert_fill_in_all_fields"));
      return;
    }

    const isSubmitted = await handleSubmit(formData);

    if (isSubmitted) {
      setShowModal(true);
    }
    if (!formRef.current.reportValidity()) {
      return;
    }

    if (!isSubmitted) {
      console.log("Form submission failed. Please try again");
      alert("Form submission failed. Please try again.");
    }
  }; */

  const handleSubmitWithModal = async (formData) => {
    console.log(formData);
    const invalidStep = validateAllSteps();

    if (invalidStep !== null) {
      setCurrentStep(invalidStep); // Navigate to the first step with an error
      setTimeout(() => {
        // Wait for the step to render before focusing on the invalid field
        const firstInvalidField = formRef.current.querySelector(":invalid");
        if (firstInvalidField) {
          firstInvalidField.focus();
        }
      }, 100);

      alert(t("alert_fill_in_all_fields"));
      return;
    }

    if (!formData.images || formData.images.length === 0) {
      alert(t("alert_fill_in_all_fields"));
      return;
    }

    const isSubmitted = await handleSubmit(formData);

    if (isSubmitted) {
      setShowModal(true);
    } else {
      alert("Form submission failed. Please try again.");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  /*  const validateAllSteps = () => {
    // Get all form elements
    const formElements = formRef.current.elements;
    let isValid = true;

    // Loop through all elements and check validity
    for (let i = 0; i < formElements.length; i++) {
      if (!formElements[i].reportValidity()) {
        isValid = false;
      }
    }

    return isValid;
  }; */

  const validateAllSteps = () => {
    const formElements = formRef.current.elements;
    let invalidStep = null;

    for (let i = 0; i < formElements.length; i++) {
      if (!formElements[i].checkValidity()) {
        const fieldStep = getStepForField(formElements[i]);

        if (invalidStep === null || fieldStep < invalidStep) {
          invalidStep = fieldStep; // Store the first step with an invalid field
        }
      }
    }

    return invalidStep;
  };

  const getStepForField = (field) => {
    const stepContainers = [
      document.getElementById("contact-step"),
      document.getElementById("client-step"),
      document.getElementById("event-step"),
    ];

    return stepContainers.findIndex((container) => container?.contains(field));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <Box id="contact-step">
              <Contact formData={formData} setFormData={setFormData} />
            </Box>
          </>
        );
      case 1:
        return (
          <>
            <Box id="client-step">
              <Searchfield setEditable={setEditable} />
              <ClientNew
                formData={formData}
                setFormData={setFormData}
                handleChange={handleChange}
                handleArrayChange={handleArrayChange}
                Editable={Editable}
              />
            </Box>
          </>
        );
      case 2:
        return (
          <>
            <Box id="event-step">
              <DatePickerClient formData={formData} setFormData={setFormData} />
              <Event
                formData={formData}
                setFormData={setFormData}
                handleChange={handleChange}
                handleArrayChange={handleArrayChange}
              />
            </Box>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Box className="container">
      <TranslationBtn />
      <form onSubmit={handleSubmit} ref={formRef}>
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
            alignItems: isMobile ? "flex-start" : "center",
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
          </Breadcrumbs>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box sx={{ mb: 4 }}>{renderStep()}</Box>
          {currentStep < 2 && <NextBtn onClick={handleNext} />}
          {currentStep === 2 && (
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
