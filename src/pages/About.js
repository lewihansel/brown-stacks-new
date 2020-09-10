import React, { useRef, useEffect } from "react";
import { textRevealSwipe, scrollReveal } from "../components/utils/Animation";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Footer from "../components/Footer";

import profilePic from "../images/about/profile-pic 1.png";
import python from "../images/about/python.png";
import js from "../images/about/js.png";
import nodejs from "../images/about/node.png";
import firebase from "../images/about/firebase.png";
import mongodb from "../images/about/mongodb.png";
import django from "../images/about/django.png";
import strapi from "../images/about/strapi.png";
import postgresql from "../images/about/postgresql.png";
import sass from "../images/about/sass.png";
import reactjs from "../images/about/react.png";
import greensock from "../images/about/gsap.png";

import gAnalytics from "../images/about/Analytics.png";
import gAds from "../images/about/GoogleAds.png";
import ahrefs from "../images/about/Ahrefs.png";

const About = () => {
  let title = useRef(null);
  let photo = useRef(null);

  let firstRow = useRef(null);
  let secondRow = useRef(null);
  let thirdRow = useRef(null);

  useEffect(() => {
    textRevealSwipe(title, firstRow, photo);
    scrollReveal(secondRow);
    scrollReveal(thirdRow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="about">
      <div className="title" ref={(el) => (title = el)}>
        <div className="titleRow">
          <span>about</span>
          <div className="bg-box" />
        </div>
        <div className="titleRow">
          <span>James</span>
          <div className="bg-box" />
        </div>
        <div className="titleRow">
          <span>Brown</span>
          <div className="bg-box" />
        </div>
        <div className="profilePic" ref={(el) => (photo = el)}>
          <img src={profilePic} alt="james brown" />
        </div>
      </div>

      <div className="firstRow" ref={(el) => (firstRow = el)}>
        <div className="text">
          <span>
            My real name is <em>Lewi Hansel</em>, I’m a{" "}
            <em>creative web developer</em>, with a good knowledge about{" "}
            <em>digital marketing</em>.
          </span>
          <br />
          <br />
          <span>
            I’m not a formal <em>UX designer</em>, but having a good taste of
            design. I’m more interseted and capable of <em>writing the code</em>
            . Most of my work is designed either with figma or by just writing
            it in JavaScript.
          </span>
        </div>
      </div>

      <div className="secondRow" ref={(el) => (secondRow = el)}>
        <div className="text">
          <span className="rowTitle">
            on my <em>fullstack</em> development approach
          </span>
          <br />
          <br />
          <span>
            As a developer, I have my own <em>prefered tools</em> (but not
            limited to), that I master. I use <em>React</em> as my main frontend
            library of choice and <em>Node</em> as backend. But for a fast
            prototyping I use <em>Firebase</em> as a backend.
          </span>
          <br />
          <br />
          <span>
            <em>I’ll deal with the code!</em> I know some of the UI/UX designer
            out there just didn’t want to mess with the code, so as long as you
            can design it, I’ll find a way to code it.
          </span>
        </div>
        <div className="images right">
          <img src={python} alt="python logo" className="python" />
          <img src={js} alt="javascript logo" className="js" />
          <img src={nodejs} alt="nodejs logo" className="nodejs" />
          <img src={firebase} alt="firebase logo" className="firebase" />
          <img src={mongodb} alt="mongodb logo" className="mongodb" />
          <img src={django} alt="django logo" className="django" />
          <img src={strapi} alt="strapi logo" className="strapi" />
          <img src={postgresql} alt="posrgresql logo" className="postgresql" />
          <img src={sass} alt="sass logo" className="sass" />
          <img src={reactjs} alt="react logo" className="react" />
          <img src={greensock} alt="greensock logo" className="greensock" />
        </div>
      </div>

      <div className="thirdRow" ref={(el) => (thirdRow = el)}>
        <div className="text">
          <span className="rowTitle">
            on my <em>digital marketing</em> strategy
          </span>
          <br />
          <br />
          <span>
            I was formally a <em>digital marketing manager</em>. Mostly website
            marketing, but also managing other marketing channels like social
            media, and email marketing.
          </span>
          <br />
          <br />
          <span>
            My approach is always, first{" "}
            <em>identify the target customer demographic</em>. Second, design
            marketing content around the data. Third, evaluate and refine the
            demographic data. I will always push my team to create a{" "}
            <em>design that matters to our customers</em> not just aesthetically
            pleasing.
          </span>
        </div>
        <div className="images left">
          <img src={gAnalytics} alt="analytics logo" className="analytics" />
          <img src={gAds} alt="google ads logo" className="ads" />
          <img src={ahrefs} alt="ahrefs logo" className="ahrefs" />
        </div>
      </div>

      <div className="contactBtn">
        <Link to="/contact">Get In Touch.</Link>
        <span className="contactTitle">
          <em>That's about me</em>, now it's your turn. <em>Reach me out</em> at
          one of this account:
        </span>
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
          </div>
        </div>

        <div className="repoDetail">
          <span>
            *This website is created using
            <a href="https://reactjs.org/">React</a>, all animation is done
            using<a href="https://greensock.com/">GSAP</a>. If you like to
            submit any improvement or if you want to just see the code, head out
            to the
            <a href="https://github.com/lewihansel/brown-stacks-new">repo</a>
          </span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
