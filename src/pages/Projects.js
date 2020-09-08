import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { projectList } from "../images/projectImages";
import { projectReveal } from "../components/utils/Animation";
import Footer from "../components/Footer";

const Projects = () => {
  let content1 = useRef(null);
  let content2 = useRef(null);
  let content3 = useRef(null);

  useEffect(() => {
    projectReveal(content1);
    projectReveal(content2);
    projectReveal(content3);
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        <span className="pageTitle">Projects: </span>
        <div className="projects">
          <div className="content">
            <div className="projectImages" ref={(el) => (content1 = el)}>
              <img
                src={projectList[0].images.main}
                alt={`${projectList[0].title} desktop view cut`}
                className="main"
              />
              <img
                src={projectList[0].images.back}
                alt={`${projectList[0].title} mobile view`}
                className="mobileBack"
              />
              <img
                src={projectList[0].images.front}
                alt={`${projectList[0].title} mobile view`}
                className="mobileFront"
              />
            </div>
            <div className="projectDescription">
              <div className="title">{projectList[0].title}</div>
              <div className="description">{projectList[0].description}</div>
              <Link to={`/projects/${projectList[0].url}`}>
                More details <BsArrowRight />
              </Link>
            </div>
          </div>

          <div className="content">
            <div className="projectImages" ref={(el) => (content2 = el)}>
              <img
                src={projectList[1].images.main}
                alt={`${projectList[1].title} desktop view cut`}
                className="main"
              />
              <img
                src={projectList[1].images.back}
                alt={`${projectList[1].title} mobile view`}
                className="mobileBack"
              />
              <img
                src={projectList[1].images.front}
                alt={`${projectList[1].title} mobile view`}
                className="mobileFront"
              />
            </div>
            <div className="projectDescription">
              <span className="title">{projectList[1].title}</span>
              <div className="description">{projectList[1].description}</div>
              <Link to={`/projects/${projectList[1].url}`}>
                More details <BsArrowRight />
              </Link>
            </div>
          </div>

          <div className="content">
            <div className="projectImages" ref={(el) => (content3 = el)}>
              <img
                src={projectList[2].images.main}
                alt={`${projectList[2].title} desktop view cut`}
                className="main"
              />
              <img
                src={projectList[2].images.back}
                alt={`${projectList[2].title} mobile view`}
                className="mobileBack"
              />
              <img
                src={projectList[2].images.front}
                alt={`${projectList[2].title} mobile view`}
                className="mobileFront"
              />
            </div>
            <div className="projectDescription">
              <span className="title">{projectList[2].title}</span>
              <div className="description">{projectList[2].description}</div>
              <Link to={`/projects/${projectList[2].url}`}>
                More details <BsArrowRight />
              </Link>
            </div>
          </div>

          {/* marker */}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Projects;
