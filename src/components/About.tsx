//import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-[200] text-center mb-16">About Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image column */}
          <p className="text-lg text-gray-600">
            We're bridging the digital divide by bringing AI technology to rural communities, 
            starting with the Khasi-speaking regions. Our mission is to ensure AI benefits 
            everyone, regardless of their primary language.
          </p>

          {/* Text content column */}
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold text-gray-900">
              Our Approach to Rural AI Development
            </h4>
            <p className="text-gray-600">
              We believe that language should never be a barrier to accessing advanced technology. 
              Our AI systems are specifically designed to understand and respect local languages 
              and cultures, making technology accessible to everyone.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">
                  Advanced research in natural language processing
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">
                  Commitment to AI safety and ethics
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">
                  Open collaboration with research community
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 