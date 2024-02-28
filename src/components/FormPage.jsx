import React, { useState } from "react";
import LayoutOne from "./LayoutOne"; // Make sure to create this component
import LayoutTwo from "./LayoutTwo"; // Make sure to create this component
// import '../styles/style.css'; // Adjust the path as needed
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    address: "",
    education: "",
    experiences: [{ company: "", position: "", duration: "" }],
    skills: "",
    photo: null,
    references: [{ name: "", relationship: "", contact: "" }],
  });

  const [selectedLayout, setSelectedLayout] = useState("LayoutOne");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const index = e.target.getAttribute("data-index");
    const section = e.target.getAttribute("data-section");

    if (section === "experiences") {
      let experiences = [...formData.experiences];
      experiences[index][name] = value;
      setFormData({ ...formData, experiences });
    } else if (section === "references") {
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
      reader.onload = (e) =>
        setFormData({ ...formData, photo: e.target.result });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experiences: [
        ...formData.experiences,
        { company: "", position: "", duration: "" },
      ],
    });
  };

  const addReference = () => {
    setFormData({
      ...formData,
      references: [
        ...formData.references,
        { name: "", relationship: "", contact: "" },
      ],
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const renderSelectedLayout = () => {
    switch (selectedLayout) {
      case "LayoutOne":
        return <LayoutOne formData={formData} />;
      case "LayoutTwo":
        return <LayoutTwo formData={formData} />;
      default:
        return <LayoutOne formData={formData} />;
    }
  };

  return (
    <div className="form-and-preview-container">
      <Grid item sx={12}>
        <div className="layout-selector">
          <button onClick={() => setSelectedLayout("LayoutOne")}>
            Layout One
          </button>
          <button onClick={() => setSelectedLayout("LayoutTwo")}>
            Layout Two
          </button>
          {/* Add buttons for additional layouts as needed */}
        </div>
      </Grid>
      <Box sx={{ flexGrow: 1 }}>
        <Grid>
          <Grid item sx={6}>
            <div className="form-container">
              <form>
                <div>
                  <label>
                    Name:{" "}
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Title:{" "}
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Email:{" "}
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Phone:{" "}
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Address:{" "}
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Education:{" "}
                    <textarea
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                    ></textarea>
                  </label>
                </div>
                <div>
                  <label>
                    Skills:{" "}
                    <textarea
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                    ></textarea>
                  </label>
                </div>
                <div>
                  <label>
                    Photo:{" "}
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      onChange={handlePhotoChange}
                    />
                  </label>
                </div>
                <div className="experiences">
                  {formData.experiences.map((exp, index) => (
                    <div key={index} className="experience">
                      <label>
                        Company:{" "}
                        <input
                          type="text"
                          name="company"
                          data-index={index}
                          value={exp.company}
                          onChange={handleChange}
                        />
                      </label>
                      <label>
                        Position:{" "}
                        <input
                          type="text"
                          name="position"
                          data-index={index}
                          value={exp.position}
                          onChange={handleChange}
                        />
                      </label>
                      <label>
                        Duration:{" "}
                        <input
                          type="text"
                          name="duration"
                          data-index={index}
                          value={exp.duration}
                          onChange={handleChange}
                        />
                      </label>
                    </div>
                  ))}
                </div>
                <button type="button" onClick={addExperience}>
                  Add Experience
                </button>
                <div className="references">
                  <h3>References (Optional)</h3>
                  {formData.references.map((ref, index) => (
                    <div key={index} className="reference">
                      <label>
                        Name:{" "}
                        <input
                          type="text"
                          name="name"
                          data-index={index}
                          data-section="references"
                          value={ref.name}
                          onChange={handleChange}
                        />
                      </label>
                      <label>
                        Relationship:{" "}
                        <input
                          type="text"
                          name="relationship"
                          data-index={index}
                          data-section="references"
                          value={ref.relationship}
                          onChange={handleChange}
                        />
                      </label>
                      <label>
                        Contact:{" "}
                        <input
                          type="text"
                          name="contact"
                          data-index={index}
                          data-section="references"
                          value={ref.contact}
                          onChange={handleChange}
                        />
                      </label>
                    </div>
                  ))}
                  <button type="button" onClick={addReference}>
                    Add Reference
                  </button>
                </div>
              </form>
            </div>
          </Grid>

          <Grid item sx={6}>
            <div className="preview-container">
              <Paper elevation={2}>{renderSelectedLayout()}</Paper>

              <button onClick={handlePrint} className="print-button">
                Print Resume
              </button>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default FormPage;
