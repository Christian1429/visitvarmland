import React, { useState, useEffect, useContext } from "react";
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
import DatePickerClient from "../components/DatePicker";
import ClientEvent from "../components/ClientEvent";
import BtnNext from "../components/Buttons/BtnNext";
import CloseBtn from "../components/Buttons/CloseBtn";
import { useTheme } from "@mui/material/styles";
import "./Form.css";
import ClientExist from "../components/ClientExist";
import { FormDataContext } from "../context/FormDataContext";
import handleSubmit from "../utils/handleSubmit";
import BtnSend from "../components/Buttons/SendBtn";

const Form = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [currentStep, setCurrentStep] = useState(0);
  const [organizers, setOrganizers] = useState(null);
  const { formData, setFormData } = useContext(FormDataContext);

  // Contact
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

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
            organization_id: organizers.organization_id || "",
            booking_link: organizers.booking_link || "",
            website: organizers.website_link || "",
            email: organizers.email || "",
            phone_numbers: organizers.phone_numbers || [],
          },
        ],
      }));
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleArrayChange = (e, index, arrayName, fieldName) => {
    const { value } = e.target;
    setFormData((prevData) => {
      const updatedArray = [...prevData[arrayName]];
      updatedArray[index][fieldName] = value;
      return {
        ...prevData,
        [arrayName]: updatedArray,
      };
    });
  };

  const handleFormSubmit = async () => {
    await handleSubmit(formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <Contact
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              address={address}
              setAddress={setAddress}
              phone={phone}
              setPhone={setPhone}
            />
          </>
        );
      case 1:
        return (
          <>
            <ClientExist
              handleClientSelect={handleClientSelect}
              clients={organizers}
            />
            <ClientNew
              title={formData.organizers[0]?.title || ""}
              setTitle={(value) =>
                setFormData((prevData) => ({
                  ...prevData,
                  organizers: [
                    {
                      ...prevData.organizers[0],
                      title: value,
                    },
                  ],
                }))
              }
              street1={formData.organizers[0]?.street1 || ""}
              setStreet1={(value) =>
                setFormData((prevData) => ({
                  ...prevData,
                  organizers: [
                    {
                      ...prevData.organizers[0],
                      street1: value,
                    },
                  ],
                }))
              }
              street2={formData.organizers[0]?.street2 || ""}
              setStreet2={(value) =>
                setFormData((prevData) => ({
                  ...prevData,
                  organizers: [
                    {
                      ...prevData.organizers[0],
                      street2: value,
                    },
                  ],
                }))
              }
              zip_code={formData.organizers[0]?.zip_code || ""}
              setZipCode={(value) =>
                setFormData((prevData) => ({
                  ...prevData,
                  organizers: [
                    {
                      ...prevData.organizers[0],
                      zip_code: value,
                    },
                  ],
                }))
              }
              city={formData.organizers[0]?.city || ""}
              setCity={(value) =>
                setFormData((prevData) => ({
                  ...prevData,
                  organizers: [
                    {
                      ...prevData.organizers[0],
                      city: value,
                    },
                  ],
                }))
              }
              municipality_id={formData.organizers[0]?.municipality_id || 0}
              setMunicipalityId={(value) =>
                setFormData((prevData) => ({
                  ...prevData,
                  organizers: [
                    {
                      ...prevData.organizers[0],
                      municipality_id: value,
                    },
                  ],
                }))
              }
              organization_id={formData.organizers[0]?.organization_id || 0}
              setOrganizationId={(value) =>
                setFormData((prevData) => ({
                  ...prevData,
                  organizers: [
                    {
                      ...prevData.organizers[0],
                      organization_id: value,
                    },
                  ],
                }))
              }
              booking_link={formData.organizers[0]?.booking_link || ""}
              setBookingLink={(value) =>
                setFormData((prevData) => ({
                  ...prevData,
                  organizers: [
                    {
                      ...prevData.organizers[0],
                      booking_link: value,
                    },
                  ],
                }))
              }
              website={formData.organizers[0]?.website || ""}
              setWebsite={(value) =>
                setFormData((prevData) => ({
                  ...prevData,
                  organizers: [
                    {
                      ...prevData.organizers[0],
                      website: value,
                    },
                  ],
                }))
              }
              email={formData.organizers[0]?.email || ""}
              setEmail={(value) =>
                setFormData((prevData) => ({
                  ...prevData,
                  organizers: [
                    {
                      ...prevData.organizers[0],
                      email: value,
                    },
                  ],
                }))
              }
              phone_numbers={formData.organizers[0]?.phone_numbers || []}
              setPhoneNumbers={(value) =>
                setFormData((prevData) => ({
                  ...prevData,
                  organizers: [
                    {
                      ...prevData.organizers[0],
                      phone_numbers: value,
                    },
                  ],
                }))
              }
              handleChange={handleChange}
              handleArrayChange={handleArrayChange}
            />
          </>
        );
      case 2:
        return (
          <>
            <ClientEvent
              title={formData.title}
              setTitle={(value) =>
                setFormData((prevData) => ({ ...prevData, title: value }))
              }
              description={formData.description}
              setDescription={(value) =>
                setFormData((prevData) => ({ ...prevData, description: value }))
              }
              sales_text={formData.sales_text}
              setSalesText={(value) =>
                setFormData((prevData) => ({ ...prevData, sales_text: value }))
              }
              presentation={formData.presentation}
              setPresentation={(value) =>
                setFormData((prevData) => ({
                  ...prevData,
                  presentation: value,
                }))
              }
              open_hours={formData.open_hours}
              setOpenHours={(value) =>
                setFormData((prevData) => ({ ...prevData, open_hours: value }))
              }
              ticket_information={formData.ticket_information}
              setTicketInformation={(value) =>
                setFormData((prevData) => ({
                  ...prevData,
                  ticket_information: value,
                }))
              }
              ticket_info={formData.ticket_info}
              setTicketInfo={(value) =>
                setFormData((prevData) => ({ ...prevData, ticket_info: value }))
              }
              open_times={formData.open_times}
              setOpenTimes={(value) =>
                setFormData((prevData) => ({ ...prevData, open_times: value }))
              }
              meta_title={formData.meta_title}
              setMetaTitle={(value) =>
                setFormData((prevData) => ({ ...prevData, meta_title: value }))
              }
              meta_keywords={formData.meta_keywords}
              setMetaKeywords={(value) =>
                setFormData((prevData) => ({
                  ...prevData,
                  meta_keywords: value,
                }))
              }
              meta_description={formData.meta_description}
              setMetaDescription={(value) =>
                setFormData((prevData) => ({
                  ...prevData,
                  meta_description: value,
                }))
              }
              booking_link={formData.booking_link}
              setBookingLink={(value) =>
                setFormData((prevData) => ({
                  ...prevData,
                  booking_link: value,
                }))
              }
              website_link={formData.website_link}
              setWebsiteLink={(value) =>
                setFormData((prevData) => ({
                  ...prevData,
                  website_link: value,
                }))
              }
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
        Tips och evenemang
      </Typography>
      <CloseBtn redirectUrl="https://visitvarmland.com" />
      <Box display="flex" justifyContent="center" sx={{ marginBottom: "1rem" }}>
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
            Steg 1
          </Link>
          <Link
            color={currentStep === 1 ? "textPrimary" : "inherit"}
            onClick={() => handleStepClick(1)}
            sx={{ cursor: "pointer" }}
          >
            Steg 2
          </Link>
          <Link
            color={currentStep === 2 ? "textPrimary" : "inherit"}
            onClick={() => handleStepClick(2)}
            sx={{ cursor: "pointer" }}
          >
            Steg 3
          </Link>
        </Breadcrumbs>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box sx={{ mb: 4 }}>{renderStep()}</Box>
        {currentStep < 2 && <BtnNext onClick={handleNext} />}
        {currentStep === 2 && (
          <BtnSend onClick={handleFormSubmit}>Submit</BtnSend>
        )}
      </Box>
    </Box>
  );
};

export default Form;
