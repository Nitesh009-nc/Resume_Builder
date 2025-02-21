import React, {useState} from "react";
import {  ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./styles.css";
import PreviewForm from "./components/previewForm/PreviewForm";
import ResumeForm from "./components/resumeForm/ResumeForm";

const App = () => {
  const [resumeData, setResumeData] = useState({});

  return (
    <>
    <div className="app-container">
      <ToastContainer />
      <div className="form-section">
        <ResumeForm setResumeData={setResumeData} />
      </div>
      <div className="preview-section">
        <PreviewForm resumeData={resumeData} />
      </div>
    </div>
    </>
   
  );
};

export default App;