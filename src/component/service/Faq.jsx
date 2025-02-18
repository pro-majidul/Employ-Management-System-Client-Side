import React from 'react';

const Faq = () => {
    const faqData = [
        {
            question: "What services do you offer?",
            answer: "We offer a wide range of digital solutions, including web development, app development, and digital marketing.",
        },
        {
            question: "How can I contact support?",
            answer: "You can reach our support team via email at support@yourcompany.com or through our contact form.",
        },
        {
            question: "Do you provide custom development services?",
            answer: "Yes, we specialize in creating tailor-made solutions to fit your business needs.",
        },
        {
            question: "What is your pricing model?",
            answer: "Our pricing varies depending on the project scope. Contact us for a detailed quote.",
        },
        {
            question: "Do you offer ongoing support?",
            answer: "Yes, we provide maintenance and support plans to ensure your project runs smoothly.",
        },
    ];
    return (
        <div className="text-gray-800 dark:text-gray-200 py-10 px-5 md:px-20 transition-all duration-300">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">Frequently Asked Questions</h1>
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <details
                            key={index}
                            className="p-4 border rounded-lg cursor-pointer bg-white dark:bg-gray-800 shadow transition-all duration-300 hover:shadow-lg"
                        >
                            <summary className="text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600">
                                {faq.question}
                            </summary>
                            <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;