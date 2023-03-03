import React from "react";
import { useAuth } from "../firebase/Auth";
import { Button, AppBar, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  addOneMonthRedux,
  subractOneMonthRedux,
} from "../redux/yearMonthDaySlice";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import getUnixTime from "date-fns/getUnixTime";
import fromUnixTime from "date-fns/fromUnixTime";
import { format } from "date-fns";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const currentMonthR = fromUnixTime(
    useSelector((state) => state.yearMonthDay.value.currentMonthRedux)
  );
  async function logout() {
    await signOut();
    navigate("/");
  }
  return (
    <>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "white", boxShadow: "none", color: "black" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              marginTop: "15px",
              alignItems: "center",
            }}
          >
            <Button
              sx={{}}
              onClick={() =>
                dispatch(subractOneMonthRedux(getUnixTime(currentMonthR)))
              }
            >
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
            <Button
              sx={{}}
              onClick={() =>
                dispatch(addOneMonthRedux(getUnixTime(currentMonthR)))
              }
            >
              <KeyboardDoubleArrowRightIcon />
            </Button>
          </Box>

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
