import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { formatPhoneNumber } from "../utils/utils";

const MaterialTable = ({ contacts, onRemove }) => {
  return (
    <TableContainer component={Paper} className="fade-bot-animation">
      <Table>
        <caption>Total Contacts: {contacts.length}</caption>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Surname</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{contact.firstName}</TableCell>
              <TableCell>{contact.surname}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{formatPhoneNumber(contact.phoneNumber)}</TableCell>
              <TableCell>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onRemove(index)}
                >
                  Remove
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MaterialTable;
