import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        className="product-image"
        src={product.imageUrl}
        alt={product.title}
      />
      <div className="product-block">
        <span
          className={`product-price ${product.discount ? "discounted" : ""}`}
        >
          {product.discount
            ? Math.round(product.price * (1 - product.discount))
            : product.price}{" "}
          ₽
        </span>

        {product.discount && (
          <span className="old-price">{product.price} ₽</span>
        )}
      </div>
      <p className="product-decription">{product.title}</p>
    </div>
  );
};
