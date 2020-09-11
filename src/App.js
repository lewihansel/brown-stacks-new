import React, { useRef, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { CSSTransition } from "react-transition-group";
import gsap from "gsap/gsap-core";

const routes = [
  {
    path: "/projects/:title",
    name: "project details",
    Component: ProjectDetails,
  },
  { path: "/", name: "home", Component: Home },
  { path: "/projects", name: "projects", Component: Projects },
  { path: "/contact", name: "contact", Component: Contact },
  { path: "/about-me", name: "about", Component: About },
];

const App = () => {
  let app = useRef(null);

  useEffect(() => {
    gsap.set(app, { autoAlpha: 1 });
  });

  return (
    <Router>
      <div className="App" ref={(el) => (app = el)}>
        <Header app={app} />
        <div className="container">
          <div className="wrapper">
            <Switch>
              {routes.map(({ path, name, Component }) => (
                <Route key={name} exact path={path}>
                  {({ match }) => (
                    <CSSTransition
                      in={match != null}
                      timeout={1200}
                      classNames="home"
                      unmountOnExit
                    >
                      <div className="home">
                        <Component />
                      </div>
                    </CSSTransition>
                  )}
                </Route>
              ))}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
