import ProductCard from "./ProductCard";
import products from "./products";

export default function App() {
  const productCards = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return <div className="App">{productCards}</div>;
}
