import React, { useState, useEffect, useContext } from "react";
import { TodoContext } from "../context/contextApi";

const EditTodo = ({ Oid, Iid, setOpenEdit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { todoList, setTodoList } = useContext(TodoContext);

  useEffect(() => {
    const newList = todoList.map((obj) => {
      if (obj.id === Oid) {
        const newTodos = obj.todos.map((todo) => {
          if (todo.id === Iid) {
            setTitle(todo.title);
            setDescription(todo.description);
          }
        });
      }
    });
  }, [Oid, Iid]);

  const saveChanges = (e) => {
    e.preventDefault();
    const newList = todoList.map((obj) => {
      if (obj.id === Oid) {
        const newTodos = obj.todos.map((todo) => {
          if (todo.id === Iid) {
            return {
              ...todo,
              title: title,
              description: description,
            };
          }
        });
        return {
          ...obj,
          todos: newTodos,
        };
      }
    });
    setTodoList(newList);
  };

  const backFromEdit = () => {
    setOpenEdit(false);
  };

  return (
    <div className="md:w-[20rem] md:static fixed z-49 bg-black w-full h-[90vh] px-3 py-5 border-l-2 border-secondary">
      <div className="flex justify-start items-center gap-3 ">
        <div onClick={backFromEdit} className="text-white cursor-pointer">
          &#8592;
        </div>
        <h1 className="text-white">Edit Todo</h1>
      </div>

      <form className="my-4">
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Edit Title"
          className="w-full bg-secondary p-3 rounded-md text-white placeholder:text-gray-400"
        />
        <textarea
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Edit Description"
          className="w-full bg-secondary p-3 rounded-md h-40 text-white placeholder:text-gray-400 my-2"
        ></textarea>
        <button
          type="submit"
          onClick={saveChanges}
          className="text-white bg-blue-500 p-2 rounded-md w-full font-semibold"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditTodo;
