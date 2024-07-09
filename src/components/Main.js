import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import home from "./Assets/home.png";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import homeless from "../components/Assets/home3.svg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Main = () => {
  return (
    <div style={{ color: "#fff" }}>
      <Box sx={{ flexGrow: 1, justifyContent: "center" }}>
        <Grid
          style={{ padding: "" }}
          container
          width="100%"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
        >
          <Grid xs={8} sm={4} md={6}>
            <div
              style={{
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1>This is Heading 1</h1>
              <h3>This is heading 2</h3>
            </div>
          </Grid>
          <Grid xs={8} sm={4} md={6}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img style={{}} src={homeless}></img>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Main;

/*

import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        width="100%"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
      >
        {Array.from(Array(2)).map((_, index) => (
          <Grid item xs={8} sm={4} md={4} key={index}>
            <Item>xs=2</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}


*/
