import React, { useState } from 'react'
import "./Navigation.css"

function Navigation() {

  const [isVisible,setVisible] = useState(false)

  function handleTapOnBurger () {
    setVisible(!isVisible);
  }

  return (
    <>
  <div className="container">
    <div className="nav-elements">
      <div className="nav-elements__item1">
        <div className="nav-elements__producer-image">
          <h1>Phone Inc</h1>
        </div>
        <div className="nav-elements__anchors">
          <a className="nav-elements__anchor" href="#heroBanner">Hero banner</a>
          <a className="nav-elements__anchor" href="#productInfo">Product features</a>
          <a className="nav-elements__anchor" href="#testimonials">Testimonials</a>
          <a className="nav-elements__anchor" href="#contact-form">Contact form</a>
        </div>
      </div>
      <div className="nav-elements__item2">
        <button className="nav-elements__button">Order Now</button>
        <div className="burger-button-icon" onClick={handleTapOnBurger}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
        </div>
      </div>
    </div>
    <div id="anchors_m" className={`${isVisible ? '' : 'hidden'} anchors_m`} >
      <a className="nav-elements__anchor_m" href="#heroBanner_m">Hero banner</a>
      <a className="nav-elements__anchor_m" href="#productInfo_m">Product features</a>
      <a className="nav-elements__anchor_m" href="#testimonials_m">Testimonials</a>
      <a className="nav-elements__anchor_m" href="#contact-form_m">Contact form</a>
    </div>
  </div>
  </>
  )
}

export default Navigation