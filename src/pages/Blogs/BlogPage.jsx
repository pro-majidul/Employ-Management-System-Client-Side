// import React from "react";

// const BlogPage = () => {
//     const blogPosts = [
//         {
//             title: "The Future of Web Development",
//             date: "February 19, 2025",
//             author: "Hasanul Karim",
//             excerpt:
//                 "Discover the latest trends in web development, including AI-driven design, progressive web apps, and more...",
//         },
//         {
//             title: "Why React is Dominating the Frontend World",
//             date: "January 10, 2025",
//             author: "Hasanul Karim",
//             excerpt:
//                 "React continues to lead the frontend industry with its component-based architecture, hooks, and strong community support...",
//         },
//         {
//             title: "Building Scalable Applications with Node.js",
//             date: "December 25, 2024",
//             author: "Hasanul Karim",
//             excerpt:
//                 "Learn how to efficiently build scalable and high-performing backend applications using Node.js and Express.js...",
//         },
//         {
//             title: "Mastering TypeScript for Large-Scale Applications",
//             date: "November 15, 2024",
//             author: "Hasanul Karim",
//             excerpt:
//                 "TypeScript is revolutionizing JavaScript development. Learn how to leverage its static typing for robust applications...",
//         },
//         {
//             title: "The Rise of Serverless Computing",
//             date: "October 5, 2024",
//             author: "Hasanul Karim",
//             excerpt:
//                 "Serverless architecture is transforming backend development. Explore AWS Lambda, Azure Functions, and Firebase Functions...",
//         },
//         {
//             title: "The Importance of UI/UX in Modern Web Design",
//             date: "September 20, 2024",
//             author: "Hasanul Karim",
//             excerpt:
//                 "User experience and intuitive design are key to web success. Learn best practices for crafting seamless digital experiences...",
//         },
//     ];

//     return (
//         <div className=" text-gray-800 py-12 px-6 md:px-20">
//             <div className="max-w-6xl mx-auto">
//                 <h1 className="text-5xl font-bold text-center text-blue-600 mb-12">
//                     Our Blog
//                 </h1>
//                 <p className="text-lg text-center text-gray-600 mb-10 max-w-3xl mx-auto">
//                     Stay updated with the latest insights, trends, and case studies in the
//                     world of technology, web development, and digital transformation.
//                 </p>

//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {blogPosts.map((post, index) => (
//                         <div
//                             key={index}
//                             className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
//                         >
//                             <h2 className="text-2xl font-semibold text-gray-900 mb-3">
//                                 {post.title}
//                             </h2>
//                             <p className="text-gray-600 text-sm mb-2">
//                                 {post.date} • By {post.author}
//                             </p>
//                             <p className="text-lg text-gray-700 leading-relaxed">
//                                 {post.excerpt}
//                             </p>
//                             <button className="mt-4 text-blue-600 font-semibold hover:underline">
//                                 Read More →
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BlogPage;

import React from "react";
import { Link } from "react-router-dom";

const BlogPage = () => {
    const blogPosts = [
        {
            title: "The Future of Web Development",
            date: "February 19, 2025",
            author: "Hasanul Karim",
            excerpt:
                "Discover the latest trends in web development, including AI-driven design, progressive web apps, and more...",
            link: 'https://www.geeksforgeeks.org/future-of-web-development/'
        },
        {
            title: "Why React is Dominating the Frontend World",
            date: "January 10, 2025",
            author: "Hasanul Karim",
            excerpt:
                "React continues to lead the frontend industry with its component-based architecture, hooks, and strong community support...",
            link: 'https://medium.com/@manoharjgpsolutions/10-powerful-reasons-why-react-dominates-web-development-today-7d036ded43df'
        },
        {
            title: "Building Scalable Applications with Node.js",
            date: "December 25, 2024",
            author: "Hasanul Karim",
            excerpt:
                "Learn how to efficiently build scalable and high-performing backend applications using Node.js and Express.js...",
            link: 'https://www.geeksforgeeks.org/building-scalable-applications-with-nodejs/'
        },
        {
            title: "Mastering TypeScript for Large-Scale Applications",
            date: "November 15, 2024",
            author: "Hasanul Karim",
            excerpt:
                "TypeScript is revolutionizing JavaScript development. Learn how to leverage its static typing for robust applications...",
            link: 'https://www.telerik.com/blogs/mastering-typescript-benefits-best-practices'
        },
        {
            title: "The Rise of Serverless Computing",
            date: "October 5, 2024",
            author: "Hasanul Karim",
            excerpt:
                "Serverless architecture is transforming backend development. Explore AWS Lambda, Azure Functions, and Firebase Functions...",
            link: 'https://dl.acm.org/doi/10.1145/3368454'
        },
        {
            title: "The Importance of UI/UX in Modern Web Design",
            date: "September 20, 2024",
            author: "Hasanul Karim",
            excerpt:
                "User experience and intuitive design are key to web success. Learn best practices for crafting seamless digital experiences...",
            link: 'https://www.geeksforgeeks.org/importance-of-ui-ux-design/'
        },
    ];

    return (
        <div className="text-gray-800 py-12 px-6 pt-28 md:px-20 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold text-center text-blue-600 mb-12 animate-fade-in">
                    Our Blog
                </h1>
                <p className="text-lg text-center text-gray-600 mb-10 max-w-3xl mx-auto">
                    Stay updated with the latest insights, trends, and case studies in the
                    world of technology, web development, and digital transformation.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-transparent hover:border-blue-500"
                        >
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                {post.title}
                            </h2>
                            <p className="text-gray-600 text-sm mb-2">
                                {post.date} • By {post.author}
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {post.excerpt}
                            </p>
                            <Link to={post.link}><button className="mt-4 text-blue-600 font-semibold hover:underline transition-all duration-300 hover:text-blue-800">
                                Read More →
                            </button></Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
