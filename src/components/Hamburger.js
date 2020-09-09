/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import brownPhotoShare from "../images/hover/Hover_490px.png";
import brownMovie from "../images/hover/Hover_BrownMovie.png";
import BrownCommerce from "../images/hover/Hover_BrownCommerce.png";
import { useMediaQuery } from "react-responsive";
import {
  staggerReveal,
  fadeInUp,
  staggerText,
  handleHover,
  handleHoverExit,
  handleCity,
  handleCityReturn,
} from "./utils/Animation";

const cities = [
  { name: "490px", image: brownPhotoShare },
  { name: "Brown Movie Lookup", image: brownMovie },
  { name: "Brown Commerce", image: BrownCommerce },
];

const Hamburger = ({ state }) => {
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  const isMobile = useMediaQuery({ query: "(max-width: 540px)" });

  useEffect(() => {
    if (state.clicked === false) {
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.inital === null)
    ) {
      gsap.to(menu, {
        duration: 0,
        css: { display: "block" },
      });
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(revealMenuBackground, revealMenu);
      if (!isMobile) {
        fadeInUp(info);
      }
      staggerText(line1, line2, line3);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <div className="hamburger-menu" ref={(el) => (menu = el)}>
      <div
        className="menu-secondary-background-color"
        ref={(el) => (revealMenuBackground = el)}
      />
      <div className="menu-layer" ref={(el) => (revealMenu = el)}>
        <div
          className="menu-city-background"
          ref={(el) => (cityBackground = el)}
        ></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={handleHover}
                      onMouseOut={handleHoverExit}
                      ref={(el) => (line1 = el)}
                      to="/projects"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={handleHover}
                      onMouseOut={handleHoverExit}
                      ref={(el) => (line2 = el)}
                      to="/about-me"
                    >
                      About me
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={handleHover}
                      onMouseOut={handleHoverExit}
                      ref={(el) => (line3 = el)}
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              {!isMobile && (
                <div ref={(el) => (info = el)} className="info">
                  <h3>Hi, friend. 👋</h3>
                  <p>
                    welcome to Brown-Stacks, hover over last projects bellow to
                    see a glimpse of my last projects. For more information
                    about my development approach visit about-me page.
                  </p>
                </div>
              )}
              <div className="locations">
                Last Projects:
                {cities.map((item) => (
                  <span
                    key={item.name}
                    onMouseEnter={() => handleCity(item.image, cityBackground)}
                    onMouseLeave={() => handleCityReturn(cityBackground)}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
