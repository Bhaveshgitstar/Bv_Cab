import React, { useState } from "react";
import Card from "@mui/material/Card";
import ZoomOutRoundedIcon from "@mui/icons-material/ZoomOutRounded";
import ZoomInRoundedIcon from "@mui/icons-material/ZoomInRounded";
import { CardMedia, Grid2 } from "@mui/material";
import { useEffect } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

function MapCard() {
  const [cord, setCord] = useState({ lat: 0, lon: 0 });
  const getLocation = () => {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(success, error, option);
    } else {
      console.log("Not supported");
    }
  };

  const success = (position) => {
    var tempCord = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };
    setCord({ ...tempCord });
    console.log(cord);
  };

  const option = {
    enableHighAccuracy: true,
  };

  const error = (err) => {
    console.log("Ye to kaida error aa gya bhai");
  };
  useEffect(() => {
    if (cord.lat === 0 && cord.lon === 0) {
      getLocation();
    }
  }, [cord]);

  useEffect(() => {
    console.log(cord);
    const mbMap = new maplibregl.Map({
      center: [cord.lon, cord.lat],
      zoom: 9,
      container: "map",
    });

    var style =
      "https://maps.geoapify.com/v1/styles/osm-bright/style.json?apiKey=440b5a17c9744781ac1d712090b0dcdf";
    console.log(style);
    mbMap.setStyle(style);
  }, [cord]);

  return (
    <>
      <Grid2 size={12} sx={{ pt: 5, pl: 5, pr: 5 }} gridRow={20}>
        <Card sx={{ borderRadius: "28px" }}>
          <CardMedia id="map" sx={{ height: "28rem" }} />
        </Card>
      </Grid2>
    </>
  );
}

export default MapCard;
