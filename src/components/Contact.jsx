import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section className="contact py-20 bg-gray-100 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border rounded"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 border rounded"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
