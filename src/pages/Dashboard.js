import React from "react";
import { Grid } from "@mui/material";
import Calendar from "../components/Calendar";
import Todo from "../components/Todo";

export default function Dashboard() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Calendar />
        </Grid>
        <Grid item xs={2}>
          <Todo />
        </Grid>
      </Grid>
    </div>
  );
}
