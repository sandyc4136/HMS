import { Table } from "antd";
import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  DeleteAppointment,
  GetAllAppointment,
} from "../../../../../Redux/Datas/action";
import axios from "axios";
// import Sidebar from "../../GlobalFiles/Sidebar";
import Admin_Sidebar from "../Admin/Admin_Sidebar";

const Check_Appointment = () => {
  
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API
    axios.get(`http://localhost:8080/fetchAllAppointments`)
      .then(response => setAppointments(response.data))
      .catch(error => console.error('Error fetching Appointments:', error));
  }, []);

  const disptach = useDispatch();

  const DeleteAppoint = (id) => {
    disptach(DeleteAppointment(id));
  };
  useEffect(() => {
    disptach(GetAllAppointment());
  }, []);

  return (
    <>
      <div className="container">
        <Admin_Sidebar />
        <div className="AfterSideBar">
          <div className="Payment_Page">
            <h1 style={{ marginBottom: "2rem" }}>Appointment Details</h1>
            <div className="patientBox">
              <table>
                <thead>
                  <tr>
                  <th>Patient Name</th>
                    
                    <th>Patient Disease</th>
                    <th>Patient Age</th>
                    <th>Patient Gender</th>
                    <th>Doctor Name</th>
                    <th>Doctor Department</th>
                    <th>Appointment Date</th>
                    <th>Appointment Time</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                {appointments.map(([patientId, patient, doctor]) => {
                  
                      return (
                        <tr key={patientId}>
                          <td>{patient.fullName}</td>
                         
                          <td>{patient.disease}</td>
                          <td>{patient.age}</td>
                          <td>{patient.gender}</td>
                          <td>{doctor.name}</td>
                          <td>{doctor.department}</td>
                          <td>{patient.appointments.length > 0 ? patient.appointments[0].appointmentDate : "N/A"}</td>
                          <td>{patient.appointments.length > 0 ? patient.appointments[0].time : "N/A"}</td>
                          <td>
                          <button
                            style={{
                              border: "none",
                              color: "red",
                              outline: "none",
                              background: "transparent",
                              cursor: "pointer",
                            }}
                            onClick={() => DeleteAppoint(patientId.id)}
                          >
                            Delete
                          </button>
                        </td>
                        </tr>
                      );
                       
                      
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Check_Appointment;
