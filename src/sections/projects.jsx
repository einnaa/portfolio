import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 px-6 md:px-4">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-vintage-brown mb-2">Featured Work</h2>
            <p className="text-vintage-brown/70 italic font-sans">Selected projects & explorations</p>
          </div>
          <Link to="/all-projects" className="text-vintage-orange font-sans border-b border-vintage-orange/30 hover:border-vintage-orange smooth-transition pb-1 text-sm md:text-base">
            All Works...
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.slice(0, 4).map((project) => (
            <Link 
              key={project.id} 
              to={`/projects/${project.id}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-vintage-sand/30 rounded-sm mb-6 grain-overlay">
                <div 
                  className="w-full h-full bg-cover bg-center smooth-transition group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-vintage-brown/0 group-hover:bg-vintage-brown/5 smooth-transition" />
              </div>
              <h3 className="text-2xl font-serif text-vintage-brown group-hover:text-vintage-orange smooth-transition mb-2">
                {project.title}
              </h3>
              <p className="text-vintage-brown/60 font-sans tracking-tight">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
