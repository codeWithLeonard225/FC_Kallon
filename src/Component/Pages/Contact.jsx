import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to an API or server.
    // For now, we'll just display a message on successful submission.
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-24 bg-gray-100">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Contact Us</h1>

      {/* Contact Info Section */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-700 mb-2">
          You can reach out to us via the contact form below or through our official channels.
        </p>
        <ul className="text-gray-700">
          <li><strong>Email:</strong> contact@borangersfc.com</li>
          <li><strong>Phone:</strong> +123 456 7890</li>
          <li><strong>Address:</strong> Bo, Sierra Leone</li>
        </ul>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your Name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your Email"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your Message"
            rows="5"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-green-700 text-white font-bold rounded-md hover:bg-green-600 transition-all duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Success Message */}
      {isSubmitted && (
        <div className="mt-6 text-center text-green-700">
          <p className="text-lg">Thank you for reaching out! We will get back to you soon.</p>
        </div>
      )}
    </div>
  );
}
