import React from 'react';


const LayoutTwo = ({ formData }) => (
  <div className="resume-layout-two">
    {/* Another example layout */}
    <h1>2{formData.name}</h1>
    {/* Include other sections based on formData */}
  </div>
);

export default LayoutTwo;
