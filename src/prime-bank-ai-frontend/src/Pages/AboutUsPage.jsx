import React from "react";
import Navbar from "../Components/Navbar";

const AboutUsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="py-20 px-6 sm:px-20 max-w-[90%] mx-auto mt-12">
        <h2 className="text-4xl font-bold mb-12">About Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to Prime Bank, where our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers’ needs.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Founded with a vision to create a banking experience that goes beyond traditional boundaries, Prime Bank has grown into a trusted financial partner for thousands of clients. Our journey began with a simple yet profound belief that everyone deserves access to financial opportunities that can transform their lives and businesses.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          At Prime Bank, we are not just about banking, we are about empowering you to achieve your dreams. Join us and experience the difference of a bank that truly cares about your financial well-being. Together, we can build a future of financial freedom and success.
        </p>
        <p className="text-lg text-gray-700">
          Our commitment to excellence, innovation, and customer satisfaction drives everything we do. Thank you for choosing Prime Bank as your financial partner.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;