import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-32 px-6 md:px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto flex flex-col">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-cursive text-vintage-brown mb-2">what i can do...</h2>
            <p className="text-vintage-brown/60 font-sans italic text-sm md:text-base tracking-tight">a selection of my favorite projects.</p>
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
              className={`group block transition-transform duration-500 ease-out hover:scale-[1.02] ${
                index % 2 === 0 ? "md:-rotate-1" : "md:rotate-1"
              } hover:rotate-0`}
            >
              <div className="bg-white p-4 md:p-6 rounded-4xl shadow-xl shadow-vintage-brown/5 border border-vintage-brown/5 h-full flex flex-col grain-overlay">
                <div className="relative aspect-square overflow-hidden bg-vintage-sand/20 rounded-2xl mb-6">
                  <div 
                    className="w-full h-full bg-cover bg-center smooth-transition group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-vintage-brown/0 group-hover:bg-vintage-brown/10 smooth-transition" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-serif text-vintage-brown group-hover:text-vintage-orange smooth-transition mb-2">
                  {project.title}
                </h3>
                
                <p className="text-vintage-brown/70 font-sans tracking-tight mb-4 grow italic text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-vintage-sand/10">
                  {project.tech?.map((t) => (
                    <span key={t} className="px-3 py-1 bg-vintage-sand/20 text-vintage-brown/60 rounded-full text-[10px] uppercase tracking-widest font-bold">
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
