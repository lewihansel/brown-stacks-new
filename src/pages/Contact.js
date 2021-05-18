import React, { useRef, useEffect } from "react";
import profilePic from "../images/about/profile-pic 1.png";
import {
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaTelegramPlane,
  FaEnvelope,
} from "react-icons/fa";
import Footer from "../components/Footer";
import { contactReveal } from "../components/utils/Animation";
import { Link } from "react-router-dom";

const Contact = () => {
  let photo = useRef(null);
  let textContent = useRef(null);

  useEffect(() => {
    contactReveal(photo, textContent);
  }, []);

  return (
    <div className="contactPage">
      <div className="mainContent">
        <div className="photo" ref={(el) => (photo = el)}>
          <img src={profilePic} alt="James Brown" />
        </div>
        <div className="text-content" ref={(el) => (textContent = el)}>
          <div className="title">
            <span>Get in touch with</span>
            <span>James Brown</span>
          </div>

          <div className="description">
            My real name is Lewi Hansel, a professional web developer and a{" "}
            <Link
              to={{
                pathname:
                  "https://www.credly.com/badges/87f28557-ac1a-4e4b-9163-7f5f75d5a7b8/public_url",
              }}
              target="_blank"
            >
              CyberOps Associate
            </Link>{" "}
            from Jakarta. I'm open to new opportunities specifically as a Threat
            Analyst, Cybersecurity Analyst, or System Engineer. Reach me out via
            one of these links for my resume.
          </div>
          <div className="contactAccount">
            <div className="col1">
              <a href="https://www.instagram.com/lewihansel/">
                <FaInstagram />
                <span>Instagram</span>
              </a>
              <a href="https://wa.me/6285780008389?text=Hi%20Hansel%20👋">
                <FaWhatsapp />
                <span>What'sApp</span>
              </a>
            </div>
            <div className="col2">
              {/* <a href="https://www.linkedin.com/in/lewihansel/">
                <FaLinkedinIn />
                <span>LinkedIn</span>
              </a> */}
              <a href="https://t.me/lewihansel">
                <FaTelegramPlane />
                <span>Telegram</span>
              </a>
              <a href="mailto:hansel1895@gmail.com">
                <FaEnvelope />
                <span>Mail</span>
              </a>
              <a href="https://github.com/lewihansel/">
                <FaGithub />
                <span>Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
