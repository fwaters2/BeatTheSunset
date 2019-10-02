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
  List,
  ListItem,
  ListItemIcon
} from "@material-ui/core";
import LineIcon from "./lineIcon.png";
import FacebookIcon from "./facebook.png";
import Firebase from "./Firebase";
import { Phone } from "@material-ui/icons";

export default function ListingDialog(props) {
  const { open, handleClose } = props;
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [isSingle, setSingle] = React.useState(true);
  const [phone, setPhone] = React.useState("");
  const [facebook, setFacebook] = React.useState("");
  const [line, setLine] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [other, setOther] = React.useState("");
  const [secret,setSecret] = React.useState("")

  const handleSubmit = () => {
    Firebase.firestore()
      .collection("teamfinderlisting")
      .add({
        name: name,
        description: description,
        isSingle: isSingle,
        phone: phone,
        facebook: facebook,
        line: line,
        email: email,
        other: other,
        secret: secret,
        timestamp: new Date()
      });
      setName("")
      setDescription("")
      setSingle(false)
      setPhone("")
      setFacebook("")
      setLine("")
      setEmail("")
      setOther("")
      setSecret("")
      handleClose()
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Create Listing</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Any contact info you enter will be displayed publicly for others to be
          able to contact you
        </DialogContentText>
        <ButtonGroup fullWidth variant="contained">
          <Button
            variant={isSingle ? "contained" : "outlined"}
            color={isSingle ? "primary" : ""}
            onClick={() => setSingle(true)}
          >
            Individual
          </Button>
          <Button
            variant={!isSingle ? "contained" : "outlined"}
            color={!isSingle ? "primary" : ""}
            onClick={() => setSingle(false)}
          >
            Group
          </Button>
        </ButtonGroup>
        <TextField
          autoFocus
          value={name}
          onChange={e => setName(e.target.value)}
          margin="dense"
          id="name"
          required
          label={isSingle ? "Name" : "Names"}
          type="text"
          fullWidth
        />
        <TextField
          value={email}
          onChange={e => setEmail(e.target.value)}
          margin="dense"
          id="email"
          required
          label={isSingle?"Email":"Email (just one, others can be listed at the bottom)"}
          type="email"
          fullWidth
        />
        <TextField
          value={secret}
          onChange={e => setSecret(e.target.value)}
          margin="dense"
          id="secret"
          required
          label="Favorite post-race food"
          helperText="(Remember this answer to delete listing)"
          type="text"
          fullWidth
        />
        <TextField
          value={description}
          onChange={e => setDescription(e.target.value)}
          margin="dense"
          id="description"
          helperText="(optional)"
          label="Short Description of who you are or who you're looking for"
          type="text"
          multiline
          fullWidth
        />
        <List>
          <ListItem>
            <ListItemIcon>
              <img src={LineIcon} alt="line" height="25px" />
            </ListItemIcon>
            <TextField
              value={line}
              onChange={e => setLine(e.target.value)}
              margin="dense"
              id="contact"
              helperText="(optional)"
              label="Line ID"
              type="text"
              fullWidth
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img src={FacebookIcon} alt="line" height="25px" />
            </ListItemIcon>
            <TextField
              value={facebook}
              onChange={e => setFacebook(e.target.value)}
              margin="dense"
              id="contact"
              helperText="(optional)"
              label="Facebook Name"
              type="text"
              fullWidth
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Phone style={{ color: "orange" }} />
            </ListItemIcon>
            <TextField
              value={phone}
              onChange={e => setPhone(e.target.value)}
              margin="dense"
              id="contact"
              helperText="(optional)"
              label="Phone Number"
              type="tel"
              fullWidth
            />
          </ListItem>
        </List>
        <TextField
          value={other}
          onChange={e => setOther(e.target.value)}
          margin="dense"
          id="contact"
          helperText="(optional)"
          label="Is there another way you'd like to be contacted?"
          type="text"
          multiline
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" disabled={!name||!email}>
          Create Listing
        </Button>
      </DialogActions>
    </Dialog>
  );
}
