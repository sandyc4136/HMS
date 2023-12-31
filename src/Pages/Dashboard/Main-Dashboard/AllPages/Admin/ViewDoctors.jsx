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
        axios.delete('⁠http://localhost:8080/doctors/delete/{id}⁠')
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
                                <th>Department</th>
                                <th>Email</th>
                                <th>Contact No.</th>
                                <th>Address</th>
                                <th>Status</th>
                                <th>Option</th>
                            </tr>
                            </thead>
                            <tbody>
                            {doctors.map(doctor => (
                                <tr key={doctor.id}>
                                <td>{doctor.id}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.age}</td>
                                <td>{doctor.department}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.emergencyNo}</td>
                                <td>{doctor.address}</td>
                                <td>{doctor.status}</td>
                                <Button  type="submit" 
                                onClick={() => handleDeleteDoctor(doctor.id)}
                                style={{border:'none'}}> Delete</Button>
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