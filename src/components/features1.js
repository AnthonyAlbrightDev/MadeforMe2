import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div id="buyers" className="thq-section-padding">
      <div className="features1-container2 thq-section-max-width">
        <div className="features1-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features1-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features1-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features1-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features1-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features1-tab-horizontal1"
          >
            <div className="features1-divider-container1">
              {activeTab === 0 && <div className="features1-container3"></div>}
            </div>
            <div className="features1-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features1-tab-horizontal2"
          >
            <div className="features1-divider-container2">
              {activeTab === 1 && <div className="features1-container4"></div>}
            </div>
            <div className="features1-content2">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features1-tab-horizontal3"
          >
            <div className="features1-divider-container3">
              {activeTab === 2 && <div className="features1-container5"></div>}
            </div>
            <div className="features1-content3">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature1ImgAlt: 'Custom art being created',
  feature3Description:
    'Browse through the proposals of our skilled makers and create your custom item',
  feature3Title: 'Choose the perfect maker',
  feature3ImgSrc:
    '/assets/Doors.jpg',
  feature1ImgSrc:
    '/assets/Lightbulb.jpg',
  feature2Description:
    'Makers send you their custom proposals based on your idea',
  feature1Title: 'Post your custom idea',
  feature3ImgAlt: 'Skilled makers showcasing their work',
  feature1Description:
    'Share your vision with our community of talented makers',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1556558939-a6d40dd6967e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTUwMjExMnw&ixlib=rb-4.1.0&q=80&w=1080',
  feature2ImgAlt: 'Custom furniture being crafted',
  feature2Title: 'Get proposals from makers',
}

Features1.propTypes = {
  feature1ImgAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Title: PropTypes.string,
}

export default Features1
