import React, { useState, useEffect, createContext } from "react";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [mobileNav, setMobileNav] = useState(true);

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todoList"));
    if (todoList) {
      setTodoList(todoList);
    }
  }, []);

  return (
    <TodoContext.Provider
      value={{ todoList, setTodoList, mobileNav, setMobileNav }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
