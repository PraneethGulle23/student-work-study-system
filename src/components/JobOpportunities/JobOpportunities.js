import React from 'react';
import './JobOpportunities.css'; // Add your custom CSS file

const JobOpportunities = () => {
  const jobOpportunities = [
    {
      id: 1,
      title: 'Internship at XYZ Corp',
      description: 'Looking for a web developer intern with experience in React and Node.js.',
      skills: ['React', 'Node.js', 'JavaScript'],
      location: 'Remote',
      applyLink: '#',
    },
    {
      id: 2,
      title: 'Part-time Software Developer',
      description: 'Flexible hours for students. Work on exciting projects with a talented team.',
      skills: ['Python', 'Django', 'Machine Learning'],
      location: 'On-site',
      applyLink: '#',
    },
    {
      id: 3,
      title: 'Data Analyst Intern',
      description: 'Seeking interns for data analysis projects. Must be proficient in SQL and Excel.',
      skills: ['SQL', 'Excel', 'Data Visualization'],
      location: 'Hybrid',
      applyLink: '#',
    },
  ];

  const userName = 'Praneeth'; // Replace with dynamic user name if available

  return (
    <div className="job-opportunities-page">
      <header className="header">
        <h1>Job Opportunities</h1>
        <div className="user-name">
          <p>Welcome, <strong>{userName}</strong>!</p>
        </div>
      </header>

      <nav className="dashboard-nav">
        <ul>
          <li><a href="/">🏠 Home</a></li>
          <li><a href="/student-dashboard">📊 Dashboard</a></li>
          <li><a href="/my-activities">📚 My Academic Activities</a></li>
          <li><a href="/projects">🗂️ Projects & Assessments</a></li>
          <li><a href="/create-project">➕ Create Project</a></li>
          <li><a href="/job-opportunities" className="active">💼 Job Opportunities</a></li>
        </ul>
      </nav>

      <main className="main-content">
        <h2>Available Positions</h2>
        <div className="job-list">
          {jobOpportunities.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <p><strong>Skills:</strong> {job.skills.join(', ')}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <a href={job.applyLink} className="apply-button">Apply Now</a>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>© 2024 Student Work-Study Management System</p>
      </footer>
    </div>
  );
};

export default JobOpportunities;
