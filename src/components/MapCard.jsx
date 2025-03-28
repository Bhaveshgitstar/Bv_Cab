import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import ZoomOutRoundedIcon from "@mui/icons-material/ZoomOutRounded";
import ZoomInRoundedIcon from "@mui/icons-material/ZoomInRounded";
import { CardMedia, Grid2 } from "@mui/material";
import { useEffect } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./index.css";
import mapRoutes from "../utility/mapRoutes";
import { PositionContext } from "../store/PositionContext";
import axios from "axios";

function MapCard() {
  const [cord, setCord] = useState({ lat: 0, lon: 0 });
  const { startPos, destPos } = useContext(PositionContext);
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
    const map = new maplibregl.Map({
      center: [77.3269885, 28.5705657],
      zoom: 12,
      container: "map",
    });

    var style =
      "https://maps.geoapify.com/v1/styles/osm-bright/style.json?apiKey=440b5a17c9744781ac1d712090b0dcdf";
    console.log(style);
    map.setStyle(style);

    map.addControl(new maplibregl.NavigationControl());

    const fetch = async () => {
      var jsData = {
        Origin_Lat: startPos.lat,
        Origin_Lon: startPos.lon,
        Destination_Lat: destPos.lat,
        Destination_Lon: destPos.lon,
      };
      var data = await axios.post(
        "https://bvcabserver-1-0.onrender.com/api/route/",
        jsData
      );
      console.log(data.data);

      mapRoutes(startPos, destPos, data.data);
    };
    if (
      startPos.lon != 0 &&
      startPos.lat != 0 &&
      destPos.lon != 0 &&
      destPos.lat != 0
    ) {
      fetch();
    }
  }, [startPos, destPos]);

  return (
    <>
      <Grid2 size={12} sx={{ pt: 5, pl: 5, pr: 5 }} gridRow={20}>
        <Card sx={{ borderRadius: "28px" }}>
          {/* <label class="switch">
              
              <span class="slider round"></span>
            </label> */}
          <span id="showDetails" />
          {/* Show route details */}

          <CardMedia id="map" sx={{ height: "28rem" }} />
        </Card>
      </Grid2>
    </>
  );
}

export default MapCard;
