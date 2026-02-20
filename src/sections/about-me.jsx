import { Link } from "react-router-dom";
import aboutMeDesign from "../assets/aboutme-design.png";

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
    <section id="about" className="md:py-32 px-6 bg-vintage-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Skills Header Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 md:mb-24">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="text-center md:text-left">
              <h3 className="font-sans font-bold text-vintage-brown mb-4 text-sm md:text-base uppercase tracking-wider">{cat.title}</h3>
              <ul className="space-y-1">
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
          <div className="w-full max-w-sm mb-8 animate-fade-in">
            <img 
              src={aboutMeDesign} 
              alt="About Me Design" 
              className="w-full h-auto grayscale-20 hover:grayscale-0 smooth-transition"
            />
          </div>

          <div className="space-y-4 animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-cursive text-vintage-brown italic mb-1">about me</h2>
              <h4 className="text-lg md:text-xl font-sans font-bold text-vintage-brown uppercase tracking-widest">einna joy cadagat</h4>
            </div>

            <div className="space-y-6 text-vintage-brown font-sans text-base md:text-lg leading-relaxed max-w-2xl mx-auto tracking-tight">
              <p>
                hi! i'm einna, currently a BSIT student with a passion for involving myself in tech ideas.
              </p>
              <p>
                my love for art evolved into creating tech design and with my understanding and years of experience reading hundreds of novels also writing about tech.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
