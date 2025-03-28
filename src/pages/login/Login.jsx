import { Card, Grid2, TextField } from "@mui/material";
import React from "react";

const Login = () => {
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
      </Grid2>
    </Grid2>
  );
};

export default Login;
