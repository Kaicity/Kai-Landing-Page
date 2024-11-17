import React from "react";
import coding from "../assets/blackExcavator.jfif";

const BlogCard = ({ date, month, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="relative">
        <img
          src={coding}
          alt="Blog"
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 bg-blue-600 text-white rounded-md px-3 py-2 shadow-md">
          <p className="text-sm font-bold">{date}</p>
          <p className="text-xs">{month}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="text-gray-700 text-sm flex items-center mb-2">
          <span className="mr-2">👤 By Admin</span>
          <span>💬 Comments(05)</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 hover:text-blue-500 transition-colors">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <a href="#" className="text-blue-600 text-sm font-semibold mt-4 inline-block hover:underline">
          Read More →
        </a>
      </div>
    </div>
  );
};

const BlogList = () => {
  const blogPosts = [
    {
      date: "30",
      month: "May",
      title: "Innovate and Elevate",
      description:
        "Explore the latest trends and innovations transforming [industry], and discover how to stay ahead of the curve.",
    },
    {
      date: "25",
      month: "Sep",
      title: "Expert Insights",
      description:
        "Gain valuable insights from industry experts on effective strategies that drive success and growth.",
    },
    {
      date: "10",
      month: "Aug",
      title: "Case Studies Uncovered",
      description:
        "Dive into our case studies to see how we tackled challenges and delivered impactful results for our clients.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {blogPosts.map((post, index) => (
        <BlogCard
          key={index}
          date={post.date}
          month={post.month}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
};

export default BlogList;
