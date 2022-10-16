import Button from './Button'

const Header = ( {title, onAdd, showAddTodo}) => {
  const onClick = (e) => {
    onAdd()
  }

  return (
    <header>
        <h1>{title}</h1>
        <Button onClick={onClick} text={showAddTodo ? 'Close' : 'Add'}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Todo App',
}


export default Header