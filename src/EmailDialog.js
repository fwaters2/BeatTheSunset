import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, ButtonGroup } from "@material-ui/core";

export default function EmailDialog(props) {
    const {openEmail, handleCloseEmail, runners} = props
  
  return (
    <Dialog
      onClose={handleCloseEmail}
      aria-labelledby="simple-dialog-title"
      open={openEmail}
    >
      <DialogTitle id="simple-dialog-title">Contact Form</DialogTitle>
      <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name(s)"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="message"
            label="Message"
            type="text"
            multiline
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button 
          onClick={handleCloseEmail} 
          color="primary">
            Cancel
          </Button>
          <Button 
          onClick={()=>handleCloseEmail} 
          color="primary">
            Send Email
          </Button>
        </DialogActions>
        
    </Dialog>
  );
}
