import React, { useState } from 'react';
import { Users, User, Book } from 'lucide-react';

interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  description: string;
  image: string;
  special?: string;
  parentId?: string;
  position?: 'left' | 'right' | 'center';
}

const familyMembers: FamilyMember[] = [
  {
    id: 'self',
    name: 'Abhishek Bora',
    relation: 'Self',
    description: 'Digital artist and creative thinker with a passion for technology and design.',
    image: 'https://ik.imagekit.io/abhishekbora/Minimalist%20Before%20After%20Salon%20&%20Makeup%20Instagram%20Post%20(Instagram%20Post%20(45)).png?updatedAt=1747550847234',
    position: 'center'
  },
  {
    id: 'father',
    name: 'Ananda Ch Bora',
    relation: 'Father',
    description: 'My father was not just a banker at SBI, but the heart of our home. He was a man of principles, soft-spoken yet strong-willed. His kindness and wisdom continue to guide us even today. Every good part of me has his imprint.',
    image: 'https://ik.imagekit.io/abhishekbora/Screenshot_18-5-2025_102647_photos.google.com.jpg?updatedAt=1747550916105',
    special: 'A book is coming about his educational journey',
    parentId: 'self',
    position: 'left'
  },
  {
    id: 'mother',
    name: 'Diprekha Bora',
    relation: 'Mother',
    description: 'My mother is the pillar of our family, currently teaching at Pohumora High School. She raised us with love, strength, and discipline. Her dedication to both teaching and motherhood makes her the quiet hero of our story.',
    image: 'https://ik.imagekit.io/abhishekbora/ma.png?updatedAt=1747550916446',
    parentId: 'self',
    position: 'right'
  },
  {
    id: 'sister',
    name: 'Neeharika Bora',
    relation: 'Sister',
    description: 'My sister is a professional dentist and a woman of ambition. From childhood, she\'s been both my friend and companion. Her journey reflects hard work, care, and confidence — and she never forgets to smile through it all.',
    image: 'https://ik.imagekit.io/abhishekbora/Screenshot_18-5-2025_10263_photos.google.com.jpg?updatedAt=1747550915996',
    parentId: 'self',
    position: 'right'
  }
];

const FamilySection = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  
  const handleMemberClick = (id: string) => {
    setSelectedMember(id === selectedMember ? null : id);
  };
  
  return (
    <section id="family" className="py-20 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-indigo-600/10 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
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
          <div className="hidden md:block">
            <div className="relative">
              <div className="flex justify-center mb-24">
                <div 
                  className={`
                    relative cursor-pointer transition-all duration-300
                    ${selectedMember === 'self' ? 'scale-110 z-10' : 'hover:scale-105'}
                  `}
                  onClick={() => handleMemberClick('self')}
                >
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg shadow-indigo-500/20">
                    <img 
                      src={familyMembers.find(m => m.id === 'self')?.image}
                      alt="Self" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -inset-2 bg-indigo-500/20 rounded-full blur-xl opacity-70 -z-10"></div>
                  <div className="mt-2 text-center">
                    <h3 className="font-semibold text-lg">Abhishek Bora</h3>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-14 left-1/2 w-0.5 h-24 bg-indigo-500/30"></div>
              <div className="absolute top-14 left-1/4 w-0.5 h-24 bg-indigo-500/30"></div>
              <div className="absolute top-14 left-3/4 w-0.5 h-24 bg-indigo-500/30"></div>
              <div className="absolute top-14 left-1/4 right-1/4 h-0.5 bg-indigo-500/30"></div>
              
              <div className="flex justify-around mb-8">
                <div 
                  className={`
                    relative cursor-pointer transition-all duration-300 
                    ${selectedMember === 'father' ? 'scale-110 z-10' : 'hover:scale-105'}
                  `}
                  onClick={() => handleMemberClick('father')}
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg shadow-purple-500/20 relative">
                    <img 
                      src={familyMembers.find(m => m.id === 'father')?.image}
                      alt="Father" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent flex items-end justify-center pb-1">
                      <Book size={16} className="text-purple-200" />
                    </div>
                  </div>
                  <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-xl opacity-70 -z-10"></div>
                  <div className="mt-2 text-center">
                    <h3 className="font-semibold">Ananda Ch Bora</h3>
                  </div>
                </div>
                
                <div 
                  className={`
                    relative cursor-pointer transition-all duration-300
                    ${selectedMember === 'mother' ? 'scale-110 z-10' : 'hover:scale-105'}
                  `}
                  onClick={() => handleMemberClick('mother')}
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg shadow-indigo-500/20">
                    <img 
                      src={familyMembers.find(m => m.id === 'mother')?.image}
                      alt="Mother" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -inset-2 bg-indigo-500/20 rounded-full blur-xl opacity-70 -z-10"></div>
                  <div className="mt-2 text-center">
                    <h3 className="font-semibold">Diprekha Bora</h3>
                  </div>
                </div>
                
                <div 
                  className={`
                    relative cursor-pointer transition-all duration-300
                    ${selectedMember === 'sister' ? 'scale-110 z-10' : 'hover:scale-105'}
                  `}
                  onClick={() => handleMemberClick('sister')}
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-pink-500 shadow-lg shadow-pink-500/20">
                    <img 
                      src={familyMembers.find(m => m.id === 'sister')?.image}
                      alt="Sister" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -inset-2 bg-pink-500/20 rounded-full blur-xl opacity-70 -z-10"></div>
                  <div className="mt-2 text-center">
                    <h3 className="font-semibold">Neeharika Bora</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:hidden">
            <div className="flex items-center justify-center mb-8">
              <div className="p-3 bg-indigo-600/20 rounded-full text-indigo-300">
                <Users size={28} />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {familyMembers.map((member) => (
                <div 
                  key={member.id}
                  className={`
                    bg-gray-900/50 backdrop-blur-sm border rounded-xl p-4 cursor-pointer transition-all duration-300
                    ${selectedMember === member.id 
                      ? 'border-indigo-500/50 scale-105 shadow-lg shadow-indigo-500/10' 
                      : 'border-gray-800 hover:border-indigo-500/30'
                    }
                  `}
                  onClick={() => handleMemberClick(member.id)}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-500/50 mb-3">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-semibold text-center">{member.name}</h3>
                    <p className="text-xs text-gray-400 text-center">{member.relation}</p>
                    {member.special && (
                      <div className="mt-2 flex items-center text-purple-300 text-xs">
                        <Book size={12} className="mr-1" />
                        {member.special}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {selectedMember && (
            <div className="mt-12 animate-fade-up">
              {familyMembers.filter(m => m.id === selectedMember).map(member => (
                <div 
                  key={member.id}
                  className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8"
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="md:w-1/4 flex justify-center">
                      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-indigo-500/50 shadow-lg shadow-indigo-500/20">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="md:w-3/4 text-center md:text-left">
                      <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                      <p className="text-indigo-300 mb-4">{member.relation}</p>
                      {member.special && (
                        <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm">
                          <Book size={14} className="mr-2" />
                          {member.special}
                        </div>
                      )}
                      <p className="text-gray-400 leading-relaxed">
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