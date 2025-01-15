import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const ClientExist = ({
  dropdownValueExisting,
  handleDropdownChangeExisting,
}) => {
  return (
    <FormControl fullWidth margin="normal" sx={{ width: '15rem' }}>
      <InputLabel id="dropdown-label-existing">Redan registrerad?</InputLabel>
      <Select
        labelId="dropdown-label-existing"
        id="dropdown-existing"
        value={dropdownValueExisting}
        onChange={handleDropdownChangeExisting}
        label="Redan registrerad?"
      >
        <MenuItem value="existing1">Brittas bullbak</MenuItem>
        <MenuItem value="existing2">Fågelskådarnas riksförbund</MenuItem>
        <MenuItem value="existing3">Utebio Arvika</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ClientExist;
