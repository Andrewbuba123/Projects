import { ProductCard } from "./ProductCard";
import { products } from "./products";
import "./ProductList.css";

export const ProductList = ({ products }) => {
  return (
    <ul className="product-list">
      {products.map((product) => (
        <li className="product-item" key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};
