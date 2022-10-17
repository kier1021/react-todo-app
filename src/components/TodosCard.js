import React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";

import TodoCard from "./TodoCard";
import DropDownMenu from "./DropDownMenu";
import FormDialog from "./AddTodoFormDialog";

const TodosCard = ({ todos, onTodoAdd, onTodoDelete }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openAddDialog, setOpenAddDialog] = React.useState(false);

  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = (e) => {
    setAnchorEl(null);
  };

  const handleOpenAddDialog = (e) => {
    setAnchorEl(null);
    setOpenAddDialog(true);
  };

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
  };

  const itemClickEventMap = [
    {
      item: "Add",
      handler: handleOpenAddDialog,
    },
  ];

  return (
    <Card sx={{ maxWidth: "100%" }} variant="outlined">
      <CardHeader
        action={
          <div onClick={handleMenuClick}>
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </div>
        }
        title="To do list"
        justify="center"
      />
      <DropDownMenu
        anchorEl={anchorEl}
        handleClose={handleMenuClose}
        itemClickEventMap={itemClickEventMap}
      ></DropDownMenu>
      <FormDialog
        open={openAddDialog}
        handleClose={handleCloseAddDialog}
        onTodoAdd={onTodoAdd}
      ></FormDialog>

      {todos.length > 0 ? (
        todos.map((todo) => (
          <CardContent key={todo.id}>
            <TodoCard todo={todo} onTodoDelete={onTodoDelete} />
          </CardContent>
        ))
      ) : (
        <CardContent>
          <Typography variant="p" component="div">
            You currently have no to do tasks
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default TodosCard;
