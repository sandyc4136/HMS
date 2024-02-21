import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('#root'); // Set the root element for accessibility

const UpdateDoctorModal = ({ isOpen, onRequestClose, doctorId, updateDoctorsList }) => {
  const [updatedDetails, setUpdatedDetails] = useState({
    // Initialize the state with empty or default values
    // You can also fetch existing details from the server if needed
    name: '',
    age: '',
    // Add other Doctor details here
  });

  const handleInputChange = (e) => {
    setUpdatedDetails({ ...updatedDetails, [e.target.name]: e.target.value });
  };

  const handleUpdateDoctor = async () => {
    try {
      await axios.put(`http://localhost:8080/updateDoctor/${doctorId}`, updatedDetails);
      console.log('Updated');
      onRequestClose(); // Close the modal after successful update
      updateDoctorsList(); // Trigger the function to update the Doctors list
    } catch (error) {
      console.error('Error Updating Doctor:', error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Update Doctor Modal"
    >
      <h2>Update Doctor Details</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleUpdateDoctor(); }}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={updatedDetails.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={updatedDetails.age}
            onChange={handleInputChange}
            required
          />
        </label>
        {/* Add other input fields for Doctor details */}
        <button type="submit">Update Doctor</button>
      </form>
    </Modal>
  );
};

export default UpdateDoctorModal;
