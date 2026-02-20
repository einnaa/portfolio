import { Link } from "react-router-dom";
import heroDesign from "../assets/hero-design.png";

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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3 bg-vintage-brown text-vintage-bg rounded-sm hover:bg-vintage-orange smooth-transition shadow-sm text-center"
          >
            Explore Works
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3 border border-vintage-brown text-vintage-brown rounded-sm hover:bg-vintage-brown hover:text-vintage-bg smooth-transition text-center"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
