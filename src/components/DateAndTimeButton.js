import React from "react";
import { Stack } from "@mui/material";

export default function DateAndTimeBtn({ changeDate, changeTime }) {
  return (
    <Stack
      spacing={1}
      direction="row"
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      <div>
        <input
          type="date"
          id="start"
          name="trip-start"
          value="2023-02-15"
          onChange={(event) => changeDate(event)}
          style={{
            padding: "5px",
            fontFamily: "inherit",
            outlineColor: "#1976d2",
          }}
          required
        />
      </div>
      <div>
        <input
          type="time"
          id="appt"
          name="appt"
          style={{
            padding: "4px",
            fontFamily: "inherit",
            outlineColor: "#1976d2",
          }}
          onChange={(event) => changeTime(event)}
          required
        ></input>
      </div>
    </Stack>
  );
}
