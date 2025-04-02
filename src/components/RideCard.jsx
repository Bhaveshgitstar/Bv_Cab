import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { setStartLocation, setDestLocation } from "../store/locationSlice";
import axios from "axios";
import {
  Box,
  Button,
  CardContent,
  Grid,
  Autocomplete,
  Grid2,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { PositionContext } from "../store/PositionContext";
import { useDispatch } from "react-redux";
const RideCard = () => {
  const [addressList, setAddressList] = useState([]);
  const [address, setAddress] = useState("Noida");
  const [driver, setDriver] = useState(false);
  const [focus, setFocused] = useState(false);
  const [focusTime, setFocusedTime] = useState(false);
  const dispatch = useDispatch();

  const { startSet, destSet } = useContext(PositionContext);

  useEffect(() => {
    let ignore = false;
    let controller = new AbortController();
    const fetch = async () => {
      try {
        var data = await axios.get(
          "https://bvcabserver-1-0.onrender.com/api/Search/" + address,
          {
            signal: controller.signal,
          }
        );
        console.log(data.data.results);
        console.log(data.data.length);
        if (data.data.length != 0 && !ignore) {
          console.log("setRun");
          setAddressList(data.data);
          controller = null;
        }
      } catch (err) {}
    };
    fetch();
    return () => {
      ignore = true;
      controller?.abort();
    };
  }, [address]);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const onFocusTime = () => setFocusedTime(true);
  const onBlurTime = () => setFocusedTime(false);
  const MyToggleButton = styled(ToggleButton)({
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: "#00049E",
    },
  });

  return (
    <>
      <Grid2 container padding={5}>
        <Grid2 size={12}>
          <ToggleButtonGroup
            fullWidth
            color="primary"
            value={driver.toString()}
            exclusive
            onChange={() => {
              setDriver(!driver);
            }}
            aria-label="Platform"
            sx={{ paddingBottom: "1.85rem" }}
            // onFocus={handleFocus}
          >
            <MyToggleButton
              id
              value="true"
              sx={{ background: "grey", color: "white", borderRadius: "1rem" }}
            >
              Find Ride
            </MyToggleButton>
            <MyToggleButton
              value="false"
              sx={{ background: "grey", color: "white", borderRadius: "1rem" }}
            >
              Add Ride
            </MyToggleButton>
          </ToggleButtonGroup>
        </Grid2>
        <Grid2>
          <Card
            fullWidth
            sx={{
              borderRadius: "1.5rem",
              background: "rgb(231, 231, 231)",
              opacity: "0.63",
            }}
          >
            <CardContent
              sx={{ paddingTop: "2.5rem", paddingLeft: "2rem", flexGrow: 1 }}
            >
              <Grid2
                container
                spacing={4}
                sx={{ justifyContent: "center", alignItems: "center" }}
              >
                <Grid2 size={12}>
                  <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    getOptionLabel={(opt) => opt.text}
                    options={
                      addressList.length > 0
                        ? addressList.map((option) => ({
                            text:
                              option.address_Line1 + " " + option.address_Line2,
                            id: option,
                          }))
                        : []
                    }
                    onChange={(evt, value) => {
                      // startSet({lat:value.id.lat,lon:value.id.lon});
                      dispatch(
                        setStartLocation({
                          lat: value.id.lat,
                          lon: value.id.lon,
                        })
                      );
                      // console.log(startPos);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        id="start-input"
                        label="⚫  Starting Point"
                        onBlur={() => {
                          setAddress("");
                          setAddressList([]);
                        }}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                        variant="filled"
                        sx={{
                          borderRadius: "15px",
                          boxShadow: "none !important",
                          background: "rgb(215, 215, 215)",
                          color: "rgb(103, 102, 89)",
                          fontFamily: "Roboto",
                          fontSize: "20px",
                          fontWeight: "300",
                          lineHeight: "23px",
                          letterSpacing: "0px",
                          textAlign: "left",
                          "& .MuiInputLabel-root": {
                            color: "black", // Change label color
                            fontWeight: "bold",
                          },
                        }}
                      />
                    )}
                  />
                </Grid2>
                <Grid2 size={12}>
                  <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    getOptionLabel={(opt) => opt.text}
                    options={
                      addressList.length > 0
                        ? addressList.map((option) => ({
                            text:
                              option.address_Line1 + " " + option.address_Line2,
                            id: option,
                          }))
                        : []
                    }
                    onChange={(evt, value) => {
                      dispatch(
                        setDestLocation({
                          lat: value.id.lat,
                          lon: value.id.lon,
                        })
                      );
                      // console.log(destPos);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        id="destination-input"
                        label=" ◼️  Destination"
                        onBlur={() => {
                          setAddress("");
                          setAddressList([]);
                        }}
                        onInput={(e) => {
                          setAddress(e.target.value);
                          // console.log(addressList)
                        }}
                        variant="filled"
                        sx={{
                          borderRadius: "15px",
                          background: "rgb(215, 215, 215)",
                          color: "rgb(103, 102, 89)",
                          fontFamily: "Roboto",
                          fontSize: "20px",
                          fontWeight: "300",
                          lineHeight: "23px",
                          letterSpacing: "0px",
                          textAlign: "left",
                          "& .MuiInputLabel-root": {
                            color: "black", // Change label color
                            fontWeight: "bold",
                          },
                        }}
                      />
                    )}
                  />
                </Grid2>
                <Grid2 size={{ sm: 6, xs: 12 }}>
                  <TextField
                    fullWidth
                    onFocus={onFocus}
                    onBlur={onBlur}
                    id="date-input"
                    label=" 📅  Today"
                    variant="filled"
                    type={focus ? "date" : "text"}
                    sx={{
                      borderRadius: "15px",
                      background: "rgb(215, 215, 215)",
                      color: "rgb(103, 102, 89)",
                      fontFamily: "Roboto",
                      fontSize: "20px",
                      "& .MuiInputLabel-root": {
                        color: "black", // Change label color
                        fontWeight: "bold",
                      },
                    }}
                  />
                </Grid2>
                <Grid2 size={{ sm: 6, xs: 12 }}>
                  <TextField
                    fullWidth
                    id="time-input"
                    label=" 🕗  Now"
                    variant="filled"
                    onFocus={onFocusTime}
                    onBlur={onBlurTime}
                    type={focusTime ? "time" : "text"}
                    sx={{
                      borderRadius: "15px",
                      background: "rgb(215, 215, 215)",
                      //   color: "rgb(103, 102, 89)",
                      fontFamily: "Roboto",
                      fontSize: "20px",
                      "& .MuiInputLabel-root": {
                        color: "black", // Change label color
                        fontWeight: "bold",
                      },
                    }}
                  />
                </Grid2>
                <Grid2 size={6}>
                  <Button
                    fullWidth
                    sx={{
                      background: "#00049E",
                      variant: "contained",
                      color: "#FFFFFF",

                      borderRadius: "15px",
                      padding: "0.5rem",
                      fontSize: "15px",
                      fontWeight: "500",
                      // marginLeft: "7.8rem",
                    }}
                  >
                    {driver ? "Find" : "Add"}
                  </Button>
                </Grid2>
              </Grid2>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </>
  );
};

export default RideCard;
