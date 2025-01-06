import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  return (
    <center className="todo-container text-center">
      <AppName />
      <AddTodo />
      <TodoItem todoDate="2022-02-01" todoName="Buy groceries" />
      <TodoItem todoDate="2024-02-01" todoName="Buy milk" />
    </center>
  );
}

export default App;
