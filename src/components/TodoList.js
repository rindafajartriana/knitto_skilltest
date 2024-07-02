import React, { useEffect } from "react";
import { useGetTodosQuery } from "../todoApi";
import styled from "styled-components";

const TodoList = ({ pageNumber, onPageChange }) => {
  const itemsPerPage = 10;

  const {
    data: todos,
    error,
    isLoading,
    refetch,
  } = useGetTodosQuery(pageNumber, itemsPerPage, {
    skip: true,
  });

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) {
    return <Message>Loading...</Message>;
  }

  if (error) {
    return <Message>Error: {error.message}</Message>;
  }

  return (
    <Container>
      <Title>Todo List</Title>
      <ButtonContainer>
        <Button
          onClick={() => onPageChange(pageNumber - 1)}
          disabled={pageNumber === 1}
        >
          Previous
        </Button>
        <Button onClick={() => onPageChange(pageNumber + 1)}>Next</Button>
      </ButtonContainer>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id} completed={todo.completed}>
            {todo.title} - {todo.completed ? "Completed" : "Not Completed"}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #eee;
  background-color: ${({ completed }) => (completed ? "#d4edda" : "#f8d7da")};
  color: ${({ completed }) => (completed ? "#155724" : "#721c24")};
`;

const Message = styled.p`
  text-align: center;
  color: #333;
`;

export default TodoList;
