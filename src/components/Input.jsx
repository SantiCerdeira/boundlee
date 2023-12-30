import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    console.log(email)

    if (!email) {
      alert('Please enter your email.');
      return;
    }

    try {
      // Replace 'your_service_id', 'your_template_id', and 'your_user_id' with your actual EmailJS values
      await emailjs.send('service_yq9wb3d', 'template_233i5jc', { email, message: `${email}` }, '3skhIJaMjnhbo1I0K');
      alert('Email sent successfully! You will receive news very soon!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again.');
    }
  };

  return (
    <form className="flex items-center justify-between w-full py-0 bg-white rounded-full">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full py-4 pl-4 rounded-l-full"
        placeholder="Enter your email"
      />
      <button
        className="px-6 py-4 bg-blue-700 text-white font-bold rounded-r-full"
        onClick={handleEmailSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default EmailForm;
