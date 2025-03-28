import { Card, Grid2 } from "@mui/material";
import RideCard from "./RideCard";
import MapCard from "./MapCard";
import { useEffect, useState } from "react";

const HomeGrid = () => {
  const[start,setStart]=useState({lat:0,lon:0})
  const[dest,setDest]=useState({lat:0,lon:0})
  
  return (
    <Grid2 container spacing={1}>
      <Grid2 size={{ xs: 12, md: 6, lg: 6 }}>
        <MapCard/>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6, lg: 6 }}>
        <RideCard setStrtPt={setStart} setDestPt={setDest}/>
      </Grid2>
    </Grid2>
  );
};
export default HomeGrid;
