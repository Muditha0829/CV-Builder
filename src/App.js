import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormPage from './components/FormPage';
import PreviewPage from './components/PreviewPage';

function App() {
  const [formData, setFormData] = useState({});

  const handleFormDataSubmit = (data) => {
    setFormData(data);
    // If you're manually handling navigation, you might navigate to the preview page here
    // For example, using the navigate function from useNavigate hook in React Router v6
  };

  return (
    <Router>
      <div>
        <nav>
        </nav>
        <Routes>
          <Route path="/" element={<FormPage onFormDataSubmit={handleFormDataSubmit} />} />
          <Route path="/preview" element={<PreviewPage formData={formData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
