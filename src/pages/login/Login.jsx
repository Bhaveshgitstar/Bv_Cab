import {
  Box,
  Button,
  Card,
  CardContent,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [focus, setFocused] = useState(false);
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
            <form>
              <Grid2
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Log in
                </Typography>
              </Grid2>
              <Grid2
                container
                spacing={4}
                sx={{ justifyContent: "center", alignItems: "center" }}
              >
                <Grid2 size={{ sm: 11, xs: 11 }}>
                  <TextField
                    fullWidth
                    onFocus={onFocus}
                    onBlur={onBlur}
                    id="emailAddress-input"
                    label=" 👤 Email Address/User Id"
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
                    required={true}
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
                    onClick={() => {
                      window.open(
                        "https://www.google.com/maps/dir/43.7967876,-79.5331616/43.1941283,-79.59179/43.7991083,-79.5339667/43.8387033,-79.3453417/43.836424,-79.3024487/43.5184049,-79.8473993/@43.4930981,-79.9511464,10.5z/data=!4m13!4m12!1m0!1m0!1m0!1m0!1m5!3m4!1m2!1d-80.192687!2d43.5031809!3s0x882b849f571d938f:0x6f42fb7922c52ae8!1m0!3e0!11m1!6b1?entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSoASAFQAw%3D%3D"
                      );
                    }}
                  >
                    {"Login"}
                  </Button>
                </Grid2>
              </Grid2>
            </form>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default Login;
