import { useState } from "react";

import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

const App = () => {
  const [showAddTodo, setShowAddTodo] = useState(false)
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "My First Todo",
      description: "Description of Todo 1",
    },
    {
      id: 2,
      title: "My Second Todo",
      description: "Description of Todo 2",
    },
    {
      id: 3,
      title: "My Third Todo",
      description: "Description of Todo 3",
    },
  ]);

  // Add Task
  const addTodo = (todo) => {
    let id = 1
    if (todos.length > 0)  {
      id = todos[todos.length - 1].id + 1
    }

    const newTodo = { id, ...todo }

    setTodos([...todos, newTodo])
  }

  // Delete task
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <Header title="Todo App" onAdd={ () => setShowAddTodo(!showAddTodo)} showAddTodo={showAddTodo}/>
      {showAddTodo &&  <AddTodo onAdd={addTodo}/>}
      {todos.length > 0 ? (
        <Todos todos={todos} onDelete={deleteTodo} />
      ) : (
        <h3>You currently have no to do tasks</h3>
      )}
    </div>
  );
};

export default App;
