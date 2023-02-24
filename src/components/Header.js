import React from "react";

import { Button, AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <>
      <AppBar position="sticky ">
        <Toolbar>
          <Typography>Dashboard Calendar App</Typography>{" "}
          <Button color="inherit" variant="outlined">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
