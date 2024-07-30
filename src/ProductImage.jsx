import "./ProductImage.css"

function ProductImage() {
  return (
    <>
      <div className="productInfo__image">
        <div className="productInfo__main-image">
          <img src="../public/smartphone-image.jpg"/>
        </div>
        <div className="wrapper">
          <div className="productInfo__secondary-images">
            <div className="side-image1 productInfo__secondary-image">
              <img src="../public/side-smartphone1.jpg"/>
            </div>
            <div className="side-image2 productInfo__secondary-image">
              <img src="../public/side-smartphone2.jpg"/>
            </div>
            <div className="camera-image1 productInfo__secondary-image">
              <img src="../public/camera-smartphone1.jpg"/>
            </div>
            <div className="camera-image2 productInfo__secondary-image">
              <img src="../public/camera-smartphone2.jpg"/>
            </div>
            <div className="line-of-smartphones productInfo__secondary-image">
              <img src="../public/line-of-smartphones.jpg"/>
            </div>
            <div className="smartphone-image-full productInfo__secondary-image">
              <img src="../public/smartphone-image-full.jpg"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductImage