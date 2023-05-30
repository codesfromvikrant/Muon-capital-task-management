import { nanoid } from "nanoid";
import React, { useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import AddBtn from "./addBtn";

const AddTodoList = ({ setTodoList }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const addInList = () => {
    if (value.trim() !== "") {
      setTodoList((prev) => [
        ...prev,
        { id: nanoid(), listTitle: value, todos: [] },
      ]);
      setValue("");
    }
  };

  return (
    <div className="bg-secondary h-max flex justify-between items-center p-3 rounded-md">
      <input
        onChange={handleChange}
        type="text"
        value={value}
        placeholder="Add Todo-List"
        className="bg-transparent placeholder:text-gray-500 text-gray-100 w-full outline-none"
      />

      <AddBtn handleAction={addInList} />
    </div>
  );
};

export default AddTodoList;
