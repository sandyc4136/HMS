import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

import Sidebar from "../../GlobalFiles/Sidebar";

const ViewDoctors = () => {

      const [doctors, setDoctors] = useState([]);

      const Navigate = useNavigate();
      useEffect(() => {
        // Fetch data from your backend API
        axios.get('http://localhost:8080/fetchDoctors')
          .then(response =>setDoctors(response.data))
          .catch(error =>console.error('Error fetching Doctors:', error));
        },[]);

        const handleDeleteDoctor = async (id) => {
          console.log(id);
          try {
            await axios.delete(`http://localhost:8080/deleteDoctor/${id}`);
            console.log("deleted");
            setDoctors((prevDoctors) => prevDoctors.filter((doctor) => doctor.id !== id));
          } catch (error) {
            console.error('Error deleting Doctor:', error);
          }
        };

        const handleUpdateDoctor = async (id) => {
          console.log(id);
          try {
            await axios.put(`http://localhost:8080/updateDoctor/${id}`);
           
            console.log("Updated");
            setDoctors((prevDoctors) => prevDoctors.filter((doctor) => doctor.id !== id));
          } catch (error) {
            console.error('Error Updating Doctor:', error);
          }
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
                                {/* <th>Email</th> */}
                                <th>Gender</th>
                                <th>Blood Group</th>
                                <th>Department</th>
                                <th>Address</th>
                                
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
                                {/* <td>{item.email}</td> */}
                                <td>{item.gender}</td>
                                <td>{item.bloodGroup}</td>
                                <td>{item.department}</td>
                                <td>{item.address}</td>
                                
                                <Button variant="btn btn-danger"  type="submit" 
                                onClick={() => handleDeleteDoctor(item.id)}
                                > Delete</Button>
                                <Button variant="btn btn-danger"  type="submit" 
                                onClick={() => handleUpdateDoctor(item.id)}
                                > Update</Button>
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