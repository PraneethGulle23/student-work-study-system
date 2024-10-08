import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import ProjectList from './components/Project/ProjectList';
import ProjectForm from './components/Project/ProjectForm';
import StudentDashboard from './components/StudentDashboard/StudentDashboard'; // Updated import
import MyActivities from './components/MyActivities/MyActivities';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Projects from './components/Projects/Projects';
import JobOpportunities from './components/JobOpportunities/JobOpportunities';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>

        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Route */}
          <Route path="/profile" element={<Profile />} /> // Ensure Profile is imported at the top
          <Route path="/projects" element={<ProjectList />} /> {/* Projects Route */}
          <Route path="/create-project" element={<ProjectForm />} /> {/* Create Project Route */}
          <Route path="/dashboard" element={<StudentDashboard />} /> {/* Student Dashboard Route */}
          <Route path="/academic-activities" element={<MyActivities />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/job-opportunities" element={<JobOpportunities />} />
          <Route path="/login" element={<Login />} /> {/* Login Route */}
          <Route path="/signup" element={<Signup />} /> {/* Signup Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
