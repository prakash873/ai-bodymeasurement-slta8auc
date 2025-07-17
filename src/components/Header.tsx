import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scan, Home, Upload } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Scan className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">BodyFit AI</h1>
          </Link>
          
          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                location.pathname === '/' 
                  ? 'bg-purple-100 text-purple-600' 
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <Home className="h-4 w-4" />
              <span className="font-medium">Home</span>
            </Link>
            
            <Link
              to="/upload"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                location.pathname === '/upload' 
                  ? 'bg-purple-100 text-purple-600' 
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <Upload className="h-4 w-4" />
              <span className="font-medium">Upload</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;