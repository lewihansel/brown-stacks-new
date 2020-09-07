import React, { useRef, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TweenMax } from "gsap";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import ScrollToTop from "./components/utils/ScrollToTop";
import Home from "./pages/Home";

const App = () => {
  let app = useRef(null);

  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: "visible" } });
  });

  return (
    <Router>
      <ScrollToTop />
      <div className="App" ref={(el) => (app = el)}>
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route path="/projects/:title" component={ProjectDetails} />

                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/solutions" component={Solutions} />
                <Route exact path="/about-me" component={About} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

function Solutions() {
  return <p>Solutions that help you.</p>;
}

function About() {
  return <p>Feel free to reach us.</p>;
}

export default App;
