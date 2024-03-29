import React, { useEffect, useState } from "react";
import "../Doctor/CSS/Doctor_Profile.css";
import { BiTime } from "react-icons/bi";
import { GiMeditation } from "react-icons/gi";
import { AiFillCalendar, AiFillEdit } from "react-icons/ai";
import { MdBloodtype } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsHouseFill, BsGenderAmbiguous } from "react-icons/bs";
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaRegHospital, FaMapMarkedAlt, FaBirthdayCake } from "react-icons/fa";
import Sidebar from "../../GlobalFiles/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { Button, message, Modal } from "antd";
import { UpdateDoctor, UpdateNurse } from "../../../../../Redux/auth/action";
import { GetDoctorDetails } from "../../../../../Redux/Datas/action";
import { Navigate } from "react-router-dom";
import image from "../../../../../img/Doctorr1.jpeg";
import "./CSS/Doctor_Profile.css";
import axios from "axios";

// *********************************************************
const Doctor_Profile = () => {
  // const { data } = useSelector((store) => store.auth);

  const id=localStorage.getItem('id');
  const disptach = useDispatch();

  useEffect(() => {
    disptach(GetDoctorDetails());
  }, []);

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const [messageApi, contextHolder] = message.useMessage();

  const success = (text) => {
    messageApi.success(text);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    bloodGroup: "",
    education: "",
    mobile: "",
    DOB: "",
  });

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/fetchDoctor/${id}`,formData);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching doctor details:", error);
      }
    };
    fetchDoctorDetails();
  }, []);
  
  const updateDoctorProfile = async (id) => {
    try {
      const response = await axios.put(`http://localhost:8080/updateDoctor/${id}`, formData);
      console.log('Updated Doctor Profile:', response.data);
      // Handle success or update state accordingly
    } catch (error) {
      console.error('Error updating Doctor Profile:', error);
    }
  };
  
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    updateDoctorProfile();
    e.preventDefault();
  };

  // if (data?.isAuthticated === false) {
  //   return <Navigate to={"/"} />;
  // }

  // if (data?.user.userType !== "doctor") {
  //   return <Navigate to={"/dashboard"} />;
  // }

  return (
    <>
      {contextHolder}
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="maindoctorProfile">
            <div className="firstBox">
              <div>
                {/* <img src={data?.user?.image} alt="docimg" /> */}
                <img src={image} alt="docimg" />
              </div>
              <hr />
              <div className="singleitemdiv">
                <GiMeditation className="singledivicons" />
                <p>
                  {formData.name}
                  {/* Rajendra Patel */}
                  </p>
              </div>
              <div className="singleitemdiv">
                <MdBloodtype className="singledivicons" />
                <p>{formData.bloodGroup}</p>
              </div>
              <div className="singleitemdiv">
                <FaBirthdayCake className="singledivicons" />
                <p>
                  {/* {data?.user?.DOB} */}
                  1990-04-27
                  </p>
              </div>
              <div className="singleitemdiv">
                <BsFillTelephoneFill className="singledivicons" />
                <p>
                  {formData.mobile}
                 
                  </p>
              </div>
              <div className="singleitemdiv">
                <button onClick={showModal}>
                  {" "}
                  <AiFillEdit />
                  Edit profile
                </button>
              </div>

              <Modal
                title="Edit details"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={[
                  <Button key="back" onClick={handleCancel}>
                    Cancel
                  </Button>,
                  <Button key="submit" onClick={handleFormSubmit}>
                    Update
                  </Button>,
                ]}
              >
                <form className="inputForm">
                  <input
                    name="docName"
                    value={formData.docName}
                   
                    onChange={handleFormChange}
                    type="text"
                    placeholder="Full name"
                  />
                  <input
                    name="age"
                    value={formData.age}
                    onChange={handleFormChange}
                    type="number"
                    placeholder="Age"
                  />
                  <select name="gender" onChange={handleFormChange}>
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Others</option>
                  </select>
                  <input
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleFormChange}
                    type="text"
                    placeholder="Blood Group"
                  />
                  <input
                    name="education"
                    value={formData.education}
                    onChange={handleFormChange}
                    type="text"
                    placeholder="education"
                  />
                  <input
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleFormChange}
                    type="number"
                    placeholder="mobile"
                  />
                  <input
                    name="DOB"
                    value={formData.DOB}
                    onChange={handleFormChange}
                    type="date"
                    placeholder="Date of birth"
                  />
                </form>
              </Modal>
            </div>
            {/* ***********  Second Div ******************** */}
            <div className="SecondBox">
              <div className="subfirstbox">
                <h2 style={{ textAlign: "center", marginTop: "10px" }}>
                  Other Info
                </h2>
                <div className="singleitemdiv">
                  <BsGenderAmbiguous className="singledivicons" />
                  <p>{formData.gender}</p>
                </div>
                <div className="singleitemdiv">
                  <AiFillCalendar className="singledivicons" />
                  <p>
                    {formData.age}
                    
                    </p>
                </div>

                <div className="singleitemdiv">
                  <MdOutlineCastForEducation className="singledivicons" />
                  <p>
                    {formData.education}
                   
                    </p>
                </div>
                <div className="singleitemdiv">
                  <BsHouseFill className="singledivicons" />
                  <p>
                    {formData.address}
                 
                    </p>
                </div>
              </div>
              {/* ***********  Third Div ******************** */}
              <div className="subSecondBox">
                <h2 style={{ textAlign: "center", marginTop: "10px" }}>
                  Hospital Details
                </h2>
                <div className="singleitemdiv">
                  <BiTime className="singledivicons" />
                  <p>10:00 AM - 08:00 PM (TIMING)</p>
                </div>
                <div className="singleitemdiv">
                  <FaRegHospital className="singledivicons" />
                  <p>WeCare hospitals</p>
                </div>
                <div className="singleitemdiv">
                  <FaMapMarkedAlt className="singledivicons" />
                  <p>
                        N/92 Nayapalli,
                        Patia Square,
                        Bhubaneswar, Odisha 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctor_Profile;
