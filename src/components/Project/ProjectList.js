import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add state for login status
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch all projects from the backend
    axios.get('http://localhost:8080/api/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the projects!", error);
      });

    // Check if user is logged in (you might need to replace this with actual auth logic)
    const loggedIn = localStorage.getItem('isLoggedIn'); // Example using localStorage
    setIsLoggedIn(loggedIn === 'true');
  }, []);

  if (!isLoggedIn) {
    return <h2>You must be a valid user.</h2>; // Show message if not logged in
  }

  return (
    <div>
      <h2>Project List</h2>
      {projects.length > 0 ? (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              {project.name} - {project.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>No projects available.</p> // Message for no projects
      )}
    </div>
  );
}

export default ProjectList;
