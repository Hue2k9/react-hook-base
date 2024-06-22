import { useState } from "react";
import TodoAction from "./todo-action";
import TodoForm from "./todo-form";

export default function TodoList() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "one" },
    { id: 2, title: "two" },
    { id: 3, title: "three" },
  ]);

  function handleTodoClick(todo) {
    const index = todoList.findIndex((item) => item.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];

    newTodoList.splice(index, 1);

    setTodoList([...newTodoList]);
  }

  function handleTodoFormSubmit(formValues) {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      ...formValues,
    };

    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList([...newTodoList]);
  }

  return (
    <div className="app">
      <h1>React hooks - Todo list</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoAction todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}
