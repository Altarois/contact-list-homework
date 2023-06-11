import React, { useState, useEffect } from 'react';
import ContactTable from './components/contactTable';
import { Fade } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';




const App = () => {
  const [contacts, setContacts] = useState([
    { firstName: 'Goerge', surname: 'Singar', email: 'singar@example.com', phoneNumber: '0234567890' },
    { firstName: 'Jane', surname: 'Smith', email: 'jane@example.com', phoneNumber: '0876543210' },
    { firstName: 'Omar', surname: 'Hammadi', email: 'omar@example.com', phoneNumber: '0326544210' },
    { firstName: 'Jhon', surname: 'Dowell', email: 'jhon@example.com', phoneNumber: '0777573270' },
  ]);

  const [newContact, setNewContact] = useState({
    firstName: '',
    surname: '',
    email: '',
    phoneNumber: '',
  });

  const [error, setError] = useState('');

  //useEffect for handling error timeout
  useEffect(() => {
    let timeout;

    if (error) {
      timeout = setTimeout(() => {
        setError('');
      }, 3000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [error]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  //basic input form validation
  const validateForm = () => {
    if (!newContact.firstName || !newContact.surname || !newContact.email || !newContact.phoneNumber) {
      setError('All fields are required.');
      return false;
    }

    if (!isValidEmail(newContact.email)) {
      setError('Please enter a valid email address.');
      return false;
    }

    if (!isValidPhoneNumber(newContact.phoneNumber)) {
      setError('Please enter a valid phone number.');
      return false;
    }

    return true;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleAddContact = () => {
    if (validateForm()) {
      setContacts((prevContacts) => [...prevContacts, newContact]);
      setNewContact({
        firstName: '',
        surname: '',
        email: '',
        phoneNumber: '',
      });
        setError('');

    }
  };

  const handleRemoveContact = (index) => {
    setContacts((prevContacts) => prevContacts.filter((_, i) => i !== index));
  };

  return (
<div>
<div className="bg-info p-3 text-center">
        
        <h1 className="text-white"> <img width="48" height="48" src="https://img.icons8.com/color/48/contact-lenses.png" alt="contact-lenses"/> Table of Contacts</h1>
      </div>
    <div className="container w-55 fade-top-animation" style={{width:"45%"}}>

      <Fade in={!!error} timeout={1500}>
        <div className="alert alert-danger mb-2"  role="alert">
          {error}
        </div>
      </Fade>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
        <FormControl
          aria-label="First Name"
          aria-describedby="basic-addon1"
          name="firstName"
          value={newContact.firstName}
          onChange={handleInputChange}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon2">Surname</InputGroup.Text>
        <FormControl
          aria-label="Surname"
          aria-describedby="basic-addon2"
          name="surname"
          value={newContact.surname}
          onChange={handleInputChange}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">Email</InputGroup.Text>
        <FormControl
          placeholder="example.email@provider.com"
          aria-label="Email"
          aria-describedby="basic-addon3"
          name="email"
          value={newContact.email}
          onChange={handleInputChange}
        />
      </InputGroup>
      <InputGroup className="mb-4">
        <InputGroup.Text id="basic-addon4">Phone Number</InputGroup.Text>
        <FormControl
          placeholder="0X XX XX XX XX"
          aria-label="Phone Number"
          aria-describedby="basic-addon4"
          name="phoneNumber"
          value={newContact.phoneNumber}
          onChange={handleInputChange}
        />
      </InputGroup>
      <button className="btn btn-primary mb-3" onClick={handleAddContact}>
        Add
        <img class="button-logo" width="30" height="30" src="https://img.icons8.com/office/30/add-user-male--v1.png" alt="add-user-male--v1"/>
    </button>

      <ContactTable contacts={contacts} onRemove={handleRemoveContact} />
    </div>
</div>
  );
};

export default App;
