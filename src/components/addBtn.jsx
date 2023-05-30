import React, { useState, useContext, useEffect } from "react";
import { TodoContext } from "../context/contextApi";

const AddBtn = ({ handleAction }) => {
  const [save, setSave] = useState(false);
  const { todoList } = useContext(TodoContext);
  useEffect(() => {
    if (save) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
      setSave(false);
    }
  }, [todoList]);

  return (
    <div
      onClick={() => {
        handleAction();
        setSave(true);
      }}
      className="text-white bg-quaternary flex justify-center items-center w-5 h-5 rounded-full text-xl font-bold cursor-pointer hover:shadow-md"
    >
      +
    </div>
  );
};

export default AddBtn;
