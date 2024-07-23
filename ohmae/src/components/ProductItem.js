import "../css/ProductItem.css";

const ProductItem = () => {
    // https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/f063e5fa-5404-4c9c-8447-a65fa2da693d.jpg
    return <div className="pageItem">
        <div className="page">
        <div className="img">
            <img src={"https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/f063e5fa-5404-4c9c-8447-a65fa2da693d.jpg"} />
        </div>
        <div div >
            <div>
                CJ 햇반
            </div>
        </div>
        </div>
    </div>
}

export default ProductItem;