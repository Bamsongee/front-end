import "./../css/Product.css";
import ProductItem from "../components/ProductItem";
import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);

  const getCookie = (name) => {
    const cookieValue = document.cookie.match(
      "(^|;)\\s*" + name + "\\s*=\\s*([^;]+)"
    );
    return cookieValue ? decodeURIComponent(cookieValue.pop()) : "";
  };

  const username = getCookie("username");

  const fetchProducts = useCallback(async () => {
    try {
      const token = getCookie("accessToken");
      console.log("Token:", token);

      const response = await axios.get("https://ohmea-backend.store/product", {
        headers: {
          Authorization: token,
        },
      });

      const data = response.data;
      if (data.success) {
        setProducts(data.data);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const calculateDiscountedPrice = (price, percent) => {
    const originalPrice = parseFloat(price.replace(/,/g, ""));
    const discount = parseFloat(percent) / 100;
    const discountedPrice = originalPrice * (1 - discount);
    return discountedPrice.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Format with comma
  };

  return (
    <div className="page">
      <div className="productBox">
        <div className="DetailPage-title">
          <div className="DetailPage-title-des">{username}님에게만 드리는</div>
          <div className="DetailPage-title-name">🔥핫딜특가🔥</div>
        </div>

        <div className="productItem">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              originalPrice={product.price} // Assuming 'price' is original price
              discountedPrice={calculateDiscountedPrice(
                product.price,
                product.percent
              )}
              url={product.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
