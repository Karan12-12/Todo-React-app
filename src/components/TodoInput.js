import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && text.trim() !== "") {
      addTodo(text);
      setText("");
    }
  };

  return (
    <input
      className="todo-input"
      type="text"
      placeholder="Add Todo..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyPress={handleKeyPress}
    />
  );
}

export default TodoInput;
