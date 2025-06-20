import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="w-full py-4">
        <nav className="container mx-auto flex justify-end items-center px-4 md:px-6">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Gmail</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Images</a>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
              <Image
                src="https://api.iconify.design/material-symbols:apps.svg" 
                alt="Apps" 
                width="24" 
                height="24" 
              />
            </button>
            <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-hover transition-colors duration-200">
              <span className="text-lg font-medium">B</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 -mt-16">
        {/* Logo Section */}
        <div className="mb-8 text-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="text-primary">B</span>
            <span className="text-secondary">r</span>
            <span className="text-yellow-500">u</span>
            <span className="text-primary">n</span>
            <span className="text-green-500">o</span>
          </h1>
          <p className="text-gray-600 mt-2 text-xl">Software Developer</p>
        </div>

        {/* Search Bar Section */}
        <div className="w-full max-w-2xl relative">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Image
                src="https://api.iconify.design/material-symbols:search.svg" 
                width={24}
                height={24}
                alt="Search" 
                className="w-5 h-5 text-gray-400"
              />
            </div>
            <input 
              type="text" 
              className="search-bar pl-10 pr-10 w-full"
              placeholder="Search in portfolio" 
              aria-label="Search in portfolio"
            
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button className="focus:outline-none">
                <Image
                  width={24}
                  height={24}
                  src="https://api.iconify.design/material-symbols:mic.svg" 
                  alt="Voice Search" 
                  className="w-5 h-5 text-primary"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Search Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="btn btn-text px-6 py-2 text-sm bg-gray-50 hover:shadow-sm">Google Search</button>
          <button className="btn btn-text px-6 py-2 text-sm bg-gray-50 hover:shadow-sm"> I m Feeling Lucky</button>
        </div>

        {/* Language Options */}
        <div className="mt-8 text-sm text-gray-600">
          <p>Google offered in: <a href="#" className="text-primary hover:underline">Español</a> <a href="#" className="text-primary hover:underline">English</a></p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-100 text-sm text-gray-600">
        <div className="container mx-auto px-4 py-3 border-b border-gray-200">
          <p>Spain</p>
        </div>
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 mb-3 md:mb-0">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Advertising</a>
            <a href="#" className="hover:underline">Business</a>
            <a href="#" className="hover:underline">How Search works</a>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Settings</a>
          </div>
        </div>
      </footer>

      {/* Hidden Sections for Navigation */}
      <section id="mis-proyectos" className="hidden">
        {/* Projects content will be loaded here */}
      </section>
      
      <section id="sobre-mi" className="hidden">
        {/* About Me content will be loaded here */}
      </section>
      
      <section id="informacion-de-contacto" className="hidden">
        {/* Contact Information content will be loaded here */}
      </section>

  
    </div>
  );
};
