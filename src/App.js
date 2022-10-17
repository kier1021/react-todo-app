import { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";

import Header from "./components/Header";
import TodosCard from "./components/TodosCard";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

import Button from "@mui/material/Button";

const App = () => {
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodo = async () => {
      const todosFromServer = await fetchTodo();
      setTodos(todosFromServer);
    };

    getTodo();
  }, []);

  // Fetch Todo
  const fetchTodo = async () => {
    const res = await fetch("http://localhost:5000/todos");
    const data = await res.json();

    return data;
  };

  // Add Todo
  const addTodo = async (todo) => {
    const res = await fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    const data = await res.json();

    setTodos([...todos, data]);
  };

  // Delete Todo
  const deleteTodo = async (id) => {
    await fetch(`http://localhost:5000/todos/${id}`, { method: "DELETE" });

    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <Header
        title="Todo App"
        onAdd={() => setShowAddTodo(!showAddTodo)}
        showAddTodo={showAddTodo}
      />

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh", marginTop: "30px" }}
      >
        <Grid item xs={8}>
          <TodosCard
            todos={todos}
            onTodoAdd={addTodo}
            onTodoDelete={deleteTodo}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
