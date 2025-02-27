import React, { useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

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

    const whatsappMessage = `Hello, my name is ${name}. Email: ${email}. Message: ${message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, '_blank');

    setName('');
    setEmail('');
    setMessage('');
  };

  const ContactItem = ({ icon: Icon, title, value, link }) => (
    <a
      href={link || "#"}
      target={link ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="flex flex-col items-center md:flex-row gap-4 p-4 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl"
    >
      <Icon className="text-4xl md:text-5xl text-gray-700" />
      <div>
        <h3 className="font-semibold text-2xl">{title}</h3>
        <p className="text-gray-600 text-lg">{value}</p>
      </div>
    </a>
  );

  return (
    <section id="contact" className="py-16 bg-gray-100 flex justify-center">
      <div className="container max-w-5xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col items-center">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 pb-10">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center w-full">

          {/* Contact Info */}
          <div className="flex flex-col gap-y-8 text-center md:text-left mx-auto">
            <ContactItem
              icon={MdEmail}
              title="Email"
              value="gyabsfootwear@gmail.com"
              link="mailto:gyabsfootwear@gmail.com"
              className=''
            />
            <ContactItem
              icon={MdPhone}
              title="Phone"
              value={whatsappNumber}
              link={`https://wa.me/${whatsappNumber}`}
            />
            <ContactItem
              icon={MdLocationOn}
              title="Location"
              value="Sefwi Bodi, Western North, Ghana"
              link="https://www.google.com/maps/place/Sefwi+Bodi,+Western+North,+Ghana"
            />
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center">
              Send Us a Message
            </h3>
            <form className="space-y-6" onSubmit={sendToWhatsApp}>
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
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
