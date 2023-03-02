import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Stack from "@mui/material/Stack";
import { useAuth } from "../firebase/Auth";
import { useNavigate, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

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
    <Container maxWidth="sm">
      <Box
        textAlign="center"
        sx={{ margin: "50px auto auto auto", width: "fit-content" }}
      >
        <AccountCircleIcon fontSize="large" />
        <Typography
          sx={{ margin: "1px auto 10px  auto" }}
          component={"h1"}
          variant="h5"
        >
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
        <Grid container justifyContent={"flex-end"}>
          <Grid item sx={{ marginTop: "10px" }}>
            <Typography sx={{ margin: "1px auto 10px  auto" }}>
              <Link to="/register">New User? Signup</Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
