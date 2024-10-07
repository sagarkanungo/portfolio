'use client';
import React, { useState } from "react";
import emailjs from 'emailjs-com'; // Import Email.js

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // To handle submission state

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true); // Disable form during submission

    // Email.js configuration
    const serviceID = 'service_k86xsnj';
    const templateID = 'template_0rymzrl';
    const userID = 'Aff2xtLqA2qu8qj5y'; // Can be found in Email.js dashboard

    // Variables to send to the Email.js template
    const templateParams = {
      name: formData.name,       // Client's name
      email: formData.email,     // Client's email
      message: formData.message , // Client's message
      reply_to: formData.email, 
    };

    // Send email with templateParams
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(() => {
        alert('Message Sent Successfully!');
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' }); // Reset form
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send message, please try again later.');
        setIsSubmitting(false);
      });
  }

  // Handle input changes
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div id="contact" className="flex flex-col items-center p-8 gap-8">
      <div className="w-full h-auto text-center">
        <h1 className="text-4xl font-bold font-serif text-gray-100">Get in Touch</h1>
        <p className="text-gray-400 mt-2">I&apos;d  love to hear from you! Feel free to drop a message.</p>
      </div>

      <div className="bg-slate-950 shadow-lg rounded-lg p-8 w-full max-w-lg transition-all hover:shadow-2xl">
        <h1 className="text-2xl font-semibold text-gray-100 mb-6 text-center">
          Contact <span className="text-cyan-600">Me</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-500 bg-slate-900 text-gray-100 rounded-lg w-full h-12 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-500 bg-slate-900 text-gray-100 rounded-lg w-full h-12 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-500 bg-slate-900 text-gray-100 rounded-lg w-full h-32 p-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className=" bg-blue-400  text-white font-semibold rounded-full h-12 w-40
              hover:shadow-[0_10px_20px_rgba(3,169,244,0.5),_0_0_15px_rgba(3,169,244,0.6)] transition-all transform hover:scale-105"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
