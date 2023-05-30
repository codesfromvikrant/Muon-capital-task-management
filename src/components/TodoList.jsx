import React, { useState } from "react";
import AddDetails from "./addDetails";
import { MdModeEditOutline } from "react-icons/md";

function TodoList({ id, listTitle, todos, setTodoList }) {
  const todoEl = todos.map((obj) => {
    return (
      <li key={obj.id} className="text-white bg-tertiary p-3 rounded-md w-full">
        <div className="title flex justify-between items-start gap-3">
          <h3 className="text-xl font-bold w-full">{obj.title}</h3>
          <MdModeEditOutline className="text-white bg-quaternary p-1 text-2xl rounded-full" />
        </div>
        <div className="description">
          <p className="text-base text-gray-500">{obj.description}</p>
        </div>
      </li>
    );
  });

  return (
    <div className="">
      <ul>
        <div className="text-white bg-secondary p-3 rounded-md">
          {listTitle}
        </div>
        <AddDetails id={id} todos={todos} />
        <div className="flex justify-start items-start gap-2 flex-col">
          {todoEl}
        </div>
      </ul>
    </div>
  );
}

export default TodoList;
