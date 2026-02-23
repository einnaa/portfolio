import { Link } from "react-router-dom";

export default function AboutMe() {
  const skillCategories = [
    {
      title: "Design",
      skills: ["Figma", "Affinity", "Ibis Paint X"]
    },
    {
      title: "Development",
      skills: ["HTML/CSS", "JavaScript", "Tailwind CSS", "Bootstrap", "React JS", "Git"]
    },
    {
      title: "Technical Writing",
      skills: ["MS Word", "Google Docs", "Notion"]
    },
    {
      title: "Project Management",
      skills: ["Notion", "Team Communication", "Task Organization"]
    }
  ];

  return (
    <section id="about" className="md:py-24 px-6 bg-vintage-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Skills Header Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 md:mb-16">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="">
              <h3 className="font-sans font-bold text-vintage-brown mb-4 text-sm md:text-base uppercase tracking-wider text-left">{cat.title}</h3>
              <ul className="space-y-1 text-right">
                {cat.skills.map((skill) => (
                  <li key={skill} className="text-vintage-brown/70 font-sans text-xs md:text-sm tracking-tight leading-snug">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <div className="w-full max-w-lg mb-2 animate-fade-in">
            <img 
              src="/assets/aboutme-design.png" 
              alt="About Me Design" 
              className="w-full h-auto grayscale-20 hover:grayscale-0 smooth-transition"
            />
          </div>

          <div className="space-y-4 animate-fade-in">
            <div className="mb-2">
              <h2 className="text-3xl md:text-4xl font-cursive text-vintage-brown italic mb-1">about me</h2>
              <h4 className="text-lg md:text-xl font-sans font-bold text-vintage-brown uppercase tracking-widest">einna joy cadagat</h4>
            </div>

            <div className="space-y-6 text-vintage-brown font-sans text-sm md:text-md leading-relaxed max-w-6xl mx-auto tracking-tight">
              <p>
                Hi, I’m Einna — a BSIT student with a strong passion for building meaningful tech solutions and turning ideas into functional, well-designed digital experiences.
                My background in art shaped my eye for detail and design, which naturally evolved into creating user-centered interfaces, while years of immersing myself in novels strengthened my creativity, critical thinking, and communication skills.
                I combine logic and creativity to develop systems that are not only efficient but also thoughtfully crafted and engaging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
