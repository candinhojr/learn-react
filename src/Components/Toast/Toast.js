import React from 'react';
import Alert from '@material-ui/lab/Alert'
import Snackbar from '@material-ui/core/Snackbar'

export default ({ open, handleClose, severity, children }) => (
    <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={2000}
    >
        <Alert onClose={handleClose} variant='filled' severity={severity} >
            {children}
        </Alert>
    </Snackbar>
)