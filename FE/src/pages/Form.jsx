import React, { useState, useContext } from "react";
import {
  Box,
  Typography,
  Breadcrumbs,
  Link,
  useMediaQuery,
  Button,
} from "@mui/material";
import Contact from "../components/Contact";
import ClientNew from "../components/ClientNew";
import Event from "../components/Event";
import NextBtn from "../components/buttons/NextBtn";
import CloseBtn from "../components/buttons/CloseBtn";
import TranslationBtn from "../components/buttons/TranslationBtn";
import { useTheme } from "@mui/material/styles";
import "./Form.css";
import ClientExist from "../components/ClientExist";
import { FormDataContext } from "../context/FormDataContext";
import handleSubmit from "../utils/handleSubmit";
import { handleChange, handleArrayChange } from "../utils/formUtils";
import DatePickerClient from "../components/DatePicker";
import { useTranslation } from "react-i18next";
import SuccessModal from "../components/Confirmation_modal";

const Form = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [currentStep, setCurrentStep] = useState(0);
  const { formData, setFormData } = useContext(FormDataContext);
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  const handleSubmitWithModal = async (formData) => {
    const isSubmitted = await handleSubmit(formData);

    if (isSubmitted) {
      setShowModal(true); // Show success modal only if submission was successful
    } else {
      console.log("Form submission failed. Please try again");
      alert("Form submission failed. Please try again."); // You can replace this with an error modal
    }
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
            <ClientExist setFormData={setFormData} />
            <ClientNew
              formData={formData}
              setFormData={setFormData}
              handleChange={handleChange}
              handleArrayChange={handleArrayChange}
            />
          </>
        );
      case 2:
        return (
          <>
            <DatePickerClient formData={formData} setFormData={setFormData} />
            <Event
              formData={formData}
              setFormData={setFormData}
              handleChange={handleChange}
              handleArrayChange={handleArrayChange}
            />
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

        <CloseBtn redirectUrl="https://visitvarmland.com" />
        <Box
          display="flex"
          justifyContent="center"
          sx={{ marginBottom: "1rem" }}
        >
          <Breadcrumbs
            aria-label="breadcrumb"
            separator=">"
            sx={{
              marginBottom: "1rem",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
            }}
          >
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
