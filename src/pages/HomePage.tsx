import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  Zap, 
  Target, 
  TrendingUp, 
  Shield, 
  Smartphone, 
  Brain, 
  Users, 
  ShoppingBag, 
  CheckCircle,
  ArrowRight,
  Scan,
  Ruler,
  RotateCcw,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Perfect Fit, Every Time
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                with AI Precision
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI-powered body measurement technology that transforms online shopping. 
              Get accurate measurements using just your smartphone camera.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/upload"
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Try Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="border border-purple-300 text-purple-100 px-8 py-4 rounded-lg font-semibold hover:bg-purple-800 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Project Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About This Project
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              This web application helps users get accurate body measurements using AI-based image processing techniques. 
              By scanning the body with a smartphone camera, our system detects key landmarks and estimates sizes such as 
              height, chest, waist, hips, and more.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Transforming E-commerce Experience
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                This tool is designed to support virtual fitting rooms for e-commerce, helping users find the perfect fit 
                without trial and error. It improves the online shopping experience by reducing returns and boosting customer satisfaction.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We've updated the body measurement tool to provide perfect fit recommendations for all body types (fat, slim, etc.) 
                with improved measurement accuracy and sizing recommendations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">AI-powered landmark detection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Supports all body types and shapes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Smartphone camera integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Reduces returns by 60%</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Ruler className="h-8 w-8 text-purple-600 mb-2" />
                    <h4 className="font-semibold text-gray-900">Height</h4>
                    <p className="text-gray-600 text-sm">Precise measurements</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Target className="h-8 w-8 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-gray-900">Chest</h4>
                    <p className="text-gray-600 text-sm">Accurate sizing</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
                    <h4 className="font-semibold text-gray-900">Waist</h4>
                    <p className="text-gray-600 text-sm">Perfect fit</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Users className="h-8 w-8 text-red-600 mb-2" />
                    <h4 className="font-semibold text-gray-900">Hips</h4>
                    <p className="text-gray-600 text-sm">All body types</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI Processing</h4>
                  <p className="text-gray-600 text-sm">Advanced algorithms for accurate measurements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered system makes body measurement simple, accurate, and accessible to everyone
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Camera className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Scan with Phone</h3>
              <p className="text-gray-600 leading-relaxed">
                Use your smartphone camera to capture your body from multiple angles. 
                Our guided process ensures optimal image quality for accurate measurements.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. AI Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced AI algorithms detect key body landmarks and calculate precise measurements 
                including height, chest, waist, hips, and more with 95%+ accuracy.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Perfect Recommendations</h3>
              <p className="text-gray-600 leading-relaxed">
                Get personalized size recommendations for any body type. Our system adapts to 
                fat, slim, athletic, and all body shapes for the perfect fit every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for accurate body measurements and perfect fitting recommendations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Ruler className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Precise Measurements</h3>
              <p className="text-gray-600 leading-relaxed">
                Get accurate measurements for height, chest, waist, hips, shoulders, and more with AI precision technology.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">All Body Types</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimized algorithms that work perfectly for all body types - slim, athletic, curvy, plus-size, and everything in between.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Friendly</h3>
              <p className="text-gray-600 leading-relaxed">
                Works seamlessly on any smartphone. No special equipment needed - just your camera and our smart technology.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Instant Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Get your measurements and size recommendations in seconds. Real-time processing for immediate feedback.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Privacy Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                Your images are processed securely and never stored. Complete privacy protection with end-to-end encryption.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <RotateCcw className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Continuous Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                AI model continuously improves accuracy based on feedback, ensuring better recommendations over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">P</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Prakash</h3>
                <p className="text-gray-600 mb-4 font-medium">B.Sc Mathematics with Computer Applications</p>
                <div className="flex justify-center space-x-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-purple-100 transition-colors cursor-pointer">
                    <Github className="h-5 w-5 text-gray-600 hover:text-purple-600" />
                  </div>
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors cursor-pointer">
                    <Linkedin className="h-5 w-5 text-gray-600 hover:text-blue-600" />
                  </div>
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-100 transition-colors cursor-pointer">
                    <Mail className="h-5 w-5 text-gray-600 hover:text-green-600" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">P</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Premnath</h3>
                <p className="text-gray-600 mb-4 font-medium">B.Sc Mathematics with Computer Applications</p>
                <div className="flex justify-center space-x-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-purple-100 transition-colors cursor-pointer">
                    <Github className="h-5 w-5 text-gray-600 hover:text-purple-600" />
                  </div>
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors cursor-pointer">
                    <Linkedin className="h-5 w-5 text-gray-600 hover:text-blue-600" />
                  </div>
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-100 transition-colors cursor-pointer">
                    <Mail className="h-5 w-5 text-gray-600 hover:text-green-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Shopping Experience?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Try our AI-powered body measurement tool today and discover the perfect fit for your body type.
          </p>
          <Link
            to="/upload"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
          >
            Start Measuring Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;