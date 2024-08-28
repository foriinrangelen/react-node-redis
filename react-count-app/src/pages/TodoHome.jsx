import React, { useState } from "react";

import TodoList from "../components/TodoList";

const TodoHome = ({hostName, visit}) => {
  
  return (
    <div className="todo-container">

      <h1 className="todo-tit">호스트 이름</h1>
        {/* 호스트이름 컴포넌트 */}
        <TodoList
          count={hostName}
          // setVisit={setVisit}
      />

      <h1 className="todo-tit">웹 페이지 방문 횟수</h1>
        {/* 방문횟수 컴포넌트 */}
        <TodoList
          count={visit}
          // setHostName={setHostName}
      />

    </div>
  );
};

export default TodoHome;
