import {React} from "react";
import {useForm} from "react-hook-form";
// import "./styles.css";

const ResumeForm = ({ setResumeData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    setResumeData(data);
    toast.success("Resume updated successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h2>Personal Information</h2>
      <input {...register("name", { required: true })} placeholder="Full Name" className="input" />
      {errors.name && <p className="error">Name is required</p>}
      
      <input {...register("email", { required: true })} placeholder="Email" className="input" />
      {errors.email && <p className="error">Email is required</p>}
      
      <input {...register("phone")} placeholder="Phone Number" className="input" />
      
      <h2>Education</h2>
      <input {...register("degree")} placeholder="Degree" className="input" />
      <input {...register("university")} placeholder="University" className="input" />
      
      <h2>Experience</h2>
      <textarea {...register("experience")} placeholder="Work Experience" className="textarea" />
      
      <h2>Skills</h2>
      <input {...register("skills")} placeholder="Skills (comma-separated)" className="input" />
      
      <button type="submit" className="btn-submit">Generate Resume</button>
    </form>
  );
};
export default ResumeForm;