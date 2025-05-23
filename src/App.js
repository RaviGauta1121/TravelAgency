import React, { useState, useEffect, useRef } from 'react';
import { Star, MapPin, Phone, Shield, Award, Users, Mail, Instagram, Facebook, Twitter, Calendar, Search, Filter, ChevronDown, X, Menu, Heart, Share2, ArrowRight } from 'lucide-react';

const TravelAgencyHomepage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [visibleDestinations, setVisibleDestinations] = useState(6);
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  const destinations = [
    {
      id: 1,
      name: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&h=300&fit=crop",
      rating: 4.9,
      price: "$1,299",
      originalPrice: "$1,599",
      location: "Europe",
      duration: "7 Days",
      highlights: ["Blue Dome Churches", "Sunset Views", "Wine Tasting"],
      description: "Experience the magical sunsets and whitewashed buildings of Greece's most romantic island."
    },
    {
      id: 2,
      name: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop",
      rating: 4.8,
      price: "$899",
      originalPrice: "$1,199",
      location: "Asia",
      duration: "10 Days",
      highlights: ["Rice Terraces", "Temple Tours", "Beach Relaxation"],
      description: "Discover the perfect blend of culture, spirituality, and tropical paradise."
    },
    {
      id: 3,
      name: "Maldives",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      rating: 5.0,
      price: "$2,199",
      originalPrice: "$2,799",
      location: "Indian Ocean",
      duration: "5 Days",
      highlights: ["Overwater Villas", "Snorkeling", "Spa Treatments"],
      description: "Luxury meets paradise in this collection of pristine coral islands."
    },
    {
      id: 4,
      name: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop",
      rating: 4.7,
      price: "$1,599",
      originalPrice: "$1,899",
      location: "Asia",
      duration: "8 Days",
      highlights: ["Cherry Blossoms", "Sushi Experience", "Temple Visits"],
      description: "Immerse yourself in the perfect harmony of ancient traditions and modern innovation."
    },
    {
      id: 5,
      name: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
      rating: 4.6,
      price: "$1,799",
      originalPrice: "$2,199",
      location: "Middle East",
      duration: "6 Days",
      highlights: ["Burj Khalifa", "Desert Safari", "Luxury Shopping"],
      description: "Experience the ultimate luxury destination where dreams become reality."
    },
    {
      id: 6,
      name: "Iceland",
      image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400&h=300&fit=crop",
      rating: 4.9,
      price: "$1,399",
      originalPrice: "$1,699",
      location: "Europe",
      duration: "9 Days",
      highlights: ["Northern Lights", "Hot Springs", "Glacier Tours"],
      description: "Witness nature's most spectacular phenomena in the land of fire and ice."
    },
    {
      id: 7,
      name: "Paris, France",
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop",
      rating: 4.8,
      price: "$1,499",
      originalPrice: "$1,799",
      location: "Europe",
      duration: "7 Days",
      highlights: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise"],
      description: "Fall in love with the city of lights, art, and romance."
    },
    {
      id: 8,
      name: "New York, USA",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop",
      rating: 4.5,
      price: "$1,199",
      originalPrice: "$1,499",
      location: "North America",
      duration: "6 Days",
      highlights: ["Broadway Shows", "Central Park", "Statue of Liberty"],
      description: "Experience the energy and excitement of the city that never sleeps."
    }
  ];

  const features = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your travel needs",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Best Price Guarantee",
      description: "We match any price and give you the best deals",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Handpicked Tours",
      description: "Carefully curated experiences by travel experts",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Guides",
      description: "Professional local guides for authentic experiences",
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      feedback: "Amazing experience! The team helped us plan the perfect honeymoon in Santorini. Every detail was perfect.",
      rating: 5,
      location: "New York, USA",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      feedback: "Professional service and incredible destinations. Our family trip to Bali was unforgettable!",
      rating: 5,
      location: "Toronto, Canada",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      feedback: "Best travel agency ever! They made our dream vacation to the Maldives come true within our budget.",
      rating: 5,
      location: "Madrid, Spain",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    }
  ];

  const filters = ['All', 'Europe', 'Asia', 'North America', 'Middle East', 'Indian Ocean'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         destination.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'All' || destination.location === selectedFilter;
    return matchesSearch && matchesFilter;
  }).slice(0, visibleDestinations);

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const openBookingModal = (destination) => {
    setSelectedDestination(destination);
    setShowBookingModal(true);
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
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
            <a href="#" className="block hover:text-blue-400 transition-colors duration-300">Destinations</a>
            <a href="#" className="block hover:text-blue-400 transition-colors duration-300">About</a>
            <a href="#" className="block hover:text-blue-400 transition-colors duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-pink-900/50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 transition-transform duration-1000"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop')",
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        ></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent animate-slideInFromTop">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed animate-slideInFromBottom">
            Explore breathtaking destinations around the world with our expertly crafted travel experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounceIn">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25">
              Explore Destinations
            </button>
            <button className="px-8 py-4 border-2 border-white/30 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
              Plan Your Trip
            </button>
          </div>
        </div>
        
        {/* Enhanced floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array(30).fill(0).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 bg-gray-800/80 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedFilter === filter
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 px-4 bg-gray-800/50" id='dest'>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-slideInFromLeft">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-slideInFromRight">
              Discover the most sought-after destinations handpicked by our travel experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDestinations.map((destination, index) => (
              <div
                key={destination.id}
                className="group relative bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 shadow-2xl border border-gray-700/50 animate-staggeredFadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Favorite and Share buttons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={() => toggleFavorite(destination.id)}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all duration-300"
                    >
                      <Heart 
                        className={`w-4 h-4 ${favorites.has(destination.id) ? 'text-red-500 fill-current' : 'text-white'}`} 
                      />
                    </button>
                    <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all duration-300">
                      <Share2 className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                    {destination.duration}
                  </div>
                  
                  {/* Discount badge */}
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full px-3 py-1 text-sm font-semibold">
                    Save ${parseInt(destination.originalPrice.slice(1)) - parseInt(destination.price.slice(1))}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                      {destination.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{destination.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {destination.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {destination.highlights.slice(0, 2).map((highlight, idx) => (
                      <span key={idx} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{destination.location}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400 line-through">
                        {destination.originalPrice}
                      </div>
                      <div className="text-2xl font-bold text-blue-400">
                        {destination.price}
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => openBookingModal(destination)}
                    className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Book Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          {visibleDestinations < destinations.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleDestinations(prev => prev + 4)}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Load More Destinations
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-900" id='about'>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We provide exceptional travel experiences with unmatched service quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-staggeredFadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.color} rounded-full mb-6 group-hover:shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-300 animate-pulse`}>
                  <div className="text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-gray-400">
              Real experiences from real travelers
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-700/50 transition-all duration-500">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full border-4 border-blue-500 animate-pulse"
                  />
                </div>
                <div className="flex justify-center mb-6">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-slideInFromBottom">
                  "{testimonials[currentTestimonial].feedback}"
                </blockquote>
                <div className="animate-slideInFromTop">
                  <div className="font-bold text-xl text-white mb-1">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-400">
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-500 w-8' : 'bg-gray-600 w-3'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && selectedDestination && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl border border-gray-700 animate-scaleIn">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-white">Book Your Trip</h3>
              <button
                onClick={() => setShowBookingModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="mb-6">
              <img
                src={selectedDestination.image}
                alt={selectedDestination.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-white mb-2">
                {selectedDestination.name}
              </h4>
              <div className="flex items-center justify-between text-gray-300 mb-4">
                <span>{selectedDestination.duration}</span>
                <span className="text-2xl font-bold text-blue-400">
                  {selectedDestination.price}
                </span>
              </div>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Travel Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Number of Travelers
                </label>
                <select className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3-4 People</option>
                  <option>5+ People</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Now
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-16 px-4" id='footer'>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="animate-slideInFromLeft">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                WanderLux
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Creating unforgettable travel experiences around the world since 2020.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-all duration-300 transform hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300 transform hover:scale-110">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="animate-slideInFromBottom" style={{ animationDelay: '0.1s' }}>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Destinations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Reviews</a></li>
              </ul>
            </div>
            
            <div className="animate-slideInFromBottom" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Flight Booking</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Hotel Reservation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Tour Packages</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Travel Insurance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Visa Assistance</a></li>
              </ul>
            </div>
            
            <div className="animate-slideInFromRight">
              <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-3 text-blue-400" />
                  <span>hello@wanderlux.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="w-4 h-4 mr-3 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start text-gray-400">
                  <MapPin className="w-4 h-4 mr-3 text-blue-400 mt-1" />
                  <span>123 Travel Street,<br />Adventure City, AC 12345</span>
                </div>
              </div>
            </div>
          </div>
          
         <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
  <p className="mb-2">
    &copy; 2025 <span className="text-white font-semibold">WanderLux Travel Agency</span>. All rights reserved.
  </p>
  <p className="mb-2">
    <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a> | 
    <a href="#" className="hover:text-white transition duration-300 ml-1">Terms of Service</a>
  </p>
  <p className="text-xs italic text-gray-500 mt-4">
    Made with <span className="text-red-500">♥</span> by <span className="text-white font-medium">Ravi</span> — Thanks for being part of the journey.
  </p>
</div>

        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes staggeredFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        .animate-slideInFromTop {
          animation: slideInFromTop 1s ease-out;
        }

        .animate-slideInFromBottom {
          animation: slideInFromBottom 1s ease-out;
        }

        .animate-slideInFromLeft {
          animation: slideInFromLeft 1s ease-out;
        }

        .animate-slideInFromRight {
          animation: slideInFromRight 1s ease-out;
        }

        .animate-bounceIn {
          animation: bounceIn 1.5s ease-out;
        }

        .animate-float {
          animation: float infinite ease-in-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }

        .animate-staggeredFadeIn {
          animation: staggeredFadeIn 0.6s ease-out both;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default TravelAgencyHomepage;