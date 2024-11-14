import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListGroup, Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('/api/todos');
        setTodos(response.data);
      } catch (error) {
        console.error('Failed to fetch to-dos');
      }
    };
    fetchTodos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error('Failed to delete to-do');
    }
  };

  return (
    <ListGroup className="mt-3">
      {todos.map((todo) => (
        <ListGroup.Item key={todo._id} className="d-flex justify-content-between align-items-center">
          <span>{todo.title}</span>
          <Button variant="outline-danger" onClick={() => handleDelete(todo._id)}>
            <FaTrash />
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ToDoList;
