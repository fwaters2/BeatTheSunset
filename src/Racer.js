import React from "react";
import { Person, Group } from "@material-ui/icons";
import { Grid, ListItem, Box, Typography, Button, ListItemIcon } from "@material-ui/core";

export default function Racer(props) {
  const { handleClickOpenEmail, name, description, isSingle } = props;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <ListItem button onClick={handleClickOpenEmail}>
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
          <Button fullWidth color="primary">
            Contact
          </Button>
        </Box>
      </ListItem>
    </Grid>
  );
}
