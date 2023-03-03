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
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography>
                  Welcome, {user.displayName ?? user.email}
                </Typography>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        backgroundColor: "#1976d2",
                      }}
                    >
                      J
                    </Avatar>
                  </IconButton>
                </Tooltip>{" "}
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={logout}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            </div>
          ) : (
            <Button>Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
