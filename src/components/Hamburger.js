/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import brownPhotoShare from "../images/hover/Hover_490px.png";
import brownMovie from "../images/hover/Hover_BrownMovie.png";
import BrownCommerce from "../images/hover/Hover_BrownCommerce.png";
import { useMediaQuery } from "react-responsive";

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

  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

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

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right, top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.1,
      },
    });
  };

  const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      duration: 0.8,
      y: 100,
      delay: 0.2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeInUp = (node) => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: 0.2,
      opacity: 0,
      ease: "power3.inOut",
    });
  };

  const handleCity = (city) => {
    gsap.to(cityBackground, {
      duration: 0,
      background: `url(${city}) center center`,
    });
    gsap.to(cityBackground, {
      duration: 0.4,
      opacity: 1,
      ease: "power3.inOut",
    });
    gsap.from(cityBackground, {
      duration: 0.4,
      skewY: 1,
      transformOrigin: "right top",
    });
  };

  const handleCityReturn = () => {
    gsap.to(cityBackground, {
      duration: 0.4,
      opacity: 0,
    });
  };

  const handleHover = (e) => {
    gsap.to(e.target, {
      duration: 0.1,
      y: 3,
      skewX: 4,
      ease: "power3.inOut",
    });
  };

  const handleHoverExit = (e) => {
    gsap.to(e.target, {
      duration: 0.2,
      y: -3,
      skewX: 0,
      ease: "power3.inOut",
    });
  };

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
                      to="/solutions"
                    >
                      Solutions
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
                      to="/projects"
                    >
                      Projects
                    </Link>
                  </li>
                </ul>
              </nav>
              {!isMobile && (
                <div ref={(el) => (info = el)} className="info">
                  <h3>Hi, friend. 👋</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi dolorem deleniti obcaecati repudiandae deserunt
                    possimus inventore odio aut, reprehenderit similique ipsa
                    ipsum, voluptates quidem ut adipisci magnam, enim nesciunt
                    doloribus.
                  </p>
                </div>
              )}
              <div className="locations">
                Last Projects:
                {cities.map((item) => (
                  <span
                    key={item.name}
                    onMouseEnter={() => handleCity(item.image)}
                    onMouseLeave={handleCityReturn}
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
