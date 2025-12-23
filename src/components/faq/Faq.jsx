import React, { useState } from 'react';
import './faq.css';

const faqs = [
    { question: 'Lorem ipsum ipsum ?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' },
    { question: 'Lorem ipsum ipsum ?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' },
    { question: 'Lorem ipsum ipsum ?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' },
    { question: 'Lorem ipsum ipsum ?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' },
    { question: 'Lorem ipsum ipsum ?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' },
    { question: 'Lorem ipsum ipsum ?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' },
];


const splitIntoColumns = (data) => {
    const half = Math.ceil(data.length / 2);
    return {
        col1: data.slice(0, half),
        col2: data.slice(half),
    };
};

const FAQItem = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item">
            <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                {faq.question}
                <span className='plusSign'>{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && <div className="faq-answer">{faq.answer}</div>}
        </div>
    );
};

const FAQPage = () => {
    const { col1, col2 } = splitIntoColumns(faqs);

    return (
        <div className="faq-container">
            <div className="faq-row">
                <div className="faq-column">
                    {col1.map((faq, index) => (
                        <FAQItem key={index} faq={faq} />
                    ))}
                </div>
                <div className="faq-column">
                    {col2.map((faq, index) => (
                        <FAQItem key={index} faq={faq} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
