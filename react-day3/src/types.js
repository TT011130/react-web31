import PropTypes from "prop-types";

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

export const ProductObject = PropTypes.exact({
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
