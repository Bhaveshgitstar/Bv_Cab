import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid2,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import CreateIcon from "@mui/icons-material/Create";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import CountryCode from "./CountryCode";

const countryCode = CountryCode;

function countryCodeToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const Login = () => {
  const [focus, setFocused] = useState(false);
  const [value, setValue] = useState();
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <Grid2
      container
      sx={{ display: "flex", justifyContent: "center" }}
      borderRadius={"28px"}
    >
      <Grid2
        size={{ xs: 12, sm: 10, md: 6, lg: 6 }}
        padding={{ xs: 2, sm: 5, md: 5, lg: 5 }}
        gridRow={20}
      >
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
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Register
              </Typography>
            </Grid2>
            <Grid2
              container
              spacing={4}
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              {" "}
              <Grid2 size={{ sm: 11, xs: 11 }}>
                <TextField
                  fullWidth
                  onFocus={onFocus}
                  onBlur={onBlur}
                  id="userId-input"
                  label=" 👤 User Id"
                  variant="filled"
                  type="text"
                  sx={{
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
              <Grid2 size={{ sm: 11, xs: 11 }}>
                <TextField
                  fullWidth
                  onFocus={onFocus}
                  onBlur={onBlur}
                  id="name-input"
                  label={
                    <Box sx={{ display: "inline-flex" }}>
                      <CreateIcon sx={{ height: "20px", marginRight: "5px" }} />
                      Name
                    </Box>
                  }
                  variant="filled"
                  type="text"
                  sx={{
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
              <Grid2 size={{ sm: 11, xs: 11 }}>
                <TextField
                  fullWidth
                  onFocus={onFocus}
                  onBlur={onBlur}
                  id="emailAddress-input"
                  label={
                    <Box sx={{ display: "inline-flex" }}>
                      <EmailIcon sx={{ height: "20px", marginRight: "5px" }} />
                      Email Address
                    </Box>
                  }
                  variant="filled"
                  type="text"
                  sx={{
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
              <Grid2 size={{ sm: 11, xs: 11 }}>
                <TextField
                  fullWidth
                  onFocus={onFocus}
                  onBlur={onBlur}
                  id="password-input"
                  label={
                    <Box sx={{ display: "inline-flex" }}>
                      <LockIcon sx={{ height: "20px", marginRight: "5px" }} />
                      Password
                    </Box>
                  }
                  variant="filled"
                  type="password"
                  sx={{
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
              <Grid2 size={{ sm: 11, xs: 11 }}>
                <TextField
                  fullWidth
                  onFocus={onFocus}
                  onBlur={onBlur}
                  id="confirmPassword-input"
                  label={
                    <Box sx={{ display: "inline-flex" }}>
                      <LockIcon sx={{ height: "20px", marginRight: "5px" }} />
                      Confirm Password
                    </Box>
                  }
                  variant="filled"
                  type="password"
                  sx={{
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
              <Grid2 size={{ sm: 3, xs: 3 }}>
                <Select defaultValue={countryCode[0].image} fullWidth>
                  {countryCode.map((option) => (
                    <MenuItem key={option.name} value={option.image}>
                      <img src={option.image} style={{ width: "2rem" }} />
                      &emsp;{option.name}
                    </MenuItem>
                  ))}
                </Select>
                {/* <TextField
                  fullWidth
                  select
                  slotProps={{
                    select: {
                      native: true,
                    },
                  }}
                  id="countryCode-input"
                  sx={{
                    color: "rgb(103, 102, 89)",
                    fontFamily: "Roboto",
                    fontSize: "20px",
                    "& .MuiInputLabel-root": {
                      color: "black", // Change label color
                      fontWeight: "bold",
                    },
                  }}
                >
                  {countryCode.map((option) => (
                    <option
                      key={option.name}
                      value={option.image}
                      data-image={}
                    >
                      <img src={option.image}/>
                      {option.emoji}&emsp;{option.name}
                    </option>
                  ))}
                </TextField> */}
              </Grid2>
              <Grid2 size={{ sm: 8, xs: 8 }}>
                <TextField
                  fullWidth
                  onFocus={onFocus}
                  onBlur={onBlur}
                  id="phoneNumber-input"
                  label={
                    <Box sx={{ display: "inline-flex" }}>
                      <PhoneIcon sx={{ height: "20px", marginRight: "5px" }} />
                      Phone Number
                    </Box>
                  }
                  variant="filled"
                  type="phone"
                  sx={{
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
              <Grid2 size={12} padding={3} paddingTop={0}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Do you have vehicle?"
                  />
                </FormGroup>
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
                  {"Register"}
                </Button>
              </Grid2>
            </Grid2>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default Login;
