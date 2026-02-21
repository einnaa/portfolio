export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col py-16 md:py-14 px-6 md:px-4 bg-vintage-brown text-white">
      <div className="max-w-4xl mx-auto text-center grow flex flex-col justify-center">
        <h2 className="text-3xl text-white/80 md:text-5xl font-cursive mb-6 md:mb-8">let's turn your ideas into something real,</h2>
     

        <div className="flex flex-col items-center space-y-6 md:space-y-8">
          <a 
            href="mailto:einnacadagat@gmail.com" 
            className="text-2xl md:text-3xl font-serif italic border-b border-vintage-bg/20 hover:border-vintage-bg smooth-transition pb-2 break-all"
          >
            email me
          </a>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 pt-2 md:pt-4 opacity-60">
            {["GitHub", "LinkedIn", "Instagram", "Facebook"].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-sm tracking-widest uppercase hover:text-vintage-orange smooth-transition font-sans"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="mt-auto pt-8 border-t border-vintage-bg/10 text-center text-xs tracking-widest uppercase opacity-40 font-sans">
        &copy; 2026 ~ EINNA JOY CADAGAT
      </footer>
    </section>
  );
}
