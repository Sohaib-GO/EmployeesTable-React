import React, { useState, useContext } from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { Context } from "../../../src/context";
import AddEmployee from "../modal/list/form";
import EditModal from "../modal/list/editModal";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Grid = () => {
  const [contacts, setContacts] = useContext(Context);

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (confirmed) {
      setContacts((prevItems) => {
        return prevItems.filter((contact, index) => {
          // returns everything except the deleted item(id)
          return index !== id;
        });
      });
    }
  };


  const formatToCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});  
  



  return (
    <div className="container">

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ fontSize: 15, fontWeight: "bold", fontStyle: "oblique" ,backgroundColor:"#DFD8D2" }}>First Name</TableCell>
              <TableCell align="left" sx={{ fontSize: 15, fontWeight: "bold", fontStyle: "oblique" ,backgroundColor:"#DFD8D2" }}>Last Name</TableCell>
              <TableCell align="left" sx={{ fontSize: 15, fontWeight: "bold", fontStyle: "oblique",backgroundColor:"#DFD8D2" }}>Salary</TableCell>
              <TableCell align="left" sx={{ fontSize: 15, fontWeight: "bold", fontStyle: "oblique" ,backgroundColor:"#DFD8D2"}}>Edit</TableCell>
              <TableCell align="left" sx={{ fontSize: 15, fontWeight: "bold", fontStyle: "oblique" ,backgroundColor:"#DFD8D2"}}>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact, index) => (
              <TableRow
                key={index}

                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
              

                <TableCell component="th" scope="row" sx={{backgroundColor: "#D2D1D0"}}>
                  {" "}
                  {contact.firstName}
                </TableCell>
                <TableCell align="left" sx={{backgroundColor: "#D2D1D0"}}>{contact.lastName}</TableCell>
                <TableCell align="left" sx={{backgroundColor: "#D2D1D0"}}>{formatToCurrency.format(contact.salary)}</TableCell>
                <TableCell align="left" sx={{backgroundColor: "#D2D1D0"}}>
                <TableCell align="left">{contact.lastName}</TableCell>
                <TableCell align="left">{formatToCurrency.format(contact.salary)}</TableCell>
                <TableCell align="left">
<EditModal  id={index}  // pass index value to the editModal

                contactFirst={contact.firstName}
                contactLast={contact.lastName}
                contactSalary={contact.salary}


  
/>


                </TableCell>
                {/* DELETE BUTTON */}
                <TableCell align="left" sx={{backgroundColor: "#D2D1D0"}}>
                <Button variant="contained" color="error" onClick={() => handleDelete(index)}>
  Delete
</Button>


                </TableCell>

              </TableRow>

            ))}
            
          </TableBody>
        </Table>

      </TableContainer>

    </div>
  );
};

export default Grid;
