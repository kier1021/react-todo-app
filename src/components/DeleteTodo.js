import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteTodo = ({ onTodoDelete }) => {
  return (
    <div>
      <IconButton aria-label="delete" size="medium" onClick={onTodoDelete} style={{ float: 'right' }}>
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
};

export default DeleteTodo;
