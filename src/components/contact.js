import React from 'react'

import PropTypes from 'prop-types'

import './contact.css'

const Contact = (props) => {
  return (
    <div id="contact" className="contact-contact20 thq-section-padding">
      <div className="contact-max-width thq-section-max-width">
        <div className="contact-section-title">
          <span className="thq-body-small">{props.content2}</span>
          <div className="contact-content1">
            <h2 className="thq-heading-2">{props.heading1}</h2>
          </div>
        </div>
         <section className="interest-form" id="interest-form">
        <h2>Would you use MadeforMe?</h2>
        <p>
          We're building this for you. Please let us know what you think!
        </p>
        <div className="form-container">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScGky4Qk0nTX3tt6ZVuGKddDUHFsag23uMU7IZB5PluLVP6RA/viewform?usp=header"
            width="100%"
            height="600"
            frameBorder="0"
            title="MadeforMe Feedback Form"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      </div>
    </div>
  )
}

Contact.defaultProps = {
  content2: 'Our team is here to help you with any inquiries you may have.',
  content3:
    'Feel free to contact us via email if you have any questions or need assistance.',
  heading1: 'Join the MadeforMe Community',
}

Contact.propTypes = {
  content2: PropTypes.string,
  email1: PropTypes.string,
  address1: PropTypes.string,
  content3: PropTypes.string,
  content4: PropTypes.string,
  heading1: PropTypes.string,
  content5: PropTypes.string,
  phone1: PropTypes.string,
}

export default Contact
