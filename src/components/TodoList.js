import React from "react";

function TodoList({ todos, markComplete }) {
  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed).reverse();

  return (
    <>
      {todos.length > 0 ? (
        <div className="todo-list">
          {activeTodos.map((todo, index) => (
            <div className="list-container">
              <div
                key={index}
                className={`todo-item ${todo.completed ? "completed" : ""}`}
                onClick={() => markComplete(index)}
              >
                {todo.text}
              </div>
            </div>
          ))}

          {completedTodos.map((todo, index) => (
            <>
              <div key={index} className="todo-item completed">
                {todo.text}
              </div>
            </>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default TodoList;
