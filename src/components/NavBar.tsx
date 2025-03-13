
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useUserProgress } from '../context/UserProgressContext';
import { Home, BookOpen, Gamepad2, User, Menu, X } from 'lucide-react';

const NavBar: React.FC = () => {
  const { points, level } = useUserProgress();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { path: '/subject/mathematics', label: 'Learn', icon: <BookOpen className="w-5 h-5" /> },
    { path: '/games', label: 'Games', icon: <Gamepad2 className="w-5 h-5" /> },
    { path: '/profile', label: 'Profile', icon: <User className="w-5 h-5" /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-edu-blue text-white font-bold text-lg">
              L
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-edu-blue to-edu-purple bg-clip-text text-transparent">
              LearnMauritius
            </span>
          </Link>

          {/* Points & Level Indicator (visible on all screens) */}
          <div className="flex items-center bg-white rounded-full shadow-sm px-3 py-1 border border-edu-blue/20">
            <motion.div 
              className="text-sm font-medium"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-edu-blue font-bold">{points}</span> 
              <span className="text-gray-500 mx-1">•</span> 
              <span>Level {level}</span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-full transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-edu-blue text-white'
                    : 'text-gray-600 hover:bg-edu-blue/10'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-edu-blue/50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white border-t border-gray-100"
        >
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-2 pb-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-edu-blue text-white'
                      : 'text-gray-600 hover:bg-edu-blue/10'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default NavBar;
