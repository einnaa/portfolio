import { Link } from "react-router-dom";
import heroDesign from "../assets/hero-design.png";
import downArrow from "../assets/down-arrow.png";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 py-24 md:py-32">
      <div className="absolute inset-0 bg-linear-to-br from-vintage-orange/5 to-vintage-bg z-0" />
      
      <div className="z-10 w-full max-w-xs md:max-w-lg md:top-10 mx-auto animate-fade-in">
        <div className="w-full overflow-hidden">
          <img 
            src={heroDesign} 
            alt="Hero Design" 
            className="w-full h-auto grayscale-20 hover:grayscale-0 smooth-transition block"
          />
        </div>
      </div>

      <div className="max-w-4xl text-center z-10 animate-fade-in">
        <h1 className="text-lg sm:text-lg md:text-8xl text-vintage-black font-cursive">
          Hi, this is Einna!
        </h1>

        <p className="text-lg md:text-2xl font-sans font-bold text-vintage-black mb-1 md:mb-2 max-w-2xl mx-auto leading-relaxed">
          I build and support user-focused digital projects.
        </p>
        <p className="text-xs md:text-sm font-sans text-vintage-black mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
          UI/UX Design · Front-end Development · Technical Writing · Project Coordination
        </p>
      </div>

      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10 animate-fade-in">
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group flex flex-col items-center gap-3"
        >
          <div className="w-32 h-32 md:w-32 md:h-32 flex items-center justify-center smooth-transition">
            <img 
              src={downArrow} 
              alt="Scroll Down" 
              className="w-32 h-32 md:w-32 md:h-32 object-contain opacity-30 group-hover:opacity-100 animate-bounce smooth-transition"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
