import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

import Sidebar from "../../GlobalFiles/Sidebar";

const ViewDoctors = () => {

      const [doctors, setDoctors] = useState([]);


      useEffect(() => {
        // Fetch data from your backend API
        axios.get('http://localhost:8080/doctors/All')
          .then(response =>setDoctors(response.data))
          .catch(error =>console.error('Error fetching Doctors:', error));
        },[]);

      const handleDeleteDoctor = (id) => {
        
        axios.delete(`⁠http://localhost:8080/doctors/delete/${id}⁠`)
            .then(() => {
                setDoctors(prevDoctors => prevDoctors.filter(doctor => doctor.id !== id));
            })
            .catch(error => console.error('Error deleting Doctor:', error));
        };
  

      return (
        <>
        <div className="container">
            <Sidebar />
                <div className="AfterSideBar">
                <div className="Payment_Page">
                    
                        <h1 style={{ marginBottom: "2rem" }}>List Of Doctors</h1>
                        <div className="patientBox">
                        {/* <Container> */}
                        <table>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Emergency No.</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Blood Group</th>
                                <th>Department</th>
                                <th>Address</th>
                                <th>Status</th>
                                <th>Option</th>
                            </tr>
                            </thead>
                            <tbody>
                            {doctors.map(item => (
                                <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.emergencyNo}</td>
                                <td>{item.email}</td>
                                <td>{item.gender}</td>
                                <td>{item.bloodGroup}</td>
                                <td>{item.department}</td>
                                <td>{item.address}</td>
                                <td>{item.status}</td>
                                <Button variant="btn btn-danger"  type="submit" 
                                onClick={() => handleDeleteDoctor(item.id)}
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

export default ViewDoctors;