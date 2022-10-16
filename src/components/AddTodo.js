import { useState } from 'react'

const AddTodo = ({ onAdd }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!title) {
            alert('Please add a title')
            return
        }

        if(!description) {
            alert('Please add a description')
            return
        }

        onAdd({ title, description})

        setTitle('')
        setDescription('')
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Todo</label>
                <input type='text' placeholder='Add Todo' 
                value={title} onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div>
                <label>Description</label>
                <input type='text' placeholder='Add Description' 
                value={description} onChange={(e) => setDescription(e.target.value)}></input>
            </div>
            <div>
                <input type='submit' value='Add Todo'></input>
            </div>
        </form>
    )
}

export default AddTodo