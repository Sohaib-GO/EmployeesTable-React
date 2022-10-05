import { Context } from "../../../context";
import React, { useState, useContext } from "react";
// import { nanoid } from "nanoid";
import Button from '@mui/material/Button';
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function AddEmployee() {
    

  const [contacts, setContacts] = useContext(Context);

  const [addEmployee, setAddEmployee] = useState({
    firstName: "",
    lastName: "",
    salary: "",
  });




  const handleAddEmployeeChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newEmployee = { ...addEmployee };
    newEmployee[fieldName] = fieldValue;

    setAddEmployee(newEmployee);
  };

  const handleAddEmployeeSubmit = (event) => {
    const newEmployee = {
      id: contacts.length + 1,
      firstName: addEmployee.firstName,
      lastName: addEmployee.lastName,
      salary: addEmployee.salary
    };
    const newEmployees = [...contacts, newEmployee];
    setContacts(newEmployees);

    setAddEmployee(null); // 👈️ input required to resubmit
    setShow(false); // 👈️ closes modal after submit
  };
  



  //   Bootstrap Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="addButton" variant="contained" color="success" size="large" onClick={handleShow}>
        Add Employee
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add An Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                autoFocus
                name="firstName"
                onChange={handleAddEmployeeChange}
                value={contacts.firstName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                onChange={handleAddEmployeeChange}
                value={contacts.lastName}
                name="lastName"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter first name"
                onChange={handleAddEmployeeChange}
                value={contacts.salary}
                name="salary"
              />
            </Form.Group>
          </Form>
          <Modal.Footer>
            <Button variant="outlined" color="primary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="contained" color="success" onClick={handleAddEmployeeSubmit}>
              Add
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
}

