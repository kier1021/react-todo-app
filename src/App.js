import { useState, useEffect } from "react";

import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

const App = () => {
  const [showAddTodo, setShowAddTodo] = useState(false)
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodo = async () => {
      const todosFromServer = await fetchTodo()
      setTodos(todosFromServer)
    }

    getTodo()
  }, [])

  // Fetch Todo
  const fetchTodo = async () => {
    const res = await fetch('http://localhost:5000/todos')
    const data = await res.json()

    return data
  }

  // Add Todo
  const addTodo = async (todo) => {
    const res = await fetch(
      'http://localhost:5000/todos', 
      {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },  
        body: JSON.stringify(todo),
      }
    )

    const data = await res.json()

    setTodos([...todos, data])
  }

  // Delete Todo
  const deleteTodo = async (id) => {
    await fetch(`http://localhost:5000/todos/${id}`, {method: 'DELETE'})

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
