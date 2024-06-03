import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home, About, Lab, Teacher, Patent, Thesis, PopularScience, Plan, Compete, Activity } from "./page";
import { Error404 } from './page/404';

function LabWeb() {
  return (
    <Router>
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
    </Router>
  )
}

export default LabWeb;
