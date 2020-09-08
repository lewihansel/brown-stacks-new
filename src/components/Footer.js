import React from "react";
import { Link } from "react-router-dom";
import { scrollToTopBtn } from "./utils/Animation";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <Link to="/">BRWN.</Link>
      </div>
      <div className="footer-links">
        <span>©2020 James Brown</span>
        <span> - </span>
        <Link className="link" to="/about-me">
          About
        </Link>
        <span> - </span>
        <span className="link" onClick={scrollToTopBtn}>
          Scroll to top
        </span>
      </div>
    </footer>
  );
};

export default Footer;
