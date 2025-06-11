import React from 'react'

import PropTypes from 'prop-types'

import './steps.css'

const Steps = (props) => {
  return (
    <div id="makers" className="steps-container1 thq-section-padding">
      <div className="steps-max-width thq-section-max-width">
        <div className="steps-container2 thq-grid-2">
          <div className="steps-section-header">
            <h2 className="thq-heading-2">
              Showcase Your Craft. Grow Your Business
            </h2>
            <p className="thq-body-large">
           Join a platform built to help skilled makers share their work, attract custom projects, and earn from their talent.
            </p>
              <div className="steps-actions">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScGky4Qk0nTX3tt6ZVuGKddDUHFsag23uMU7IZB5PluLVP6RA/viewform?usp=header" 
                  className="thq-button-animated thq-button-filled steps-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
    <span className="thq-body-small">Join Waitlist</span>
  </a>
</div>
          </div>
          <div className="steps-container3">
            <div className="steps-container4 thq-card">
              <h2 className="thq-heading-2">{props.step1Title}</h2>
              <span className="steps-text14 thq-body-small">
                {props.step1Description}
              </span>
              <label className="steps-text15 thq-heading-3"></label>
            </div>
            <div className="steps-container5 thq-card">
              <h2 className="thq-heading-2">{props.step2Title}</h2>
              <span className="steps-text17 thq-body-small">
                {props.step2Description}
              </span>
              <label className="steps-text18 thq-heading-3"></label>
            </div>
            <div className="steps-container6 thq-card">
              <h2 className="thq-heading-2">{props.step3Title}</h2>
              <span className="steps-text20 thq-body-small">
                {props.step3Description}
              </span>
              <label className="steps-text21 thq-heading-3"></label>
            </div>
            <div className="steps-container7 thq-card">
              <h2 className="thq-heading-2">{props.step4Title}</h2>
              <span className="steps-text23 thq-body-small">
                {props.step4Description}
              </span>
              <label className="steps-text24 thq-heading-3"></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps.defaultProps = {
  step1Description:
    'Showcase your past work, specialties, and reviews to stand out and build trust.',
  step3Description:
    'Collaborate, get inspired, and grow your reach with other skilled creators.',
  step2Title: 'Creative Freedom',
  step2Description:
    'Choose the projects that excite you. Set your pricing. Work on your schedule.',
  step1Title: 'Personalized maker profile',
  step3Title: 'Growing Maker Community',
  step4Description:
    'Let your work get discovered through featured listings, category highlights, and search visibility. No need to be a marketing expert.',
  step4Title: 'Built-In Marketing Tools',
}

Steps.propTypes = {
  step1Description: PropTypes.string,
  step3Description: PropTypes.string,
  step2Title: PropTypes.string,
  step2Description: PropTypes.string,
  step1Title: PropTypes.string,
  step3Title: PropTypes.string,
  step4Description: PropTypes.string,
  step4Title: PropTypes.string,
}

export default Steps
