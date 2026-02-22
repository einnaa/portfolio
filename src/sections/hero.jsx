import { Link } from "react-router-dom";

export default function Hero() {
  const slowScrollTo = (targetY, duration) => {
    const startY = window.pageYOffset;
    const diff = targetY - startY;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const time = timestamp - start;
      const percent = Math.min(time / duration, 1);
      
      // Easing function: easeOutQuart
      const ease = 1 - Math.pow(1 - percent, 4);

      window.scrollTo(0, startY + diff * ease);

      if (time < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 1; // Matching NavBar offset
      const targetY = element.getBoundingClientRect().top + window.pageYOffset - offset;
      slowScrollTo(targetY, 1200);
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 py-24 md:py-32 bg-linear-to-b from-vintage-orange/6 to-vintage-bg">
      <div className="z-10 w-full max-w-xs md:max-w-lg md:top-10 mx-auto animate-fade-in">
        <div className="w-full overflow-hidden">
          <img 
            src="/assets/hero-design.png" 
            alt="Hero Design" 
            className="w-full h-auto grayscale-20 hover:grayscale-0 smooth-transition block"
          />
        </div>
      </div>

      <div className="max-w-4xl text-center z-10 animate-fade-in">
        <h1 className="text-4xl sm:text-7xl md:text-8xl text-vintage-black font-cursive">
          Hi, this is Einna!
        </h1>

        <p className="text-xs sm:text-xl md:text-2xl font-sans font-bold text-vintage-black mb-1 md:mb-2 max-w-2xl mx-auto leading-relaxed">
          I build and support user-focused digital projects.
        </p>
        <p className="text-[10px] sm:text-xs md:text-sm font-sans text-vintage-black mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
          UI/UX Design · Front-end Development · Technical Writing · Project Coordination
        </p>
      </div>

      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10 animate-fade-in">
      <a
          href="#projects"
          onClick={(e) => handleScroll(e, "projects")}
          className="group flex flex-col items-center gap-3"
        >
        <div className="w-32 h-32 md:w-32 md:h-32 flex items-center justify-center smooth-transition">
            <img 
              src="/assets/down-arrow.png"
              alt="Scroll Down" 
              className="w-32 h-32 md:w-32 md:h-32 object-contain opacity-30 group-hover:opacity-100 animate-bounce smooth-transition"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
