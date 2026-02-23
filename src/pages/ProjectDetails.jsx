import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react"; // Added useState
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const [hoveredImg, setHoveredImg] = useState(null); // Track hovered image
  const project = projects.find((p) => p.id === parseInt(id));

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return (
    <div className="min-h-screen bg-vintage-bg flex items-center justify-center font-serif text-3xl text-vintage-brown">
      Project not found...
    </div>
  );

  return (
    <div className="min-h-screen bg-vintage-bg relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <nav className="fixed top-0 left-0 w-full z-50 p-8 flex justify-between items-center mix-blend-difference">
        <Link to="/" className="text-vintage-bg font-serif text-lg md:text-xl hover:text-vintage-accent smooth-transition flex items-center gap-3">
          <span className="text-2xl">&larr;</span> home
        </Link>
        <Link to="/all-projects" className="text-vintage-bg font-serif text-lg md:text-xl hover:text-vintage-accent smooth-transition flex items-center gap-3">
          archives <span className="text-2xl">&rarr;</span>
        </Link>
      </nav>

      <main className="max-w-8xl mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-start animate-fade-in transition-all duration-700">
          {/* Column 1: Image Gallery - Scrolls naturally with the page */}
          <div className="order-2 lg:order-1 lg:col-span-6 space-y-12 md:space-y-24 lg:pr-8">
            {(project.images || [project.image]).map((img, idx) => (
              <div 
                key={idx} 
                className="group relative aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-vintage-brown/10 border border-vintage-brown/5 bg-vintage-cream/10 cursor-zoom-in"
                onMouseEnter={() => setHoveredImg(img)} // Trigger pop-up
                onMouseLeave={() => setHoveredImg(null)} // Hide pop-up
              >
                <img 
                  src={img} 
                  alt={`${project.title} screenshot ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
              </div>
            ))}
          </div>

          {/* Column 2: title and proj description - Sticky */}
          <div className="order-1 lg:order-2 lg:col-span-3 space-y-4 lg:sticky lg:top-36 h-fit">
            <div>
              <div className="font-cursive text-2xl text-vintage-accent mb-4 -rotate-1 inline-block">
                {project.category}
              </div>
              <h1 className="text-3xl md:text-5xl font-serif text-vintage-brown mb-8 tracking-tight leading-tight italic uppercase">
                {project.title}
              </h1>
              <div className="h-px w-20 bg-vintage-brown/80 mb-10" />
              <p className="text-md md:text-lg text-vintage-brown/80 font-sans leading-relaxed text-justify">
                {project.description}
              </p>
            </div>

            
            <div className="flex flex-col gap-3 pt-6">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer"
                className="w-full text-center px-8 py-4 bg-vintage-brown text-vintage-bg rounded-2xl hover:bg-vintage-accent smooth-transition shadow-lg font-bold uppercase tracking-widest text-sm"
              >
                View Project
              </a>
            </div>
          </div>
          
          {/* Column 3: overview - Sticky */}
          <div className="order-3 lg:col-span-3 space-y-12 lg:sticky lg:top-36 h-fit">
            <div className="p-8 bg-white/40 backdrop-blur-md rounded-4xl border border-vintage-cream/10 shadow-2xl shadow-vintage-brown/5">
              <h3 className="text-lg font-serif text-vintage-brown mb-8 border-b border-vintage-brown/5 pb-4">Overview</h3>
              <div className="space-y-8">
                <div>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-vintage-brown/40 mb-2 block font-bold">Timeline</span>
                  <p className="text-base font-serif italic text-vintage-brown">{project.timeline || "2024"}</p>
                </div>
                <div>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-vintage-brown/40 mb-2 block font-bold">Role</span>
                  <p className="text-base font-serif italic text-vintage-brown">{project.role || "Designer & Dev"}</p>
                </div>
                <div>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-vintage-brown/40 mb-2 block font-bold">Technologies</span>
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
                    {project.tech?.map((t) => (
                      <span 
                      key={t} 
                      className="px-3 py-1 bg-vintage-brown text-vintage-bg rounded-full text-[8px] uppercase tracking-widest font-bold"
                      >
                      {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4">
              <span className="text-[9px] uppercase text-vintage-brown/20 mb-3 block font-bold tracking-[0.3em]">Next</span>
              <Link to={`/projects/${project.id === projects.length ? 1 : project.id + 1}`} className="group block">
                <h4 className="text-xl font-serif text-vintage-brown group-hover:text-vintage-accent transition-colors duration-500 italic border-b border-transparent group-hover:border-vintage-accent/20 pb-1">
                  {projects[project.id % projects.length].title} &rarr;
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Hover Modal Overlay */}
      <div 
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-vintage-black/40 backdrop-blur-md pointer-events-none transition-all duration-500 ${
          hoveredImg ? "opacity-100" : "opacity-0 invisible"
        }`}
      >
        <div className={`relative max-w-5xl w-[90%] transition-all duration-500 transform ${
          hoveredImg ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}>
          <img 
            src={hoveredImg} 
            className="w-full h-auto rounded-3xl shadow-2xl border border-white/20"
            alt="Preview"
          />
        </div>
      </div>

      <footer className="py-20 md:py-32 border-t border-vintage-brown/5 text-center px-6">
        <Link to="/" className="inline-block font-serif text-xl md:text-2xl text-vintage-brown/30 hover:text-vintage-brown transition-colors duration-500">
          einna joy cadagat &mdash; portfolio
        </Link>
      </footer>
    </div>
  );
}
