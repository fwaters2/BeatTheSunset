import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, ButtonGroup } from "@material-ui/core";

export default function ListingDialog(props) {
    const {open, handleClose} = props
  
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Create Listing</DialogTitle>
      <DialogContent>
          <DialogContentText>
            Any contact info you enter will be displayed publicly for others to be able to contact you
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name(s)"
            type="text"
            fullWidth
          />
          <ButtonGroup fullWidth variant="contained">
              <Button variant="contained" color="primary">Individual</Button>
              <Button>Group</Button>
          </ButtonGroup>
          <TextField
            margin="dense"
            id="description"
            label="Short Description"
            type="text"
            multiline
            fullWidth
          />
          <TextField
            margin="dense"
            id="contact"
            label="How to Contact you"
            type="text"
            multiline
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button 
          onClick={handleClose} 
          color="primary">
            Cancel
          </Button>
          <Button 
          onClick={()=>handleClose} 
          color="primary">
            Create Listing
          </Button>
        </DialogActions>
        
    </Dialog>
  );
}
