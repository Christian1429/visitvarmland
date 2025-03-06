import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { Box, Typography, useMediaQuery, TextField } from "@mui/material";
import dayjs from "dayjs";
import "dayjs/locale/sv";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
// import Other_info from "./Other_info";

const DatePickerClient = ({ formData, setFormData }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="sv">
      <Typography sx={{ textAlign: "center" }}>{t("event_title")}</Typography>
      <Box
        sx={{
          display: isMobile ? "grid" : "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          gap: isMobile ? "0rem" : "1rem",
        }}
      >
        <DatePicker
          label={t("date_start")}
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
          required
          slotProps={{ textField: { fullWidth: true, margin: "normal" } }}
          sx={{ width: "15.3rem" }}
        />
        <DatePicker
          label={t("date_end")}
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
          required
        />
      </Box>
      <Box
        sx={{
          display: isMobile ? "grid" : "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          gap: isMobile ? "0rem" : "1rem",
          textAlign: "center",
        }}
      >
        <TimePicker
          label={t("time_start")}
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
          label={t("time_end")}
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
          required
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          marginBottom: "1rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          id="date_other_information"
          label={t("date_other_information")}
          name="date_other_information"
          value={formData.occasions[0].date_other_information || ""}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              occasions: [
                {
                  ...prevData.occasions[0],
                  date_other_information: e.target.value,
                },
              ],
            }))
          }
          multiline
          rows={4}
          sx={{ width: "90%" }}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default DatePickerClient;
