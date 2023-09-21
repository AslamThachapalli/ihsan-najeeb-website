import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <a href="" target="_blank">
        Download CV
      </a>

      <div>
        <a href="">
          <BsLinkedin className="icon-css" />
        </a>

        <a>
          <MdEmail className="icon-css" />
        </a>

        <a>
          <IoLogoWhatsapp className="icon-css" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
