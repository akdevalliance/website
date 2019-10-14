import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img
                src={logo}
                alt="Alaska Developers Alliance"
                style={{ width: "88px" }}
              />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="http://slack.akdevalliance.com/"
                style={{ color: "red", fontWeight: "bold" }}
              >
                Join Slack!
              </a>
              <a className="navbar-item" href="http://eepurl.com/du3UjT">
                Get the Newsletter!
              </a>
              <Link className="navbar-item" to="/calendar">
                Calendar
              </Link>
              <Link className="navbar-item" to="/leadership">
                Leadership
              </Link>
              <Link className="navbar-item" to="/partners">
                Partners
              </Link>
              <Link className="navbar-item" to="/documents">
                Guiding Documents
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
