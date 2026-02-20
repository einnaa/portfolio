import { Link } from "react-router-dom";

export default function AboutMe() {
  const skills = ["React", "Tailwind", "Node.js", "Python", "UX Design", "Product Strategy"];

  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-4 bg-vintage-sand/20">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 md:mb-8 text-vintage-brown">About Me</h2>
            <div className="space-y-6 text-lg text-vintage-brown/90 leading-relaxed font-sans">
              <p>
                As a developer, I believe that technology should feel as warm and intuitive as a well-thumbed book. 
              </p>
              <p>
                My work balances modern performance with an aesthetic that honors the past, focusing on clean layouts, thoughtful typography, and a "human" touch.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl md:text-2xl font-serif mb-6 md:mb-8 text-vintage-brown">Core Skills</h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-vintage-orange/10 border border-vintage-orange/20 text-vintage-orange rounded-full text-sm font-sans tracking-wide hover:bg-vintage-orange/20 smooth-transition cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
