import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/IngredientRecipe.css";
import Nav from "../components/Nav";
import Header from "../components/Header";
import RecipeItem from "../components/RecipeItem";

function IngredientRecipe() {
    return (
        <>
            <Header></Header>
            <div className="page">
                <div className="IngredientRecipeBox">
                    <div className="DetailPage-title">
                        <div className="DetailPage-title-des">밤송이님의 식재료로</div>
                        <div className="DetailPage-title-name">만들 수 있는 레시피</div>
                    </div>
                    <div className="DetailPage-contents">
                        <RecipeItem></RecipeItem>
                        <RecipeItem></RecipeItem>
                        <RecipeItem></RecipeItem>
                        <RecipeItem></RecipeItem>
                        <RecipeItem></RecipeItem>
                        <RecipeItem></RecipeItem>
                        <RecipeItem></RecipeItem>
                        <RecipeItem></RecipeItem>
                        <RecipeItem></RecipeItem>
                    </div>
                </div>
            </div>
            <Nav></Nav>
        </>
    );
}

export default IngredientRecipe;
