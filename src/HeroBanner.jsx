import "./HeroBanner.css"

function HeroBanner() {
  return(
  <>
    <div id="heroBanner" className="banner">
      <img className="banner__img" src="./public/banner-image.jpg"/>
      <div className="banner__text">
        <h1>New design - New possibilities</h1>
        <p>New design allows to create more efficient cooling for more powerful components.</p>
        <button className="banner__button">Learn More</button>
      </div>
    </div>
  </>
  )
}

export default HeroBanner