import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const SuccessModal = ({ open, onClose }) => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
      }}
    >
      <Dialog open={open} onClose={onClose}>
        <DialogTitle sx={{ textAlign: 'center' }}>
          {t('success_title')}
        </DialogTitle>
        <DialogContent
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <DialogContentText>{t('success_message')}</DialogContentText>
        </DialogContent>
        <DialogActions
          style={{ display: 'flex', justifyContent: 'center', paddingTop: '0' }}
        >
          <Button
            onClick={() =>
              (window.location.href = 'https://www.visitvarmland.com')
            }
            autoFocus
          >
            {t('success_close')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SuccessModal;
