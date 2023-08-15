import React from "react";
import { useEffect } from "react";
import { useGetTodosQuery } from "../todoApi";

const TodoList = ({ pageNumber, onPageChange }) => {
  const itemsPerPage = 10;

  const {
    data: todos,
    error,
    isLoading,
    refetch,
  } = useGetTodosQuery(pageNumber, itemsPerPage, {
    skip: true, // Tidak fetch data secara otomatis
  });

  useEffect(() => {
    refetch(); // Lakukan fetch saat komponen dipasang
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Todo List</h2>
      <button onClick={() => onPageChange(pageNumber - 1)}>Previous</button>
      <button onClick={() => onPageChange(pageNumber + 1)}>Next</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? "Completed" : "Not Completed"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
