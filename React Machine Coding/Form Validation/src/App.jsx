import React, { useState } from 'react';
import './App.css';

function App() {
  // State to hold the form data
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    salary: ''
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;  
    setFormData((prevData) => ({
      ...prevData,      
      [name]: value
    }));
  };
  


  const handleClick = (e) => {
    e.preventDefault();  
    alert(`${formData.name} ${formData.age} ${formData.salary}`); 
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter your Name"
          value={formData.name}
          onChange={handleChange}  
        />
        <input
          type="number"
          name="age"
          placeholder="Enter your Age"
          value={formData.age}
          onChange={handleChange}  
        />
        <input
          type="number"
          name="salary"
          placeholder="Enter your Salary"
          value={formData.salary}
          onChange={handleChange}  
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </>
  );
}

export default App;
