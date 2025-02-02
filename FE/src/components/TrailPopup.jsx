import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

const TrailPopup = ({ onSave }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [trailData, setTrailData] = useState({
    trail_code_snippet: '',
    trail_total_length: 0,
    number_of_trails: 0,
    trail_level: '',
    trail_terrain: '',
    trail_time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrailData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(trailData);
    setIsPopupOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsPopupOpen(true)}
      >
        Är det en stig?
      </Button>

      {/* Popup Dialog */}
      <Dialog
        open={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      >
        <DialogTitle>Stig information</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              padding: '1rem',
            }}
          >
            <TextField
              label="Trail Code Snippet"
              name="trail_code_snippet"
              value={trailData.trail_code_snippet}
              onChange={handleChange}
            />
            <TextField
              label="Stigens totala längd i km"
              name="trail_total_length"
              type="number"
              value={trailData.trail_total_length}
              onChange={handleChange}
            />
            <TextField
              label="Antal stigar"
              name="number_of_trails"
              type="number"
              value={trailData.number_of_trails}
              onChange={handleChange}
            />
            <TextField
              label="Stigens svårighetsgrad"
              name="trail_level"
              value={trailData.trail_level}
              onChange={handleChange}
            />
            <TextField
              label="Beskriv terräng"
              name="trail_terrain"
              value={trailData.trail_terrain}
              onChange={handleChange}
            />
            <TextField
              label="Stigens tid"
              name="trail_time"
              value={trailData.trail_time}
              onChange={handleChange}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsPopupOpen(false)}>Avbryt</Button>
          <Button onClick={handleSave}>Spara</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TrailPopup;
