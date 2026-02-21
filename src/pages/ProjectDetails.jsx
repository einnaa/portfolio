import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return (
    <div className="min-h-screen bg-vintage-bg flex items-center justify-center font-serif text-3xl text-vintage-brown">
      Project not found...
    </div>
  );

  return (
    <div className="min-h-screen bg-vintage-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <nav className="fixed top-0 left-0 w-full z-50 p-8 flex justify-between items-center mix-blend-difference">
        <Link to="/" className="text-vintage-bg font-serif text-lg md:text-xl hover:text-vintage-accent smooth-transition flex items-center gap-3">
          <span className="text-2xl">&larr;</span> index
        </Link>
        <Link to="/all-projects" className="text-vintage-bg font-serif text-lg md:text-xl hover:text-vintage-accent smooth-transition flex items-center gap-3">
          archives <span className="text-2xl">&rarr;</span>
        </Link>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
        <header className="mb-24 md:mb-40 animate-fade-in text-center max-w-4xl mx-auto">
          <div className="font-cursive text-3xl md:text-5xl text-vintage-accent mb-8 -rotate-3 block">
            {project.category}
          </div>
          <h1 className="text-6xl md:text-[10rem] font-serif text-vintage-brown mb-12 tracking-tighter leading-none italic uppercase">
            {project.title}
          </h1>
          <div className="h-px w-24 bg-vintage-brown/20 mx-auto mb-12" />
          <p className="text-xl md:text-3xl text-vintage-brown/70 font-serif italic max-w-3xl mx-auto leading-relaxed">
            "{project.description}"
          </p>
        </header>

        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl shadow-vintage-brown/20 border border-vintage-brown/5 animate-fade-in group mb-24 md:mb-40">
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-2000 ease-out group-hover:scale-105"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="absolute inset-0 bg-vintage-brown/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32 items-start animate-fade-in">
          <div className="lg:col-span-8 space-y-20">
            <section className="space-y-8">
              <h3 className="text-4xl md:text-5xl font-serif text-vintage-brown tracking-tight">The Vision.</h3>
              <p className="text-xl md:text-2xl leading-relaxed font-serif text-vintage-brown/80 italic">
                {project.title} was born out of a desire to redefine how we interact with digital tools. Every pixel and interaction was meticulously crafted to ensure a seamless blend of aesthetics and functionality. 
              </p>
              <p className="text-lg md:text-xl leading-relaxed font-sans text-vintage-brown/70">
                The development process involved deep research into user behavior and architectural patterns, resulting in a product that not only looks beautiful but also performs at the highest level.
              </p>
            </section>
            
            <div className="flex flex-wrap gap-8">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer"
                className="px-12 py-5 bg-vintage-brown text-vintage-bg rounded-full hover:bg-vintage-accent smooth-transition shadow-2xl shadow-vintage-brown/20 font-bold uppercase tracking-widest text-xs"
              >
                View Repository
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer"
                className="px-12 py-5 border border-vintage-brown/20 text-vintage-brown rounded-full hover:bg-vintage-brown hover:text-vintage-bg smooth-transition font-bold uppercase tracking-widest text-xs"
              >
                Launch Experience
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-4 sticky top-32 space-y-16">
            <div className="p-8 md:p-12 bg-white/40 backdrop-blur-sm rounded-2xl border border-vintage-cream/10 shadow-2xl shadow-vintage-brown/5">
              <h3 className="text-2xl font-serif text-vintage-brown mb-10 border-b border-vintage-brown/5 pb-4">Overview</h3>
              <div className="space-y-10">
                <div>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-vintage-brown/40 mb-3 block font-bold">Timeline</span>
                  <p className="text-xl font-serif italic text-vintage-brown">2026 / Completed</p>
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-vintage-brown/40 mb-3 block font-bold">Role</span>
                  <p className="text-xl font-serif italic text-vintage-brown">Lead Visual Designer & Developer</p>
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-vintage-brown/40 mb-3 block font-bold">Technologies</span>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech?.map((t) => (
                      <span key={t} className="px-4 py-1.5 bg-vintage-brown text-vintage-bg rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-vintage-accent transition-colors duration-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4">
              <span className="text-[10px] tracking-[0.3em] uppercase text-vintage-brown/20 mb-4 block font-bold">Next Project</span>
              <Link to={`/projects/${project.id === projects.length ? 1 : project.id + 1}`} className="group block">
                <h4 className="text-3xl font-serif text-vintage-brown group-hover:text-vintage-accent transition-colors duration-500 italic border-b border-transparent group-hover:border-vintage-accent/20 pb-2">
                  {projects[project.id % projects.length].title} &rarr;
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-20 md:py-32 border-t border-vintage-brown/5 text-center px-6">
        <Link to="/" className="inline-block font-serif text-xl md:text-2xl text-vintage-brown/30 hover:text-vintage-brown transition-colors duration-500">
          Einna Joy Cadagat &mdash; Portfolio Archives
        </Link>
      </footer>
    </div>
  );
}
