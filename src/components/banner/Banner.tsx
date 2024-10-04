'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import { useRef } from "react";
import Image from "next/image";
import banner_wallpaper from "../../../public/banner_wallpaper.svg";
import personImage from "../../../public/IMG_20241004_145248.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Banner() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Backend Developer", "MongoDB Expert"],
      startDelay: 100,
      typeSpeed: 70,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
     <div
  style={{ backgroundSize: "cover" }}
  className="main-container flex flex-col-reverse lg:flex-row items-center justify-center p-5 lg:p-10 mt-16 md:mt-0" 
>
  {/* Text Section */}
  <div className="w-full flex justify-center text-white p-5 lg:w-1/2">
    <div className="text-center lg:text-left space-y-5 lg:space-y-3">
      <h3 className="text-2xl font-semibold font-serif">Hi, I am</h3>
      <h1 className="text-3xl lg:text-4xl font-bold font-serif">
        Sagar Kanungo
      </h1>
      <h2 className="text-2xl lg:text-3xl">
        I am <span className="font-bold underline" ref={el}></span>
      </h2>
      <p className="overflow-hidden font-serif text-base lg:text-lg leading-relaxed lg:leading-relaxed">
        I am a passionate MERN stack developer with a strong foundation in
        JavaScript, React, Node.js, and MongoDB. I enjoy building dynamic,
        user-friendly applications that solve real-world problems. My expertise
        lies in creating responsive front-end interfaces, designing robust
        back-end systems, and managing databases efficiently.
        <br />
        In addition to my technical skills, I thrive in collaborative
        environments where I can work closely with designers and stakeholders
        to deliver exceptional user experiences. Let's connect and build
        something amazing together!
      </p>
      <div className="flex justify-center lg:justify-start space-x-5 my-4 animate-slideIn">
        <a
          href="#"
          className="border border-gray-600 p-4 w-12 h-12 flex items-center justify-center rounded-full hover:bg-blue-600 transition duration-300 transform hover:-translate-y-2"
        >
          <FontAwesomeIcon icon={faFacebook} className="text-2xl text-white" />
        </a>
        <a
          href="#"
          className="border border-gray-600 p-4 w-12 h-12 flex items-center justify-center rounded-full hover:bg-pink-600 transition duration-300 transform hover:-translate-y-2"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-2xl text-white" />
        </a>
        <a
          href="#"
          className="border border-gray-600 p-4 w-12 h-12 flex items-center justify-center rounded-full hover:bg-red-600 transition duration-300 transform hover:-translate-y-2"
        >
          <FontAwesomeIcon icon={faYoutube} className="text-2xl text-white" />
        </a>
        <a
          href="#"
          className="border border-gray-600 p-4 w-12 h-12 flex items-center justify-center rounded-full hover:bg-blue-500 transition duration-300 transform hover:-translate-y-2"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl text-white" />
        </a>
      </div>

      <div className="p-2 pl-0 flex justify-center lg:justify-start">
        {/* Contact Button */}
        <button
          className="text-2xl px-6 py-2 bg-blue-400 rounded-full font-serif transition-transform hover:scale-105 hover:shadow-[0_10px_20px_rgba(3,169,244,0.5),_0_0_15px_rgba(3,169,244,0.6)]"
          onClick={openModal}
        >
          Contact Me
        </button>
      </div>
    </div>
  </div>

  {/* Image Section */}
  <div className="w-full flex justify-center lg:order-2 lg:w-1/2 mb-8 lg:mb-0">
  <img
  className="rounded-full my-2 shadow-2xl w-48 h-48 lg:w-60 lg:h-60 animate-scaleIn transition-transform duration-500 
  hover:scale-110 hover:shadow-[0_10px_20px_rgba(3,169,244,0.5),_0_0_15px_rgba(3,169,244,0.6)] object-cover"
  src={personImage.src}
         
  alt="Sagar Kanungo"
/>

  </div>
</div>

{/* Modal Popup */}
{isOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-slate-950 p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Contact Me</h2>
      <p className="mb-4">Feel free to reach out via email or phone!</p>
      <div className="space-y-3">
        <div>
          <label>Email:</label>
          <h6>sagarkanungo23@gmial.com</h6>
        </div>
        <div>
          <label>Mobile</label>
          <h6>+91-6264531002</h6>
        </div>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={closeModal}>
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

    </>
  );
}

export default Banner;
