import { Link, useLocation } from "react-router-dom";
import ribbon from "../assets/ribbon.png";

export default function NavBar() {
  const location = useLocation();

  const slowScrollTo = (targetY, duration) => {
    const startY = window.pageYOffset;
    const diff = targetY - startY;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const time = timestamp - start;
      const percent = Math.min(time / duration, 1);
      
      // Easing function: easeInOutCubic
      const ease = percent < 0.5 
        ? 4 * percent * percent * percent 
        : 1 - Math.pow(-2 * percent + 2, 3) / 2;

      window.scrollTo(0, startY + diff * ease);

      if (time < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const handleScroll = (e, id) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        // Set offset to 0 because we want the section padding to serve as the visual gap.
        // If the navbar is ~80px and the section has pt-32 (128px), the remaining gap is a perfect 48px.
        const targetY = element.getBoundingClientRect().top + window.pageYOffset;
        slowScrollTo(targetY, 1200);
      }
    }
  };

  return (
    <nav className="sticky top-0 left-0 w-full z-50 mix-blend-difference pointer-events-none">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center text-white pointer-events-auto">
        <Link to="/" className="flex items-center gap-2 md:gap-3 group">
          <img src={ribbon} alt="" className="w-5 md:w-6 h-auto transition-all duration-700 group-hover:scale-110 invert" />
          <span className="text-base md:text-md font-sans font-bold whitespace-nowrap lowercase tracking-widest group-hover:text-white/80 smooth-transition">
            einna joy
          </span>
        </Link>
        
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex items-center gap-8 text-sm font-sans font-semibold tracking-widest lowercase">
            <a 
              href="#projects" 
              onClick={(e) => handleScroll(e, "projects")}
              className="hover:text-white/80 smooth-transition border-b border-transparent hover:border-white/20 pb-1"
            >
              projects
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleScroll(e, "about")}
              className="hover:text-white/80 smooth-transition border-b border-transparent hover:border-white/20 pb-1"
            >
              about me
            </a>
            <a 
              href="#certificates" 
              onClick={(e) => handleScroll(e, "certificates")}
              className="hover:text-white/80 smooth-transition border-b border-transparent hover:border-white/20 pb-1"
            >
              certifications
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, "contact")}
              className="hover:text-white/80 smooth-transition border-b border-transparent hover:border-white/20 pb-1"
            >
              contact
            </a>
          </div>
          
          <a 
            href="mailto:einnacadagat@gmail.com"
            className="px-6 py-2 bg-white text-black font-sans font-bold rounded-3xl hover:bg-white/90 smooth-transition shadow-sm text-xs md:text-sm uppercase tracking-tighter"
          >
            Email
          </a>
        </div>
      </div>
    </nav>
  );
}
