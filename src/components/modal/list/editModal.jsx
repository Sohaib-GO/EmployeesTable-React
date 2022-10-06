import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import { Context } from "../../../context";
import { Modal } from "react-bootstrap";
import Button from "@mui/material/Button";

const EditModal = (props) => {
  const [contacts, setContacts] = useContext(Context);

  const [editContact, setEditContact] = useState({
    id: "",
    firstName: "",
    lastName: "",
    salary: "",
  });

  const handleEditChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = { ...editContact };
    newFormData[fieldName] = fieldValue;

    setEditContact(newFormData);
  };

  const handleEditClick = (index) => {
    return () => {
      let newContacts = [...contacts];

      const formValues = {
        firstName: editContact.firstName,
        lastName: editContact.lastName,
        salary: editContact.salary,
      };
      // Set the form values to the  new values of the contact to be edited
      newContacts[index] = formValues;
      setContacts(newContacts);
      setShow(false);
    };
  };

  //   Bootstrap Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

    <Button variant="outlined"     onClick={handleShow} >Edit Employee</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employer</Modal.Title>
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
                defaultValue={props.contactFirst}
                onChange={handleEditChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="lastName"
                defaultValue={props.contactLast}
                onChange={handleEditChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter salary"
                name="salary"
                defaultValue={props.contactSalary}
                onChange={handleEditChange}
              />
            </Form.Group>

            <Modal.Footer>
              <Button variant="outlined" color="primary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={handleEditClick(props.id)}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditModal;
