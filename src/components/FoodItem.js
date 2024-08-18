import "../css/ProductItem.css";

const ProductItem = ({
  image,
  title,
  description,
  originalPrice,
  discountedPrice,
  url,
}) => {
  return (
    <div className="ProductItem">
      <div className="img">
        <img src={image} alt="productImg" />
      </div>
      <div className="details">
        <div className="product-name">{title}</div>
        <div className="original-price">{originalPrice}원</div>
        <div className="discounted-price">{discountedPrice}원</div>
      </div>
    </div>
  );
};

export default ProductItem;
