'use client';
import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { popularTreks } from '../data/treks';
import type { Trek } from '../data/treks';
import TrekCard from './TrekCard';
import TrekDetail from './TrekDetail';
import CustomTrekModal from './CustomTrekModal';

const TreksSection: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [filteredTreks, setFilteredTreks] = useState(popularTreks);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTrek, setSelectedTrek] = useState<Trek | null>(null);
  const [isCustomTrekModalOpen, setIsCustomTrekModalOpen] = useState(false);

  const difficultyLevels = ['All', 'Easy', 'Moderate', 'Challenging', 'Strenuous'];

  // Select a trek for detail view
  const handleTrekSelect = (trek: Trek) => {
    setSelectedTrek(trek);
  };

  // If a trek is selected, show the detail view
  if (selectedTrek) {
    return <TrekDetail trek={selectedTrek} />;
  }

  const handleFilter = (difficulty: string) => {
    setActiveFilter(difficulty);
    let filtered = popularTreks;
    
    if (difficulty !== 'All') {
      filtered = popularTreks.filter(trek => trek.difficulty === difficulty);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(trek => 
        trek.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trek.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredTreks(filtered);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    let filtered = popularTreks;
    
    if (activeFilter !== 'All') {
      filtered = popularTreks.filter(trek => trek.difficulty === activeFilter);
    }
    
    if (term) {
      filtered = filtered.filter(trek => 
        trek.name.toLowerCase().includes(term.toLowerCase()) ||
        trek.description.toLowerCase().includes(term.toLowerCase())
      );
    }
    
    setFilteredTreks(filtered);
  };

  return (
    <section id="treks" className={`scroll-offset-mobile py-12 md:py-20 transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-4 md:mb-6">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-100' : 'text-gray-900'
            }`}>
              Popular <span className="text-blue-600">Destinations</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover Nepal's most spectacular trekking routes with expert guidance and personalized service
            </p>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search treks..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Difficulty Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-600" size={20} />
              <div className="flex flex-wrap gap-2">
                {difficultyLevels.map((level) => (
                  <button
                    key={level}
                    onClick={() => handleFilter(level)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === level
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{filteredTreks.length}</span> trek{filteredTreks.length !== 1 ? 's' : ''}
              {activeFilter !== 'All' && (
                <span> in <span className="font-semibold">{activeFilter}</span> difficulty</span>
              )}
              {searchTerm && (
                <span> for "<span className="font-semibold">{searchTerm}</span>"</span>
              )}
            </p>
          </div>

          {/* Treks Grid */}
          {filteredTreks.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTreks.map((trek) => (
                <TrekCard key={trek.id} trek={trek} onExplore={() => handleTrekSelect(trek)} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No treks found</h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-2xl">
              <h3 className="font-heading text-responsive-2xl font-bold mb-4">
                Can't find your perfect trek?
              </h3>
              <p className="font-body text-responsive-base text-blue-100 mb-6 max-w-2xl mx-auto">
                We offer custom trekking packages tailored to your preferences, fitness level, 
                and time constraints. Let us create your dream Himalayan adventure.
              </p>
              <button 
                onClick={() => setIsCustomTrekModalOpen(true)}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-heading font-semibold hover:bg-blue-50 transition-colors"
              >
                Design Custom Trek
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Trek Modal */}
      <CustomTrekModal 
        isOpen={isCustomTrekModalOpen}
        onClose={() => setIsCustomTrekModalOpen(false)}
        title="Design Your Custom Trek"
        subtitle="Create a personalized Himalayan adventure that matches your dreams"
      />
    </section>
  );
};

export default TreksSection;
