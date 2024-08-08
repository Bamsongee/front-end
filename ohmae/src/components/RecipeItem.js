<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import "../css/RecipeItem.css";
import RecipeImg from "../img/RecipeImg.png";
import RecipeTime from "../img/time.png";

function RecipeItem() {
    return (
        <div className="RecipeBox">
            <Link to="/recipedetail" className="LinkToRecipeDetail">
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
=======
import '../css/Ingredient.css'

const Ingredient = ({ ingredient }) => {

    return (
        <li className='Ingredient'>
            {ingredient}
        </li>
    )
}

export default Ingredient;
>>>>>>> b7773c4dad573ca83ddd5c57f4ba58e5ea754c9c
