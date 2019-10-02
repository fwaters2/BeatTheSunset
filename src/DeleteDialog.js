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
  const { openDelete, handleCloseDelete, email, id } = props;
  const [confirmEmail, setConfirmEmail] = React.useState("");
  const [reason, setReason] = React.useState("");
  const [reason2, setReason2] = React.useState("")

const handleDeleteConfirmation =() =>{
    Firebase.firestore().collection("teamfinderlisting").doc(id).update({
        isDeleted:true,
        reason:reason==="other"?reason2:reason,
        timeDeleted:new Date()
    })
    setConfirmEmail("")
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
              <Grid item xs={3}>
        <DialogContentText>Reason:</DialogContentText></Grid>
        <Grid item xs={9}>
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
        fullWidth
      />
    :null}
        <TextField
        required
          value={confirmEmail}
          onChange={e => setConfirmEmail(e.target.value)}
          margin="dense"
          id="email"
          label="Enter email from listing to confirm deletion"
          type="email"
          fullWidth
          variant='outlined'
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDelete} color="primary">
          Cancel
        </Button>
        <Button
          onClick={handleDeleteConfirmation}
          disabled={!(email == confirmEmail)}
        >
          DELETE LISTING
        </Button>
      </DialogActions>
    </Dialog>
  );
}