import React, { useState } from "react";
import "./CSS/Add_Doctor.css";
import axios from 'axios';
import doctor from "../../../../../img/doctoravatar.png";
import { useDispatch, useSelector } from "react-redux";
import { DoctorRegister, SendPassword } from "../../../../../Redux/auth/action";
import Sidebar from "../../GlobalFiles/Sidebar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
// const notify = (text) => toast(text);

const AddDoctor = () => {

  let initialData = {
    name: "",
    age: "",
    emergencyNo: "",
    email: "",
    gender: "",
    bloodGroup: "",
    birthdate: "",
    address: "",
    education: "",
    department: "",
    password: "",
    otherDetails: "",
  };

  const [DoctorValue, setDoctorValue] = useState(initialData);
  const [responseData, setResponseData] = useState({});


  const HandleDoctorChange = (e) => {
    setDoctorValue({ ...DoctorValue, [e.target.name]: e.target.value });
  };

  function HandleDoctorSubmit(e) {
    e.preventDefault();
    let url="http://localhost:8080/doctors/create";
    axios.post(url,DoctorValue).then((res) => {
      setResponseData(res);
        // if(res.data.status)
        //     alert("Doctor Registered!");
        // else
        //     alert("Something went Wrong!");

        try{
          alert("Doctor Registered!");
        }
          
        catch(error){
          alert("Something went Wrong!");
        }
      })

      // let data = {
      //   email: res.data.email,
      //   password: res.data.password,
      //   // userId: res.data.docID,
      // };
  };

  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Main_Add_Doctor_div">
            <h1>Add Doctors</h1>
            <img src={doctor} alt="doctor" className="avatarimg" />
            <form action="/dashboard" onSubmit={HandleDoctorSubmit} method="post">
              <div>
                <label>Doctor Name</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    // value={DoctorValue.name}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Age</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Age"
                    name="age"
                    // value={DoctorValue.age}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Emergency Number</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Emergency Number"
                    name="emergencyNo"
                    // value={DoctorValue.emergencyNo}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Email</label>
                <div className="inputdiv">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    // value={DoctorValue.email}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Gender</label>
                <div className="inputdiv">
                  <select
                    name="gender"
                    // value={DoctorValue.gender}
                    onChange={HandleDoctorChange}
                    required
                  >
                    <option value="Choose Gender">Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Blood Group</label>
                <div className="inputdiv">
                  <select
                    name="bloodGroup"
                    // value={DoctorValue.bloodGroup}
                    onChange={HandleDoctorChange}
                    required
                  >
                    <option value="Choose Blood Group">Select</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Birthdate</label>
                <div className="inputdiv">
                  <input
                    type="date"
                    placeholder="dd-mm-yyyy"
                    name="birthdate"
                    // value={DoctorValue.birthdate}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Address</label>
                <div className="inputdiv adressdiv">
                  <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={DoctorValue.address}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Education</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="eg. MBBS"
                    name="education"
                    // value={DoctorValue.education}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Department</label>
                <div className="inputdiv">
                  <select
                    name="department"
                    // value={DoctorValue.department}
                    onChange={HandleDoctorChange}
                    required
                  >
                    <option value="General">Select</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="ENT">ENT</option>
                    <option value="Ophthalmologist">Ophthalmologist</option>
                    <option value="Anesthesiologist">Anesthesiologist</option>
                    <option value="Dermatologist">Dermatologist</option>
                    <option value="Oncologist">Oncologist</option>
                    <option value="Psychiatrist">Psychiatrist</option>
                  </select>
                </div>
              </div>

              <div>
                <label>Password</label>
                <div className="inputdiv">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    // value={DoctorValue.password}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Other Details</label>
                <div className="inputdiv">
                  <textarea
                    type="text"
                    placeholder="Extra Info"
                    rows="4"
                    cols="50"
                    name="otherDetails"
                    // value={DoctorValue.otherDetails}
                    onChange={HandleDoctorChange}
            
                  />
                </div>
              </div>
              <button type="submit" className="formsubmitbutton">
                {/* {loading ? "Loading..." : "Submit"} */}
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDoctor;
