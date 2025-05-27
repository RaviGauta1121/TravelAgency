import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
            WanderLux
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Home</a>
            <a href="#dest" className="hover:text-blue-400 transition-colors duration-300">Destinations</a>
            <a href="#about" className="hover:text-blue-400 transition-colors duration-300">About</a>
            <a href="#footer" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
          </div>
          <button 
            className="md:hidden p-2"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-gray-900/98 backdrop-blur-sm border-t border-gray-800 transition-all duration-500 ${showMobileMenu ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-4 py-4 space-y-4">
          <a href="#" className="block hover:text-blue-400 transition-colors duration-300">Home</a>
          <a href="#dest" className="block hover:text-blue-400 transition-colors duration-300">Destinations</a>
          <a href="#about" className="block hover:text-blue-400 transition-colors duration-300">About</a>
          <a href="#footer" className="block hover:text-blue-400 transition-colors duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;