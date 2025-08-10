import React, { useState } from 'react';
import { Users, User, Book, Heart, Star } from 'lucide-react';

interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  description: string;
  image: string;
  special?: string;
  color: string;
  icon: React.ReactNode;
}

const familyMembers: FamilyMember[] = [
  {
    id: 'self',
    name: 'Abhishek Bora',
    relation: 'Self',
    description: 'Digital artist and creative thinker with a passion for technology and design.',
    image: 'https://ik.imagekit.io/abhishekbora/Minimalist%20Before%20After%20Salon%20&%20Makeup%20Instagram%20Post%20(Instagram%20Post%20(45)).png?updatedAt=1747550847234',
    color: 'indigo',
    icon: <User size={20} />
  },
  {
    id: 'father',
    name: 'Ananda Ch Bora',
    relation: 'Father',
    description: 'My father was not just a banker at SBI, but the heart of our home. He was a man of principles, soft-spoken yet strong-willed. His kindness and wisdom continue to guide us even today. Every good part of me has his imprint.',
    image: 'https://ik.imagekit.io/abhishekbora/Screenshot_18-5-2025_102647_photos.google.com.jpg?updatedAt=1747550916105',
    special: 'A book is coming about his educational journey',
    color: 'purple',
    icon: <Book size={20} />
  },
  {
    id: 'mother',
    name: 'Diprekha Bora',
    relation: 'Mother',
    description: 'My mother is the pillar of our family, currently teaching at Pohumora High School. She raised us with love, strength, and discipline. Her dedication to both teaching and motherhood makes her the quiet hero of our story.',
    image: 'https://ik.imagekit.io/abhishekbora/ma.png?updatedAt=1747550916446',
    color: 'pink',
    icon: <Heart size={20} />
  },
  {
    id: 'sister',
    name: 'Neeharika Bora',
    relation: 'Sister',
    description: 'My sister is a professional dentist and a woman of ambition. From childhood, she\'s been both my friend and companion. Her journey reflects hard work, care, and confidence — and she never forgets to smile through it all.',
    image: 'https://ik.imagekit.io/abhishekbora/Screenshot_18-5-2025_10263_photos.google.com.jpg?updatedAt=1747550915996',
    color: 'blue',
    icon: <Star size={20} />
  }
];

const FamilySection = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>('self');
  
  const handleMemberClick = (id: string) => {
    setSelectedMember(id === selectedMember ? null : id);
  };
  
  const getColorClasses = (color: string, variant: 'border' | 'bg' | 'text' | 'shadow') => {
    const colorMap = {
      indigo: {
        border: 'border-indigo-500',
        bg: 'bg-indigo-900/20',
        text: 'text-indigo-300',
        shadow: 'shadow-indigo-500/20'
      },
      purple: {
        border: 'border-purple-500',
        bg: 'bg-purple-900/20',
        text: 'text-purple-300',
        shadow: 'shadow-purple-500/20'
      },
      pink: {
        border: 'border-pink-500',
        bg: 'bg-pink-900/20',
        text: 'text-pink-300',
        shadow: 'shadow-pink-500/20'
      },
      blue: {
        border: 'border-blue-500',
        bg: 'bg-blue-900/20',
        text: 'text-blue-300',
        shadow: 'shadow-blue-500/20'
      }
    };
    return colorMap[color as keyof typeof colorMap]?.[variant] || colorMap.indigo[variant];
  };
  
  return (
    <section id="family" className="py-20 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-indigo-600/10 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 animate-on-scroll">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              My Family
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-on-scroll">
            The extraordinary people who have shaped my journey and continue to inspire me every day.
          </p>
        </div>
        
        <div className="animate-on-scroll">
          {/* Family Tree Visualization */}
          <div className="relative mb-12">
            {/* Desktop Layout */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Central Self Node */}
                <div className="flex justify-center mb-16">
                  <div 
                    className={`
                      relative cursor-pointer transition-all duration-500 group
                      ${selectedMember === 'self' ? 'scale-110 z-20' : 'hover:scale-105 z-10'}
                    `}
                    onClick={() => handleMemberClick('self')}
                  >
                    <div className={`w-32 h-32 rounded-full overflow-hidden border-4 ${getColorClasses('indigo', 'border')} ${getColorClasses('indigo', 'shadow')} shadow-lg relative`}>
                      <img 
                        src={familyMembers.find(m => m.id === 'self')?.image}
                        alt="Self" 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="absolute -inset-3 bg-indigo-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10"></div>
                    <div className="mt-4 text-center">
                      <h3 className="font-bold text-xl text-indigo-300">Abhishek Bora</h3>
                      <p className="text-gray-400 text-sm">Self</p>
                    </div>
                  </div>
                </div>
                
                {/* Connection Lines */}
                <div className="absolute top-16 left-1/2 w-0.5 h-20 bg-gradient-to-b from-indigo-500/50 to-transparent transform -translate-x-1/2"></div>
                <div className="absolute top-36 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
                <div className="absolute top-36 left-1/4 w-0.5 h-16 bg-gradient-to-b from-indigo-500/50 to-transparent"></div>
                <div className="absolute top-36 right-1/4 w-0.5 h-16 bg-gradient-to-b from-indigo-500/50 to-transparent"></div>
                <div className="absolute top-36 left-1/2 w-0.5 h-16 bg-gradient-to-b from-indigo-500/50 to-transparent transform -translate-x-1/2"></div>
                
                {/* Family Members */}
                <div className="flex justify-between items-start">
                  {familyMembers.filter(m => m.id !== 'self').map((member, index) => (
                    <div 
                      key={member.id}
                      className={`
                        relative cursor-pointer transition-all duration-500 group
                        ${selectedMember === member.id ? 'scale-110 z-20' : 'hover:scale-105 z-10'}
                      `}
                      onClick={() => handleMemberClick(member.id)}
                    >
                      <div className={`w-24 h-24 rounded-full overflow-hidden border-4 ${getColorClasses(member.color, 'border')} ${getColorClasses(member.color, 'shadow')} shadow-lg relative`}>
                        <img 
                          src={member.image}
                          alt={member.name} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        {member.special && (
                          <div className={`absolute top-1 right-1 w-6 h-6 ${getColorClasses(member.color, 'bg')} rounded-full flex items-center justify-center`}>
                            {member.icon}
                          </div>
                        )}
                      </div>
                      <div className={`absolute -inset-3 ${getColorClasses(member.color, 'bg')} rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10`}></div>
                      <div className="mt-4 text-center">
                        <h3 className={`font-semibold text-lg ${getColorClasses(member.color, 'text')}`}>{member.name}</h3>
                        <p className="text-gray-400 text-sm">{member.relation}</p>
                        {member.special && (
                          <div className={`mt-2 inline-flex items-center px-2 py-1 rounded-full ${getColorClasses(member.color, 'bg')} ${getColorClasses(member.color, 'border')} border text-xs ${getColorClasses(member.color, 'text')}`}>
                            {member.icon}
                            <span className="ml-1">Special</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Mobile & Tablet Layout */}
            <div className="lg:hidden">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {familyMembers.map((member) => (
                  <div 
                    key={member.id}
                    className={`
                      ${getColorClasses(member.color, 'bg')} backdrop-blur-sm border rounded-xl p-4 cursor-pointer transition-all duration-300 group
                      ${selectedMember === member.id 
                        ? `${getColorClasses(member.color, 'border')} scale-105 ${getColorClasses(member.color, 'shadow')} shadow-lg` 
                        : 'border-gray-800 hover:border-gray-600'
                      }
                    `}
                    onClick={() => handleMemberClick(member.id)}
                  >
                    <div className="flex flex-col items-center">
                      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 ${getColorClasses(member.color, 'border')} mb-3 relative`}>
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                        {member.special && (
                          <div className={`absolute -top-1 -right-1 w-5 h-5 ${getColorClasses(member.color, 'bg')} rounded-full flex items-center justify-center border-2 border-gray-900`}>
                            <Book size={10} className={getColorClasses(member.color, 'text')} />
                          </div>
                        )}
                      </div>
                      <h3 className={`font-semibold text-center text-sm md:text-base ${getColorClasses(member.color, 'text')}`}>{member.name}</h3>
                      <p className="text-xs text-gray-400 text-center">{member.relation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Selected Member Details */}
          {selectedMember && (
            <div className="animate-fade-up">
              {familyMembers.filter(m => m.id === selectedMember).map(member => (
                <div 
                  key={member.id}
                  className={`${getColorClasses(member.color, 'bg')} backdrop-blur-sm border ${getColorClasses(member.color, 'border')} rounded-2xl p-6 md:p-8 ${getColorClasses(member.color, 'shadow')} shadow-lg`}
                >
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                    <div className="lg:w-1/3 flex justify-center">
                      <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 ${getColorClasses(member.color, 'border')} ${getColorClasses(member.color, 'shadow')} shadow-xl relative`}>
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        {member.special && (
                          <div className={`absolute top-2 right-2 w-8 h-8 ${getColorClasses(member.color, 'bg')} rounded-full flex items-center justify-center border-2 border-gray-900`}>
                            {member.icon}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="lg:w-2/3 text-center lg:text-left">
                      <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${getColorClasses(member.color, 'text')}`}>{member.name}</h3>
                      <p className="text-gray-300 text-lg mb-4">{member.relation}</p>
                      {member.special && (
                        <div className={`mb-6 inline-flex items-center px-4 py-2 rounded-full ${getColorClasses(member.color, 'bg')} border ${getColorClasses(member.color, 'border')} ${getColorClasses(member.color, 'text')}`}>
                          {member.icon}
                          <span className="ml-2 font-medium">{member.special}</span>
                        </div>
                      )}
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FamilySection;