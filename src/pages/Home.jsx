import { useState, useEffect } from "react";
import Hero from "../sections/hero";
import Projects from "../sections/projects";
import AboutMe from "../sections/about-me";
import Certificates from "../sections/certificates";
import Contact from "../sections/contact";
import NavBar from "../components/nav-bar";
import SocialLinks from "../components/social-links";
import { projects } from "../data/projects";

// Primary static assets
const STATIC_ASSETS = [
  "/assets/hero-design.png",
  "/assets/aboutme-design.png",
  "/assets/ITS-HTMLandCSS.png",
  "/assets/ITS-Cybersecurity.png",
  "/assets/ITS-NetworkSecurity.png",
  "/assets/ITS-Databases.png",
  "/assets/ribbon.png",
  "/assets/down-arrow.png",
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let mounted = true;
    let loadedCount = 0;

    const preloadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve; // Continue even if one fails
      });
    };

    const loadAll = async () => {
      // Gather all project images
      const projectImages = projects.flatMap((p) => [p.image, ...(p.images || [])]);
      const allAssets = [...new Set([...STATIC_ASSETS, ...projectImages])];
      
      const totalAssets = allAssets.length;

      // Minimum artificial progress for smoothness
      const minProgressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 95) {
            clearInterval(minProgressInterval);
            return prev;
          }
          return prev + 1;
        });
      }, 50);

      // Actual asset loading
      const promises = allAssets.map(async (src) => {
        await preloadImage(src);
        loadedCount++;
        // We don't strictly bind progress to images to avoid "jumps",
        // but we ensure all are done before finishing.
      });

      await Promise.all(promises);

      if (mounted) {
        clearInterval(minProgressInterval);
        setProgress(100);
        setTimeout(() => setLoading(false), 800);
      }
    };

    loadAll();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (loading) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px", // Start reveal slightly earlier
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
  }, [loading]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-vintage-bg text-vintage-brown overflow-hidden">
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />


        {/* Progress Bar at the Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-vintage-brown/5">
          <div
            className="h-full bg-vintage-brown transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Large Percentage at Bottom Right */}
        <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16">
          <div className="flex items-baseline gap-2">
            <span className="text-7xl md:text-9xl font-cursive opacity-90 leading-none">
              {progress}
            </span>
            <span className="text-2xl md:text-4xl font-cursive opacity-40">%</span>
          </div>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-12 left-12 w-12 h-px bg-vintage-brown/10" />
        <div className="absolute top-12 left-12 w-px h-12 bg-vintage-brown/10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-vintage-bg">
      <NavBar />
      <SocialLinks />
      <main>
        <Hero />
        <Projects />
        <AboutMe />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}
