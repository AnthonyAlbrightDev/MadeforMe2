import React from 'react'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <header className="navbar-container">
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
          <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar-logo"
              />
          <nav className="navbar-links1">
            <a href="#home" className="thq-link thq-body-small">{props.link1}</a>
            <a href="#buyers" className="thq-link thq-body-small">{props.link2}</a>
            <a href="#makers" className="thq-link thq-body-small">{props.link3}</a>
            <a href="#testimonials" className="thq-link thq-body-small">{props.link4}</a>
            <a href="#contact" className="thq-link thq-body-small">{props.link5}</a>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-nav">
            <div className="navbar-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar-logo"
              />
              <div data-thq="thq-close-menu" className="navbar-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
               <nav className="navbar-links2">
                  <a href="#home" className="thq-link thq-body-small">{props.link1}</a>
                  <a href="#buyers" className="thq-link thq-body-small">{props.link2}</a>
                  <a href="#makers" className="thq-link thq-body-small">{props.link3}</a>
                  <a href="#testimonials" className="thq-link thq-body-small">{props.link4}</a>
                  <a href="#contact" className="thq-link thq-body-small">{props.link5}</a>
                </nav>
        </div>
      </header>
    </header>
  )
}

Navbar.defaultProps = {
  link1: 'Home',
  link5: 'Waitlist',
  link2: 'Buyers',
  logoSrc:
    'assets/MadeforMeLogo.png',
  logoAlt: 'MadeforMe Logo',
  link3: 'Makers',
  link4: 'Testimonials',
}

Navbar.propTypes = {
  link1: PropTypes.string,
  link5: PropTypes.string,
  link2: PropTypes.string,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  link3: PropTypes.string,
  link4: PropTypes.string,
}

export default Navbar
