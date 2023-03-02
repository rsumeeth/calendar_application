import React from "react";
import { useAuth } from "../firebase/Auth";
import { Button, AppBar, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  async function logout() {
    await signOut();
    navigate("/");
  }
  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Dashboard Calendar App</Typography>
          {user ? (
            <div style={{ textAlign: "center", padding: "10px" }}>
              <Typography>Welcome, {user.displayName ?? user.email}</Typography>
              <Button onClick={logout} variant="outlined" color="inherit">
                Sign Out
              </Button>
            </div>
          ) : (
            <Button>Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
