import { useState, useRef } from "react";

const certificates = [
	{
		id: 1,
		title: "React JS and GitHub Training",
		issuer: "College of Computing Education",
		date: "2026",
		image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
	},
    {
		id: 2,
		title: "Information Technology Specialist in HTML and CSS",
		issuer: "Certiport",
		date: "2024",
		image: "/src/assets/ITS-HTMLandCSS.png",
	},
	{
		id: 3,
		title: "Information Technology Specialist in Cybersecurity",
		issuer: "Certiport",
		date: "2025",
		image: "/src/assets/ITS-Cybersecurity.png",
	},
	{
		id: 4,
		title: "Information Technology Specialist in Network Security",
		issuer: "Certiport",
		date: "2025",
		image: "/src/assets/ITS-NetworkSecurity.png",
	},
    {
		id: 5,
		title: "Information Technology Specialist in Databases",
		issuer: "Certiport",
		date: "2024",
		image: "/src/assets/ITS-Databases.png",
	},
];

export default function Certificates() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const containerRef = useRef(null);

	const next = () => {
		setCurrentIndex((prev) => (prev + 1) % certificates.length);
	};

	const prev = () => {
		setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
	};

	return (
		<section id="certificates" className="py-24 md:py-32 px-6 bg-white overflow-hidden scroll-mt-24">
			<div className="max-w-6xl mx-auto">
				<header className="mb-16 md:mb-24 text-center">
					<h2 className="text-3xl md:text-4xl font-cursive text-black italic mb-2">accolades & achievements</h2>
					<p className="text-black/60 font-sans italic text-sm md:text-base uppercase tracking-widest">Selected Certifications</p>
				</header>

				<div className="relative group">
					{/* Main Carousel View - Switched to Transform for better browser support */}
					<div className="overflow-hidden">
						<div
							className="flex smooth-transition duration-700 ease-in-out"
							style={{ transform: `translateX(-${currentIndex * 100}%)` }}
						>
							{certificates.map((cert) => (
								<div
									key={cert.id}
									className="w-full shrink-0 flex flex-col items-center px-4"
								>
									<div className="w-full max-w-2xl aspect-16/10 bg-zinc-50 border border-black/5 rounded-sm overflow-hidden shadow-sm relative group/item">
										<img
											src={cert.image}
											alt={cert.title}
											decoding="async"
											loading="lazy"
											className="w-full h-full object-cover grayscale group-hover:item:grayscale-0 transition-[filter] duration-700 ease-in-out transform-gpu"
										/>
										<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:item:opacity-100 smooth-transition pointer-events-none" />
									</div>

									<div className="mt-8 text-center max-w-md">
										<p className="text-[10px] md:text-xs font-sans font-bold text-black/40 uppercase tracking-[0.3em] mb-2">
											{cert.issuer} • {cert.date}
										</p>
										<h3 className="text-xl md:text-2xl font-serif text-black">{cert.title}</h3>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Navigation Controls */}
					<button
						onClick={prev}
						className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 text-black/30 hover:text-black smooth-transition outline-none"
						aria-label="Previous Certificate"
					>
						<span className="text-3xl font-serif">←</span>
					</button>

					<button
						onClick={next}
						className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 text-black/30 hover:text-black smooth-transition outline-none"
						aria-label="Next Certificate"
					>
						<span className="text-3xl font-serif">→</span>
					</button>
				</div>

				{/* Indicators */}
				<div className="flex justify-center gap-4 mt-12 md:mt-16">
					{certificates.map((_, i) => (
						<button
							key={i}
							onClick={() => setCurrentIndex(i)}
							className={`h-1 smooth-transition ${currentIndex === i ? "w-8 bg-black" : "w-4 bg-black/10 hover:bg-black/30"}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
