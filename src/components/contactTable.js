import React from "react";
import { Table } from "react-bootstrap";
import Fade from "react-bootstrap/Fade";
import "bootstrap/dist/css/bootstrap.min.css";
import { formatPhoneNumber } from "../utils/utils";

const ContactTable = ({ contacts, onRemove }) => {
  return (
    <Table striped bordered hover variant="info" className="fade-bot-animation">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={index}>
            <td>{contact.firstName}</td>
            <td>{contact.surname}</td>
            <td>{contact.email}</td>
            <td>{formatPhoneNumber(contact.phoneNumber)}</td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onRemove(index)}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ContactTable;
