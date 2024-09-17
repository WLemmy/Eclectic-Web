import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqsData = [
  {
    question: "What software development services do you provide?",
    answer: `We offer a range of software and design development services separately or within the full project development life cycle:
      - Branding and UI/UX Design
      - Web Development
      - Mobile App Development
      - QA Services
      - MVP Strategy Consulting
      - AR/VR
      - Blockchain
      - DevOps
      - Project Management
      - Product Management.`
  },
  {
    question: "What does custom software cost?",
    answer: "The cost of your software will depend on its complexity, the systems to be integrated, and the support needed. We are happy to discuss your requirements and provide a detailed quote."
  },
  {
    question: "How do you ensure confidentiality?",
    answer: "All of our employees are full-time employees and are bound by company Confidentiality and Non-Disclosure clauses. Additionally, for sensitive projects, we create isolated cells disconnected from any public network."
  },
  {
    question: "How do you manage Projects?",
    answer: "We break the project down into smaller, more manageable iterations called sprints. Each sprint typically lasts two to four weeks and is focused on delivering a set of prioritized features or user stories."
  },
  {
    question: "How do you Ensure Quality?",
    answer: "Ensuring quality in software development involves following established software engineering principles, performing comprehensive testing at every stage of development, and incorporating feedback from users and stakeholders."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can contact our customer support team through the 'Contact Us' page on our website. We are available via email at info@eclectic-ds.com or by phone at +254722 528 240."
  },
 
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container px-4 py-8 max-w-sm mx-auto md:max-w-none gap-4 mb-8 w-full">
      <h1 className="text-2xl font-semibold mb-6">FAQs about Eclectic’s Software Development Services.</h1>
      <div className="space-y-4">
        {faqsData.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-300 rounded-md shadow-sm">
            <button
              className="w-full px-4 py-2 text-left flex items-center justify-between bg-gray-100 border-b border-gray-300 rounded-t-md focus:outline-none"
              onClick={() => toggleAnswer(index)}
            >
              <span className="font-semibold text-gray-700">{faq.question}</span>
              {openIndex === index ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
