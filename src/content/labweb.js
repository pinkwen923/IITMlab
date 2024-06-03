import { Home, About, Lab, Teacher, Patent, Thesis, PopularScience, Plan, Compete, Activity } from "./page";
import { Error404 } from './page/404';
import { Routes, Route, Navigate } from "react-router-dom";

function LabWeb() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/iitmlab" element={<Navigate to="/" />} />
      <Route path="/lab" element={<Lab />} />
      <Route path="/teacher" element={<Teacher />} />
      <Route path="/patent" element={<Patent />} />
      <Route path="/thesis" element={<Thesis />} />
      <Route path="/popularscience" element={<PopularScience />} />
      <Route path="/plan" element={<Plan />} />
      <Route path="/compete" element={<Compete />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default LabWeb;
