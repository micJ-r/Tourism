import React, { useState } from 'react';

function TourDetails() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    numberOfPeople: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    alert(`Form submitted with data: ${JSON.stringify(formData)}`);
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Image Gallery */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Scenic View 1" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Scenic View 2" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Scenic View 3" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Tour Description */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Amazing Mountain Adventure</h2>
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-1 text-gray-700">4.8 (124 reviews)</span>
              </div>
              <span className="mx-4 text-gray-300">|</span>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="ml-1 text-gray-700">Swiss Alps</span>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Experience the breathtaking beauty of the Swiss Alps on this 7-day adventure tour. 
              You'll hike through scenic mountain trails, stay in cozy alpine lodges, and enjoy 
              panoramic views that will leave you speechless. Our expert guides will lead you 
              through the most spectacular routes while ensuring your safety and comfort.
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tour Highlights</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>7 days of guided hiking through the Swiss Alps</li>
                <li>Comfortable accommodation in mountain lodges</li>
                <li>All meals included featuring local cuisine</li>
                <li>Small group size (max 12 people)</li>
                <li>Professional mountain guides</li>
              </ul>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">$1,299</span>
              <span className="ml-2 text-gray-500">per person</span>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-lg sticky top-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Book This Tour</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Number of People</label>
                <input
                  type="number"
                  name="numberOfPeople"
                  min="1"
                  value={formData.numberOfPeople}
                  onChange={handleChange}
                  placeholder="Number of People"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105"
              >
                Book Now
              </button>
            </form>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-gray-600">
                  Your booking is secure and confirmation will be sent to your email within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourDetails;