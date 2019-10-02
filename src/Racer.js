import React from "react";
import { Person, Group, Email, Phone, Info, Delete } from "@material-ui/icons";
import {
  Grid,
  ListItem,
  Box,
  Typography,
  Button,
  ListItemIcon
} from "@material-ui/core";
import LineIcon from "./lineIcon.png";
import FacebookIcon from "./facebook.png"
import DeleteDialog from "./DeleteDialog";

export default function Racer(props) {
  const [openDelete, setOpenDelete] = React.useState(false);
  const {
    name,
    description,
    isSingle,
    phone,
    facebook,
    line,
    email,
    other,
    secret,
    id
  } = props;
  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  return (
    <Grid item xs={12} md={6} xl={4} style={{border:'1px solid orange'}}>
      <ListItem>
        <ListItemIcon>
          {isSingle ? (
            <Person style={{ color: "orange" }} />
          ) : (
            <Group style={{ color: "orange" }} />
          )}
        </ListItemIcon>
        <Box>
          <Typography variant="h6" style={{ color: "orange" }}>
            {name}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </Box>
        {id?
        <Delete style={{position:"absolute",right:0, top:"2px"}} onClick={handleClickOpenDelete} />:null}
      </ListItem>
      <Grid container>
            {line ? <Grid item xs={12} sm={6} lg={3}><ListItem><ListItemIcon><img src={LineIcon} alt="line" height="30px" /></ListItemIcon><Typography>{line}</Typography></ListItem></Grid> : null}
            {phone ? <Grid item xs={12} sm={6} lg={3}><ListItem><ListItemIcon><Phone style={{color:"orange"}} /></ListItemIcon><Typography>{phone}</Typography></ListItem></Grid> : null}
            {facebook ? <Grid item xs={12} sm={7} lg={3}><ListItem><ListItemIcon><img src={FacebookIcon} alt="line" height="25px" /></ListItemIcon><Typography>{facebook}</Typography></ListItem></Grid> : null}
            {email ? <Grid item xs={12} lg={6}><ListItem><ListItemIcon><Email style={{color:"orange"}} /></ListItemIcon><Typography>{email}</Typography></ListItem></Grid> : null}
            {other ? <Grid item xs={12}><ListItem><ListItemIcon><Info style={{color:"orange"}}/></ListItemIcon><Typography>{other}</Typography></ListItem></Grid> : null}
            </Grid>
            <DeleteDialog openDelete={openDelete} handleCloseDelete={handleCloseDelete} secret={secret} id={id}/>
    </Grid>
  );
}
