import React from 'react';

function Destination() {
  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          Explore Our <span className="text-blue-600">Destinations</span>
        </h2>
        
        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm">
            <option> @micJ-Continent</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Africa</option>
            <option>North America</option>
            <option>South America</option>
            <option>Australia</option>
          </select>
          
          <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm">
            <option>Price</option>
            <option>Low to High</option>
            <option>High to Low</option>
          </select>
          
          <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm">
            <option>Rating</option>
            <option>1 Star</option>
            <option>2 Stars</option>
            <option>3 Stars</option>
            <option>4 Stars</option>
            <option>5 Stars</option>
          </select>
        </div>
        
        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Destination Card 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <div className="h-48 bg-blue-400 relative">
              <img 
                src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Bali, Indonesia" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-xl font-bold text-white">Bali, Indonesia</h3>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-white ml-1">4.8 (256 reviews)</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">Explore the beautiful beaches and rich culture of Bali, the Island of Gods.</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg text-blue-600">$1,299</span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
          
          {/* Destination Card 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <div className="h-48 bg-blue-400 relative">
              <img 
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Paris, France" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-xl font-bold text-white">Paris, France</h3>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-white ml-1">4.9 (312 reviews)</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">Experience the romance and art in the City of Lights, Paris.</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg text-blue-600">$1,799</span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
          
          {/* Destination Card 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <div className="h-48 bg-blue-400 relative">
              <img 
                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Serengeti, Tanzania" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-xl font-bold text-white">Serengeti, Tanzania</h3>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-white ml-1">4.7 (189 reviews)</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">Witness the great migration in one of Africa's most iconic national parks.</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg text-blue-600">$2,499</span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300 font-medium">
            View All Destinations
          </button>
        </div>
      </div>
    </div>
  );
}

export default Destination;