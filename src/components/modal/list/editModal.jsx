
import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import { Context } from "../../../context";
import { Modal } from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material/styles";



const EditModal = (props) => {
    const [contacts, setContacts] = useContext(Context);


  // Add id to each contact in the array
  const newArray = contacts.map((x, i) => ({
    ...x,
    // Use the items index in the array as a unique key
    id: i,
  }));

  const [editContactId, setEditContactId] = useState(null);

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

  const handleEditSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      firstName: editContact.firstName,
      lastName: editContact.lastName,
      salary: editContact.salary,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contacts.id === editContactId);
    

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };


  const handleEditClick = (index) => {
    return () => {
      setEditContactId(index);

      let newContacts = [...contacts];
  
      const formValues = {
        firstName: editContact.firstName,
        lastName: editContact.lastName,
        salary: editContact.salary,
      };


      newContacts[index] = formValues;
      setContacts(newContacts);
      setShow(false);
      
    };
  }




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
          <Form onSubmit={handleEditSubmit} >
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
            <Button variant="outlined"  color="primary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="contained" color="success" onClick={ handleEditClick(props.id)}>
              Save Changes
            </Button>

          </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditModal;




