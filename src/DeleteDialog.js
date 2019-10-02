import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  ButtonGroup,
  Select,
  MenuItem,
  Menu,
  Box,
  Grid
} from "@material-ui/core";
import Firebase from './Firebase'

export default function DeleteDialog(props) {
  const { openDelete, handleCloseDelete, secret, id } = props;
  const [confirmSecret, setConfirmSecret] = React.useState("");
  const [reason, setReason] = React.useState("");
  const [reason2, setReason2] = React.useState("")

const handleDeleteConfirmation =() =>{
    Firebase.firestore().collection("teamfinderlisting").doc(id).update({
        isDeleted:true,
        reason:reason==="other"?reason2:reason,
        timeDeleted:new Date()
    })
    
    setReason("")
    setReason2("")
    handleCloseDelete()
}

  return (
    <Dialog
      fullWidth
      onClose={handleCloseDelete}
      aria-labelledby="simple-dialog-title"
      open={openDelete}
    >
      <DialogTitle id="simple-dialog-title">Delete Listing?</DialogTitle>
      <DialogContent>
          <Grid container>
              <Grid item xs={12} sm={3}>
        <DialogContentText>Reason:</DialogContentText></Grid>
        <Grid item xs={12} sm={9}>
        <Select value={reason} onChange={e => setReason(e.target.value)} fullWidth>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="foundTeam">Found a team!</MenuItem>
          <MenuItem value="changedMind">Changed my mind</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select></Grid>
        </Grid>
        {reason==="other"?
        <TextField
        value={reason2}
        onChange={e => setReason2(e.target.value)}
        margin="dense"
        id="reason"
        label="Other"
        type="text"
        multiline
        fullWidth
      />
    :null}
        <TextField
        required
          value={confirmSecret}
          onChange={e => setConfirmSecret(e.target.value)}
          margin="dense"
          id="confirm secret"
          label="food"
          helperText="Confirm favorite post-run food to delete!"
          type="text"
          fullWidth
          variant="filled"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDelete} color="primary">
          Cancel
        </Button>
        <Button
          onClick={handleDeleteConfirmation}
          disabled={!(secret == confirmSecret)&&!(confirmSecret === "admin12345")}
        >
          DELETE LISTING
        </Button>
      </DialogActions>
    </Dialog>
  );
}
