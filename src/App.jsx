import React, { useState } from 'react'

import './App.css'
import "./responsive.css"
import Navigation from "./Navigation.jsx";
import HeroBanner from "./HeroBanner.jsx";
import ProductInfo from "./ProductInfo.jsx";
import Testimonials from "./Testimonials.jsx";
import ContactForm from "./ContactForm.jsx";


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Navigation />
      <HeroBanner />
      <ProductInfo />
      <Testimonials />
      <ContactForm />
    </>
  )
}

export default App
