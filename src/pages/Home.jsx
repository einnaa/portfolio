import { useEffect } from "react";
import Hero from "../sections/hero";
import Projects from "../sections/projects";
import AboutMe from "../sections/about-me";
import Certificates from "../sections/certificates";
import Contact from "../sections/contact";
import NavBar from "../components/nav-bar";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      observerOptions
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <NavBar />
      <Hero />
      <div className="reveal">
        <Projects />
      </div>
      <div className="reveal">
        <AboutMe />
      </div>
      <div className="reveal">
        <Certificates />
      </div>
      <div className="reveal">
        <Contact />
      </div>
    </div>
  );
}
