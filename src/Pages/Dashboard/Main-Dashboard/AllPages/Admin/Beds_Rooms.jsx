import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { dischargePatient, GetBeds } from "../../../../../Redux/Datas/action";
import Sidebar from "../../GlobalFiles/Sidebar";

const Beds_Rooms = () => {
  const { data } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  let { beds } = useSelector((state) => state.data);
  beds=[
    {room:1,bed:1,status:"Occupied",patient:"Sameer Arora",disease:"Conjuctivitis ",doctor:"Dr. Ayesha Desai", discharge: "Admit"},
    {room:1,bed:2,status:"Occupied",patient:"Akshay Verma",disease:"Tooth Cavities",doctor:"Dr. Priya Kapoor", discharge: "Admit"},
    {room:2,bed:1,status:"Occupied",patient:"Rohit Patel",disease:"Coronary Artery",doctor:"Dr. Vikram Sharma", discharge: "Admit"},
    {room:2,bed:2,status:"Occupied",patient:"Kheyali Goud",disease:"Muscular Dystrophy",doctor:"Dr. Rajendra Patel", discharge: "Admit"},
    {room:3,bed:1,status:"Occupied",patient:"Pridev Joshi",disease:"Cataract surgery",doctor:"Dr. Smita Choudhary",discharge: "Admit"},
    {room:3,bed:2,status:"Occupied",patient:"Ankita sonwane",disease:"Neuro Muscular disorder",doctor:"Dr. Salman Ajani", discharge: "Admit"},
  ]

  const DischargePatient = (_id) => {
    let data = {
      occupied: "available",
      _id,
    };
    dispatch(dischargePatient(data));
  };

  useEffect(() => {
    dispatch(GetBeds());
  }, [dispatch]);

  if (data?.isAuthticated === false) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Payment_Page">
            <h1 style={{ marginBottom: "2rem" }}>All Beds</h1>
            <div className="patientBox">
              <table>
                <thead>
                  <tr>
                    <th>Room</th>
                    <th>Bed</th>
                    <th>Status</th>
                    <th>Patient</th>
                    <th>Disease</th>
                    <th>Doctor</th>
                    <th>Discharge/Admit</th>
                  </tr>
                </thead>
                <tbody>
                  {beds?.map((ele) => {
                    return (
                      <tr>
                        <td>{ele.room}</td>
                        <td style={{ marginLeft: "1rem" }}>{ele.bed}</td>
                        <td
                          style={{
                            color:
                              ele.occupied === "available" ? "green" : "orange",
                            fontWeight: "bold",
                          }}
                        >
                         {ele.status} 
                        </td>
                        <td>
                          {/* {ele.patientID
                            ? ele.patientID.patientName
                            : "No Data"} */}
                            {ele.patient}
                        </td>
                        <td>
                        {ele.disease}
                        </td>
                        <td>
                        {ele.doctor}
                        </td>
                        <td>
                          {/* <button
                            disabled={ele.occupied === "available"}
                            style={{
                              border: "none",
                              outline: "none",
                              background: "transparent",
                              color:
                                ele.occupied === "available" ? "gray" : "red",
                              cursor:
                                ele.occupied === "available" ? "" : "pointer",
                            }}
                            onClick={() => DischargePatient(ele._id)}
                          > */}
                            {ele.discharge}
                          {/* </button> */}
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

export default Beds_Rooms;
