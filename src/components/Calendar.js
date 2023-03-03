import React from "react";
import { Box } from "@mui/system";
import {
  eachDayOfInterval,
  format,
  subDays,
  startOfMonth,
  lastDayOfMonth,
  add,
  addDays,
  getDaysInMonth,
} from "date-fns";
import { useSelector, useDispatch } from "react-redux";
import {
  addOneMonthRedux,
  subractOneMonthRedux,
} from "../redux/yearMonthDaySlice";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import getUnixTime from "date-fns/getUnixTime";
import fromUnixTime from "date-fns/fromUnixTime";

export default function Calendar() {
  const currentMonthR = fromUnixTime(
    useSelector((state) => state.yearMonthDay.value.currentMonthRedux)
  );
  const daysArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const startDayOfMonth = startOfMonth(currentMonthR);
  const endDayOfMonth = lastDayOfMonth(currentMonthR);

  const dispatch = useDispatch();
  console.log(currentMonthR);

  const daysInterval = eachDayOfInterval({
    start: startDayOfMonth,
    end: endDayOfMonth,
  });

  const prefixNoOfDays = daysArray.indexOf(format(startDayOfMonth, "E"));
  const suffixNoOfDays = 42 - prefixNoOfDays - getDaysInMonth(currentMonthR);

  const prefixDays = eachDayOfInterval({
    start: subDays(startOfMonth(currentMonthR), prefixNoOfDays),
    end: lastDayOfMonth(subDays(startDayOfMonth, prefixNoOfDays)),
  });

  const suffixDays = eachDayOfInterval({
    start: startOfMonth(add(currentMonthR, { months: 1 })),
    end:
      addDays(startOfMonth(add(currentMonthR, { months: 1 })), suffixNoOfDays) -
      1, // didn't get the logic here but worked lol
  });

  function subractOneMonth() {
    dispatch(subractOneMonthRedux(getUnixTime(currentMonthR)));
  }

  function addOneMonth() {
    dispatch(addOneMonthRedux(getUnixTime(currentMonthR)));
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
            {format(currentMonthR, "MMMM ")}
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
            {format(currentMonthR, "yyyy")}
          </Typography>
        </Box>
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
                  backgroundColor: "#f7f7f7",
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
                backgroundColor: "#f7f7f7",
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
