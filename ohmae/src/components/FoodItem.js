import React from "react";
import { Link } from "react-router-dom";
import "../css/FoodItem.css";
import FoodImg from "../img/FoodImg.png";

function FoodItem() {
    return (
        <div className="FoodBox">
            <Link to="/fooddetail" className="LinkToRecipeDetail">
                <div className="foodThumbnail">
                    <img className="FoodImg" src={FoodImg} alt="FoodImg" />
                </div>

                <div className="foodInfo">
                    <div className="foodName">오뚜기 고소한 참기름</div>
                    <div className="foodPrice">8,140원</div>
                </div>
            </Link>
        </div>
    );
}

export default FoodItem;
