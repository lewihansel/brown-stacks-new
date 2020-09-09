import React, { useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { TimelineLite } from "gsap/all";
import { BsArrowRight } from "react-icons/bs";
import {
  mobileHomeAnimation,
  desktopHomeAnimation,
} from "../components/utils/Animation";
import { Link } from "react-router-dom";

const Home = () => {
  let heroText = useRef(null);
  let heroBtn = useRef(null);
  let backgroundText = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });

  const isMobile = useMediaQuery({ query: "(max-width: 540px)" });

  useEffect(() => {
    if (isMobile) {
      mobileHomeAnimation(heroText, heroBtn);
    } else {
      desktopHomeAnimation(heroText, heroBtn);
    }

    // backgroundtext animation
    if (!isMobile) {
      tl.to(backgroundText, {
        duration: 60,
        x: -100,
        yoyo: true,
        repeat: -1,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        {isMobile ? (
          <h5 ref={(el) => (heroText = el)}>
            <div className="hero-text-line">
              <div className="hero-text-line-inner">
                Hi my name is <b>James Brown</b>.
              </div>
            </div>
            <div className="hero-text-line">
              <div className="hero-text-line-inner">
                Creative web developer with
              </div>
            </div>
            <div className="hero-text-line">
              <div className="hero-text-line-inner">
                a digital marketing background.
              </div>
            </div>
            <div className="hero-text-line">
              <div className="hero-text-line-inner">
                Here to help you provide
              </div>
            </div>
            <div className="hero-text-line">
              <div className="hero-text-line-inner">
                meaningful web experience
              </div>
            </div>
            <div className="hero-text-line">
              <div className="hero-text-line-inner">
                for your potential customer.
              </div>
            </div>
          </h5>
        ) : (
          <h5 ref={(el) => (heroText = el)}>
            <div className="hero-text-line">
              <div className="hero-text-line-inner">
                Hi my name is <b>James Brown</b>. Creative web developer with a
                digital
              </div>
            </div>
            <div className="hero-text-line">
              <div className="hero-text-line-inner">
                marketing background. Here to help you provide meaningful web
              </div>
            </div>
            <div className="hero-text-line">
              <div className="hero-text-line-inner">
                experience for your potential customer.
              </div>
            </div>
          </h5>
        )}
        <button className="homeBtn" ref={(el) => (heroBtn = el)}>
          <Link to="/about-me">
            <span>Learn More </span>
            <BsArrowRight />
          </Link>
        </button>
        {!isMobile && (
          <span className="backgroundText" ref={(el) => (backgroundText = el)}>
            BRWN.
          </span>
        )}
      </div>
    </div>
  );
};

export default Home;
