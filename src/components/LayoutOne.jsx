import React from 'react';

const LayoutOne = ({ formData }) => (
  <div className="resume-layout-one">
    {/* Example layout */}
    <div className="resume">
          {formData.photo && <div className="photo-container"><img src={formData.photo} alt="Resume Photo" className="resume-photo"/></div>}
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
            {formData.experiences.map((exp, index) => (
              <div key={index}>
                <p><strong>{exp.company}</strong> - {exp.position} ({exp.duration})</p>
              </div>
            ))}
          </div>
          <div className="section">
            <h2>Skills</h2>
            <p>{formData.skills}</p>
          </div>
          {formData.references && formData.references.length > 0 && (
            <div className="section">
              <h2>References</h2>
              {formData.references.map((ref, index) => (
                <div key={index}>
                  <p>{ref.name} - {ref.relationship}, {ref.contact}</p>
                </div>
              ))}
            </div>
          )}
        </div>
  </div>
);

export default LayoutOne;
