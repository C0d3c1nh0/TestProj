import "./ProductInfo.css"
import "./scrollbar.css"
import ProductImage from "./ProductImage.jsx";
import ProductName from "./ProductName.jsx";
import ProductCharacteristics from "./ProductCharacteristics.jsx";
import ProductDescription from "./ProductDescription.jsx";

function ProductInfo() {
  return(
    <>
      <div id="productInfo" className="productInfo">
        <ProductImage />
        <ProductName />
        <ProductCharacteristics />
        <ProductDescription />
      </div>
    </>
  )
}

export default ProductInfo