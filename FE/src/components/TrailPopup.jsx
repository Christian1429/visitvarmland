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

const TrailPopup = ({ formData, setFormData }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '10vh',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsPopupOpen(true)}
        >
          Är det en stig?
        </Button>
      </div>

      <Dialog open={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <DialogTitle sx={{ textAlign: 'center' }}>Stig information</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: '30rem',
              padding: '1rem',
            }}
          >
            <TextField
              label="Trail Code Snippet"
              name="trail_code_snippet"
              value={formData.trail_code_snippet}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  trail_code_snippet: e.target.value,
                }))
              }
            />
            <TextField
              label="Stigens totala längd i km"
              name="trail_total_length"
              type="number"
              value={formData.trail_total_length}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  trail_total_length: e.target.value,
                }))
              }
            />
            <TextField
              label="Antal stigar"
              name="number_of_trails"
              type="number"
              value={formData.number_of_trails}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  number_of_trails: e.target.value,
                }))
              }
              className="text-field"
            />
            <TextField
              label="Stigens svårighetsgrad"
              name="trail_level"
              value={formData.trail_level}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  trail_level: e.target.value,
                }))
              }
            />
            <TextField
              label="Beskriv terräng"
              name="trail_terrain"
              value={formData.trail_terrain}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  trail_terrain: e.target.value,
                }))
              }
            />
            <TextField
              label="Stigens tid"
              name="trail_time"
              value={formData.trail_time}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  trail_time: e.target.value,
                }))
              }
            />
          </Box>
        </DialogContent>
        <DialogActions
          style={{ display: 'flex', justifyContent: 'center', paddingTop: '0' }}
        >
          <Box>
            <Button
              onClick={() => {
                console.log('Saved data:', formData);
                setIsPopupOpen(false);
              }}
              sx={{ marginBottom: '2rem', width: '8rem' }}
            >
              Spara
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TrailPopup;
