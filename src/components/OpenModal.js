import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "../App.css";
import Modal from "@mui/material/Modal";

import React from "react";

export default function OpenModal({
  open,
  item,
  handleChangeText,
  index,
  handleEditCancel,
  changeDate,
  changeTime,
  handleSaveItem,
}) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
  };
  return (
    <Modal open={open}>
      <Box sx={style}>
        <Stack spacing={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3
              className="todo"
              style={{
                margin: "0px",
              }}
            >
              Edit To-Do
            </h3>

            <CloseIcon
              onClick={() => handleEditCancel(index)}
              sx={{ color: "grey" }}
            />
          </Box>
          <TextField
            onChange={handleChangeText}
            id="outlined-basic"
            label=""
            variant="outlined"
            defaultValue={item.value}
            size="small"
          />
          <input
            type="date"
            id="start"
            name="trip-start"
            value={"2023-02-15"}
            onChange={(event) => changeDate(event)}
            style={{
              padding: "5px",
              fontFamily: "inherit",
              outlineColor: "#1976d2",
            }}
          />
          <input
            type="time"
            id="appt"
            name="appt"
            style={{
              padding: "5px",
              fontFamily: "inherit",
              outlineColor: "#1976d2",
            }}
            onChange={(event) => changeTime(event)}
          ></input>
          <Button
            xs={4}
            size="medium"
            color="warning"
            variant="contained"
            onClick={() => handleSaveItem(index)}
            sx={{}}
          >
            Save
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
