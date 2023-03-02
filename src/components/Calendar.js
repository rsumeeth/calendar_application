import React from "react";
import { Box } from "@mui/system";

export default function Calendar() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div>
      <Box
        sx={{
          margin: "15px",
          border: "2px solid lightblue",
          display: "grid",
          gridTemplateColumns: "repeat(7,minmax(70px, auto))",
          gridTemplateRows: "minmax(70px, auto)",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {days?.map((item) => {
          return <div style={{ border: "1px solid blue" }}>{item}</div>;
        })}
      </Box>
      <Box
        sx={{
          margin: "15px",
          display: "grid",
          border: "2px solid lightblue",
          gridTemplateColumns: "repeat(7, auto)",
          gridTemplateRows: "repeat(6,minmax(70px, auto))",
          gap: "10px",
        }}
      >
        {days?.map((item) => {
          return <div style={{ border: "1px solid blue" }}>{item}</div>;
        })}
      </Box>
    </div>
  );
}
