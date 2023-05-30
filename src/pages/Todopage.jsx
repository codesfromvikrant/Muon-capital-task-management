import React, { useState, useContext } from "react";
import AddTodoList from "../components/addTodoList";
import TodoList from "../components/ToDoList";
import { TodoContext } from "../context/contextApi";
import EditTodo from "../components/editTodo";
import Header from "../components/Header";

const TodoPage = () => {
  const { todoList, setTodoList } = useContext(TodoContext);
  const [openEdit, setOpenEdit] = useState(false);
  const [Oid, setOid] = useState("");
  const [Iid, setIid] = useState("");

  const handleEdit = (oid, iid) => {
    console.log(oid, iid);
    setOid(oid);
    setIid(iid);
    setOpenEdit(true);
  };

  const list = todoList.map((obj) => {
    return (
      <TodoList
        key={obj.id}
        id={obj.id}
        listTitle={obj.listTitle}
        todos={obj.todos}
        setTodoList={setTodoList}
        handleEdit={handleEdit}
      />
    );
  });

  return (
    <div className="min-h-[100vh]  relative">
      <Header />
      <div className="flex justify-start items-start w-full h-auto">
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3 p-4 w-full h-[90vh] overflow-y-auto">
          {list}
          <AddTodoList setTodoList={setTodoList} />
        </div>
        {openEdit && <EditTodo Oid={Oid} Iid={Iid} setOpenEdit={setOpenEdit} />}
      </div>
    </div>
  );
};

export default TodoPage;
