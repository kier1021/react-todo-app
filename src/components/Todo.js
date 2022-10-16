import { FaTimes } from 'react-icons/fa'

const Todo = ({ todo, onDelete }) => {
  return (
    <div>
        <h3>{todo.title} <FaTimes 
            style={{color: 'red'}} 
            onClick={onDelete}
        /> </h3>
        <p>{todo.description}</p>
    </div>
  )
}

export default Todo