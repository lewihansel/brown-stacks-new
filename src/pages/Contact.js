import React, { useRef, useEffect } from "react";
import profilePic from "../images/about/profile-pic 1.png";
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Footer from "../components/Footer";
import gsap from "gsap/gsap-core";

const Contact = () => {
  let photo = useRef(null);
  let textContent = useRef(null);

  const aboutReveal = (node1, node2) => {
    const photo = node1;
    const title = node2.children[0].children;
    const description = node2.children[1];
    const contactLink1 = gsap.utils.toArray(
      description.nextSibling.children[0].children
    );
    const contactLink2 = gsap.utils.toArray(
      description.nextSibling.children[1].children
    );

    gsap
      .timeline({ delay: 0.8 })
      .from(title, {
        duration: 1,
        y: 60,
        opacity: 0,
        skewY: -2,
        stagger: 0.1,
        ease: "power3.out",
      })
      .from(
        description,
        {
          duration: 0.7,
          opacity: 0,
          x: 50,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .from(
        [...contactLink1, ...contactLink2],
        {
          duration: 0.6,
          y: -50,
          opacity: 0,
          stagger: 0.2,
          ease: "back.out(2.5)",
        },
        "-=0.6"
      )
      .from(
        photo,
        {
          duration: 0.5,
          y: -100,
          opacity: 0,
          ease: "power3.out",
        },
        1
      );
  };

  useEffect(() => {
    aboutReveal(photo, textContent);
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
            My real name is Lewi Hansel, a web developer from Jakarta. Right now
            I'm open to new opportunities specifically as a front-end,
            full-stack, or backend developer. Reach me out via one of these
            links.
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
              <a href="https://www.linkedin.com/in/lewihansel/">
                <FaLinkedinIn />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:hansel1895@gmail.com">
                <FiMail />
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
