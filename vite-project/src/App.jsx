import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoList = [
      {id: 1, name: "di hoc them"},
      {id: 2, name: "di hoc ve"},
      {id: 3, name: "di ngu"},
      {id: 4, name: "di hoc bai"}
  ];
  const todos = todoList.map((todo) => {
    return <TodoItems key={todo.id} name={todo.name} />
  })
  console.log({todos});
  return (
    <div className="App">
      <input
        type="text"
        name="atnewtag"
        placeholder="add a new tag"
        className="task-input"
      />
      <div>
        {todos} 
      </div>
    </div>
  );
}

export default App;
