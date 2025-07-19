import React, { useState } from 'react';
import { MapPin, ChevronDown, ChevronRight } from 'lucide-react';

interface City {
  name: string;
  description?: string;
}

interface Country {
  id: string;
  name: string;
  flag: string;
  cities: City[];
  description: string;
}

const travelData: Country[] = [
  {
    id: 'thailand',
    name: 'Thailand',
    flag: '🇹🇭',
    description: 'Land of smiles and vibrant culture',
    cities: [
      { 
        name: 'Pattaya', 
        description: 'Coastal paradise with stunning beaches and vibrant nightlife' 
      },
      { 
        name: 'Bangkok', 
        description: 'Bustling metropolis blending ancient temples with modern energy' 
      }
    ]
  },
  {
    id: 'india',
    name: 'India',
    flag: '🇮🇳',
    description: 'My homeland with diverse landscapes and rich heritage',
    cities: [
      { 
        name: 'Assam (Current Home)', 
        description: 'The heart of Northeast India, where my roots run deep' 
      },
      { 
        name: 'Guwahati', 
        description: 'Gateway to the Northeast, bustling with life and culture' 
      },
      { 
        name: 'Tawang, Arunachal Pradesh', 
        description: 'Mystical mountain town with breathtaking monasteries' 
      },
      { 
        name: 'Kolkata, West Bengal', 
        description: 'Cultural capital with intellectual heritage and artistic soul' 
      },
      { 
        name: 'Bengaluru, Karnataka', 
        description: 'Silicon Valley of India, where tradition meets innovation' 
      },
      { 
        name: 'Mysore, Karnataka', 
        description: 'Royal city of palaces and timeless elegance' 
      },
      { 
        name: 'Shillong, Meghalaya', 
        description: 'Scotland of the East with rolling hills and musical heritage' 
      }
    ]
  }
];

const TravelSection = () => {
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);
  
  const toggleCountry = (countryId: string) => {
    setExpandedCountry(expandedCountry === countryId ? null : countryId);
  };
  
  return (
    <section id="travel" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-purple-600/10 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 animate-on-scroll">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              Places I Have Travelled
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-on-scroll">
            Journeys across cultures and landscapes, each destination adding depth to my perspective.
          </p>
        </div>
        
        <div className="animate-on-scroll max-w-3xl mx-auto">
          <div className="space-y-6">
            {travelData.map((country) => (
              <div 
                key={country.id}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
              >
                {/* Country Header */}
                <button
                  onClick={() => toggleCountry(country.id)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-800/30 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">{country.flag}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{country.name}</h3>
                      <p className="text-gray-400 text-sm">{country.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                      {country.cities.length} {country.cities.length === 1 ? 'place' : 'places'}
                    </span>
                    {expandedCountry === country.id ? (
                      <ChevronDown size={20} className="text-indigo-400" />
                    ) : (
                      <ChevronRight size={20} className="text-gray-400" />
                    )}
                  </div>
                </button>
                
                {/* Cities List */}
                <div className={`transition-all duration-500 ease-in-out ${
                  expandedCountry === country.id 
                    ? 'max-h-[1000px] opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="border-t border-gray-800">
                    {country.cities.map((city, index) => (
                      <div 
                        key={index}
                        className="p-4 border-b border-gray-800/50 last:border-b-0 hover:bg-gray-800/20 transition-colors duration-300 group"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="mt-1">
                            <MapPin size={16} className="text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-indigo-200 group-hover:text-indigo-100 transition-colors duration-300">
                              {city.name}
                            </h4>
                            {city.description && (
                              <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                                {city.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Travel Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-indigo-900/20 backdrop-blur-sm border border-indigo-500/30 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-indigo-300">2</div>
              <div className="text-xs text-gray-400">Countries</div>
            </div>
            <div className="bg-purple-900/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-purple-300">9</div>
              <div className="text-xs text-gray-400">Cities</div>
            </div>
            <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-300">7</div>
              <div className="text-xs text-gray-400">States</div>
            </div>
            <div className="bg-pink-900/20 backdrop-blur-sm border border-pink-500/30 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-pink-300">∞</div>
              <div className="text-xs text-gray-400">Memories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelSection;