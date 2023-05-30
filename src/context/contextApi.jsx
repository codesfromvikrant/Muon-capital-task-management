import React, { useState, useEffect, createContext } from "react";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  // save todoList in localStorage whene todoList change
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    console.log("todoList", todoList);
  }, [todoList]);

  // get todoList from localStorage whene page load
  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todoList"));
    if (todoList) {
      setTodoList(todoList);
    }
  }, []);

  return (
    <TodoContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
