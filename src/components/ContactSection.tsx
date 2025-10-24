import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ContactSection: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    trekType: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      trekType: ''
    });
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <Phone className="text-blue-600" size={24} />,
      title: "Phone",
      details: ["+977 980-3499156"],
      action: "Call Now"
    },
    {
      icon: <Mail className="text-green-600" size={24} />,
      title: "Email",
      details: ["ngiman81@gmail.com"],
      action: "Send Email"
    },
    {
      icon: <MapPin className="text-red-600" size={24} />,
      title: "Location",
      details: ["Sarswatinagar Marg", "Kathmandu, Nepal"],
      action: "Get Directions"
    }
  ];

  const socialLinks = [
    {
      icon: <Facebook size={24} />,
      name: "Facebook",
      url: "https://www.facebook.com/Ngimalaya",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: <Instagram size={24} />,
      name: "Instagram", 
      url: "#",
      color: "bg-pink-600 hover:bg-pink-700"
    },
    {
      icon: <MessageCircle size={24} />,
      name: "WhatsApp",
      url: "#",
      color: "bg-green-600 hover:bg-green-700"
    }
  ];

  return (
    <section id="contact" className={`scroll-offset-mobile py-12 md:py-20 transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-4 md:mb-6">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-100' : 'text-gray-900'
            }`}>
              Get In <span className="text-blue-600">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Ready to start your Himalayan adventure? We're here to help you plan the perfect trek.
              Reach out to us and let's make your dreams come true.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 ">
            {/* Contact Form */}
            <div className={`bg-gray-50 p-8 rounded-2xl ${isDarkMode ? 'bg-gray-600' : 'bg-white'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Send us a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className={`grid md:grid-cols-2 gap-6 `}>
                  <div>
                    <label className={`block font-medium mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-700'}`}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${isDarkMode ? 'bg-gray-600' : 'bg-white'}`}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className={`block font-medium mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-700'}`}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 ${isDarkMode ? 'bg-gray-600' : 'bg-white'} py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block ${isDarkMode ? 'text-gray-100' : 'text-gray-700'} font-medium mb-2`}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${isDarkMode ? 'bg-gray-600' : 'bg-white'} border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none`}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className={`block ${isDarkMode ? 'text-gray-100' : 'text-gray-700'} font-medium mb-2`}>
                      Trek Interest
                    </label>
                    <select
                      name="trekType"
                      value={formData.trekType}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 ${isDarkMode ? 'bg-gray-600' : 'bg-white'} border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none`}
                    >
                      <option value="">Select a trek</option>
                      <option value="everest">Everest Region</option>
                      <option value="annapurna">Annapurna Region</option>
                      <option value="manaslu">Manaslu Circuit</option>
                      <option value="kanchenjunga">Kanchenjunga</option>
                      <option value="custom">Custom Trek</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={`block ${isDarkMode ? 'text-gray-100' : 'text-gray-700'} font-medium mb-2`}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full ${isDarkMode ? 'bg-gray-600' : 'bg-white'} px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none`}
                    placeholder="Tell us about your dream trek, preferred dates, group size, and any special requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Contact Information
                </h3>
                <p className={`mb-8 leading-relaxed ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>
                  Should you have any inquiries or require further information, we extend an open
                  invitation to discuss the range of services and packages we offer. Our team is
                  dedicated to assisting you in realizing your dream to explore the diverse tourist
                  destinations in Nepal.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className={`p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 ${
                      isDarkMode ? 'bg-gray-600' : 'bg-white'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                          {info.title}
                        </h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className={`mb-1 ${isDarkMode ? 'text-gray-100' : 'text-gray-600'}`}>
                            {detail}
                          </p>
                        ))}
                        <button className={`font-medium text-sm mt-2 ${isDarkMode ? 'text-blue-200' : 'text-blue-600'} hover:text-blue-500`}>
                          {info.action}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-bold text-gray-900 mb-4">
                  Follow Our Adventures
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} text-white p-3 rounded-full transition-colors duration-300`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                <h4 className="font-bold text-red-800 mb-2">
                  Emergency Contact
                </h4>
                <p className="text-red-700 text-sm">
                  For urgent matters during your trek, contact our 24/7 emergency line:
                </p>
                <p className="text-red-800 font-bold mt-2">
                  +977 980-3499156
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
