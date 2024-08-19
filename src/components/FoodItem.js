import React from "react";
import { Link } from "react-router-dom";
import "../css/FoodItem.css";

function FoodItem({ title, image, price, link }) {
    return (
        <div className="FoodBox">
            <Link to={link} className="LinkToFoodDetail">
                <div className="foodThumbnail">
                    <img className="FoodImg" src={image} alt="FoodImg" />
                </div>

                <div className="foodInfo">
                    <div className="foodName">{title}</div>
                    <div className="foodPrice">{price}</div>
                </div>
            </Link>
        </div>
    );
}

export default FoodItem;
