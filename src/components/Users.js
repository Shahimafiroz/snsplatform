import React, { useState, useEffect } from "react";
import CostumCard from "./Card";
import SearchComp from "./SearchComponent";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

function Users() {
  const [allData, setAlldata] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setsearchValue] = useState("");

  useEffect(() => {
    let fetchData = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );

      const responseData = response.data;
      console.log("this is " + response);
      setAlldata(responseData);
      setFilteredData(responseData);

      console.log(allData);
    };

    fetchData();
  }, []);

  const filterFromfetchedData = (searchValue) => {
    setsearchValue(searchValue);
    console.log(searchValue);
    const lowerCaseSearchValue = searchValue.toLowerCase();
    if (searchValue !== "") {
      const updatedData = allData.filter((data) => {
        const lowerCaseDataValue = data.name.toLowerCase();
        if (lowerCaseDataValue.startsWith(lowerCaseSearchValue)) {
          console.log(lowerCaseDataValue, lowerCaseSearchValue, data.name);
          return data.name;
        }
      });
      setFilteredData(updatedData);
    } else {
      setFilteredData(allData);
    }
  };

  return (
    <div style={{ backgroundColor: "#131415", padding: "2rem" }}>
      {/* search component */}
      <div>
        <SearchComp
          filterFromfetchedData={filterFromfetchedData}
          searchValue={searchValue}
        />
        {/* end search component */}
      </div>

      {/* mui card  */}
      <div style={{ padding: "4rem" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 3, sm: 8, md: 12 }}
          >
            {filteredData.map((card, index) => (
              <Grid item spacing={4} xs={2} sm={4} md={3} key={index}>
                <CostumCard key={card.id} name={card.name} id={card.id} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
      {/* mui ends */}
    </div>
  );
}

export default Users;
