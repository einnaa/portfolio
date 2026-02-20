import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import NavBar from "../components/nav-bar";

export default function AllProjects() {
  return (
    <div className="bg-vintage-bg min-h-screen">
      <NavBar />
      <div className="pt-32 pb-24 px-4 max-w-6xl mx-auto">
        <header className="mb-20">
          <h1 className="text-6xl font-serif text-vintage-brown mb-4">Complete Archives</h1>
          <p className="text-vintage-brown/60 italic font-sans italic">A collection of various works and experiments.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              to={`/projects/${project.id}`}
              className="group block"
            >
              <div className="relative aspect-square overflow-hidden bg-vintage-sand/30 rounded-sm mb-4 grain-overlay">
                <div 
                  className="w-full h-full bg-cover bg-center smooth-transition group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              </div>
              <h3 className="text-xl font-serif text-vintage-brown group-hover:text-vintage-orange smooth-transition">
                {project.title}
              </h3>
            </Link>
          ))}
        </div>
        
        <div className="mt-20">
          <Link to="/" className="text-vintage-brown font-serif italic hover:text-vintage-orange smooth-transition">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
