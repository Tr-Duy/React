
const TodoItems = (props) => {
  console.log(props)
  return (
    <div className="todo-item-container">

      <h1 className="todo-item">{props.name}</h1>
    </div>
  )
}

export default TodoItems