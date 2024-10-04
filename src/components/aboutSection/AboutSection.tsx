import Link from "next/link";
import React from "react";
import Image from "next/image";
import banner_wallpaper from "../../../public/banner_wallpaper.svg";
import personImage from "../../../public/aboutImage.jpg";
import { url } from "inspector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
function AboutSection() {
  return (
    <>
      <div className="p-8" id="about">
  <h1 className="text-center text-3xl font-semibold font-serif">
    About Me
  </h1>
</div>

<div className="main-container flex flex-col lg:flex-row items-center h-auto mt-3">
  <div className="w-full flex justify-center lg:w-1/2 lg:order-1">
    <img
      className="rounded-xl my-2 shadow-lg w-fit h-60 lg:w-58 lg:h-[300px]"
      src={personImage.src}
      alt="MERN Stack Developer"
    />
  </div>
  <div className="w-full flex justify-center lg:w-1/2 lg:order-2">
    <div className="w-2/3 text-center lg:text-left">
      <h1 className="text-3xl font-bold font-serif">MERN Stack Developer</h1>
      <p className="font-serif">
        I am a dedicated MERN stack developer with a passion for creating dynamic web applications. My journey in web development began with a fascination for JavaScript, leading me to master MongoDB, Express.js, React, and Node.js. I love transforming ideas into reality by building responsive and user-friendly applications that enhance user experience.
        <br />
        With a keen eye for detail and a commitment to coding best practices, I thrive in collaborative environments where I can learn from others and share my knowledge. I enjoy tackling challenging problems and am always eager to learn new technologies and improve my skills.
        <br />
        When I’m not coding, you can find me exploring tech blogs, contributing to open-source projects, or diving into the latest web development trends. Let’s connect and collaborate on exciting projects!
      </p>
    </div>
  </div>
</div>

    </>
  );
}

export default AboutSection;
