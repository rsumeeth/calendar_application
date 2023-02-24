import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const theme = createTheme({
  palette: { mode: "light" },
});
export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </ThemeProvider>
  );
}
