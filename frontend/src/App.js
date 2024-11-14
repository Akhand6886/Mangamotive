import React, { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import { Container, Row, Col, Card, Navbar } from 'react-bootstrap';
import './App.css'; // Custom styles for Mangamotive

function App() {
  const [todos, setTodos] = useState([]);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      {/* Navbar for Branding */}
      <Navbar bg="primary" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand href="#">
            <img
              alt="Mangamotive Logo"
              src="/logo.png"  // Add your logo image in the public folder
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Mangamotive
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-4">Mangamotive Task Manager</Card.Title>
                <ToDoForm onAdd={handleAdd} />
                <ToDoList />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="text-center mt-5">
        <p>&copy; {new Date().getFullYear()} Mangamotive. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
