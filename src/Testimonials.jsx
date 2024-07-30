import "./Testimonials.css"

function Testimonials () {
  return(
    <>
      <div id="testimonials" className="testimonials">
        <h1>Testimonials</h1>
        <div className="testimonials__set">
          <div className="testimonials__info">
            <div className="testimonials__name-mark">
              <p>Root Beer</p>
              <p>Score: 8/10</p>
            </div>
            <p>Nice phone!</p>
          </div>
          <div className="testimonials__info">
            <div className="testimonials__name-mark">
              <p>Root Beer Enjoyer</p>
              <p>Score: 7/10</p>
            </div>
            <p>Root Beer!!!</p>
          </div>
          <div className="testimonials__info">
            <div className="testimonials__name-mark">
              <p>Typer</p>
              <p>Score: 10/10</p>
            </div>
            <p>The iPhone 15 Pro Max is a true technological marvel! With an upgraded camera featuring impressive zoom capabilities, stunning display quality, and exceptional battery life, it sets a new standard for smartphones. The sleek design and powerful performance make it a top choice for anyone looking to stay ahead in the tech world.</p>
          </div>
          <div className="testimonials__info">
            <div className="testimonials__name-mark">
              <p>ChatGPT</p>
              <p>Score: 5/10</p>
            </div>
            <p>AI generated text</p>
          </div>
          <div className="testimonials__info">
            <div className="testimonials__name-mark">
              <p>Nikita</p>
              <p>Score: 6/10</p>
            </div>
            <p>A lot of text!!!</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials