import React, { useState } from 'react';
import { MdPhone, MdLocationOn } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // WhatsApp Number
  const whatsappNumber = '+233591453789';

  // Handle Form Submission
  const sendToWhatsApp = (e) => {
    e.preventDefault();
    
    // Format Message
    const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. ${message}`;

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <FaWhatsapp className="text-4xl text-green-500" />
              <div>
                <h3 className="font-semibold text-lg">WhatsApp</h3>
                <p className="text-gray-600">{whatsappNumber}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MdPhone className="text-4xl text-secondary" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600">{whatsappNumber}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MdLocationOn className="text-4xl text-secondary" />
              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-gray-600">Ghana</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">Send Us a Message</h3>
            <form className="space-y-4" onSubmit={sendToWhatsApp}>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
              <textarea 
                rows="4" 
                placeholder="Your Message" 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                required 
              />
              <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-600 transition">
                Send to WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
