import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Hamburger from "./Hamburger";

const Header = ({ history }) => {
  const [state, setState] = useState({
    initital: true,
    clicked: null,
    menuName: "Menu",
  });
  const [disabled, setDisabled] = useState(false);

  //when page changes
  useEffect(() => {
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
      document.body.style.overflowY = "";
      document.querySelector("header").style.color = "#0a0a0c";
    });
  });

  const handleMenu = () => {
    disableMenu();
    if (state.initital === true) {
      setState({
        initital: null,
        clicked: true,
        menuName: "Close",
      });
      document.body.style.overflowY = "hidden";
      document.querySelector("header").style.color = "#fff";
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
      document.body.style.overflowY = "";
      document.querySelector("header").style.color = "#0a0a0c";
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
      document.body.style.overflowY = "hidden";
      document.querySelector("header").style.color = "#fff";
    }
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">BRWN.</Link>
            </div>

            <div className="menu">
              <button onClick={handleMenu} disabled={disabled}>
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default withRouter(Header);
