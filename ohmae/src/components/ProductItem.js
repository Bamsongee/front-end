import "../css/ProductItem.css";

const ProductItem = () => {
    return (
        <div>
            <div className="pageItem">
                <div className="img">
                    <img src={"https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/f063e5fa-5404-4c9c-8447-a65fa2da693d.jpg"} alt="CJ 햇반" />
                </div>
                <div className="details">
                    <div className="product-name">CJ 햇반 ddddd</div>
                    <div className="original-price">6,000원</div>
                    <div className="discounted-price">5,400원</div>
                </div>
                <div className="heart">❤️</div>
            </div>
        </div>
    );
}

export default ProductItem;
