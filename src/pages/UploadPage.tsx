import React, { useState, useRef } from 'react';
import { Upload, Camera, X, Check, AlertCircle, User, Ruler, Target, Activity } from 'lucide-react';

interface MeasurementData {
  height: string;
  chest: string;
  waist: string;
  hips: string;
  shoulders: string;
  bodyType: string;
  confidence: number;
}

const UploadPage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [measurements, setMeasurements] = useState<MeasurementData | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        setSelectedFile(file);
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    setAnalysisComplete(false);

    // Simulate AI analysis process
    setTimeout(() => {
      const mockMeasurements: MeasurementData = {
        height: '5\'8" (173 cm)',
        chest: '40" (102 cm)',
        waist: '34" (86 cm)',
        hips: '38" (97 cm)',
        shoulders: '44" (112 cm)',
        bodyType: 'Athletic',
        confidence: 94
      };

      setMeasurements(mockMeasurements);
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 3000);
  };

  const resetUpload = () => {
    setSelectedFile(null);
    setIsAnalyzing(false);
    setAnalysisComplete(false);
    setMeasurements(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Body Measurement Analysis
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload a full-body image to get precise measurements and personalized size recommendations
          </p>
        </div>

        {/* Upload Section */}
        {!selectedFile && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div
              className={`upload-area relative border-2 border-dashed rounded-xl p-12 text-center ${
                dragActive ? 'dragover' : ''
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Upload Your Photo
              </h3>
              <p className="text-gray-600 mb-6">
                Drag and drop a full-body image here, or click to select a file
              </p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center"
              >
                <Camera className="h-5 w-5 mr-2" />
                Select Image
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>

            {/* Guidelines */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Full Body Visible</h4>
                <p className="text-sm text-gray-600">
                  Ensure your entire body is visible in the image from head to toe
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Good Lighting</h4>
                <p className="text-sm text-gray-600">
                  Use natural lighting or well-lit environment for better accuracy
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-6 w-6 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Minimal Clothing</h4>
                <p className="text-sm text-gray-600">
                  Wear fitted clothing for more accurate measurements
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Selected Image Preview */}
        {selectedFile && !analysisComplete && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Selected Image
              </h3>
              <button
                onClick={resetUpload}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected"
                  className="w-64 h-80 object-cover rounded-lg shadow-md"
                />
              </div>
              
              <div className="flex-1">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Image Details</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">File Name:</span>
                      <span className="font-medium">{selectedFile.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">File Size:</span>
                      <span className="font-medium">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-medium">{selectedFile.type}</span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className={`mt-6 w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                    isAnalyzing
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
                >
                  {isAnalyzing ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Analyzing...
                    </div>
                  ) : (
                    'Analyze Body Measurements'
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Analysis Progress */}
        {isAnalyzing && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                AI Analysis in Progress
              </h3>
              <p className="text-gray-600 mb-6">
                Our AI is detecting body landmarks and calculating precise measurements...
              </p>
              <div className="max-w-md mx-auto">
                <div className="bg-gray-200 rounded-full h-2 mb-4">
                  <div className="bg-purple-600 h-2 rounded-full animate-pulse" style={{ width: '70%' }}></div>
                </div>
                <div className="text-sm text-gray-500">
                  Processing image and detecting key points...
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        {analysisComplete && measurements && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Analysis Complete
                  </h3>
                  <p className="text-gray-600">
                    Confidence: {measurements.confidence}%
                  </p>
                </div>
              </div>
              <button
                onClick={resetUpload}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Upload New Image
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="measurement-card p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">Height</h4>
                  <Ruler className="h-5 w-5 text-purple-600" />
                </div>
                <p className="text-2xl font-bold text-purple-600">{measurements.height}</p>
              </div>

              <div className="measurement-card p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">Chest</h4>
                  <Target className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-2xl font-bold text-blue-600">{measurements.chest}</p>
              </div>

              <div className="measurement-card p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">Waist</h4>
                  <Activity className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-2xl font-bold text-green-600">{measurements.waist}</p>
              </div>

              <div className="measurement-card p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">Hips</h4>
                  <Target className="h-5 w-5 text-red-600" />
                </div>
                <p className="text-2xl font-bold text-red-600">{measurements.hips}</p>
              </div>

              <div className="measurement-card p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">Shoulders</h4>
                  <Ruler className="h-5 w-5 text-yellow-600" />
                </div>
                <p className="text-2xl font-bold text-yellow-600">{measurements.shoulders}</p>
              </div>

              <div className="measurement-card p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">Body Type</h4>
                  <User className="h-5 w-5 text-teal-600" />
                </div>
                <p className="text-2xl font-bold text-teal-600">{measurements.bodyType}</p>
              </div>
            </div>

            {/* Size Recommendations */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Size Recommendations
              </h4>
              
              {/* General Size Chart */}
              <div className="mb-8">
                <h5 className="text-lg font-medium text-gray-900 mb-4">Your Recommended Sizes</h5>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <h6 className="font-medium text-gray-900 mb-2">Shirts</h6>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer transition-colors">XS: 34"</p>
                      <p className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer transition-colors">S: 36"</p>
                      <p className="text-lg font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded border-2 border-purple-200">✓ M: 38-40" (Recommended)</p>
                      <p className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer transition-colors">L: 42"</p>
                      <p className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer transition-colors">XL: 44"</p>
                      <p className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer transition-colors">XXL: 46"</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <h6 className="font-medium text-gray-900 mb-2">T-Shirts</h6>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer transition-colors">XS: 32"</p>
                      <p className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer transition-colors">S: 34"</p>
                      <p className="text-lg font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded border-2 border-blue-200">✓ M: 36-38" (Recommended)</p>
                      <p className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer transition-colors">L: 40"</p>
                      <p className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer transition-colors">XL: 42"</p>
                      <p className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer transition-colors">XXL: 44"</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <h6 className="font-medium text-gray-900 mb-2">Pants</h6>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer transition-colors">28W</p>
                      <p className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer transition-colors">30W</p>
                      <p className="text-lg font-bold text-green-600 bg-green-50 px-2 py-1 rounded border-2 border-green-200">✓ 32-34W (Recommended)</p>
                      <p className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer transition-colors">36W</p>
                      <p className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer transition-colors">38W</p>
                      <p className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer transition-colors">40W</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <h6 className="font-medium text-gray-900 mb-2">Jackets</h6>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer transition-colors">36R</p>
                      <p className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer transition-colors">38R</p>
                      <p className="text-lg font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded border-2 border-orange-200">✓ 40R (Recommended)</p>
                      <p className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer transition-colors">42R</p>
                      <p className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer transition-colors">44R</p>
                      <p className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer transition-colors">46R</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Brand Recommendations */}
              <div>
                <h5 className="text-lg font-medium text-gray-900 mb-4">Brand Size Recommendations</h5>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                    <h6 className="font-semibold text-gray-900 mb-2">Peter England</h6>
                    <div className="space-y-1">
                      <p className="text-sm"><span className="font-medium">Shirts:</span> 
                        <span className="ml-1">
                          <span className="text-gray-400">S(38)</span> | 
                          <span className="font-bold text-purple-600 bg-purple-50 px-1 rounded"> M(40) ✓</span> | 
                          <span className="text-gray-400">L(42)</span>
                        </span>
                      </p>
                      <p className="text-sm"><span className="font-medium">T-Shirts:</span> 
                        <span className="ml-1">
                          <span className="text-gray-400">S</span> | 
                          <span className="font-bold text-purple-600 bg-purple-50 px-1 rounded">M ✓</span> | 
                          <span className="text-gray-400">L</span>
                        </span>
                      </p>
                      <p className="text-sm"><span className="font-medium">Trousers:</span> 
                        <span className="ml-1">
                          <span className="text-gray-400">32W</span> | 
                          <span className="font-bold text-purple-600 bg-purple-50 px-1 rounded">34W ✓</span> | 
                          <span className="text-gray-400">36W</span>
                        </span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                    <h6 className="font-semibold text-gray-900 mb-2">Allen Solly</h6>
                    <div className="space-y-1">
                      <p className="text-sm"><span className="font-medium">Shirts:</span> 
                        <span className="ml-1">
                          <span className="text-gray-400">38(S)</span> | 
                          <span className="font-bold text-blue-600 bg-blue-50 px-1 rounded">40(M) ✓</span> | 
                          <span className="text-gray-400">42(L)</span>
                        </span>
                      </p>
                      <p className="text-sm"><span className="font-medium">Polo:</span> 
                        <span className="ml-1">
                          <span className="text-gray-400">S</span> | 
                          <span className="font-bold text-blue-600 bg-blue-50 px-1 rounded">M ✓</span> | 
                          <span className="text-gray-400">L</span>
                        </span>
                      </p>
                      <p className="text-sm"><span className="font-medium">Chinos:</span> 
                        <span className="ml-1">
                          <span className="text-gray-400">32W</span> | 
                          <span className="font-bold text-blue-600 bg-blue-50 px-1 rounded">34W ✓</span> | 
                          <span className="text-gray-400">36W</span>
                        </span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                    <h6 className="font-semibold text-gray-900 mb-2">Indian Terrain</h6>
                    <div className="space-y-1">
                      <p className="text-sm"><span className="font-medium">Casual Shirts:</span> 
                        <span className="ml-1">
                          <span className="text-gray-400">S(38)</span> | 
                          <span className="font-bold text-green-600 bg-green-50 px-1 rounded">M(40) ✓</span> | 
                          <span className="text-gray-400">L(42)</span>
                        </span>
                      </p>
                      <p className="text-sm"><span className="font-medium">T-Shirts:</span> 
                        <span className="ml-1">
                          <span className="text-gray-400">S</span> | 
                          <span className="font-bold text-green-600 bg-green-50 px-1 rounded">M ✓</span> | 
                          <span className="text-gray-400">L</span>
                        </span>
                      </p>
                      <p className="text-sm"><span className="font-medium">Jeans:</span> 
                        <span className="ml-1">
                          <span className="text-gray-400">32W</span> | 
                          <span className="font-bold text-green-600 bg-green-50 px-1 rounded">34W ✓</span> | 
                          <span className="text-gray-400">36W</span>
                        </span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                    <h6 className="font-semibold text-gray-900 mb-2">Van Heusen</h6>
                    <div className="space-y-1">
                      <p className="text-sm"><span className="font-medium">Formal Shirts:</span> 
                        <span className="ml-1">
                          <span className="text-gray-400">38(S)</span> | 
                          <span className="font-bold text-red-600 bg-red-50 px-1 rounded">40(M) ✓</span> | 
                          <span className="text-gray-400">42(L)</span>
                        </span>
                      </p>
                      <p className="text-sm"><span className="font-medium">T-Shirts:</span> 
                        <span className="ml-1">
                          <span className="text-gray-400">S</span> | 
                          <span className="font-bold text-red-600 bg-red-50 px-1 rounded">M ✓</span> | 
                          <span className="text-gray-400">L</span>
                        </span>
                      </p>
                      <p className="text-sm"><span className="font-medium">Suits:</span> 
                        <span className="ml-1">
                          <span className="text-gray-400">38R</span> | 
                          <span className="font-bold text-red-600 bg-red-50 px-1 rounded">40R ✓</span> | 
                          <span className="text-gray-400">42R</span>
                        </span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                    <h6 className="font-semibold text-gray-900 mb-2">Arrow</h6>
                    <div className="space-y-1">
                      <p className="text-sm"><span className="font-medium">Shirts:</span> 
                        <span className="ml-1">
                          <span className="text-gray-400">38(S)</span> | 
                          <span className="font-bold text-yellow-600 bg-yellow-50 px-1 rounded">40(M) ✓</span> | 
                          <span className="text-gray-400">42(L)</span>
                        </span>
                      </p>
                      <p className="text-sm"><span className="font-medium">Polos:</span> 
                        <span className="ml-1">
                          <span className="text-gray-400">S</span> | 
                          <span className="font-bold text-yellow-600 bg-yellow-50 px-1 rounded">M ✓</span> | 
                          <span className="text-gray-400">L</span>
                        </span>
                      </p>
                      <p className="text-sm"><span className="font-medium">Trousers:</span> 
                        <span className="ml-1">
                          <span className="text-gray-400">32W</span> | 
                          <span className="font-bold text-yellow-600 bg-yellow-50 px-1 rounded">34W ✓</span> | 
                          <span className="text-gray-400">36W</span>
                        </span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border-l-4 border-indigo-500">
                    <h6 className="font-semibold text-gray-900 mb-2">Louis Philippe</h6>
                    <div className="space-y-1">
                      <p className="text-sm"><span className="font-medium">Formal Shirts:</span> 
                        <span className="ml-1">
                          <span className="text-gray-400">38(S)</span> | 
                          <span className="font-bold text-indigo-600 bg-indigo-50 px-1 rounded">40(M) ✓</span> | 
                          <span className="text-gray-400">42(L)</span>
                        </span>
                      </p>
                      <p className="text-sm"><span className="font-medium">Blazers:</span> 
                        <span className="ml-1">
                          <span className="text-gray-400">38R</span> | 
                          <span className="font-bold text-indigo-600 bg-indigo-50 px-1 rounded">40R ✓</span> | 
                          <span className="text-gray-400">42R</span>
                        </span>
                      </p>
                      <p className="text-sm"><span className="font-medium">Trousers:</span> 
                        <span className="ml-1">
                          <span className="text-gray-400">32W</span> | 
                          <span className="font-bold text-indigo-600 bg-indigo-50 px-1 rounded">34W ✓</span> | 
                          <span className="text-gray-400">36W</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Size Guide Note */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 bg-blue-600 rounded mr-2"></div>
                  <span className="font-medium text-blue-800">Legend:</span>
                </div>
                <div className="text-sm text-blue-700 mb-3 space-y-1">
                  <p>• <span className="font-bold bg-blue-100 px-1 rounded">Highlighted sizes ✓</span> = Best fit for your measurements</p>
                  <p>• <span className="text-gray-500">Gray sizes</span> = Available alternatives (may be loose or tight)</p>
                  <p>• All sizes are clickable for detailed information</p>
                </div>
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> These recommendations are based on your body measurements. 
                  Different brands may have slight variations in sizing. We recommend checking the brand's 
                  specific size chart for the most accurate fit.
                </p>
              </div>
            </div>
            
            {/* Additional Recommendations */}
            <div className="mt-8 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Fit Recommendations for Your Body Type
              </h4>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-medium text-gray-900 mb-2">Shirts</h5>
                <h5 className="font-semibold text-gray-900 mb-3">For Athletic Body Type:</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Shirts:</strong> Fitted or slim-fit styles work best to highlight your physique</li>
                  <li>• <strong>T-Shirts:</strong> Regular fit with good shoulder definition</li>
                  <li>• <strong>Pants:</strong> Straight or slim-fit cuts complement your build</li>
                  <li>• <strong>Jackets:</strong> Structured blazers enhance your natural frame</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPage;