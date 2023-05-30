import React, { useContext } from "react";
import AddTodoList from "../components/addTodoList";
import TodoList from "../components/ToDoList";
import { TodoContext } from "../context/contextApi";

const TodoPage = () => {
  const { todoList, setTodoList } = useContext(TodoContext);

  const list = todoList.map((obj) => {
    return (
      <TodoList
        key={obj.id}
        id={obj.id}
        listTitle={obj.listTitle}
        todos={obj.todos}
        setTodoList={setTodoList}
      />
    );
  });

  return (
    <div className="grid grid-cols-4 gap-3 p-4 w-full">
      {list}
      <AddTodoList setTodoList={setTodoList} />
    </div>
  );
};

export default TodoPage;
