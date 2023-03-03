import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

export default function DeleteAndEditButton({
  handleEditItem,
  handleDelete,
  index,
}) {
  return (
    <span>
      <IconButton onClick={() => handleEditItem(index)}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={() => handleDelete(index)}>
        <DeleteIcon />
      </IconButton>
    </span>
  );
}
