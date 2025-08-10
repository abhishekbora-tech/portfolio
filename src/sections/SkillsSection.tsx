import React from 'react';
import { BookOpen, Brain } from 'lucide-react';

const skills = [
  { 
    icon: <BookOpen size={24} />, 
    name: 'Research & Development', 
    description: 'Conducting in-depth investigations and developing innovative solutions through systematic research methodologies.',
    level: 90,
  },
  { 
    icon: <Brain size={24} />, 
    name: 'Critical Thinking', 
    description: 'Analyzing complex problems objectively and making well-reasoned decisions through logical evaluation.',
    level: 88,
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
            Core competencies that drive innovation and meaningful problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto animate-on-scroll">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 group hover:bg-gray-800/50 relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-indigo-600/10 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-indigo-600/20 rounded-lg text-indigo-400 mr-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                
                <p className="text-gray-400 text-sm mb-8 flex-grow leading-relaxed">
                  {skill.description}
                </p>
                
                <div className="mt-auto">
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full group-hover:animate-pulse transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">Proficiency Level</p>
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