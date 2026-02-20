import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <div>Project not found</div>;

  return (
    <div className="min-h-screen bg-vintage-bg">
      <nav className="p-8">
        <Link to="/" className="text-vintage-brown font-serif italic hover:text-vintage-orange smooth-transition">
          &larr; Back to Portfolio
        </Link>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-20">
          <h1 className="text-6xl font-serif text-vintage-brown mb-4 tracking-tighter">
            {project.title}
          </h1>
          <p className="text-xl text-vintage-brown/60 italic font-sans italic">
            {project.description}
          </p>
        </header>

        <div className="aspect-[16/9] w-full bg-vintage-sand/30 rounded-sm mb-20 grain-overlay overflow-hidden shadow-xl">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-vintage-brown">
          <div className="md:col-span-2 space-y-8 text-lg leading-relaxed font-sans">
            <h3 className="text-2xl font-serif">Project Background</h3>
            <p>
              This project was developed with a focus on blending functional modern tech with intuitive user experience. {project.title} represents a core exploration of how design impacts usability.
            </p>
            <div className="flex gap-4">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-2 bg-vintage-brown text-vintage-bg rounded-sm hover:bg-vintage-orange smooth-transition"
              >
                View Repository
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-serif">Details</h3>
            <div>
              <p className="text-xs tracking-widest uppercase opacity-40 mb-1">Year</p>
              <p>2026</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase opacity-40 mb-1">Role</p>
              <p>Full-stack Dev</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
