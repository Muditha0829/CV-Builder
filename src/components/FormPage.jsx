// src/components/FormPage.jsx
import React, { useState } from 'react';

function FormPage({ onFormDataSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experience: '',
    skills: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormDataSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for resume data */}
      <div><label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} /></label></div>
      <div><label>Title: <input type="text" name="title" value={formData.title} onChange={handleChange} /></label></div>
      <div><label>Email: <input type="email" name="email" value={formData.email} onChange={handleChange} /></label></div>
      <div><label>Phone: <input type="text" name="phone" value={formData.phone} onChange={handleChange} /></label></div>
      <div><label>Address: <input type="text" name="address" value={formData.address} onChange={handleChange} /></label></div>
      <div><label>Education: <textarea name="education" value={formData.education} onChange={handleChange}></textarea></label></div>
      <div><label>Experience: <textarea name="experience" value={formData.experience} onChange={handleChange}></textarea></label></div>
      <div><label>Skills: <textarea name="skills" value={formData.skills} onChange={handleChange}></textarea></label></div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormPage;
