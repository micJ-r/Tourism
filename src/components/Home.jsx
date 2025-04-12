import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="hero bg-blue-900 text-white py-20 px-4 text-center bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center bg-blend-overlay">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Explore the World with Us</h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Discover amazing places at exclusive deals <br className="hidden sm:block" />
            <i className="text-blue-200">Fly with us and Let You Enjoy the life in the sky world wide</i>
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
            Book Now
          </button>
        </div>
      </section>
      
       <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Destinations</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Destination 1 - Paris */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
    <div className="h-48 relative overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
        alt="Paris, France" 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <span className="text-white font-medium">Europe</span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Paris, France</h3>
      <p className="text-gray-600 mb-4">Experience the romance of the City of Lights with its iconic landmarks and exquisite cuisine.</p>
      <div className="flex justify-between items-center">
        <span className="text-blue-600 font-bold">From $1,299</span>
        <span className="flex items-center text-yellow-400">
          ★ 4.8
        </span>
      </div>
    </div>
  </div>

  {/* Destination 2 - Bali */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
    <div className="h-48 relative overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
        alt="Bali, Indonesia" 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <span className="text-white font-medium">Asia</span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Bali, Indonesia</h3>
      <p className="text-gray-600 mb-4">Discover tropical paradise with lush jungles, stunning beaches, and vibrant culture.</p>
      <div className="flex justify-between items-center">
        <span className="text-blue-600 font-bold">From $899</span>
        <span className="flex items-center text-yellow-400">
          ★ 4.9
        </span>
      </div>
    </div>
  </div>

  {/* Destination 3 - New York */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
    <div className="h-48 relative overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
        alt="New York, USA" 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <span className="text-white font-medium">North America</span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">New York, USA</h3>
      <p className="text-gray-600 mb-4">Explore the city that never sleeps with its dazzling skyline and endless attractions.</p>
      <div className="flex justify-between items-center">
        <span className="text-blue-600 font-bold">From $1,499</span>
        <span className="flex items-center text-yellow-400">
          ★ 4.7
        </span>
      </div>
    </div>
  </div>
</div>
          {/* Add more destination cards here */}
         
      
      <section className="popular-tours py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Popular Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Tour Card 1 */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg hover:-translate-y-1">
    <div className="h-40 overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
        alt="Beach Getaway" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4">
      <h3 className="font-bold text-lg mb-1 text-gray-800">Beach Getaway</h3>
      <p className="text-gray-600 text-sm mb-2">7 days, 6 nights</p>
      <p className="text-blue-600 font-bold">$1,199</p>
    </div>
  </div>

  {/* Tour Card 2 */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg hover:-translate-y-1">
    <div className="h-40 overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
        alt="Beach Getaway" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4">
      <h3 className="font-bold text-lg mb-1 text-gray-800">Beach Getaway</h3>
      <p className="text-gray-600 text-sm mb-2">7 days, 6 nights</p>
      <p className="text-blue-600 font-bold">$1,199</p>
    </div>
  </div>

  {/* Tour Card 3 */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg hover:-translate-y-1">
    <div className="h-40 overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
        alt="City Explorer" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4">
      <h3 className="font-bold text-lg mb-1 text-gray-800">City Explorer</h3>
      <p className="text-gray-600 text-sm mb-2">4 days, 3 nights</p>
      <p className="text-blue-600 font-bold">$749</p>
    </div>
  </div>

  {/* Tour Card 4 */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg hover:-translate-y-1">
    <div className="h-40 overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
        alt="Desert Safari" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4">
      <h3 className="font-bold text-lg mb-1 text-gray-800">Desert Safari</h3>
      <p className="text-gray-600 text-sm mb-2">3 days, 2 nights</p>
      <p className="text-blue-600 font-bold">$599</p>
    </div>
  </div>
</div>
        </div>
      </section>
    </div>
  );
}

export default Home;