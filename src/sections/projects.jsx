import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects"  className="py-16 md:py-32 px-6 md:px-4 scroll-mt-20 bg-vintage-bg">
      <div className="max-w-6xl mx-auto flex flex-col">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-cursive text-vintage-brown mb-2">what i can do...</h2>
          </div>
          <Link to="/all-projects" className="text-vintage-brown font-sans italic border-b border-vintage-brown/30 hover:border-vintage-brown smooth-transition pb-1 text-sm md:text-base">
            All Works...
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.slice(0, 4).map((project, index) => (
            <Link 
              key={project.id} 
              to={`/projects/${project.id}`}
              className={`group block transition-transform duration-700 ease-out hover:scale-[1.01] ${
                index % 2 === 0 ? "md:-rotate-1" : "md:rotate-1"
              } hover:rotate-0`}
            >
              <div className="bg-white/40 backdrop-blur-md p-6 md:p-8 rounded-[2.5rem] shadow-2xl shadow-vintage-brown/5 border border-vintage-cream/20 h-full flex flex-col grain-overlay overflow-hidden">
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl mb-8 border border-vintage-brown/5">
                  <div 
                    className="w-full h-full bg-cover bg-center grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-vintage-brown/10 opacity-0 group-hover:opacity-100 smooth-transition" />
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl md:text-3xl font-serif text-vintage-brown leading-tight">
                    {project.title}
                  </h3>
                  <span className="text-[10px] font-bold text-vintage-accent uppercase tracking-[0.3em] pt-2">{project.category}</span>
                </div>
                
                <p className="text-vintage-brown/60 font-serif italic tracking-tight mb-8 grow text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-vintage-brown/10">
                  {project.tech?.map((t) => (
                    <span key={t} className="px-3 py-1 bg-vintage-brown/5 text-vintage-brown/40 rounded-full text-[9px] uppercase tracking-widest font-bold border border-vintage-brown/5 group-hover:bg-vintage-brown/10 group-hover:text-vintage-brown/60 transition-colors duration-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
