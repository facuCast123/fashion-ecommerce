import { FaPlus } from "react-icons/fa6";
import "./Product.css";

const Product = ({ url, name, price }) => {
  return (
    <div
      className="product"
      onMouseEnter={(e) => e.currentTarget.classList.add("hovered-product")}
      onMouseLeave={(e) => e.currentTarget.classList.remove("hovered-product")}
    >
      <img src={url} alt={name} className="product__image" />
      <p>{name}</p>
      <span>${price}</span>

      <span className="product__add-btn">
        <FaPlus />
      </span>
    </div>
  );
};

export default Product;
