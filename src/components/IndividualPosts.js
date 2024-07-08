import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import React from "react";

function IndividualPosts({ title, body }) {
  return (
    <div style={{}}>
      <List
        sx={{
          width: "100%",
          minWidth: 860,
          maxWidth: 860,
          bgcolor: "#9c27b0",
        }}
      >
        <Divider component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText
            sx={{}}
            primary={title}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {body}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </div>
  );
}

export default IndividualPosts;
