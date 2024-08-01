import React, { useState } from 'react';
import axios from 'axios';

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [line1, setLine1] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const employeeData = {
      name,
      address: {
        line1,
        city,
        country,
        zip_code: zipCode
      },
      contacts: {
        email,
        phone
      }
    };

    console.log('Sending employee data:', employeeData);

    const config = {
      headers: {
        projectId: '66aa466abff0ce120a35dc25',
        environmentId: '66aa466abff0ce120a35dc26',
        'Content-Type': 'application/json'
      }
    };

    try {
      const response = await axios.post('https://free-ap-south-1.cosmocloud.io/development/api/emplo', employeeData, config);
      console.log('Employee added!', response.data);
      const empId = response.data._id;
      console.log('Employee ID:', empId);
    } catch (error) {
      console.error('There was an error adding the employee!', error);
      console.error('Error response:', error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Employee</h1>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Address Line 1:</label>
        <input type="text" value={line1} onChange={(e) => setLine1(e.target.value)} required />
      </div>
      <div>
        <label>City:</label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
      </div>
      <div>
        <label>Country:</label>
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required />
      </div>
      <div>
        <label>Zip Code:</label>
        <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Phone:</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployee;
