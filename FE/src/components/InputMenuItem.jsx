import { MenuItem, TextField } from '@mui/material';

const InputMenuItem = ({ label, value, onChange }) => {
  return (
    <MenuItem>
      <TextField
        label={label}
        value={value}
        onChange={onChange}
        fullWidth
        variant="outlined"
        margin="dense"
      />
    </MenuItem>
  );
};

export default InputMenuItem;
