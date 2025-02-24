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
    <section id="contact" className="py-20 bg-gray-200">
      <div className="container mx-auto px-4 pl-50 pr-30">

        <h2 className="text-5xl font-bold text-center mb-12 pb-20">Get in Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Contact Info */}
          <div className="space-y-8 pl-8">
            <div className="flex items-center gap-8 mb-10 pb-8">
              <FaWhatsapp className="text-6xl text-green-500" />
              <div>
                <h3 className="font-semibold text-2xl">WhatsApp</h3>
                <p className="text-gray-600 text-lg">{whatsappNumber}</p>
              </div>
            </div>
            <div className="flex items-center gap-8 mb-10 pb-8">
              <MdPhone className="text-6xl text-secondary" />
              <div>
                <h3 className="font-semibold text-2xl">Phone</h3>
                <p className="text-gray-600 text-lg">{whatsappNumber}</p>
              </div>
            </div>
            <div className="flex items-center gap-8 mb-10 pb-8">
              <MdLocationOn className="text-6xl text-secondary" />
              <div>
                <h3 className="font-semibold text-2xl">Location</h3>
                <p className="text-gray-600 text-lg">Ghana</p>
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
              <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-600 transition text-lg">
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
