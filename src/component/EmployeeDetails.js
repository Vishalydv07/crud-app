import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../App.css'; // Import the CSS file

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios.get(`https://free-ap-south-1.cosmocloud.io/development/api/emplo/${id}`, {
      headers: {
        projectId: '66aa466abff0ce120a35dc25', // Replace with your actual projectId
        environmentId: '66aa466abff0ce120a35dc26', // Replace with your actual environmentId
      },
    })
      .then(response => {
        console.log(response.data);
        setEmployee(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the employee details!', error);
      });
  }, [id]);

  return (
    <div className="employee-details">
      <h1>Employee Details</h1>
      {employee ? (
        <div className="details-card">
          <p><strong>Name:</strong> {employee.name}</p>
          <p><strong>ID:</strong> {employee._id}</p>
          <p><strong>Address:</strong> {employee.address?.line1 || 'N/A'}, {employee.address?.city || 'N/A'}, {employee.address?.country || 'N/A'}, {employee.address?.zip_code || 'N/A'}</p>
          <p><strong>Email:</strong> {employee.contacts?.email || 'N/A'}</p>
          <p><strong>Phone:</strong> {employee.contacts?.phone || 'N/A'}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EmployeeDetails;
