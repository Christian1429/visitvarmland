import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import "dayjs/locale/sv";
import { useTranslation } from "react-i18next";

const DatePickerClient = ({ formData, setFormData }) => {
  const { t } = useTranslation();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="sv">
      <Typography sx={{ textAlign: 'center' }}>
        Datum och tid för ditt event
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <DatePicker
          label={t("dateFrom")}
          value={dayjs(formData.occasions[0].date_start)}
          onChange={(newValue) => {
            setFormData((prevData) => ({
              ...prevData,
              occasions: [
                {
                  ...prevData.occasions[0],
                  date_start: newValue ? newValue.format("YYYY-MM-DD") : "",
                },
              ],
            }));
          }}
          slotProps={{ textField: { fullWidth: true, margin: "normal" } }}
          sx={{ width: "15.3rem" }}
        />
        <DatePicker
          label={t("dateTo")}
          value={dayjs(formData.occasions[0].date_end)}
          onChange={(newValue) => {
            setFormData((prevData) => ({
              ...prevData,
              occasions: [
                {
                  ...prevData.occasions[0],
                  date_end: newValue ? newValue.format("YYYY-MM-DD") : "",
                },
              ],
            }));
          }}
          slotProps={{ textField: { fullWidth: true, margin: "normal" } }}
          sx={{ width: "15.3rem" }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          marginTop: 2,
        }}
      >
        <TimePicker
          label={t("TimeTo")}
          value={dayjs(formData.occasions[0].time_start, "HH:mm")}
          onChange={(newValue) => {
            setFormData((prevData) => ({
              ...prevData,
              occasions: [
                {
                  ...prevData.occasions[0],
                  time_start: newValue ? newValue.format("HH:mm") : "",
                },
              ],
            }));
          }}
          slotProps={{
            textField: { fullWidth: true, margin: "normal" },
            layout: {
              sx: {
                // Customize PC
                backgroundColor: "#f0f0f0",
                borderRadius: "8px",
                padding: "16px",
              },
            },
            clock: {
              sx: {
                // Customize Mobile
                backgroundColor: "#141414",
                borderRadius: "32px",
                "& .MuiClock-squareMask": {
                  borderRadius: "32px",
                },
              },
            },
          }}
          sx={{ width: "15.3rem" }}
        />
        <TimePicker
          label={t("TimeTo")}
          value={dayjs(formData.occasions[0].time_end, "HH:mm")}
          onChange={(newValue) => {
            setFormData((prevData) => ({
              ...prevData,
              occasions: [
                {
                  ...prevData.occasions[0],
                  time_end: newValue ? newValue.format("HH:mm") : "",
                },
              ],
            }));
          }}
          slotProps={{ textField: { fullWidth: true, margin: "normal" } }}
          sx={{ width: "15.3rem" }}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default DatePickerClient;
