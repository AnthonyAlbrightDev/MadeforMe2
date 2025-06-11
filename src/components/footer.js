import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer1 thq-section-padding">
      <div className="footer-max-width thq-section-max-width">
        <div className="footer-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer-row">
            <span className="thq-body-small">{props.content3}</span>
            <div className="footer-footer-links3">
              <span className="thq-body-small">{props.privacyLink}</span>
              <span className="thq-body-small">{props.termsLink}</span>
              <span className="thq-body-small">{props.cookiesLink}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  content3: '@ 2025 MadeforMe. All rights reserved.',
  cookiesLink: 'Social: @madeforme.app',
  termsLink: 'Email: madeforme.app@gmail.com',
}

Footer.propTypes = {
  content3: PropTypes.string,
  cookiesLink: PropTypes.string,
  privacyLink: PropTypes.string,
  termsLink: PropTypes.string,

}

export default Footer
