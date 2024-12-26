import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";
function App() {
  return (
    <>
      <center className="todo-container text-center">
        <AppName />
        <AddTodo />
        <TodoItem />
        {/* <TodoItem todoName="Buy groceries" todoDate="2022-02-01" /> */}
      </center>
    </>
  );
}

export default App;
