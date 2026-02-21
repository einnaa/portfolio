import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects"  className="py-12 md:py-20 px-6 md:px-4 scroll-mt-20 bg-vintage-bg">
      <div className="max-w-350 mx-auto flex flex-col">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 gap-4">
          <div>
            <h2 className="text-md md:text-xl font-sans uppercase font-bold text-vintage-brown">what i can do</h2>
          </div>
          <Link to="/all-projects" className="text-vintage-brown font-cursive italic border-b border-vintage-brown/30 hover:border-vintage-brown smooth-transition pb-1 text-sm md:text-2xl">
            view all my works...
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-10">
          {projects.slice(0, 3).map((project) => (
            <div 
              key={project.id} 
              className="group block transition-transform duration-700 ease-out hover:scale-[1.02]"
            >
              <div className="bg-transparent group-hover:bg-white/40 backdrop-blur-none group-hover:backdrop-blur-md p-5 md:p-6 rounded-4xl shadow-none group-hover:shadow-xl group-hover:shadow-vintage-brown/5 border border-transparent h-full flex flex-col grain-overlay overflow-hidden transition-all duration-500">
                <Link to={`/projects/${project.id}`} className="relative aspect-3/2 overflow-hidden rounded-xl mb-6 border border-vintage-brown/5 block">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-all duration-1000 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-vintage-brown/10 opacity-0 group-hover:opacity-100 smooth-transition" />
                </Link>
                
                <div className="flex flex-col gap-1 mb-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold text-vintage-accent uppercase tracking-[0.3em]">{project.category}</span>
                  </div>
                  <Link to={`/projects/${project.id}`} className="hover:text-vintage-accent smooth-transition">
                    <h3 className="text-xl md:text-2xl font-sans text-vintage-brown leading-tight">
                      {project.title}
                    </h3>
                  </Link>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-vintage-accent/10">
                  {project.tech?.map((t) => (
                    <span key={t} className="px-3 py-1 bg-vintage-brown/5 text-vintage-brown/40 rounded-full text-[9px] uppercase tracking-widest font-bold border border-vintage-brown/10 group-hover:bg-vintage-accent/10 group-hover:text-vintage-brown/80 transition-colors duration-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.slice(3, 5).map((project) => (
            <div 
              key={project.id} 
              className="group block transition-transform duration-700 ease-out hover:scale-[1.01]"
            >
              <div className="bg-transparent group-hover:bg-white/40 backdrop-blur-none group-hover:backdrop-blur-md p-5 md:p-8 rounded-4xl shadow-none group-hover:shadow-xl group-hover:shadow-vintage-brown/5 border border-transparent h-full flex flex-col grain-overlay overflow-hidden transition-all duration-500">
                <Link to={`/projects/${project.id}`} className="relative aspect-video overflow-hidden rounded-xl mb-6 border border-vintage-brown/5 block">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-all duration-1000 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-vintage-brown/10 opacity-0 group-hover:opacity-100 smooth-transition" />
                </Link>
                
                <div className="flex flex-col gap-1 mb-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold text-vintage-accent uppercase tracking-[0.3em]">{project.category}</span>
                  </div>
                  <Link to={`/projects/${project.id}`} className="hover:text-vintage-accent smooth-transition">
                    <h3 className="text-xl md:text-3xl font-sans text-vintage-brown leading-tight">
                      {project.title}
                    </h3>
                  </Link>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-vintage-accent/10">
                  {project.tech?.map((t) => (
                    <span key={t} className="px-3 py-1 bg-vintage-brown/5 text-vintage-brown/40 rounded-full text-[9px] uppercase tracking-widest font-bold border border-vintage-brown/10 group-hover:bg-vintage-accent/10 group-hover:text-vintage-brown/80 transition-colors duration-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
