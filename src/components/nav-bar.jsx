import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="fixed top-3 md:top-6 left-1/2 -translate-x-1/2 w-[94%] md:w-[92%] max-w-6xl z-50 px-4 md:px-8 py-3 md:py-4 flex justify-between items-center rounded-full">
      <Link to="/" className="flex items-center gap-2 md:gap-3 group">
        <div className="w-6 h-6 md:w-8 md:h-8 bg-zinc-400 rounded-sm smooth-transition group-hover:bg-vintage-brown" />
        <span className="text-base md:text-md font-sans font-bold text-vintage-brown tracking-tighter whitespace-nowrap">
          Einna Joy
        </span>
      </Link>
      
      <div className="flex items-center gap-4 md:gap-8">
        <div className="hidden md:flex items-center gap-8 text-sm font-sans font-semibold text-vintage-brown">
          <a href="#projects" className="hover:opacity-60 smooth-transition border-b border-vintage-brown/0 hover:border-vintage-brown/40 pb-0.5">Projects</a>
          <a href="#about" className="hover:opacity-60 smooth-transition border-b border-vintage-brown/0 hover:border-vintage-brown/40 pb-0.5">About Me</a>
        </div>
        
        <a 
          href="mailto:einna@example.com"
          className="px-4 md:px-6 py-1.5 md:py-2 bg-vintage-brown text-white font-sans font-bold rounded-full hover:opacity-90 smooth-transition shadow-sm text-xs md:text-sm"
        >
          Email
        </a>
      </div>
    </nav>
  );
}
