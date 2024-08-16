import React from "react";
import { Link } from "react-router-dom";
import "../css/RecipeItem.css";
import RecipeImg from "../img/RecipeImg.png";
import RecipeTime from "../img/time.png";

function RecipeItem() {
    return (
        <div className="RecipeBox">
            <Link to="/recipe/:id" className="LinkToRecipeDetail">
                <img className="RecipeImg" src={RecipeImg} alt="RecipeImg" />
                <div className="recipeInfo">
                    <div className="recipeName">두부 김치찌개</div>
                    <div className="recipeCategory">
                        <div className="recipeType">한식</div>
                        <div className="recipeLevel">보통</div>
                        <div className="recipeTime">
                            <img className="RecipeTime" src={RecipeTime} alt="RecipeTime" />
                            <div>30 mins</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default RecipeItem;
