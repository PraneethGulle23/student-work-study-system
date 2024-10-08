import React from 'react';
import './MyActivities.css'; // Custom CSS for styling

const MyActivities = () => {
  // Sample data for courses and skills
  const currentCourses = [
    { id: 1, name: 'Introduction to Programming', code: 'CS101' },
    { id: 2, name: 'Data Structures', code: 'CS102' },
    { id: 3, name: 'Database Management Systems', code: 'CS103' },
    { id: 4, name: 'Web Development', code: 'CS104' },
  ];

  const skillsGained = [
    'Problem Solving',
    'Web Development',
    'Database Management',
    'Team Collaboration',
  ];

  const userName = 'Praneeth'; // Replace with dynamic user name if available

  return (
    <div className="my-activities-dashboard">
      <header className="dashboard-header">
        <h1>My Academic Activities</h1>
        <div className="user-name">
          <p>Welcome, <strong>{userName}</strong>!</p>
        </div>
      </header>

      <div className="dashboard-content">
        {/* Sidebar Navigation */}
        <nav className="dashboard-nav">
  <ul>
    <li><a href="/">🏠 Home</a></li>
    <li><a href="/dashboard">📊 Dashboard</a></li>
    <li><a href="/my-activities" className="active">📚 My Academic Activities</a></li>
    <li><a href="/projects">🗂️ Projects & Assessments</a></li>
    <li><a href="/create-project">➕ Create Project</a></li>
    <li><a href="/job-opportunities">💼 Job Opportunities</a></li>
  </ul>
</nav>


        {/* Main Content */}
        <div className="dashboard-main">
          <div className="preliminary-details card">
            <h2>Overview</h2>
            <p>Here you can find an overview of your current academic activities. Stay organized and keep track of deadlines!</p>
          </div>

          <div className="current-courses card">
            <h2>Current Courses</h2>
            <ul>
              {currentCourses.map((course) => (
                <li key={course.id} className="course-item">
                  <span className="course-name">{course.name}</span>
                  <span className="course-code"> ({course.code})</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="skills-gained card">
            <h2>Skills Gained</h2>
            <ul>
              {skillsGained.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>

          <div className="recent-activities card">
            <h2>Recent Activities</h2>
            <p>Keep track of your completed assignments, projects, and other academic milestones.</p>
            {/* Add dynamic content related to recent activities */}
          </div>

          <div className="upcoming-deadlines card">
            <h2>Upcoming Deadlines</h2>
            <p>Stay ahead of your assignments and projects!</p>
            {/* Add dynamic content related to upcoming deadlines */}
          </div>
        </div>
      </div>

      <footer className="dashboard-footer">
        <p>&copy; 2024 Student Work-Study Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MyActivities;
