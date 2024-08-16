import "./../css/Product.css";
import ProductItem from "../components/ProductItem";

const Product = () => {
    return (
        <>
            <div className="page">
                <div className="productBox">
                    <div className="DetailPage-title">
                        <div className="DetailPage-title-des">밤송이님에게만 드리는</div>
                        <div className="DetailPage-title-name">🔥핫딜특가🔥</div>
                    </div>

                    <div className="productItem">
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
