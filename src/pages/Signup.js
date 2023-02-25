import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Stack from "@mui/material/Stack";
import { useAuth } from "../firebase/Auth";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  async function registerUser(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget); //another way of getting the form data using inbult javascript method called formdata. we should be using new because it is an object
    await signUp(data.get("email"), data.get("name"), data.get("password"));
    navigate("/");
  }
  return (
    <Box textAlign="center" sx={{ marginTop: "50px" }}>
      <AccountCircleIcon fontSize="large" />
      <Typography component={"h1"} variant="h5">
        Sign Up
      </Typography>

      <form onSubmit={registerUser}>
        <Stack
          spacing={3}
          sx={{
            margin: "auto",
            width: "350px",
          }}
        >
          <TextField
            type="text"
            id="name"
            name="name"
            label="Name"
            variant="outlined"
          />
          <TextField
            type="email"
            id="email"
            name="email"
            label="Email"
            variant="outlined"
          />
          <TextField
            type="password"
            id="password"
            label="Password"
            variant="outlined"
          />
          <Button type="submit" variant="contained">
            Register
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
