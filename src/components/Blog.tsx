export default function Blog() {
  return (
    <div id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-[200] mb-4">Latest from Our Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover insights about AI, language technology, and our journey in making technology accessible to rural communities.
          </p>
        </div>

        {/* Scrollable Container */}
        <div className="relative">
          {/* Horizontal Scroll Container */}
          <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide">
            {/* Blog Post 1 */}
            <div className="min-w-[280px] max-w-[280px] flex-shrink-0 snap-start">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="relative w-full aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600" />
                  {/* Centered Title */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <h3 className="text-lg font-light text-white text-center">
                      Introducing Product 1: AI companion
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <span>March 15, 2024</span>
                    <span>•</span>
                    <span>5 min</span>
                  </div>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-3">
                    Learn about how we're making AI accessible and affordable.
                  </p>
                  <a href="#" className="text-indigo-600 text-sm font-medium hover:underline inline-flex items-center">
                    Read More <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="min-w-[280px] max-w-[280px] flex-shrink-0 snap-start">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="relative w-full aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-red-600" />
                  {/* Centered Title */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <h3 className="text-lg font-light text-white text-center">
                      Breaking Language Barriers
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <span>March 10, 2024</span>
                    <span>•</span>
                    <span>4 min</span>
                  </div>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-3">
                    Discover how our real-time translation technology is helping connect communities and preserve local languages.
                  </p>
                  <a href="#" className="text-indigo-600 text-sm font-medium hover:underline inline-flex items-center">
                    Read More <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="min-w-[280px] max-w-[280px] flex-shrink-0 snap-start">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="relative w-full aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600" />
                  {/* Centered Title */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <h3 className="text-lg font-light text-white text-center">
                      The Future of Rural Technology Access
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <span>March 5, 2024</span>
                    <span>•</span>
                    <span>3 min</span>
                  </div>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-3">
                    Our vision for bringing advanced technology to rural areas and how we're working to make it a reality.
                  </p>
                  <a href="#" className="text-indigo-600 text-sm font-medium hover:underline inline-flex items-center">
                    Read More <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Blog Post 4 */}
            <div className="min-w-[280px] max-w-[280px] flex-shrink-0 snap-start">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="relative w-full aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600" />
                  {/* Centered Title */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <h3 className="text-lg font-light text-white text-center">
                      Community-First AI Development
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <span>March 1, 2024</span>
                    <span>•</span>
                    <span>4 min</span>
                  </div>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-3">
                    How we're working with local communities to ensure our AI solutions meet their real needs and preferences.
                  </p>
                  <a href="#" className="text-indigo-600 text-sm font-medium hover:underline inline-flex items-center">
                    Read More <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            View All Posts
          </a>
        </div>
      </div>
    </div>
  );
} 