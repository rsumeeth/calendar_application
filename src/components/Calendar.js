import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  eachDayOfInterval,
  format,
  subDays,
  startOfMonth,
  lastDayOfMonth,
  sub,
  add,
  addDays,
  getDaysInMonth,
} from "date-fns";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function Calendar() {
  const date = new Date();
  const [currentMonth, setcurrentMonth] = useState(date);
  const daysArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const startDayOfMonth = startOfMonth(currentMonth);
  const endDayOfMonth = lastDayOfMonth(currentMonth);

  const daysInterval = eachDayOfInterval({
    start: startDayOfMonth,
    end: endDayOfMonth,
  });

  const prefixNoOfDays = daysArray.indexOf(format(startDayOfMonth, "E"));
  // const suffixNoOfDays = daysArray.indexOf(format(endDayOfMonth, "E"));
  const suffixNoOfDays = 42 - prefixNoOfDays - getDaysInMonth(currentMonth);

  console.log(suffixNoOfDays);

  const prefixDays = eachDayOfInterval({
    start: subDays(startOfMonth(currentMonth), prefixNoOfDays),
    end: lastDayOfMonth(subDays(startDayOfMonth, prefixNoOfDays)),
  });

  const suffixDays = eachDayOfInterval({
    start: startOfMonth(add(currentMonth, { months: 1 })),
    end:
      addDays(startOfMonth(add(currentMonth, { months: 1 })), suffixNoOfDays) -
      1, // didn't get the logic here but worked lol
  });

  function subractOneMonth() {
    const su = sub(currentMonth, { months: 1 });
    setcurrentMonth(su);
  }

  function addOneMonth() {
    const ad = add(currentMonth, {
      months: 1,
    });
    setcurrentMonth(ad);
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          marginTop: "15px",
        }}
      >
        <Button onClick={() => subractOneMonth()}>
          <KeyboardDoubleArrowLeftIcon />
        </Button>
        <Typography sx={{ margin: "5px " }} variant="h5" component="h2">
          {format(currentMonth, "MMM yyyy")}
        </Typography>
        <Button onClick={() => addOneMonth()}>
          <KeyboardDoubleArrowRightIcon />
        </Button>
      </Box>
      <Box
        sx={{
          //list of days in a week : "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
          margin: "15px",
          border: "2px solid lightblue",
          display: "grid",
          gridTemplateColumns: "repeat(7,minmax(70px, auto))",
          gridTemplateRows: "minmax(70px, auto)",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {daysArray?.map((item, index) => {
          return (
            <div key={item} style={{ border: "1px solid blue" }}>
              {item}
            </div>
          );
        })}
      </Box>
      <Box
        sx={{
          margin: "15px",
          display: "grid",
          border: "2px solid lightblue",
          gridTemplateColumns: "repeat(7, auto)",
          // gridTemplateColumns: "repeat(7, auto)",
          gridTemplateRows: "repeat(6,minmax(70px, auto))",
          gap: "10px",
        }}
      >
        {prefixNoOfDays !== 0 &&
          prefixDays?.map((item, index) => {
            return (
              <Box
                key={item}
                style={{ border: "1px solid blue", color: "grey" }}
              >
                {format(item, "dd")}
              </Box>
            );
          })}
        {daysInterval?.map((item, index) => {
          return (
            <Box key={item} style={{ border: "1px solid blue" }}>
              {format(item, "dd")}
            </Box>
          );
        })}
        {suffixDays?.map((item, index) => {
          return (
            <Box key={item} style={{ border: "1px solid blue", color: "grey" }}>
              {format(item, "dd")}
            </Box>
          );
        })}
      </Box>
    </div>
  );
}
