import React from "react";
import { Box } from "@mui/system";
import { ListItem, Typography } from "@mui/material";

export default function Todo() {
  // Render the calendar grid with the appropriate dates
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          minWidth: "170px",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ alignItems: "center", fontWeight: "600" }}
          variant="h5"
          component="h2"
        >
          Tuesday
        </Typography>
        <Typography
          sx={{
            alignItems: "center",
            fontWeight: "100",
            margin: "5px",
            fontSize: "22px",
          }}
          variant="p"
          component="p"
        >
          16th Feb 2023
        </Typography>
      </Box>

      <Box>
        <ListItem></ListItem>
      </Box>
    </>
  );
}
