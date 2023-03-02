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
          alignItems: "center",
        }}
      >
        <Button onClick={() => subractOneMonth()}>
          <KeyboardDoubleArrowLeftIcon />
        </Button>
        <Typography
          sx={{ alignItems: "center", fontWeight: "600" }}
          variant="h5"
          component="h2"
        >
          {format(currentMonth, "MMMM ")}
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
          {format(currentMonth, "yyyy")}
        </Typography>
        <Button onClick={() => addOneMonth()}>
          <KeyboardDoubleArrowRightIcon />
        </Button>
      </Box>
      <Box
        sx={{
          margin: "15px",

          display: "grid",
          gridTemplateColumns: "repeat(7,minmax(70px, auto))",
          gridTemplateRows: "minmax(70px, auto)",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {daysArray?.map((item, index) => {
          return (
            <div key={item} style={{}}>
              {item}
            </div>
          );
        })}
      </Box>
      <Box
        sx={{
          margin: "15px",
          display: "grid",
          border: "1px solid #f7f7f7",
          gridTemplateColumns: "repeat(7, auto)",
          gridTemplateRows: "repeat(6,minmax(70px, auto))",
          gap: "10px",
        }}
      >
        {prefixNoOfDays !== 0 &&
          prefixDays?.map((item, index) => {
            return (
              <Box
                key={item}
                style={{
                  border: "1px solid #f7f7f7",
                  color: "grey",
                }}
              >
                {format(item, "dd")}
              </Box>
            );
          })}
        {daysInterval?.map((item, index) => {
          return (
            <Box
              key={item}
              sx={{
                border: "1px solid #f7f7f7",
                "&:hover": {
                  backgroundColor: "#f7f7f7",
                },
              }}
            >
              {format(item, "dd")}
            </Box>
          );
        })}
        {suffixDays?.map((item, index) => {
          return (
            <Box
              key={item}
              style={{
                border: "1px solid #f7f7f7",
                color: "grey",
              }}
            >
              {format(item, "dd")}
            </Box>
          );
        })}
      </Box>
    </div>
  );
}
