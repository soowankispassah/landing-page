export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-300 to-emerald-200"
        style={{
          background: `
            linear-gradient(
              180deg, 
              #87CEEB 0%,    /* Sky blue at top */
              #3CC0FF 25%,   /* Bright blue */
              #7BE0AD 50%,   /* Soft green */
              #98F5E1 75%,   /* Light mint */
              #E0F4FF 100%   /* Pale blue white */
            )
          `
        }}
      >
        {/* Optional overlay for texture */}
        <div className="absolute inset-0 bg-white/5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-[200] text-white mb-6">
            Empowering Rural Communities Through AI
          </h1>
          <p className="text-lg sm:text-xl mb-8 font-thin tracking-wide text-black/90" style={{ fontWeight: 100, WebkitFontSmoothing: 'antialiased' }}>
            OlenkaAI bridges the digital divide by creating AI tools that understand the local problem. Making AI accessible to every individual.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
            >
              Try Our First Product →
            </a>
            <a
              href="#projects"
              className="bg-transparent border-2 border-white text-black px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all"
            >
              See more projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 