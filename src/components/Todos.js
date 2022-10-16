import Todo from "./Todo"

const Todos = ({ todos, onDelete }) => {
    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <Todo todo={todo} onDelete={() => onDelete(todo.id)}/>
                </div>
            ))}
        </div>
    )
}

export default Todos