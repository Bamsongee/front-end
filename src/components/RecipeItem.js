import React from "react";
import { Link } from "react-router-dom";
import "../css/RecipeItem.css";
import RecipeTime from "../img/time.png";

function RecipeItem({ id, name, imageUrl, category, time, difficulty }) {
    return (
        <div className="RecipeBox">
            <Link to={`/recipe/${id}`} className="LinkToRecipeDetail">
                <img className="RecipeImg" src={imageUrl} alt="RecipeImg" />
                <div className="recipeInfo">
                    <div className="recipeName">{name}</div>
                    <div className="recipeCategory">
                        <div className="recipeType">{category}</div>
                        <div className="recipeLevel">{difficulty}</div>
                        <div className="recipeTime">
                            <img className="RecipeTime" src={RecipeTime} alt="RecipeTime" />
                            <div>{time} mins</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default RecipeItem;
