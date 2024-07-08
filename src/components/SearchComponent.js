import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SearchComponent({ filterFromfetchedData, searchValue }) {
  return (
    <div>
      <div
        sx={{
          display: "block",
        }}
      >
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            value={searchValue}
            onChange={(e) => filterFromfetchedData(e.target.value)}
            label="Search User"
            focused
            sx={{
              width: "500px",
              height: "48px",
              "& .MuiInputBase-input": {
                color: "#fff",
              },
            }}
            color="secondary"
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{ height: "48px", width: "200px" }}
          >
            Search
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default SearchComponent;
