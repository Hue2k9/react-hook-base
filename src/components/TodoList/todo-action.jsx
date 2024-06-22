// rfce
import React from "react";
import PropTypes from "prop-types";

TodoAction.propTypes = {
  todos: PropTypes.array || [],
  onTodoClick: PropTypes.func || null,
};

function TodoAction(props) {
  const { todos, onTodoClick } = props;

  function handleClick(todo) {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} onClick={() => handleClick(todo)}>
          {todo.title}{" "}
        </li>
      ))}
    </ul>
  );
}

export default TodoAction;
