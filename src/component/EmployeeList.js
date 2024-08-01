import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css'; // Include CSS for consistent styling

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('https://free-ap-south-1.cosmocloud.io/development/api/emplo', {
          params: {
            limit: 10,
            offset: 0
          },
          headers: {
            projectId: '66aa466abff0ce120a35dc25', // Correct projectId
            environmentId: '66aa466abff0ce120a35dc26',
          }
        });
        setEmployees(response.data.data); // Adjusted to access the array inside the `data` property
      } catch (error) {
        console.error('There was an error fetching the employees!', error);
      }
    };

    fetchEmployees();
  }, []);
 
  const deleteEmployee = async (id) => {
    try {
      const payload = {  };
      console.log('Deleting employee with ID:', id); // Log the ID being deleted
      await axios.delete(`https://free-ap-south-1.cosmocloud.io/development/api/emplo/${id}`, {
        data: payload,
        headers: {
          projectId: '66aa466abff0ce120a35dc25', // Correct projectId
          environmentId: '66aa466abff0ce120a35dc26',
        },
       
      });
      setEmployees(employees.filter(employee => employee._id !== id));
    } catch (error) {
      console.error('There was an error deleting the employee!', error);
    }
  };

  return (
    <div className="container">
      <h1>Employee List</h1>
      {Array.isArray(employees) && employees.length === 0 ? (
        <p>No Employees in the system</p>
      ) : (
        <ul className="employee-list">
          {Array.isArray(employees) && employees.map(employee => (
            <li key={employee._id} className="employee-item">
              <Link to={`/employee/${employee._id}`} className="employee-link">
                {employee.name} ({employee._id})
              </Link>
              <button onClick={() => deleteEmployee(employee._id)} className="delete-button">
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;
