import React from 'react';

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r join bg-indigo-600 to-blue-500 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            About HashLink
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto">
            We make long, messy URLs short, neat, and powerful. Share your links with confidence and track their performance.
          </p>
        </div>
      </section>

      {/* Our Mission & Vision Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              In today's fast-paced digital world, sharing long and complicated links can be frustrating. At HashLink, our mission is to simplify the way people share links. Whether you are a digital marketer, a small business owner, or just sharing something with a friend, we provide a seamless experience to shorten and manage your URLs.
            </p>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Choose Us?</h2>
            <p className="text-gray-600 leading-relaxed">
              We don't just shorten links; we ensure they are fast, reliable, and secure. With our built-in database connectivity, your links are stored safely and redirect users instantly without any annoying delays.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="text-indigo-600 text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm text-gray-500">Instant redirection with optimized database queries.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="text-indigo-600 text-3xl mb-3">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Secure & Safe</h3>
              <p className="text-sm text-gray-500">Your data and links are protected with top-notch security.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="text-indigo-600 text-3xl mb-3">📱</div>
              <h3 className="text-xl font-semibold mb-2">Responsive</h3>
              <p className="text-sm text-gray-500">Works flawlessly on mobile, tablet, and desktop screens.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="text-indigo-600 text-3xl mb-3">📊</div>
              <h3 className="text-xl font-semibold mb-2">Reliable</h3>
              <p className="text-sm text-gray-500">Backed by MongoDB to ensure 100% uptime for your links.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-900 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to shorten your first link?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Join thousands of users who trust HashLink for clean, trackable, and professional URLs.
          </p>
          <a 
            href="/" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-block"
          >
            Go to Dashboard
          </a>
        </div>
      </section>
    </div>
  );
}