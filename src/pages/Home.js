import React, { useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { TimelineLite } from "gsap/all";
import { BsArrowRight } from "react-icons/bs";
import { homeAnimation } from "../components/utils/Animation";
import { Link } from "react-router-dom";

const Home = () => {
  let heroText = useRef(null);
  let heroBtn = useRef(null);
  let backgroundText = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });

  const isMobile = useMediaQuery({ query: "(max-width: 540px)" });

  useEffect(() => {
    homeAnimation(heroText, heroBtn);

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
                Professional web developer with
              </div>
            </div>
            <div className="hero-text-line">
              <div className="hero-text-line-inner">
                a passion in security and privacy.
              </div>
            </div>
          </h5>
        ) : (
          <h5 ref={(el) => (heroText = el)}>
            <div className="hero-text-line">
              <div className="hero-text-line-inner">
                Hi my name is <b>James Brown</b>. Professional web developer
              </div>
            </div>
            <div className="hero-text-line">
              <div className="hero-text-line-inner">
                with a passion in security and privacy.
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
