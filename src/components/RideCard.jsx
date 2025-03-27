import React, { useState } from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  CardContent,
  Grid,
  Grid2,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
const RideCard = () => {
  const [driver, setDriver] = useState(false);
  const [focus, setFocused] = useState(false);
  const [focusTime, setFocusedTime] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const onFocusTime = () => setFocusedTime(true);
  const onBlurTime = () => setFocusedTime(false);
  const MyToggleButton = styled(ToggleButton)({
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: '#00049E'
    }
  });

  return (
    <>
      <Grid2 container padding={5}>
        <Grid2 size={12}>
          <ToggleButtonGroup fullWidth
            color="primary"
            value={driver.toString()}
            exclusive
            onChange={()=>{setDriver(!driver)}}
            aria-label="Platform"
            sx={{paddingBottom:'1.85rem'}}
            // onFocus={handleFocus}
          >
            <MyToggleButton id value='true'sx={{background:'grey',color:'white',borderRadius:'1rem'}} >Find Ride</MyToggleButton>
            <MyToggleButton value='false' sx={{background:'grey',color:'white',borderRadius:'1rem'}}>Add Ride</MyToggleButton>
          </ToggleButtonGroup>
        </Grid2>
        <Grid2>
          <Card
            fullWidth
            sx={{
              // display: "flex",
              // position: "absolute",
              // width: "33.44rem",
              // // alignItems:'center',
              // height: "25.94rem",
              // left: "4.61%",
              // right: "53.59%",
              // top: "28%",
              //   bottom: "5.13%",
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
                  <TextField
                    fullWidth
                    id="start-input"
                    label="⚫  Starting Point"
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
                </Grid2>
                <Grid2 size={12}>
                  <TextField
                    fullWidth
                    id="destination-input"
                    label=" ◼️  Destination"
                    variant="filled"
                    sx={{
                      // height: "59px",
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
                      background: '#00049E',
                      variant: "contained",
                      color: "#FFFFFF",

                      borderRadius: "15px",
                      padding: "0.5rem",
                      fontSize: "15px",
                      fontWeight: "500",
                      // marginLeft: "7.8rem",
                    }}
                  >
                    {driver?"Find":"Add"}
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
