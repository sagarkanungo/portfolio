import Link from 'next/link'
import React from 'react'
import {

  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="p-5 border border-gray-500 bg-gray-900 flex flex-col lg:flex-row justify-between items-start lg:items-center lg:px-32">
      <div className="mb-4 lg:mb-0 flex items-center">
        <a
          href="https://www.linkedin.com/in/sagar-kanungo-9610aa11a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="border border-gray-600 p-4 w-12 h-12 flex items-center justify-center rounded-full hover:bg-blue-500 transition duration-300 transform hover:-translate-y-2"
          target="_blank" 
          rel="noopener noreferrer" 
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl text-white" />
        </a>
        <div className="ml-4 text-white">
          <p className="text-sm">Email:  <a href="mailto:your-email@example.com" className="hover:text-blue-600 underline">sagarkanungo23@gmail.com</a></p> {/* Replace with your email */}
          <p className="text-sm">Phone:  <a href="tel:+1234567890" className="hover:text-blue-600 underline">+91 6264531002</a></p> {/* Replace with your phone number */}
        </div>
      </div>
      <div className="space-y-4 lg:space-y-0 flex flex-col lg:space-x-5 lg:flex lg:flex-row font-serif">
        <Link href="#about" className="hover:text-blue-600 underline">About</Link>
        <Link href="/privacy" className="hover:text-blue-600 underline">Privacy Policy</Link>
        <Link href="/licensing" className="hover:text-blue-600 underline">Licensing</Link>
        <Link href="#contact" className="hover:text-blue-600 underline">Contact</Link>
      </div>
    </div>
  )
}

export default Footer

