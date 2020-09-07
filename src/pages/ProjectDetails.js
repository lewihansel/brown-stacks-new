import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { FaLink } from "react-icons/fa";
import projectImages from "../images/projectImages";
import { Link } from "react-router-dom";
import { scrollToTopBtn } from "../components/utils/Animation";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const ProjectDetails = () => {
  let { title } = useParams();
  let projectDetails = useRef(null);
  const images = projectImages[`${title}`];
  const [otherProject1, setOtherProject1] = useState(null);
  const [otherProject2, setOtherProject2] = useState(null);

  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  useEffect(() => {
    if (title === "brown-photo-app") {
      setOtherProject1(projectImages["brown-movie-lookup"]);
      setOtherProject2(projectImages["brown-commerce"]);
    } else if (title === "brown-movie-lookup") {
      setOtherProject1(projectImages["brown-photo-app"]);
      setOtherProject2(projectImages["brown-commerce"]);
    } else if (title === "brown-commerce") {
      setOtherProject1(projectImages["brown-movie-lookup"]);
      setOtherProject2(projectImages["brown-photo-app"]);
    }
  }, [title]);

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  useEffect(() => {
    if (projectDetails) {
      const backgroundImage = projectDetails.children[0].children[0];
      const overlay = backgroundImage.nextSibling;
      const content = projectDetails.children[1].children[0].children[0];

      gsap
        .timeline({ delay: 0.5 })
        .to(window, 0.3, { scrollTo: "#content-start" })
        .from(backgroundImage, 0.5, {
          y: -50,
          ease: "power3.easeOut",
          opacity: 0,
          scale: 1.5,
        })
        .from(overlay, 3, { opacity: 0, y: 200, ease: "power3.easeOut" }, 0.1)
        .from(content, 1, { opacity: 0, y: 300, ease: "power3.easeOut" }, 2.5);
    }
  }, [title]);

  return (
    <>
      {images ? (
        <div
          className="projectDetails"
          id="content-start"
          ref={(el) => (projectDetails = el)}
        >
          <div className="backgroundImage">
            <img src={images.mainImage} alt={`${title} desktop preview`} />
            <div className="overlay"></div>
          </div>

          <div className="container">
            <div className="wrapper">
              <div className="projectContent">
                <div className="title">{images.title}</div>
                <a href={images.link} className="liveDemo">
                  <FaLink />
                  Live Demo
                </a>
                <div className="description">
                  {images.description}
                  {isMobile && (
                    <small>
                      <br />
                      <br />
                      <br />
                      *for the best UI viewing experience please visit this
                      website on your laptop or personal computer
                    </small>
                  )}
                </div>
                <div className="uiPairs">
                  {images.uiPairs.map((ui) => (
                    <div className="uiPair" key={`${ui.desktop}`}>
                      <img src={ui.desktop} alt="brown" className="uiDesktop" />
                      <img src={ui.mobile} alt="mobile" className="uiMobile" />
                    </div>
                  ))}
                </div>
                <div className="bottomMobileView">
                  {images.lastImage.map((image) => (
                    <img
                      key={`${image}`}
                      src={image}
                      alt={`${title} - responsive user interface `}
                      className="mobileView"
                    />
                  ))}
                </div>
              </div>
              {otherProject1 && otherProject2 && (
                <div className="other">
                  <span className="otherTitle">Other Projects:</span>
                  <div className="otherProjects">
                    <div className="otherProject">
                      <img
                        src={otherProject1.ohterImage.main}
                        alt="main"
                        className="main"
                      />
                      <img
                        src={otherProject1.ohterImage.back}
                        alt="main"
                        className="back"
                      />
                      <img
                        src={otherProject1.ohterImage.front}
                        alt="main"
                        className="front"
                      />
                      <div className="title">
                        <Link to={`/projects/${otherProject1.url}`}>
                          {otherProject1.title}
                        </Link>
                      </div>
                    </div>
                    <div className="otherProject">
                      <img
                        src={otherProject2.ohterImage.main}
                        alt="main"
                        className="main"
                      />
                      <img
                        src={otherProject2.ohterImage.back}
                        alt="main"
                        className="back"
                      />
                      <img
                        src={otherProject2.ohterImage.front}
                        alt="main"
                        className="front"
                      />
                      <div className="title">
                        <Link to={`/projects/${otherProject2.url}`}>
                          {otherProject2.title}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="otherFooter">
                    <Link to="/projects">All Projects</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          <footer>
            <div className="logo">
              <Link to="/">BRWN.</Link>
            </div>
            <div className="footer-links">
              <span>©2020 James Brown</span>
              <span> - </span>
              <Link className="link" to="/about-me">
                About-Me
              </Link>
              <span> - </span>
              <span className="link" onClick={scrollToTopBtn}>
                Scroll to top
              </span>
            </div>
          </footer>
        </div>
      ) : (
        <span>Page not found</span>
      )}
    </>
  );
};

export default ProjectDetails;
