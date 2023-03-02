import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Stack from "@mui/material/Stack";
import { useAuth } from "../firebase/Auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    const { email, password } = event.target;
    await signIn(email.value, password.value);
    navigate("/dashboard");
  }
  return (
    <Box textAlign="center" sx={{ marginTop: "50px" }}>
      <AccountCircleIcon fontSize="large" />
      <Typography component={"h1"} variant="h5">
        Login
      </Typography>

      <form onSubmit={login}>
        <Stack
          spacing={3}
          sx={{
            margin: "auto",
            width: "350px",
          }}
        >
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
            Login
          </Button>
        </Stack>
      </form>
      <Button
        href="register"
        sx={{ marginTop: "15px", width: "350px" }}
        type="submit"
        variant="contained"
      >
        Signup
      </Button>
    </Box>
  );
}
