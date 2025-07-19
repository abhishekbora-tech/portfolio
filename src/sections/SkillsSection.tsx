import React from 'react';
import { Code, Palette, Database, Globe, Cpu, LineChart, BookOpen, Zap } from 'lucide-react';

const skills = [
  { 
    icon: <Code size={24} />, 
    name: 'Development', 
    description: 'Expert in multiple programming languages and frameworks with a focus on creating clean, efficient code.',
    level: 90,
  },
  { 
    icon: <Palette size={24} />, 
    name: 'Design', 
    description: 'Creating visually stunning interfaces that prioritize user experience and accessibility.',
    level: 85,
  },
  { 
    icon: <Database size={24} />, 
    name: 'Data Science', 
    description: 'Analyzing complex datasets to extract meaningful insights and drive informed decisions.',
    level: 80,
  },
  { 
    icon: <Globe size={24} />, 
    name: 'Languages', 
    description: 'Fluent in multiple languages, enabling effective communication across cultural boundaries.',
    level: 75,
  },
  { 
    icon: <Cpu size={24} />, 
    name: 'AI & ML', 
    description: 'Developing intelligent systems that learn and adapt through advanced algorithms.',
    level: 82,
  },
  { 
    icon: <LineChart size={24} />, 
    name: 'Analytics', 
    description: 'Transforming raw data into actionable insights through comprehensive analysis.',
    level: 88,
  },
  { 
    icon: <BookOpen size={24} />, 
    name: 'Research', 
    description: 'Conducting in-depth investigations to expand knowledge and drive innovation.',
    level: 78,
  },
  { 
    icon: <Zap size={24} />, 
    name: 'Leadership', 
    description: 'Guiding teams to achieve exceptional results through vision, empathy, and strategic thinking.',
    level: 85,
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-indigo-900/10 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 animate-on-scroll">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-on-scroll">
            A diverse skill set developed through years of dedicated practice, continuous learning, and real-world application.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-on-scroll">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 group hover:bg-gray-800/50 relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-indigo-600/10 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-600/20 rounded-lg text-indigo-400 mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {skill.description}
                </p>
                
                <div className="mt-auto">
                  <div className="w-full bg-gray-800 rounded-full h-1.5">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 h-1.5 rounded-full group-hover:animate-pulse"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Proficiency Level</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;