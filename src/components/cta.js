import React from 'react'

import PropTypes from 'prop-types'

import './cta.css'

const CTA = (props) => (
  <div className="thq-section-padding">
    <div className="thq-section-max-width">
      <div className="cta-accent2-bg">
        <div className="cta-accent1-bg">
          <div className="cta-container2">
            <div className="cta-content">
              <span className="thq-heading-2">{props.heading1}</span>
              <p className="thq-body-large">{props.content1}</p>
            </div>
            <div className="cta-actions">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScGky4Qk0nTX3tt6ZVuGKddDUHFsag23uMU7IZB5PluLVP6RA/viewform?usp=header" className="thq-button-filled cta-button">
                {props.action1}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

CTA.defaultProps = {
  heading1: 'Get Started with MadeforMe',
  content1:
    'Wether you are a maker or buyer, we would love for you to join our community. Fill out the form to get started as soon as the MadeforMe launches.',
  action1: 'Join Waitlist',
}

CTA.propTypes = {
  heading1: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
}

export default CTA
