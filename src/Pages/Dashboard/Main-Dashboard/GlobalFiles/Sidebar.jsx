import React, { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaAmbulance } from "react-icons/fa";
import { GiNurseFemale } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { SlUserFollow } from "react-icons/sl";
import { BsBookmarkPlus, BsFillBookmarkCheckFill } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaHospitalUser } from "react-icons/fa";
import { TbReportMedical } from "react-icons/tb";
import { MdBedroomChild } from "react-icons/md";
import { Link } from "react-router-dom";
import { ImMenu } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";
import { VscFeedback } from "react-icons/vsc";
// import { FaUserDoctor } from "react-icons/fa6";
import { SiAsciidoctor } from "react-icons/si";
import { TbListDetails } from "react-icons/tb";
import { RiAdminLine } from "react-icons/ri";
import { TbBed } from "react-icons/tb";
import { MdDashboardCustomize } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const {
    data: { user },
  } = useSelector((state) => state.auth);

  function toggle() {
    setIsOpen(!isOpen);
  }
  const [isLogin,setIsLogin] = useState(false);
  useEffect( ()=> {
    let email=localStorage.getItem("user");
    if (email) {
        setIsLogin(true);
    }else{
      setIsLogin(false);
    }
   },[isLogin]);

  return (
    <>
      <div>
        <div style={{ width: isOpen ? "200px" : "70px" }} className={`sidebar`}>
          <div className="top_section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              HMS
            </h1>
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <ImMenu onClick={toggle} style={{ cursor: "pointer" }} />
            </div>
          </div>
          <div className="bottomSection">
            <Link className="link" activeclassname="active" to={"/dashboard"}>
              <div className="icon">
                <MdDashboardCustomize className="mainIcon" />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                DashBoard
              </div>
            </Link>

            {/* {user?.userType === "nurse" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/nurseprofile"}
              >
                <div className="icon">
                  <CgProfile className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Profile
                </div>
              </Link>
            ) : null} */}
            {/* {user?.userType === "nurse" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/addpatient"}
              >
                <div className="icon">
                  <FaHospitalUser className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Add Patient
                </div>
              </Link>
            ) : null} */}

            {/* {user?.userType === "nurse" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/bookappointment"}
              >
                <div className="icon">
                  <BsBookmarkPlus className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Appointments
                </div>
              </Link>
            ) : null} */}
            {user?.userType === "admin" ? (
              <Link className="link" activeclassname="active" to={"/addoctor"}>
                <div className="icon">
                  <AiOutlineUserAdd className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Add Doctor
                </div>
              </Link>
            ) : null}
             {user?.userType === "admin" ? (
              <Link className="link" activeclassname="active" to={"/contacts"}>
                <div className="icon">
                  <VscFeedback className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Contacts
                </div>
              </Link>
            ) : null}
            {user?.userType === "admin" ? (
              <Link className="link" activeclassname="active" to={"/doctors"}>
                <div className="icon">
                  <SiAsciidoctor className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Doctors
                </div>
              </Link>
            ) : null}
           


           
              <Link
                className="link"
                activeclassname="active"
                to={"/doctorprofile"}
              >
                <div className="icon">
                  <SlUserFollow className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Profile
                </div>
              </Link>
           
            <Link className="link" activeclassname="active" to={"/rooms"}>
              <div className="icon">
                <MdBedroomChild className="mainIcon" />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Beds
              </div>
            </Link>
            {/* {user?.userType === "doctor" ? (
              <Link className="link" activeclassname="active" to={"/reports"}>
                <div className="icon">
                  <TbReportMedical className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Reports
                </div>
              </Link>
            ) : null} */}
            
              <Link
                className="link"
                activeclassname="active"
                to={"/checkappointment"}
              >
                <div className="icon">
                  <BsFillBookmarkCheckFill className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Appointments
                </div>
              </Link>
            
            {/* {user?.userType === "doctor" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/createslip"}
              >
                <div className="icon">
                  <BiDetail className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Create Report
                </div>
              </Link>
            ) : null} */}
            {/* {user?.userType === "doctor" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/patientdetails"}
              >
                <div className="icon">
                  <TbListDetails className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Patients
                </div>
              </Link>
            ) : null} */}
           {/* {isLogin? ( */}
            <Link
              className="LogOutPath link"
              onClick={() => {
                dispatch({ type: "AUTH_LOGOUT" });
                localStorage.removeItem("user");
                setIsLogin(false);
                alert("Logged out");   
              }}
              to={"/"}
            >
              <div className="icon">
                <FiLogOut />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Logout
              </div>
            </Link>
             <Link to="/dashboard"></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
