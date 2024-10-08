import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    major: "Computer Science",
    year: "Sophomore",
    interests: "Web Development, AI",
  });

  // Function to handle profile update if needed
  const handleUpdate = () => {
    // Logic to handle profile updates (e.g., API calls)
    alert("Profile updated!");
  };

  return (
    <div className="profile-container">
      <h2>Profile Details</h2>
      <img src="profile-pic-url" alt="Profile" className="profile-pic" />
      <p>Name: {userInfo.name}</p>
      <p>Major: {userInfo.major}</p>
      <p>Year: {userInfo.year}</p>
      <p>Interests: {userInfo.interests}</p>
      <button className="update-profile-btn" onClick={handleUpdate}>Update Profile</button>
    </div>
  );
};

export default Profile;
