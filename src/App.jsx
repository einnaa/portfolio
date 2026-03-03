import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import AllProjects from "./pages/AllProjects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
