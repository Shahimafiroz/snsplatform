import React from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function CostumCard({ name, id }) {
  return (
    <div>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent sx={{ backgroundColor: "#323538" }}>
            <Typography
              sx={{ fontSize: 14, color: "white" }}
              // color="#f1eaf2"
              gutterBottom
            >
              USER:
            </Typography>
            <Typography variant="h5" component="div" sx={{ color: "#d9e4ed" }}>
              {name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="#f1eaf2">
              user id:
            </Typography>
            <Typography variant="body2" sx={{ color: "#9c27b0" }}>
              {id}
              <br />
              {""}
            </Typography>
          </CardContent>
          <CardActions sx={{ backgroundColor: "#9c27b0" }}>
            <Button
              sx={{ color: "#d6d9dc", textDecoration: "none" }}
              size="small"
            >
              <NavLink
                style={{ textDecoration: "none", fontWeight: "bold" }}
                to={`/posts/${id}`}
                state={{ name }}
              >
                VIEW POSTS
              </NavLink>
              {console.log(name)}
              {console.log(id)}
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}

export default CostumCard;

{
  /* my simple card */
}
{
  /* <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <h1 style={{ color: "#fff" }}>{name}</h1>
        </div>
        <div>
          <button>
            <NavLink to={`/posts/${id}`}>View post</NavLink>
            {console.log(name)}
            {console.log(id)}
          </button>
        </div>
      </div> */
}
{
  /* my card ends */
}

{
  /* <div>
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
      </div> */
}
