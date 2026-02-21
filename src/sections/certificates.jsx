import { useState, useEffect } from "react";

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
		image: "/assets/ITS-HTMLandCSS.png",
	},
	{
		id: 3,
		title: "Information Technology Specialist in Cybersecurity",
		issuer: "Certiport",
		date: "2025",
		image: "/assets/ITS-Cybersecurity.png",
	},
	{
		id: 4,
		title: "Information Technology Specialist in Network Security",
		issuer: "Certiport",
		date: "2025",
		image: "/assets/ITS-NetworkSecurity.png",
	},
    {
		id: 5,
		title: "Information Technology Specialist in Databases",
		issuer: "Certiport",
		date: "2024",
		image: "/assets/ITS-Databases.png",
	},
];

export default function Certificates() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768);
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	const itemsToShow = isMobile ? 1 : 2;
	const maxIndex = certificates.length - itemsToShow;

	const next = () => {
		setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
	};

	const prev = () => {
		setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
	};

	return (
		<section 
			id="certificates" 
			className="py-12 md:py-24 px-6 bg-vintage-bg overflow-hidden scroll-mt-24"
		>
			<div className="max-w-6xl mx-auto">
				<header className="mb-6 md:mb-12 text-center">
					<div>
						<div className="pb-4 font-sans text-md md:text-2xl font-bold uppercase text-vintage-brown">Certificates</div>
						<h2 className="text-md md:text-5xl font-cursive italic text-vintage-brown">Accolades & Achievements</h2>
					</div>
				</header>

				<div className="relative group/carousel">
					{/* Main Carousel View */}
					<div className="overflow-hidden">
						<div
							className="flex transition-transform duration-1000 cubic-bezier(0.16, 1, 0.3, 1) will-change-transform"
							style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
						>
							{certificates.map((cert) => (
								<div
									key={cert.id}
									style={{ width: `${100 / itemsToShow}%` }}
									className="shrink-0 flex flex-col items-center px-4"
								>
									<div className="group/item relative w-full h-full p-5 md:p-6 transition-transform duration-700 ease-out hover:scale-[1.02]">
										<div className="bg-transparent group-hover:item:bg-white/40 backdrop-blur-none group-hover:item:backdrop-blur-md p-2 rounded-4xl shadow-none group-hover:item:shadow-xl group-hover:item:shadow-vintage-brown/5 border border-transparent group-hover:item:border-vintage-accent/20 transition-all duration-500">
											<div className="w-full relative aspect-4/3 overflow-hidden rounded-xl border border-vintage-brown/5">
												<img
													src={cert.image}
													alt={cert.title}
													decoding="async"
													loading="lazy"
													className="w-full h-full object-cover transition-all duration-1000 group-hover/item:scale-105"
												/>
												<div className="absolute inset-0 bg-vintage-brown/10 opacity-0 group-hover/item:opacity-100 smooth-transition pointer-events-none" />
											</div>

											<div className="mt-8 text-center max-w-md px-4 pb-4">
												<div className="flex items-center justify-center gap-3 mb-3">
													<span className="text-[10px] font-bold text-vintage-accent uppercase tracking-[0.3em]">{cert.date}</span>
													<div className="w-8 h-px bg-vintage-brown/10" />
													<span className="text-[10px] font-bold text-vintage-brown/40 uppercase tracking-[0.3em]">{cert.issuer}</span>
												</div>
												<h3 className="text-xl md:text-2xl font-serif text-vintage-brown leading-tight">{cert.title}</h3>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Navigation Controls */}
					<button
						onClick={prev}
						className="absolute top-[32%] md:top-[35%] -translate-y-1/2 -left-4 md:-left-12 text-vintage-brown/30 hover:text-vintage-accent flex items-center justify-center smooth-transition z-10"
						aria-label="Previous Certificate"
					>
						<span className="text-2xl font-serif">←</span>
					</button>

					<button
						onClick={next}
						className="absolute top-[32%] md:top-[35%] -translate-y-1/2 -right-4 md:-right-12 text-vintage-brown/30 hover:text-vintage-accent flex items-center justify-center smooth-transition z-10"
						aria-label="Next Certificate"
					>
						<span className="text-2xl font-serif">→</span>
					</button>
				</div>

				{/* Indicators */}
				<div className="flex justify-center gap-3 mt-2 md:mt-6">
					{Array.from({ length: certificates.length - itemsToShow + 1 }).map((_, i) => (
						<button
							key={i}
							onClick={() => setCurrentIndex(i)}
							className={`h-1 smooth-transition transition-all duration-500 rounded-full ${
								currentIndex === i 
									? "w-12 bg-vintage-accent" 
									: "w-6 bg-vintage-brown/10 hover:bg-vintage-brown/30"
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
