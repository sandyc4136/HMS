import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import Sidebar from "../../GlobalFiles/Sidebar";

const ViewContact = () => {
  
      const [contacts, setContacts] = useState([]);


      useEffect(() => {
        // Fetch data from your backend API
        axios.get('http://localhost:8080/contacts/contactsAll')
          .then(response =>setContacts(response.data))
          .catch(error =>console.error('Error fetching Contacts:', error));
        },[]);

      // const handleDeleteContact = (id) => {
       
      //   axios.delete(`http://localhost:8080/contacts/delete/${id}`)
      //       .then(() => {
      //           setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
      //       })
      //       .catch(error => console.error('Error deleting contact:', error));
      //   };
  
      const handleDeleteContact = async (id) => {
        console.log(id);
        try {
          await axios.delete(`http://localhost:8080/contacts/delete/${id}`);
          console.log("delete");
          setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
        } catch (error) {
          console.error('Error deleting contact:', error);
        }
      };

      return (
        <>
        <div className="container">
            <Sidebar />
                <div className="AfterSideBar">
                <div className="Payment_Page">
                    
                        <h1 style={{ marginBottom: "2rem" }}>Contacts</h1>
                        <div className="patientBox">
                        {/* <Container> */}
                        <table>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Contact No.</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Option</th>
                            </tr>
                            </thead>
                            <tbody>
                            {contacts.map(item => (
                                <tr key={item.id}>
                                <td>{item.id}</td>
                                <td style={{ marginLeft: "1rem" }}>{item.name}</td>
                                <td>{item.contact}</td>
                                <td>{item.email}</td>
                                <td>{item.message}</td>
                                <Button variant="btn btn-danger"  type="submit" 
                                onClick={() => handleDeleteContact(item.id)}
                                > Delete</Button>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        {/* </Container> */}
                    </div>
                </div>
            </div>
        </div>
        </>
      );
};

export default ViewContact;