import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";

export default function SocialLinks() {
  const socials = [
    { name: "github", url: "https://github.com/einnaa", icon: <Github size={18} /> },
    { name: "linkedin", url: "https://www.linkedin.com/in/einna-joy-01267a36a/", icon: <Linkedin size={18} /> },
    { name: "instagram", url: "https://www.instagram.com/eiaynna/", icon: <Instagram size={18} /> },
    { name: "facebook", url: "https://www.facebook.com/einnn.j/", icon: <Facebook size={18} /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 z-50 mix-blend-difference pointer-events-none p-6 md:p-12">
      <div className="flex flex-row gap-6 md:gap-8 pointer-events-auto">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 smooth-transition border-b border-transparent hover:border-white/20 pb-1"
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
