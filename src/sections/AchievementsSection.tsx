import React from 'react';
import { PenTool, Briefcase, Rocket } from 'lucide-react';

const achievements = [
  {
    year: '2025',
    title: 'First App Launch',
    description: 'Successfully launched my first mobile application, marking a significant milestone in my development journey.',
    icon: <Rocket size={18} />,
    highlight: true,
  },
  {
    year: '2020',
    title: 'Started Freelancing',
    description: 'Began my freelance career, working with diverse clients and expanding my professional network.',
    icon: <Briefcase size={18} />,
    highlight: false,
  },
  {
    year: '2018',
    title: 'Started Blogging',
    description: 'Launched my blogging journey, sharing insights and knowledge with the community.',
    icon: <PenTool size={18} />,
    highlight: true,
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-600/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-600/10 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 animate-on-scroll">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              Achievements in Life
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-on-scroll">
            Key milestones that mark my journey of growth and professional development.
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 relative">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="md:flex items-center animate-on-scroll"
                data-delay={index * 100}
              >
                {/* For desktop, alternate left and right */}
                <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 order-last'}`}>
                  <div 
                    className={`
                      p-6 rounded-xl backdrop-blur-sm border transition-all duration-300 group hover:shadow-lg
                      ${achievement.highlight 
                        ? 'bg-indigo-900/20 border-indigo-500/30 hover:shadow-indigo-500/10' 
                        : 'bg-gray-900/50 border-gray-800 hover:shadow-purple-500/10'
                      }
                    `}
                  >
                    <div className="flex items-center justify-end mb-3">
                      <span className="text-sm font-mono bg-gray-800 px-3 py-1 rounded text-gray-400">
                        {achievement.year}
                      </span>
                    </div>
                    <h3 className={`text-xl font-semibold mb-2 ${achievement.highlight ? 'text-indigo-300' : 'text-white'}`}>
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center z-10">
                  <div 
                    className={`
                      w-12 h-12 rounded-full flex items-center justify-center
                      ${achievement.highlight 
                        ? 'bg-indigo-900/50 text-indigo-300 border-indigo-500/50' 
                        : 'bg-gray-800 text-gray-300 border-gray-700'
                      }
                      border-2 shadow-lg
                    `}
                  >
                    {achievement.icon}
                  </div>
                </div>
                
                {/* For desktop, alternate left and right */}
                <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'pl-12 order-last' : 'pr-12 text-right'}`}>
                  <div 
                    className={`
                      p-6 rounded-xl backdrop-blur-sm border transition-all duration-300 group hover:shadow-lg
                      ${achievement.highlight 
                        ? 'bg-indigo-900/20 border-indigo-500/30 hover:shadow-indigo-500/10' 
                        : 'bg-gray-900/50 border-gray-800 hover:shadow-purple-500/10'
                      }
                    `}
                  >
                    <div className="flex items-center mb-3">
                      <span className="text-sm font-mono bg-gray-800 px-3 py-1 rounded text-gray-400">
                        {achievement.year}
                      </span>
                    </div>
                    <h3 className={`text-xl font-semibold mb-2 ${achievement.highlight ? 'text-indigo-300' : 'text-white'}`}>
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
                
                {/* Mobile version (stacked) */}
                <div className="md:hidden w-full flex">
                  <div className="mr-4">
                    <div 
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center
                        ${achievement.highlight 
                          ? 'bg-indigo-900/50 text-indigo-300 border-indigo-500/50' 
                          : 'bg-gray-800 text-gray-300 border-gray-700'
                        }
                        border-2 shadow-lg
                      `}
                    >
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div 
                      className={`
                        p-4 rounded-xl backdrop-blur-sm border transition-all duration-300
                        ${achievement.highlight 
                          ? 'bg-indigo-900/20 border-indigo-500/30' 
                          : 'bg-gray-900/50 border-gray-800'
                        }
                      `}
                    >
                      <div className="flex items-center mb-2">
                        <span className="text-xs font-mono bg-gray-800 px-2 py-0.5 rounded text-gray-400">
                          {achievement.year}
                        </span>
                      </div>
                      <h3 className={`text-lg font-semibold mb-1 ${achievement.highlight ? 'text-indigo-300' : 'text-white'}`}>
                        {achievement.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;