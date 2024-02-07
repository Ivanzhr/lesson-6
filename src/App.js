import { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import'./App.scss';
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([])
  return (
   <section className="todo">
    <Header text="Нове завдання"/>
    <Form setTodos={setTodos} todos = {todos}/>
    <Header text="Список завдань"/>
    <TodoList todos = {todos} setTodos = {setTodos}/>
   </section>
  )
}

export default App;