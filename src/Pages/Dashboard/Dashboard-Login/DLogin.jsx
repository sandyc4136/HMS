
import React, { useState, useEffect } from "react";
import { Alert, Radio } from "antd";
import banner from "../../../img/banner1.jpeg";
import admin from "../../../img/user.png";
import "./DLogin.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// import {
//   AdminLogin,
//   DoctorLogin,
//   forgetPassword,
//   NurseLogin,
// } from "../../../Redux/auth/action";
import Link from "antd/es/typography/Link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Drawer } from "antd";
import AdminDashboard from "../Main-Dashboard/GlobalFiles/AdminDashboard";

const notify = (text) => toast(text);

const DLogin = () => {

  const [isLogin,setIsLogin] = useState(false);

  useEffect( ()=> {
    let email=localStorage.getItem("user");
    if (email) {
        setIsLogin(true);
    }else{
      setIsLogin(false);
    }
   },[isLogin]);


  const navigate = useNavigate();
  const img_style={
    width: '100%'
  }



  // let[error,setError]=useState({errorData:null,isError:false})

  // const [open, setOpen] = useState(false);

  // const showDrawer = () => {
  //   setOpen(true);
  // };

  // const onClose = () => {
  //   setOpen(false);
  // };

  // ************************************************
  // const [Loading, setLoading] = useState(false);
  const [placement, SetPlacement] = useState("Admin");
  const [formvalue, setFormvalue] = useState({
    email: "",
    password: "",
  });

  const Handlechange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };

//   const handleEmailChange = (e) =>{
//     setFormvalue({
//       ...formvalue,
//       email: e.target.value,
//     });
//   };

//   const handlePasswordChange = (e) => {
//     setFormvalue({
//         ...formvalue,
//         password: e.target.value,
//     });
// };

  
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (formvalue.email !== "" && formvalue.password !== "") {

       if (placement === "Doctor") {
        let data = {
          ...formvalue,
          docEmail: formvalue.email,
        };
        console.log(data);
        axios.post('http://localhost:8080/doctorLogin', data)
          .then((response) => {
            if(response.data.status){
              localStorage.setItem('user', formvalue.email);
             alert("Login Successful");
            return navigate("/dashboard");
           // console.log(response.data);
          }
          else {
            alert("Invalid Login");
          }
          })
          .catch(error => {console.error('Error fetching Details:', error)
              alert("invalid Login");
           });
      } else if (placement === "Admin") {
        let data = {
          ...formvalue,
          adminEmail: formvalue.email,
        };

        console.log(data);
        axios.post('http://localhost:8080/adminLogin', data)
          .then(response => {
            if(response.data.status){
              localStorage.setItem('user', formvalue.email);
            alert("Login Successful");
             return navigate("/adminDashboard");
          }
            else{
              alert("invalid Login");
            }
          }).catch(error => {
            console.error('Error fetching Details:', error);
            //  alert("invalid Login");
            });
      }
    }
    else{
      notify("Please Enter Email and Password");
    }
  };

  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };


  return (
    <>
      <ToastContainer />

      <div className="mainLoginPage">
        <div className="leftside">
          <img src={banner} alt="banner" style={img_style}/>
        </div>
        <div className="rightside">
          <h1>Login</h1>
          <div>
            <Radio.Group
              value={placement}
              onChange={placementChange}
              className={"radiogroup"}
            >
             
              <Radio.Button value="Doctor" className={"radiobutton"}>
                Doctor
              </Radio.Button>
              <Radio.Button value="Admin" className={"radiobutton"}>
                Admin
              </Radio.Button>
            </Radio.Group>
          </div>
          <div className="Profileimg">
            <img src={admin} alt="profile" />
          </div>
          <div>
           
            <form >
              <h3>{placement} Email</h3>
              <input
                type="email"
                name="email"
                value={formvalue.email}
                onChange={Handlechange}
                required
              />
              <h3>Password</h3>
              <input
                type="password"
                name="password"
                value={formvalue.password}
                onChange={Handlechange}
                required
              />
              <button type="submit" onClick={HandleSubmit}>
                Submit
                </button>
            </form>
            <button style={{width:'50%','background-color':'pink'}} type="submit">
            <a href="http://localhost:3000/" style={{'text-decoration':'none'}}>Home</a>
             </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DLogin;







