import React, { useState } from 'react';
import dummyjson from 'dummy-json';

const template = `{
  "products|5-10": [
    {
      "id|+1": 1,
      "thumbnail": "https://dummyimage.com/150x150/000/fff.png",
      "title": "{{lorem 2}}",
      "rating|1-5": 1,
      "price|10-100": 1,
      "brand": "{{random 'Apple' 'Samsung' 'Sony' 'LG' 'Google'}}"
    }
  ]
}`;

const products = JSON.parse(dummyjson.parse(template));

function ProductList() {
  const [selectedBrand, setSelectedBrand] = useState('');

  const handleBrandChange = event => {
    setSelectedBrand(event.target.value);
  };

  const filteredProducts = selectedBrand
    ? products.products.filter(product => product.brand === selectedBrand)
    : products.products;

  return (
    <div>
      <label htmlFor="brand-filter">Filter by brand:</label>
      <select id="brand-filter" value={selectedBrand} onChange={handleBrandChange}>
        <option value="">All</option>
        <option value="Apple">Apple</option>
        <option value="Samsung">Samsung</option>
        <option value="Sony">Sony</option>
        <option value="LG">LG</option>
        <option value="Google">Google</option>
      </select>
      {filteredProducts.map(product => (
        <div key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h2>{product.title}</h2>
          <p>Brand: {product.brand}</p>
          <p>Rating: {product.rating}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;