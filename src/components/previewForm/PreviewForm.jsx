import {React,useRef} from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


const PreviewForm = ({ resumeData }) => {
    const resumeRef = useRef();
  
    const handleDownload = () => {
      html2canvas(resumeRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 10, 10, 180, 160);
        pdf.save("resume.pdf");
      });
    };
  
    return (
      <div className="resume-preview-container">
        <div ref={resumeRef} className="resume-preview">
          <h1 className="title">{resumeData.name || "Your Name"}</h1>
          <p>{resumeData.email || "your.email@example.com"}</p>
          <p>{resumeData.phone || "Phone Number"}</p>
          <h2>Education</h2>
          <p>{resumeData.degree || "Degree"} - {resumeData.university || "University"}</p>
          <h2>Experience</h2>
          <p>{resumeData.experience || "Your work experience"}</p>
          <h2>Skills</h2>
          <p>{resumeData.skills || "Skills List"}</p>
        </div>
        <button className="btn-download" onClick={handleDownload}>Download as PDF</button>
      </div>
    );
  };
  export default PreviewForm;