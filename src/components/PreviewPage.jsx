import React from 'react';
import '../styles/style.css'; // Ensure the path is correct based on your project structure

function PreviewPage({ formData }) {
  // Function to trigger printing
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume">
      <div className="header">
        <h1>{formData.name}</h1>
        <p>{formData.title}</p>
      </div>
      <div className="contact-info">
        <p>Email: {formData.email} | Phone: {formData.phone} | Address: {formData.address}</p>
      </div>
      <div className="section">
        <h2>Education</h2>
        <p>{formData.education}</p>
      </div>
      <div className="section">
        <h2>Experience</h2>
        <p>{formData.experience}</p>
      </div>
      <div className="section">
        <h2>Skills</h2>
        <p>{formData.skills}</p>
      </div>
      <button onClick={handlePrint} className="print-button">Print Resume</button>
    </div>
  );
}

export default PreviewPage;
