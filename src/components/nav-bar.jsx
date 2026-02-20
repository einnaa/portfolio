import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (isLocked) return;
      
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY, isLocked]);

  const handleNavClick = () => {
    setIsLocked(true);
    setIsVisible(true);
    // Unlock after smooth scroll completes (approx 1s)
    setTimeout(() => {
      setIsLocked(false);
    }, 1000);
  };

  return (
    <div className="fixed top-3 md:top-10 left-1/2 -translate-x-1/2 w-[94%] md:w-[92%] max-w-6xl z-50 pointer-events-none">
      <nav className={`w-full px-4 md:px-8 py-3 md:py-4 flex justify-between items-center rounded-full bg-white/40 backdrop-blur-xl border border-black/5 shadow-2xl shadow-black/5 pointer-events-auto transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) ${
        isVisible 
          ? "translate-y-0 opacity-100" 
          : "-translate-y-24 opacity-0"
      }`}>
        <Link to="/" className="flex items-center gap-2 md:gap-3 group">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-black rounded-sm smooth-transition group-hover:scale-95" />
          <span className="text-base md:text-md font-sans font-bold text-black tracking-tighter whitespace-nowrap">
            Einna Joy
          </span>
        </Link>
        
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex items-center gap-8 text-sm font-sans font-semibold text-black underline-offset-8 underline decoration-black/20 hover:decoration-black">
            <a href="#projects" onClick={handleNavClick} className="smooth-transition">Projects</a>
            <a href="#about" onClick={handleNavClick} className="smooth-transition">About Me</a>
          </div>
          
          <a 
            href="mailto:einna.com"
            className="px-4 md:px-6 py-1.5 md:py-2 bg-black text-white font-sans font-bold rounded-full hover:bg-zinc-800 smooth-transition shadow-sm text-xs md:text-sm"
          >
            Email
          </a>
        </div>
      </nav>
    </div>
  );
}
