import { ProductObject } from "./types";
import "./ProductCard.css"
/**
 * @typedef ProductCardProps
 *
 * @property {Product} product - Thông tin sản phẩm
 */

/**
 * Hiển thị một card sản phẩm
 *
 * @param {ProductCardProps} props
 */
export default function ProductCard({ product }) {
  return (
    <div className="product-card">
    <div className="product-thumbnail"><img src={product.thumbnail} alt=""/></div>
    <div className="product-name">
      <h3>{product.title}</h3>
    </div>
    <div className="product-description">{product.description}</div>
    <div className="product-rating-price">
      <div className="product-rating">
       <span>{product.rating}</span>
      </div>
      <div className="product-price">
        <p>${product.price}</p>
      </div>
    </div>
  </div>
  );
}

ProductCard.displayName = "ProductCard";
ProductCard.defaultProps = {};

ProductCard.propTypes = {
  product: ProductObject
};
