import React, { use, useContext, useState } from "react";
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
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function MapCard() {
  const [cord, setCord] = useState({ lat: 0, lon: 0 });
  // const { startPos, destPos } = useContext(PositionContext);
  const startPoint = useSelector((state) => state.location.start);
  const destPoint = useSelector((state) => state.location.dest);

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
    console.log(startPoint);
    const map = new maplibregl.Map({
      center: [cord.lon, cord.lat],
      zoom: 12,
      container: "map",
    });

    var style =
      "https://maps.geoapify.com/v1/styles/osm-bright/style.json?apiKey=440b5a17c9744781ac1d712090b0dcdf";
    console.log(style);
    map.setStyle(style);

    map.addControl(new maplibregl.NavigationControl());

    var userLocationMarker = document.createElement("div");
    userLocationMarker.className = "currentLocation";
    userLocationMarker.style.backgroundImage = `url(current.png)`;

    var userLocation = new maplibregl.Marker({
      element: userLocationMarker,
      draggable: true,
    })
      .setLngLat([cord.lon, cord.lat])
      .addTo(map);

    const fetch = async () => {
      var jsData = {
        Origin_Lat: startPoint.lat,
        Origin_Lon: startPoint.lon,
        Destination_Lat: destPoint.lat,
        Destination_Lon: destPoint.lon,
      };
      var data = await axios.post(
        "https://bvcabserver-1-0.onrender.com/api/route/",
        jsData
      );
      console.log(data.data);

      mapRoutes(cord, startPoint, destPoint, data.data);
    };
    if (
      startPoint.lon != 0 &&
      startPoint.lat != 0 &&
      destPoint.lon != 0 &&
      destPoint.lat != 0
    ) {
      fetch();
    }
  }, [cord, startPoint, destPoint]);

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
