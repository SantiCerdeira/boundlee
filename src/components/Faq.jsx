import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className=" bg-[#151269] py-10">
        <div className='w-11/12 lg:w-8/12 mx-auto'>
      {faqData.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-200 py-4"
          onClick={() => toggleAccordion(index)}
        >
          <div className="flex items-center justify-between cursor-pointer">
            <h3 className="text-lg font-semibold text-white">{item.question}</h3>
            <svg
              className={`w-5 h-5 transition-transform text-white ${
                activeIndex === index ? 'transform rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {activeIndex === index && (
            <div className="mt-4">
              <p className="text-white font-medium text-start">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
             </div>
    </div>
  );
};

const faqData = [
  {
    question: 'How do I create surveys with your tool?',
    answer: 'Crafting surveys is a breeze. Simply log in, choose your questions, and customize to fit your needs with our user-friendly interface.',
  },
  {
    question: 'Can I integrate the survey widget on my website?',
    answer: 'Absolutely! Embedding the widget is seamless. Copy the generated code, paste it on your site, and start collecting feedback instantly.',
  },
  {
    question: ' Is real-time feedback available?',
    answer: 'Yes, our tool provides real-time insights, allowing you to stay on top of client feedback and make informed decisions promptly.',
  },
  {
    question: 'What benefits does this tool offer for my business?',
    answer: 'Enhance client relationships, boost your bottom line with data-driven improvements, and elevate your overall real estate success effortlessly.',
  },
  {
    question: 'Can I customize the surveys based on my business needs?',
    answer: 'Absolutely. Tailor surveys to your specific requirements, ensuring you capture the insights that matter most to your real estate business.',
  },
];

export default Faq;
