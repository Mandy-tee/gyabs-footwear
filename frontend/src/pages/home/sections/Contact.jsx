import React, { useState } from 'react';
import { MdPhone, MdLocationOn } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const whatsappNumber = '+233591453789';

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill out all fields.');
      return;
    }

    const whatsappMessage = `Hello,%0A
    My name is ${name}.%0A
    Email: ${email}.%0A
    Message: ${message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, '_blank');

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">

        <h2 className="text-6xl md:text-4xl font-bold text-center mb-10 pb-20">Get in Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Contact Info */}
          <div className="space-y-6 text-center md:text-left pl-10 ">
            <div className="flex flex-col items-center md:flex-row gap-4">
              <FaWhatsapp className="text-4xl md:text-5xl text-green-500" />
              <div className='pb-8'>
                <h3 className="font-semibold text-2xl">WhatsApp</h3>
                <p className="text-gray-600 text-lg">{whatsappNumber}</p>
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row gap-4 pb-8">
              <MdPhone className="text-4xl md:text-5xl text-gray-700" />
              <div>
                <h3 className="font-semibold text-2xl">Phone</h3>
                <p className="text-gray-600 text-lg">{whatsappNumber}</p>
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row gap-4">
              <MdLocationOn className="text-4xl md:text-5xl text-gray-700" />
              <div>
                <h3 className="font-semibold text-2xl">Location</h3>
                <p className="text-gray-600 text-lg">Ghana</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center">Send Us a Message</h3>
            <form className="space-y-4" onSubmit={sendToWhatsApp}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-600 transition text-lg"
              >
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
