import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-indigo-600/10 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 animate-on-scroll">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              Contact Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-on-scroll">
            Let's connect and explore possibilities for collaboration or conversation.
          </p>
        </div>
        
        <div className="animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            {/* Contact Information */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="shrink-0 p-2 bg-indigo-600/20 rounded-lg text-indigo-400 mr-4">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-indigo-300">hello@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="shrink-0 p-2 bg-indigo-600/20 rounded-lg text-indigo-400 mr-4">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-indigo-300">+1 (123) 456-7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="shrink-0 p-2 bg-indigo-600/20 rounded-lg text-indigo-400 mr-4">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-indigo-300">San Francisco, California</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-indigo-900/20 backdrop-blur-sm border border-indigo-800/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
                <p className="text-gray-400 text-sm mb-4">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <p className="text-indigo-300 text-sm">
                  Available for freelance work starting June 2025
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-3">
              <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 placeholder-gray-500 resize-none"
                      placeholder="Hello, I'd like to talk about..."
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`
                        w-full px-6 py-3 rounded-lg flex items-center justify-center gap-2 text-white font-medium 
                        ${isSubmitting ? 'bg-indigo-700 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'} 
                        transition-all duration-300 shadow-lg shadow-indigo-600/20
                      `}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-white"></span>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                    
                    {submitMessage && (
                      <p className="mt-4 text-center text-indigo-300">{submitMessage}</p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;