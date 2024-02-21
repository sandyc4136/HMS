import { Table } from "antd";
import React from "react";
import { MdPersonAdd } from "react-icons/md";
import { FaUserNurse } from "react-icons/fa";
import { RiEmpathizeLine } from "react-icons/ri";
import { FaBed } from "react-icons/fa";
// import { MdOutlineBedroomParent } from "react-icons/md";
import { FaAmbulance } from "react-icons/fa";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
// import { MdPayment } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import Sidebar from "./Sidebar";
import { useEffect, useState} from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { GetAllData, GetPatients } from "../../../../Redux/Datas/action";
import Admin_Sidebar from "../AllPages/Admin/Admin_Sidebar";

const AdminDashboard = () => {
  const [patients, setPatients] = useState([]);

  const styles={
    // border: "none",
    width: '100%'
  }

  useEffect(() => {
    // Fetch data from your backend API
    axios.get(`http://localhost:8080/fetchPatients`)
      .then(response =>setPatients(response.data))
      .catch(error =>console.error('Error fetching Patients:', error));
    },[]);

    const handleDeletePatient = async (id) => {
      console.log(id);
      try {
        await axios.delete(`http://localhost:8080/delete/${id}`);
        console.log("deleted");
        setPatients((prevPatients) => prevPatients.filter((patient) => patient.id !== id));
      } catch (error) {
        console.error('Error deleting Patient:', error);
      }
    };

//   const {dashboard: { data }} = useSelector((store) => store.data);

  // console.log(data);

  const dispatch = useDispatch();

//   useEffect(() => {
//     // dispatch(GetPatients());
//     dispatch(GetAllData());
//   }, []);

  return (
    <div className="container">
      <Admin_Sidebar />
      <div className="AfterSideBar">
        <h1 style={{ color: "rgb(184 191 234)" }}>Overview</h1>
        <div className="maindiv">
          <div className="one commondiv">
            <div>
              <h1>
                {/* {data?.doctor} */}
                6
                </h1>
              <p>Doctor</p>
            </div>
            <MdPersonAdd className="overviewIcon" />
          </div>
          <div className="two commondiv">
            {" "}
            <div>
              <h1>5</h1>
              <p>Nurse</p>
            </div>
            <FaUserNurse className="overviewIcon" />
          </div>
          <div className="three commondiv">
            <div>
              <h1>
                {/* {data?.patient} */}
                15
                </h1>
              <p>Patient</p>
            </div>
            <RiEmpathizeLine className="overviewIcon" />
          </div>
          <div className="six commondiv">
            {" "}
            <div>
              <h1>2</h1>
              <p>Admin</p>
            </div>
            <RiAdminLine className="overviewIcon" />
          </div>
          <div className="four commondiv">
            {" "}
            <div>
              <h1>
                {/* {data?.bed} */}
                6
                </h1>
              <p>Beds</p>
            </div>
            <FaBed className="overviewIcon" />
          </div>

          <div className="five commondiv">
            {" "}
            <div>
              <h1>3</h1>
              <p>Ambulance</p>
            </div>
            <FaAmbulance className="overviewIcon" />
          </div>
          <div className="six commondiv">
            {" "}
            <div>
              <h1>
                {/* {data?.appointment} */}
                4
                </h1>
              <p>Appointment</p>
            </div>
            <BsFillBookmarkCheckFill className="overviewIcon" />
          </div>
          {/* <div className="six commondiv">
            {" "}
            <div>
              <h1>{data?.report}</h1>
              <p>Reports</p>
            </div>
            <MdPayment className="overviewIcon" />
          </div> */}
        </div>
        {/* ************************************* */}
        <div className="patientDetails">
          <h1>Patient Details</h1>
          <div className="patientBox">
          <table>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                {/* <th>Emergency No.</th> */}
                                {/* <th>Gender</th> */}
                                <th>Disease</th>
                                <th>Blood Group</th>
                                <th>Department</th>
                                {/* <th>Address</th> */}
                                <th>Email</th>
                                <th>Option</th>
                            </tr>
                            </thead>
                            <tbody>
                            {patients.map(item => (
                                <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.fullName}</td>
                                <td>{item.age}</td>
                                <td>{item.disease}</td>                               
                                <td>{item.bloodGroup}</td>
                                <td>{item.department}</td>
                                <td>{item.email}</td>
                                {/* <td>{item.emergencyNo}</td> */}
                                 {/* <td>{item.gender}</td> */}
                                 
                                 {/* <td>{item.address}</td>
                                <td>{item.status}</td> */}                                                                                               
                                <Button variant="btn btn-danger"  type="submit" className="ml-2" style={styles}
                                onClick={() => handleDeletePatient(item.id)}
                                > Delete</Button>
                                </tr>
                            ))}
                            </tbody>
                        </table>
            {/* <Table columns={columns} /> */}
            {/* dataSource={patients}  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
