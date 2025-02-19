

import React from "react";

const TermsAndPrivacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12 px-6 md:px-20 transition-all duration-300">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">Terms & Conditions</h1>
        <p className="text-lg leading-relaxed mb-4">
          Welcome to Employee Management System. By accessing our website, you agree to abide by the following terms and conditions. Please read them carefully.
        </p>
        <ul className="list-disc pl-5 space-y-3 text-lg">
          <li>All content on this website is for informational purposes only.</li>
          <li>Unauthorized use or duplication of materials is prohibited.</li>
          <li>We reserve the right to modify terms without prior notice.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mt-8 mb-4">Privacy Policy</h2>
        <p className="text-lg leading-relaxed mb-4">
          Your privacy is important to us. This policy outlines how we collect, use, and protect your personal data.
        </p>
        <ul className="list-disc pl-5 space-y-3 text-lg">
          <li>We collect data to improve user experience.</li>
          <li>Your personal information will never be shared without consent.</li>
          <li>We use cookies to enhance site functionality.</li>
        </ul>
      </div>
    </div>
  );
};

export default TermsAndPrivacy;
