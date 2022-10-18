import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import DeleteTodo from "./DeleteTodo";

const TodoCard = ({ todo, onTodoDelete }) => {
  return (
    <Card sx={{ minWidth: 100, boxShadow: 3, borderRadius: 3, marginLeft: 3, marginRight: 3 }}>
      <CardContent>
        <Grid container spacing={0}>
          <Grid item xs={8}>
            <Typography variant="h5" component="div">
              {todo.title}
            </Typography>
            <Typography variant="body2">{todo.description}</Typography>
          </Grid>
          <Grid item xs={4}>
            <DeleteTodo onTodoDelete={() => onTodoDelete(todo.id)}></DeleteTodo>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TodoCard;
