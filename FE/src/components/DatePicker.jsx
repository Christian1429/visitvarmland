import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box } from '@mui/material';
import dayjs from 'dayjs';
import 'dayjs/locale/sv';

const DatePickerClient = ({
  fromDate,
  toDate,
  handleFromDateChange,
  handleToDateChange,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="sv">
      <h4>Datum för ditt event</h4>  
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
        <DatePicker
          label="Från"
          value={fromDate ? dayjs(fromDate) : null}
          onChange={handleFromDateChange}
          slotProps={{ textField: { fullWidth: true, margin: 'normal' } }}
          sx={{ width: '15.3rem' }}
        />
        <DatePicker
          label="Till"
          value={toDate ? dayjs(toDate) : null}
          onChange={handleToDateChange}
          slotProps={{ textField: { fullWidth: true, margin: 'normal' } }}
          sx={{ width: '15.3rem' }}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default DatePickerClient;
