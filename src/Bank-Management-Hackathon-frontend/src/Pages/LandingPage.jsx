import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

import {
  FaCheckCircle,
  FaBolt,
  FaPiggyBank,
  FaChartLine,
  FaUserShield,
  FaBaby,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LandingPage() {
  const testimonials = [
    {
      quote:
        "Choosing Prime Bank was one of the best decisions I ever made for my business. From the very first meeting, I felt valued and understood. The team took the time to listen to my goals and provided customized solutions that perfectly suited my needs. Their innovative digital banking platform has made managing my finances effortless, and their customer service is always prompt and helpful. Thanks to Prime Bank, my business is thriving, and I have the peace of mind that my financial future is in good hands.",
      name: "Daniella Pearse",
      position: "Manager, Together Holdings",
      image: "https://i.pinimg.com/736x/3a/b1/ce/3ab1ce88c1d2bae5758ce1924c01cb20.jpg",
    },
    {
      quote:
        "Choosing Prime Bank was a pivotal moment for my small business. The team genuinely took the time to understand my unique challenges and offered tailored solutions that have significantly streamlined my financial management. Their user-friendly platform has made transactions a breeze, and I can always count on their responsive customer support. Thanks to Prime Bank, my business is growing, and I feel confident about my financial decisions.",
      name: "Moses Drew",
      position: "Manager, Apex Dynamics",
      image: "https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg",
    },
    {
      quote:
        "Choosing Prime Bank was one of the best decisions I ever made for my business. From the very first meeting, I felt valued and understood. The team took the time to listen to my goals and provided customized solutions that perfectly suited my needs. Their innovative digital banking platform has made managing my finances effortless, and their customer service is always prompt and helpful. Thanks to Prime Bank, my business is thriving, and I have the peace of mind that my financial future is in good hands.",
      name: "Samantha Reyes",
      position: "Manager, EchoTech Industries",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTislE3ncLUtYo5dImFVqmLPJ5zwTfiFGZFBg&s",
    },
    {
      quote:
        "I can’t express how grateful I am for Prime Bank. From the start, I felt like a valued client, not just another account number. The team worked with me to create a banking solution that fits my consulting business perfectly. Their intuitive app has simplified my invoicing and expense tracking, and their customer service is exceptional. With Prime Bank by my side, I’m focused on what I do best, knowing my finances are well taken care of.",
      name: "Maxwell Chen",
      position: "Manager, Vanguard Innovations",
      image:
        "https://clipart-library.com/new_gallery/45-455875_black-person-png-business-professional-man-png.png",
    },
    {
      quote:
        "Switching to Prime Bank was one of the smartest decisions I made for my e-commerce business. The personalized service I received from the team made all the difference. They helped me navigate the complexities of online transactions and provided me with tools that made managing my cash flow effortless. Their support is always just a phone call away, and I now have the financial freedom to scale my business.",
      name: "Olivia Grant",
      position: "Manager, Pinnacle Dynamics",
      image:
        "https://previews.123rf.com/images/photopiano/photopiano1502/photopiano150200056/36316213-confident-business-woman-standing-in-the-office-ceo-of-great-corporate-successful-career-female-in.jpg",
    },
    {
      quote:
        "I knew Prime Bank was the right choice from our very first meeting. Their team truly listened to my vision and offered solutions that aligned with my startup’s goals. The digital banking tools they provide are incredibly intuitive, making it easy for me to manage my funding and expenses. With Prime Bank, I feel supported and empowered to take my business to the next level. Their commitment to my success is unmatched!",
      name: "Ethan Pate",
      position: "Manager, Together Holdings",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_qo5E8LYiICADhdFu6-BWsvwnE-b0CmJhA&s",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div>
      <Navbar />
      <div id="home" className="py-20 px-6 sm:px-20 max-w-[90%] mx-auto mt-12 rounded-lg min-h-[calc(100vh-150px)] flex items-center justify-center">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full flex-wrap">
          <div className="flex flex-col items-start space-y-10 max-w-full lg:max-w-[50%]">
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-center lg:text-left">
              Welcome to <br /> PRIME BANK Empowering Your Financial Journey
            </h1>
            <p className="text-lg sm:text-2xl leading-relaxed text-center lg:text-left">
              At Prime Bank, our mission is to provide comprehensive banking
              solutions that empower individuals and businesses to achieve their
              financial goals. We are committed to delivering personalized and
              innovative services that prioritize our customers’ needs.
            </p>
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-16">
              <div className="flex flex-col space-y-6">
                <div className="flex items-center">
                  <FaCheckCircle className="text-teal-500" size="2em" />
                  <p className="text-xl ml-2">Instant Transfer</p>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-teal-500" size="2em" />
                  <p className="text-xl ml-2">Request Loan</p>
                </div>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="flex items-center">
                  <FaCheckCircle className="text-teal-500" size="2em" />
                  <p className="text-xl ml-2">Instant Deposit</p>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-teal-500" size="2em" />
                  <p className="text-xl ml-2">Digital Banking</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 pt-8">
  <Link to="/signup">
    <button className="bg-teal-500 text-white py-3 px-8 rounded-full text-lg">
      Open Account
    </button>
  </Link>
</div>

          </div>
          <img
            src="https://mrinetwork.com/wp-content/uploads/2024/03/The-Rules-Are-Changing-for-Todays-Banking-Industry-Landscape.png"
            alt="Financial growth"
            className="rounded-md w-full lg:w-[700px] h-auto lg:h-[750px] mt-8 lg:mt-0 lg:ml-16 object-cover shadow-lg"
          />
        </div>
      </div>

      <div id="accounts" className="py-20 px-6 sm:px-20 max-w-[90%] mx-auto mt-12">
  <h2 className="text-4xl font-bold mb-12">Our Accounts</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
    <div className="bg-gray-100 p-12 rounded-lg shadow-md flex flex-col items-center h-80 transition-transform transform hover:scale-105 hover:bg-teal-50">
      <FaBolt className="text-teal-500" size="4em" />
      <h3 className="text-2xl font-semibold mt-6">Business Account</h3>
      <p className="text-lg text-gray-700 mt-4 text-center">
        Elevate your business management with our trusted business account.
      </p>
    </div>
    <div className="bg-gray-100 p-12 rounded-lg shadow-md flex flex-col items-center h-80 transition-transform transform hover:scale-105 hover:bg-teal-50">
      <FaPiggyBank className="text-teal-500" size="4em" />
      <h3 className="text-2xl font-semibold mt-6">Saving Account</h3>
      <p className="text-lg text-gray-700 mt-4 text-center">
        Grow your wealth with our high-interest savings accounts.
      </p>
    </div>
    <div className="bg-gray-100 p-12 rounded-lg shadow-md flex flex-col items-center h-80 transition-transform transform hover:scale-105 hover:bg-teal-50">
      <FaChartLine className="text-teal-500" size="4em" />
      <h3 className="text-2xl font-semibold mt-6">Investment Account</h3>
      <p className="text-lg text-gray-700 mt-4 text-center">
        Enables you to buy and sell stocks, bonds, and other securities.
      </p>
    </div>
    <div className="bg-gray-100 p-12 rounded-lg shadow-md flex flex-col items-center h-80 transition-transform transform hover:scale-105 hover:bg-teal-50">
      <FaUserShield className="text-teal-500" size="4em" />
      <h3 className="text-2xl font-semibold mt-6">Retirement Account</h3>
      <p className="text-lg text-gray-700 mt-4 text-center">
        Allows individuals to save for retirement with tax advantages.
      </p>
    </div>
    <div className="bg-gray-100 p-12 rounded-lg shadow-md flex flex-col items-center h-80 transition-transform transform hover:scale-105 hover:bg-teal-50">
      <FaBaby className="text-teal-500" size="4em" />
      <h3 className="text-2xl font-semibold mt-6">Jambo Junior Account</h3>
      <p className="text-lg text-gray-700 mt-4 text-center">
        Secure your kid's future with some savings.
      </p>
    </div>
  </div>
</div>


<div id="about-us" className="py-20 px-6 sm:px-20 max-w-[90%] mx-auto mt-12">
  <h2 className="text-4xl font-bold mb-12 text-center lg:text-left">
    About Us
  </h2>
  <div className="flex flex-col lg:flex-row justify-between items-center">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ABSn9j91pbCvK52-EAK7VhmAImZORjqRTw&s"
      alt="About Prime Bank"
      className="w-full lg:w-[700px] h-auto lg:h-[650px] rounded-md object-cover shadow-lg"
    />
    <div className="mt-8 lg:mt-0 lg:ml-12 lg:w-1/2">
      <h3 className="text-3xl font-semibold mb-4 text-center lg:text-left">
        Who is Prime Bank?
      </h3>
      <p className="text-lg text-gray-700 mb-4 text-center lg:text-left">
        Welcome to Prime Bank, where our mission is to provide
        comprehensive banking solutions that empower individuals and
        businesses to achieve their financial goals. We are committed to
        delivering personalized and innovative services that prioritize
        our customers’ needs.
      </p>
      <p className="text-lg text-gray-700 mb-4 text-center lg:text-left">
        Founded with a vision to create a banking experience that goes
        beyond traditional boundaries, Prime Bank has grown into a trusted
        financial partner for thousands of clients. Our journey began with
        a simple yet profound belief that everyone deserves access to
        financial opportunities that can transform their lives and
        businesses.
      </p>
      <p className="text-lg text-gray-700 text-center lg:text-left">
        At Prime Bank, we are not just about banking, we are about
        empowering you to achieve your dreams. Join us and experience the
        difference of a bank that truly cares about your financial
        well-being. Together, we can build a future of financial freedom
        and success.
      </p>
      <h3 className="text-3xl font-semibold mt-8 mb-4 text-center lg:text-left">
        Why Us?
      </h3>
      <p className="text-lg text-gray-700 mb-4 text-center lg:text-left">
        At Prime Bank, our “why” is rooted in a deep-seated commitment to
        making a positive impact on our customers lives and the
        communities we serve. We believe that financial empowerment is the
        key to unlocking potential and achieving dreams.
      </p>
      <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 pt-8">
  <Link to="/signup">
    <button className="bg-teal-500 text-white py-3 px-8 rounded-full text-lg">
      Open Account
    </button>
  </Link>
</div>

    </div>
  </div>
</div>


      <div className="py-20 px-20 max-w-[90%] mx-auto mt-12">
        <h2 className="text-4xl font-bold mb-12 text-center">
          What Our Customers Say
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="mx-auto rounded-full w-24 h-24 object-cover mb-4"
              />
              <p className="text-lg text-gray-700 italic mb-4">
                "{testimonial.quote}"
              </p>
              <p className="text-xl font-semibold">{testimonial.name}</p>
              <p className="text-gray-600">{testimonial.position}</p>
            </div>
          ))}
        </Slider>
      </div>

      <div
        className="py-12 px-4 sm:px-6 lg:px-8 max-w-[90%] mx-auto mt-12 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: "#A9EEE4" }}
      >
        <div className="flex flex-col lg:flex-row justify-between items-center w-full flex-wrap">
          <div className="flex flex-col items-start space-y-6 max-w-full lg:max-w-[50%]">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-center lg:text-left">
              Start Your Financial Journey With PRIME Bank Today!
            </h2>
            <Link 
            to="/signup"
            className="bg-teal-500 text-white py-2 px-6 sm:py-3 sm:px-8 rounded-full text-md sm:text-lg mt-4 sm:mt-8">
              Open Account
            </Link>
          </div>
          <img
            src="https://img.freepik.com/free-photo/stacks-coins-arranged-bar-graph_35913-2518.jpg"
            alt="Financial journey"
            className="rounded-md w-full lg:w-[712px] h-auto mt-8 lg:mt-0 object-cover shadow-lg"
          />
        </div>
      </div>

      <footer
  className="text-black py-12"
  style={{ backgroundColor: "#F5FFFA" }}
>
  <div className="max-w-[90%] mx-auto flex justify-between flex-wrap">
    <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
      <h4 className="text-2xl font-semibold mb-6">Contact Us</h4>
      <p className="text-lg">Kimathi Street</p>
      <p className="text-lg">Email: info@rossbank.com</p>
      <p className="text-lg">Phone: 0746962449</p>
    </div>
    <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
      <h4 className="text-2xl font-semibold mb-6">Quick Links</h4>
      <ul>
        <li>
          <a href="#home" className="text-lg hover:text-teal-500">
            Home
          </a>
        </li>
        <li>
          <a href="#accounts" className="text-lg hover:text-teal-500">
            Accounts
          </a>
        </li>
        <li>
          <a href="#about-us" className="text-lg hover:text-teal-500">
            About Us
          </a>
        </li>
        <li>
          <a href="#contact" className="text-lg hover:text-teal-500">
            Contact
          </a>
        </li>
      </ul>
    </div>
    <div className="w-full sm:w-1/3">
      <h4 className="text-2xl font-semibold mb-6">Follow Us</h4>
      <div className="flex space-x-6">
        <a
          href="https://www.facebook.com/login/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg hover:text-teal-500"
        >
          Facebook
        </a>
        <a
          href="https://twitter.com/login"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg hover:text-teal-500"
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/login"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg hover:text-teal-500"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/accounts/login/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg hover:text-teal-500"
        >
          Instagram
        </a>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}

export default LandingPage;