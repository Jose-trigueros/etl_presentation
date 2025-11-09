import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Database, Wand2, Upload, FileSpreadsheet, Download, AlertCircle, CheckCircle, BarChart3, TrendingUp, Filter, RefreshCw } from 'lucide-react';

const NetflixPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      type: 'title',
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center px-12">
          <div className="mb-8 flex gap-6 items-center justify-center">
            <Database size={80} className="text-red-500" />
            <div className="text-6xl text-red-500">→</div>
            <Wand2 size={80} className="text-red-500" />
            <div className="text-6xl text-red-500">→</div>
            <TrendingUp size={80} className="text-red-500" />
          </div>
          <h1 className="text-6xl font-bold text-white mb-8 leading-tight">
            ETL in Action: Preparing Netflix's 2021 Catalog for Analysis
          </h1>
          <div className="text-2xl text-gray-300 mb-12">
            Jose Trigueros | BABI 9010 | IIBA Guide to Data Analytics – Technique 3.10
          </div>
          <div className="text-xl text-red-500 font-semibold max-w-3xl">
            ETL is the process of Extracting, Transforming, and Loading data to turn raw, messy information into analysis-ready insights.
          </div>
        </div>
      )
    },
    // Slide 2: ETL Overview
    {
      type: 'content',
      title: 'ETL Overview – Extract, Transform, and Load',
      content: (
        <div className="space-y-8">
          <div className="space-y-6 text-xl">
            <div className="flex items-start">
              <CheckCircle className="text-red-500 mr-4 flex-shrink-0 mt-1" size={24} />
              <span>Converts raw data into consistent, reliable information</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-red-500 mr-4 flex-shrink-0 mt-1" size={24} />
              <span>Ensures accuracy and completeness before analysis</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-red-500 mr-4 flex-shrink-0 mt-1" size={24} />
              <span>Foundation of all analytics and business intelligence work</span>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-2xl text-red-500 font-semibold italic">Turning messy data into meaningful insights</p>
          </div>
          <div className="flex items-center justify-center gap-4 mt-12">
            <div className="text-center">
              <div className="bg-red-600 p-6 rounded-lg mb-2">
                <Database size={48} className="mx-auto" />
              </div>
              <div className="text-lg font-bold">Extract</div>
            </div>
            <div className="text-red-500 text-4xl animate-pulse">→</div>
            <div className="text-center">
              <div className="bg-red-600 p-6 rounded-lg mb-2">
                <Wand2 size={48} className="mx-auto" />
              </div>
              <div className="text-lg font-bold">Transform</div>
            </div>
            <div className="text-red-500 text-4xl animate-pulse">→</div>
            <div className="text-center">
              <div className="bg-red-600 p-6 rounded-lg mb-2">
                <Upload size={48} className="mx-auto" />
              </div>
              <div className="text-lg font-bold">Load</div>
            </div>
            <div className="text-red-500 text-4xl animate-pulse">→</div>
            <div className="text-center">
              <div className="bg-red-600 p-6 rounded-lg mb-2">
                <TrendingUp size={48} className="mx-auto" />
              </div>
              <div className="text-lg font-bold">Insights</div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 3: The Dataset
    {
      type: 'content',
      title: 'Netflix 2021 Catalog Dataset',
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-red-500" size={32} />
                <span className="font-bold text-xl">Dataset Size</span>
              </div>
              <div className="text-4xl font-bold text-red-500">8,800</div>
              <div className="text-gray-400">titles</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="text-red-500" size={32} />
                <span className="font-bold text-xl">Variables</span>
              </div>
              <div className="text-4xl font-bold text-red-500">12</div>
              <div className="text-gray-400">attributes</div>
            </div>
          </div>
          
          <div className="space-y-4 text-lg">
            <div className="flex items-start bg-gray-800 p-4 rounded-lg">
              <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
              <span><strong>Attributes:</strong> director, cast, country, release year, duration, rating, genre</span>
            </div>
            <div className="flex items-start bg-gray-800 p-4 rounded-lg">
              <AlertCircle className="text-red-500 mr-3 flex-shrink-0 mt-1" size={20} />
              <span><strong>Issues:</strong> missing values, inconsistent formats, misplaced data</span>
            </div>
            <div className="flex items-start bg-gray-800 p-4 rounded-lg">
              <TrendingUp className="text-blue-500 mr-3 flex-shrink-0 mt-1" size={20} />
              <span><strong>Goal:</strong> Clean and analyze to compare Movies vs TV Shows</span>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border-2 border-red-500">
            <div className="grid grid-cols-4 gap-4 text-sm font-mono">
              <div className="font-bold border-b border-gray-600 pb-2 flex items-center gap-2">
                <FileSpreadsheet size={16} className="text-red-500" />
                Title
              </div>
              <div className="font-bold border-b border-gray-600 pb-2">Director</div>
              <div className="font-bold border-b border-gray-600 pb-2">Country</div>
              <div className="font-bold border-b border-gray-600 pb-2">Rating</div>
              <div>Stranger Things</div>
              <div className="text-red-400 flex items-center gap-1">
                <AlertCircle size={14} /> NULL
              </div>
              <div>United States</div>
              <div>TV-14</div>
              <div>The Crown</div>
              <div>Peter Morgan</div>
              <div className="text-red-400 flex items-center gap-1">
                <AlertCircle size={14} /> NULL
              </div>
              <div>TV-MA</div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 4: Extract
    {
      type: 'content',
      title: 'Step 1 – Extract',
      content: (
        <div className="space-y-8">
          <div className="flex justify-center mb-12">
            <div className="relative">
              <Database size={120} className="text-red-500" />
              <div className="absolute -right-4 -top-4 bg-red-600 rounded-full p-2">
                <Download size={24} />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start bg-gray-800 p-6 rounded-lg border-l-4 border-red-500">
              <div className="bg-red-600 rounded-full p-3 mr-4 flex-shrink-0">
                <span className="font-bold text-xl">1</span>
              </div>
              <div>
                <div className="font-bold text-xl mb-2">Download from Source</div>
                <span className="text-gray-300">Downloaded dataset (CSV) from Kaggle</span>
              </div>
            </div>
            
            <div className="flex items-start bg-gray-800 p-6 rounded-lg border-l-4 border-red-500">
              <div className="bg-red-600 rounded-full p-3 mr-4 flex-shrink-0">
                <span className="font-bold text-xl">2</span>
              </div>
              <div>
                <div className="font-bold text-xl mb-2">Import & Verify</div>
                <span className="text-gray-300">Imported into Excel to verify column structure and data types</span>
              </div>
            </div>
            
            <div className="flex items-start bg-gray-800 p-6 rounded-lg border-l-4 border-red-500">
              <div className="bg-red-600 rounded-full p-3 mr-4 flex-shrink-0">
                <span className="font-bold text-xl">3</span>
              </div>
              <div>
                <div className="font-bold text-xl mb-2">Identify Issues</div>
                <span className="text-gray-300">Logged duplicates, missing values, and misaligned fields</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl text-red-500 font-semibold italic">Pulling raw data into a usable workspace</p>
          </div>

          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center transform hover:scale-110 transition-transform">
              <div className="bg-gradient-to-br from-red-600 to-red-800 px-8 py-6 rounded-lg shadow-lg">
                <Database size={40} className="mx-auto mb-2" />
                <div className="text-xl font-bold">Kaggle</div>
              </div>
            </div>
            <div className="text-red-500 text-4xl">→</div>
            <div className="text-center transform hover:scale-110 transition-transform">
              <div className="bg-gradient-to-br from-red-600 to-red-800 px-8 py-6 rounded-lg shadow-lg">
                <FileSpreadsheet size={40} className="mx-auto mb-2" />
                <div className="text-xl font-bold">CSV</div>
              </div>
            </div>
            <div className="text-red-500 text-4xl">→</div>
            <div className="text-center transform hover:scale-110 transition-transform">
              <div className="bg-gradient-to-br from-red-600 to-red-800 px-8 py-6 rounded-lg shadow-lg">
                <BarChart3 size={40} className="mx-auto mb-2" />
                <div className="text-xl font-bold">Excel</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 5: Transform
    {
      type: 'content',
      title: 'Step 2 – Transform',
      content: (
        <div className="space-y-6">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Wand2 size={100} className="text-red-500 animate-pulse" />
              <RefreshCw size={40} className="text-yellow-500 absolute -right-2 -bottom-2 animate-spin" style={{animationDuration: '3s'}} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
              <div className="flex items-center gap-2 mb-2">
                <Filter size={20} className="text-yellow-500" />
                <span className="font-bold">Impute Missing Data</span>
              </div>
              <p className="text-sm text-gray-300">"Unknown", "Not Listed"</p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle size={20} className="text-green-500" />
                <span className="font-bold">Standardize Formats</span>
              </div>
              <p className="text-sm text-gray-300">Date and duration formats</p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle size={20} className="text-blue-500" />
                <span className="font-bold">Correct Misclassified</span>
              </div>
              <p className="text-sm text-gray-300">Ratings vs duration</p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-center gap-2 mb-2">
                <Database size={20} className="text-purple-500" />
                <span className="font-bold">Extract Main Genre</span>
              </div>
              <p className="text-sm text-gray-300">From multi-category fields</p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-pink-500 col-span-2">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={20} className="text-pink-500" />
                <span className="font-bold">Normalize Duration</span>
              </div>
              <p className="text-sm text-gray-300">Z-score for comparability</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-2xl text-red-500 font-semibold italic">Cleaning and standardizing data for accuracy</p>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-lg border-2 border-red-500">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <AlertCircle className="text-red-500" size={32} />
                <span className="text-xl font-bold">Missing Values Resolved</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-red-500">4,307</span>
                <span className="text-2xl">→</span>
                <span className="text-3xl font-bold text-green-500">0</span>
                <CheckCircle className="text-green-500" size={32} />
              </div>
            </div>
            <div className="relative h-8 bg-gray-700 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-green-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-400">
              <span>Before: Messy Data</span>
              <span>After: Clean Data ✓</span>
            </div>
          </div>
        </div>
      )
    },
    // Slide 6: Load
    {
      type: 'content',
      title: 'Step 3 – Load',
      content: (
        <div className="space-y-8">
          <div className="flex justify-center mb-12">
            <div className="relative">
              <Upload size={120} className="text-red-500" />
              <div className="absolute -right-4 -bottom-4">
                <div className="bg-green-500 rounded-full p-3 animate-bounce">
                  <CheckCircle size={32} />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border-l-4 border-green-500">
              <div className="bg-green-600 rounded-full p-3 mr-4 flex-shrink-0">
                <Database size={24} />
              </div>
              <div>
                <div className="font-bold text-xl mb-2">Save Clean Dataset</div>
                <span className="text-gray-300">Saved to structured "Clean" sheet</span>
              </div>
            </div>
            
            <div className="flex items-start bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border-l-4 border-blue-500">
              <div className="bg-blue-600 rounded-full p-3 mr-4 flex-shrink-0">
                <BarChart3 size={24} />
              </div>
              <div>
                <div className="font-bold text-xl mb-2">Link to Analytics Tools</div>
                <span className="text-gray-300">Connected to pivot tables and Power BI dashboards</span>
              </div>
            </div>
            
            <div className="flex items-start bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border-l-4 border-red-500">
              <div className="bg-red-600 rounded-full p-3 mr-4 flex-shrink-0">
                <CheckCircle size={24} />
              </div>
              <div>
                <div className="font-bold text-xl mb-2">Single Source of Truth</div>
                <span className="text-gray-300">Created reliable foundation for analysis</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl text-red-500 font-semibold italic">Delivering analysis-ready data</p>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="text-center transform hover:scale-110 transition-transform">
              <div className="bg-gradient-to-br from-green-600 to-green-800 p-6 rounded-lg shadow-2xl">
                <Database size={48} className="mx-auto mb-2" />
                <div className="text-lg font-bold">Clean Dataset</div>
              </div>
            </div>
            <div className="text-red-500 text-4xl animate-pulse">→</div>
            <div className="text-center transform hover:scale-110 transition-transform">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-lg shadow-2xl">
                <BarChart3 size={48} className="mx-auto mb-2" />
                <div className="text-lg font-bold">Power BI</div>
              </div>
            </div>
            <div className="text-red-500 text-4xl animate-pulse">→</div>
            <div className="text-center transform hover:scale-110 transition-transform">
              <div className="bg-gradient-to-br from-red-600 to-red-800 p-6 rounded-lg shadow-2xl">
                <TrendingUp size={48} className="mx-auto mb-2" />
                <div className="text-lg font-bold">Insights</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 7: Conclusion
    {
      type: 'content',
      title: 'Conclusion & Key Takeaways',
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border-2 border-red-500 transform hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-green-500" size={32} />
                <span className="font-bold text-lg">Data Reliability</span>
              </div>
              <p className="text-gray-300">ETL ensures consistency and trust</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border-2 border-red-500 transform hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-blue-500" size={32} />
                <span className="font-bold text-lg">Foundation</span>
              </div>
              <p className="text-gray-300">Accurate analytics & decision-making</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border-2 border-red-500 transform hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-purple-500" size={32} />
                <span className="font-bold text-lg">Successful Application</span>
              </div>
              <p className="text-gray-300">Applied to Netflix's 2021 dataset</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border-2 border-red-500 transform hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="text-yellow-500" size={32} />
                <span className="font-bold text-lg">Credible Insights</span>
              </div>
              <p className="text-gray-300">Clean data = reliable results</p>
            </div>
          </div>

          <div className="text-center mt-12 mb-8">
            <div className="inline-block bg-gradient-to-r from-red-600 to-red-800 p-8 rounded-2xl shadow-2xl">
              <p className="text-4xl font-bold mb-2">Good analytics starts with good data.</p>
              <div className="h-1 bg-white mt-4 rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8">
            <div className="relative">
              <div className="w-40 h-40 rounded-full border-4 border-red-500 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
                <div className="text-center">
                  <RefreshCw size={48} className="mx-auto mb-2 text-red-500 animate-spin" style={{animationDuration: '4s'}} />
                  <div className="text-lg font-bold">ETL Cycle</div>
                </div>
              </div>
              <Database className="absolute -top-4 -right-4 text-red-500 bg-gray-900 rounded-full p-2" size={32} />
              <Wand2 className="absolute -bottom-4 -right-4 text-red-500 bg-gray-900 rounded-full p-2" size={32} />
              <Upload className="absolute -bottom-4 -left-4 text-red-500 bg-gray-900 rounded-full p-2" size={32} />
              <TrendingUp className="absolute -top-4 -left-4 text-red-500 bg-gray-900 rounded-full p-2" size={32} />
            </div>
          </div>
          
          <div className="h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent mt-8 rounded-full"></div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full h-screen bg-black text-white flex flex-col">
      {/* Main Slide Area */}
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="w-full h-full max-w-7xl">
            {slides[currentSlide].type === 'title' ? (
              slides[currentSlide].content
            ) : (
              <div className="h-full flex flex-col">
                <h2 className="text-4xl font-bold mb-8 text-red-500 border-b-2 border-red-500 pb-4">
                  {slides[currentSlide].title}
                </h2>
                <div className="flex-1 overflow-auto">
                  {slides[currentSlide].content}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="h-20 bg-gray-900 flex items-center justify-between px-8 border-t border-gray-800">
        <button
          onClick={prevSlide}
          className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentSlide === 0}
        >
          <ChevronLeft size={24} />
          Previous
        </button>
        
        <div className="text-gray-400 text-lg">
          Slide {currentSlide + 1} of {slides.length}
        </div>
        
        <button
          onClick={nextSlide}
          className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentSlide === slides.length - 1}
        >
          Next
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default NetflixPresentation;
