import "../css/Product.css";
import Header from "../components/Header";
import Nav from "../components/Nav";
import ProductItem from "../components/ProductItem";

const Product = () => {
    return <div className="page">
        <Header />
        <Nav />
        <div className="intro">
         <div style={{color: "#FF7A00"}}>밤송이님에게만 드리는</div>
         <div style={{fontSize: "20px"}}>🔥핫딜특가🔥</div>
        </div>

        <div className="productItem">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        </div>
       
    </div>
}

export default Product;