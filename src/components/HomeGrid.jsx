import { Card, Grid2 } from "@mui/material";
import RideCard from "./RideCard";
import MapCard from "./MapCard";

const HomeGrid = () => {
  return (
    <Grid2 container spacing={1}>
      <Grid2 size={{ xs: 12, md: 6, lg: 6 }}>
        <MapCard/>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6, lg: 6 }}>
        <RideCard/>
      </Grid2>
    </Grid2>
  );
};
export default HomeGrid;
