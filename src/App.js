import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EmployeeList from './component/EmployeeList';
import EmployeeDetails from './component/EmployeeDetails';
import AddEmployee from './component/AddEmployee';
import './App.css';

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/">Employee List</Link>
        <Link to="/add">Add Employee</Link>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
          <Route path="/add" element={<AddEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
