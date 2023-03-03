import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useAuth } from "../firebase/Auth";
import { useNavigate, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import "../App.css";

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
    <Container sx={{ height: "98vh", overflow: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          height: "98vh",
        }}
      >
        <Box>
          <Typography className="todo" fontSize="50px" fontWeight="900">
            Calendar App
          </Typography>
          <Typography fontSize="50px" fontWeight="900">
            For The Minimalist
          </Typography>
        </Box>
        <Box textAlign="center" sx={{ marginLeft: "30px" }}>
          <Typography
            fontSize="35px"
            fontWeight="500"
            sx={{ marginBottom: "15px" }}
          >
            Welcome Back
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
              <Button
                type="submit"
                variant="contained"
                sx={{ boxShadow: "none" }}
              >
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
      </Box>
    </Container>
  );
}
