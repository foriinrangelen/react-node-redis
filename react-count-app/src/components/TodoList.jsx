import React from "react";
// import { todos, setTodos } from "./TodoInput";
// import { todos, setTodos } from "./TodoInput";

const TodoList = ({count, setHostName, visit, setVisit}) => {
  return (
    <div className="todo-list">
      <p className="todo-list-tit">{count} 번</p>
   
    </div>
  );
};

export default TodoList;
