import Hero from "../sections/hero";
import Projects from "../sections/projects";
import AboutMe from "../sections/about-me";
import Contact from "../sections/contact";
import NavBar from "../components/nav-bar";

export default function Home() {
  return (
    <div className="relative">
      <NavBar />
      <Hero />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}
