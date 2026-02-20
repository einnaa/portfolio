import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <div className="min-h-screen bg-vintage-bg flex items-center justify-center font-cursive text-3xl">Project not found...</div>;

  return (
    <div className="min-h-screen bg-vintage-bg grain-overlay">
      <nav className="p-8 max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-vintage-brown font-cursive text-xl hover:text-vintage-orange smooth-transition">
          &larr; back to home
        </Link>
        <Link to="/all-projects" className="text-vintage-brown font-cursive text-xl hover:text-vintage-orange smooth-transition">
          view all &rarr;
        </Link>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-24">
        <header className="mb-16 md:mb-24 animate-fade-in">
          <h1 className="text-5xl md:text-8xl font-serif text-vintage-brown mb-6 tracking-tighter leading-tight">
            {project.title}
          </h1>
          <p className="text-xl md:text-3xl text-vintage-brown/60 font-sans italic max-w-3xl leading-snug">
            {project.description}
          </p>
        </header>

        <div className="aspect-video w-full bg-white p-4 md:p-8 rounded-4xl mb-16 md:mb-24 grain-overlay overflow-hidden shadow-2xl shadow-vintage-brown/10 border border-vintage-brown/5 animate-fade-in">
          <div className="w-full h-full bg-vintage-sand/20 rounded-2xl overflow-hidden">
            <div 
              className="w-full h-full bg-cover bg-center grayscale-20 hover:grayscale-0 smooth-transition"
              style={{ backgroundImage: `url(${project.image})` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 text-vintage-brown animate-fade-in overflow-visible">
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif">Project Background</h3>
              <p className="text-lg md:text-xl leading-relaxed font-sans text-vintage-brown/80">
                This project was developed with a focus on blending functional modern tech with intuitive user experience. {project.title} represents a core exploration of how design impacts usability.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer"
                className="px-10 py-4 bg-vintage-brown text-vintage-bg rounded-full hover:bg-vintage-orange smooth-transition shadow-lg shadow-vintage-brown/20 font-bold uppercase tracking-widest text-xs"
              >
                View Repository
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer"
                className="px-10 py-4 border border-vintage-brown text-vintage-brown rounded-full hover:bg-vintage-brown hover:text-vintage-bg smooth-transition font-bold uppercase tracking-widest text-xs"
              >
                Live Demo
              </a>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-10 rounded-4xl border border-vintage-brown/5 shadow-xl shadow-vintage-brown/5 space-y-10 self-start">
            <div>
              <h3 className="text-2xl font-serif mb-6">Details</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase opacity-40 mb-2 font-bold">Year</p>
                  <p className="text-lg font-sans">2026</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase opacity-40 mb-2 font-bold">Role</p>
                  <p className="text-lg font-sans">Full-stack Dev</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase opacity-40 mb-2 font-bold">Stack</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech?.map((t) => (
                      <span key={t} className="px-3 py-1 bg-vintage-sand/30 text-vintage-brown/80 rounded-full text-[10px] uppercase tracking-widest font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
