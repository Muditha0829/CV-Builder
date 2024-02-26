import React, { useState } from 'react';
import '../styles/style.css'; // Make sure this path is correct

function FormPage() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experiences: [{ company: '', position: '', duration: '' }],
    skills: '',
    photo: null,
    references: [{ name: '', relationship: '', contact: '' }],
  });

  // Handle changes for text inputs and photo upload
  const handleChange = (e) => {
    const { name, value } = e.target;
    const index = e.target.getAttribute('data-index');
    const section = e.target.getAttribute('data-section');

    if (section === 'experiences') {
      let experiences = [...formData.experiences];
      experiences[index][name] = value;
      setFormData({ ...formData, experiences });
    } else if (section === 'references') {
      let references = [...formData.references];
      references[index][name] = value;
      setFormData({ ...formData, references });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => setFormData({ ...formData, photo: e.target.result });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experiences: [...formData.experiences, { company: '', position: '', duration: '' }],
    });
  };

  const addReference = () => {
    setFormData({
      ...formData,
      references: [...formData.references, { name: '', relationship: '', contact: '' }],
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="form-and-preview-container">
      <div className="form-container">
        <form>
          <div><label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} /></label></div>
          <div><label>Title: <input type="text" name="title" value={formData.title} onChange={handleChange} /></label></div>
          <div><label>Email: <input type="email" name="email" value={formData.email} onChange={handleChange} /></label></div>
          <div><label>Phone: <input type="text" name="phone" value={formData.phone} onChange={handleChange} /></label></div>
          <div><label>Address: <input type="text" name="address" value={formData.address} onChange={handleChange} /></label></div>
          <div><label>Education: <textarea name="education" value={formData.education} onChange={handleChange}></textarea></label></div>
          <div><label>Skills: <textarea name="skills" value={formData.skills} onChange={handleChange}></textarea></label></div>
          <div><label>Photo: <input type="file" name="photo" accept="image/*" onChange={handlePhotoChange} /></label></div>
          <div className="experiences">
            {formData.experiences.map((exp, index) => (
              <div key={index} className="experience">
                <label>Company: <input type="text" name="company" data-index={index} value={exp.company} onChange={handleChange} /></label>
                <label>Position: <input type="text" name="position" data-index={index} value={exp.position} onChange={handleChange} /></label>
                <label>Duration: <input type="text" name="duration" data-index={index} value={exp.duration} onChange={handleChange} /></label>
              </div>
            ))}
          </div>
          <button type="button" onClick={addExperience}>Add Experience</button>
          <div className="references">
            <h3>References (Optional)</h3>
            {formData.references.map((ref, index) => (
              <div key={index} className="reference">
                <label>Name: <input type="text" name="name" data-index={index} data-section="references" value={ref.name} onChange={handleChange} /></label>
                <label>Relationship: <input type="text" name="relationship" data-index={index} data-section="references" value={ref.relationship} onChange={handleChange} /></label>
                <label>Contact: <input type="text" name="contact" data-index={index} data-section="references" value={ref.contact} onChange={handleChange} /></label>
              </div>
            ))}
            <button type="button" onClick={addReference}>Add Reference</button>
          </div>
        </form>
      </div>
      <div className="preview-container">
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
        <button onClick={handlePrint} className="print-button">Print Resume</button>
      </div>
    </div>
  );
}

export default FormPage;
