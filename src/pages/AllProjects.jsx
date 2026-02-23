import { Link } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "../data/projects";

export default function AllProjects() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-vintage-bg min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
 
      <div className="pt-10 pb-32 px-6 max-w-7xl mx-auto relative z-10">
        <header className="mb-32 animate-fade-in flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-9xl font-serif text-vintage-brown tracking-tighter mb-8 italic">Archives.</h1>
            <p className="text-xl md:text-2xl font-serif text-vintage-brown/60 leading-relaxed italic">
              "A comprehensive collection of various digital works, research experiments, and design explorations crafted over the years."
            </p>
          </div>
          <div className="hidden md:block font-cursive text-4xl text-vintage-accent -rotate-6 mb-4">vol. 2023-2026</div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-8 animate-fade-in">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              to={`/projects/${project.id}`}
              className="group block transition-all duration-700 ease-in-out"
            >
              <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl shadow-xl shadow-vintage-brown/5 border border-vintage-cream/10 h-full flex flex-col relative overflow-hidden group-hover:bg-white/60 transition-colors duration-500">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                
                <div className="relative aspect-4/3 overflow-hidden rounded-xl mb-8 border border-vintage-brown/5 shadow-inner bg-vintage-cream/5">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-vintage-brown/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif text-vintage-brown group-hover:text-vintage-accent transition-colors duration-500 leading-tight">
                    {project.title}
                  </h3>
                  <span className="text-vintage-accent font-serif italic text-xs tracking-widest opacity-40 uppercase">{project.category}</span>
                </div>
                
                <p className="text-vintage-brown/70 font-sans tracking-tight mb-8 grow text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-vintage-brown/5">
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
        
        <div className="mt-40 pt-16 border-t border-vintage-brown/5">
          <Link to="/" className="inline-flex items-center gap-4 text-vintage-brown font-serif italic group">
            <span className="text-2xl group-hover:-translate-x-2 transition-transform duration-500">&larr;</span>
            <span className="text-3xl border-b border-transparent group-hover:border-vintage-brown/30 transition-all duration-500">back to home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
