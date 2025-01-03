import Image from "next/image";

export default function Projects() {
  return (
    <div id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-[200] mb-4">Our Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* KhasiGPT Card */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="relative w-full aspect-[2/1] mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-semibold text-white">Product 1</h3>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Desription about our product one.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                Product
              </span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                Name
              </span>
            </div>
            <a href="#" className="text-indigo-600 font-medium hover:underline inline-flex items-center">
              Try now <span className="ml-1">→</span>
            </a>
          </div>

          {/* Live Translation Card */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="relative w-full aspect-[2/1] mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-semibold text-white">Live Live</h3>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Real-time Live.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                Real-time
              </span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                Translation
              </span>
            </div>
            <a href="#" className="text-indigo-600 font-medium hover:underline inline-flex items-center">
              Try Live <span className="ml-1">→</span>
            </a>
          </div>

          {/* OkaKalkulator Card - Add this after Live Translation Card */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="relative w-full aspect-[2/1] mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-semibold text-white">product 3</h3>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Convert numbers into words in multiple languages. .
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                Number Conversion
              </span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                Multi-language
              </span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                Text Generation
              </span>
            </div>
            <a href="#" className="text-indigo-600 font-medium hover:underline inline-flex items-center">
              Try Kalkulator <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 