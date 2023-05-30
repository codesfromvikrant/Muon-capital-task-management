import React, { useState, useContext } from "react";
import AddBtn from "./addBtn";
import { nanoid } from "nanoid";
import { TodoContext } from "../context/contextApi";

const AddDetails = ({ id, todos }) => {
  const { setTodoList } = useContext(TodoContext);
  const initial = {
    id: nanoid(),
    title: "",
    description: "",
    isDone: true,
  };
  const [todo, setTodo] = useState(initial);
  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const addTodoInList = () => {
    if (todo.title.trim() !== "") {
      const newTodo = [...todos, todo];
      setTodoList((prev) => {
        return prev.map((obj) => {
          if (obj.id === id) {
            return { ...obj, todos: newTodo };
          }
          return obj;
        });
      });
      setTodo({ ...initial, id: nanoid() });
    }
  };

  return (
    <div className="bg-tertiary my-2 p-2 rounded-md">
      <div className="title flex justify-between items-center">
        <input
          onChange={handleChange}
          type="text"
          name="title"
          value={todo.title}
          placeholder="Add Todo"
          className="w-full bg-transparent p-2 outline-none text-white placeholder:text-gray-500"
        />
        <AddBtn handleAction={addTodoInList} />
      </div>
      <div className="description">
        <textarea
          onChange={handleChange}
          name="description"
          value={todo.description}
          className="w-full h-24 outline-none text-white placeholder:text-gray-500 p-2 bg-transparent"
          placeholder="Add Todo Description"
        ></textarea>
      </div>
    </div>
  );
};

export default AddDetails;
