import React from "react";
import { useState, useRef } from "react";
import "./Todo.css";


function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <div className="">
      <form className="todo_form">
        {props.edit ? (
          <>
            <input
              placeholder="Update your item"
              value={input}
              onChange={handleChange}
              name="text"
              ref={inputRef}
              className="input-edit"
            />
            <button onClick={handleSubmit} className="edit-button ml-3">
              Update
            </button>
          </>
        ) : (
          <>
            <input
              placeholder="Add your plan to list"
              value={input}
              onChange={handleChange}
              name="text"
              className="input-add"
              ref={inputRef}
            />
            <button onClick={handleSubmit} className="add-button">
              Add
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default TodoForm;
