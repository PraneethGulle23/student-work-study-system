import React, { useState } from 'react';
import axios from 'axios';

function ProjectForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const project = { name, description };

    axios.post('http://localhost:8080/api/projects', project)
      .then(response => {
        alert("Project created successfully");
        setName('');
        setDescription('');
      })
      .catch(error => {
        console.error("There was an error creating the project!", error);
      });
  };

  return (
    <div>
      <h2>Create Project</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Project Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Project Description:</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Create Project</button>
      </form>
    </div>
  );
}

export default ProjectForm;
