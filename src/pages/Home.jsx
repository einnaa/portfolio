import { useState, useEffect } from "react";
import Hero from "../sections/hero";
import Projects from "../sections/projects";
import AboutMe from "../sections/about-me";
import Certificates from "../sections/certificates";
import Contact from "../sections/contact";
import NavBar from "../components/nav-bar";

// Asset list for preloading
const ASSETS = [
  "/src/assets/hero-design.png",
  "/src/assets/aboutme-design.png",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517430816045-af4b5d1af9fb?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
  "/src/assets/ITS-HTMLandCSS.png",
  "/src/assets/ITS-Cybersecurity.png",
  "/src/assets/ITS-NetworkSecurity.png",
  "/src/assets/ITS-Databases.png",
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
      const promises = ASSETS.map(async (src) => {
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
    <div className="relative page-fade-in bg-vintage-bg">
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
