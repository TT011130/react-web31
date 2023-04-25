import "./ProductCard.css"
import PropTypes from 'prop-types';
import ProductCard from "./App";
/**
 * @typedef Product
 *
 * @property {number} id - ID sản phẩm
 * @property {string} title - Tên sản phẩm
 * @property {string} description - Mô tả về sản phẩm
 * @property {number} price - Giá sản phẩm
 * @property {number} discountPercentage - Phần trăm giảm giá
 * @property {number} rating - Đánh giá về sản phẩm
 * @property {number} stock - Số lượng sản phẩm trong kho
 * @property {string} brand - Thương hiệu
 * @property {string} category - Danh mục sản phẩm
 * @property {string} thumbnail - Hình ảnh đại diện sản phẩm
 */

/**
 * @typedef ProdcutCardProps
 * 
 * @property {Product} product - Thông tin sản phẩm
 */

 /**
  * Hiển thị một card sản phẩm
  * @param {ProdcutCardProps} props 
  */


export default function({card}) {
    return <article className="product-name">
        <div className="thumbnail">
            <img src={card.thumbnail} alt=""/>
        </div>
        <div className="product-title">
            {card.title}
        </div>
        <div className="product-stock">
            {card.stock}
        </div>
        <div className="product-price">
            {card.price}
        </div>
    </article>
}

ProductCard.defaultProps = {};

const ProductObject = PropTypes.exact ({
    id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  discountPercentage: PropTypes.number,
  rating: PropTypes.number,
  stock: PropTypes.number,
  brand: PropTypes.string,
  category: PropTypes.string,
  thumbnail: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string)
});

ProductCard.displayName = "ProductCard";
ProductCard.defaultProps = {};

ProductCard.PropTypes = {
    product: ProductObject
};
