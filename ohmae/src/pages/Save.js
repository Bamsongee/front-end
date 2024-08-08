import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Save.css";
import Nav from "../components/Nav";
import Header from "../components/Header";
import RecipeItem from "../components/RecipeItem";

function Save() {
    return (
        <>
            <Header></Header>
            <div className="page">
                <div className="SaveBox">
                    <div className="DetailPage-title">
                        <div className="DetailPage-title-des">밤송이님이 직접 고른</div>
                        <div className="DetailPage-title-name">찜한 레시피</div>
                    </div>
                    <div className="Save-CategoryContainer">
                        <div className="Save-CategoryTitle">
                            <div className="Save-CategoryTitleText">한식</div>
                            <Link to="" className="moreRecipe">
                                더보기
                            </Link>
                        </div>
                        <div className="Save-CategoryList">
                            <div className="RecipeItemMargin">
                                <RecipeItem></RecipeItem>
                            </div>
                            <div className="RecipeItemMargin">
                                <RecipeItem></RecipeItem>
                            </div>
                            <div className="RecipeItemMargin">
                                <RecipeItem></RecipeItem>
                            </div>
                            <div className="RecipeItemMargin">
                                <RecipeItem></RecipeItem>
                            </div>
                        </div>
                    </div>
                    <div className="Save-CategoryContainer">
                        <div className="Save-CategoryTitle">
                            <div className="Save-CategoryTitleText">양식</div>
                            <Link to="" className="moreRecipe">
                                더보기
                            </Link>
                        </div>
                        <div className="Save-CategoryList">
                            <div className="RecipeItemMargin">
                                <RecipeItem></RecipeItem>
                            </div>
                            <div className="RecipeItemMargin">
                                <RecipeItem></RecipeItem>
                            </div>
                            <div className="RecipeItemMargin">
                                <RecipeItem></RecipeItem>
                            </div>
                            <div className="RecipeItemMargin">
                                <RecipeItem></RecipeItem>
                            </div>
                        </div>
                    </div>
                    <div className="Save-CategoryContainer">
                        <div className="Save-CategoryTitle">
                            <div className="Save-CategoryTitleText">중식</div>
                            <Link to="" className="moreRecipe">
                                더보기
                            </Link>
                        </div>
                        <div className="Save-CategoryList">
                            <div className="RecipeItemMargin">
                                <RecipeItem></RecipeItem>
                            </div>
                            <div className="RecipeItemMargin">
                                <RecipeItem></RecipeItem>
                            </div>
                            <div className="RecipeItemMargin">
                                <RecipeItem></RecipeItem>
                            </div>
                            <div className="RecipeItemMargin">
                                <RecipeItem></RecipeItem>
                            </div>
                        </div>
                    </div>
                    <div className="Save-CategoryContainer">
                        <div className="Save-CategoryTitle">
                            <div className="Save-CategoryTitleText">일식</div>
                            <Link to="" className="moreRecipe">
                                더보기
                            </Link>
                        </div>
                        <div className="Save-CategoryList">
                            <div className="RecipeItemMargin">
                                <RecipeItem></RecipeItem>
                            </div>
                            <div className="RecipeItemMargin">
                                <RecipeItem></RecipeItem>
                            </div>
                            <div className="RecipeItemMargin">
                                <RecipeItem></RecipeItem>
                            </div>
                            <div className="RecipeItemMargin">
                                <RecipeItem></RecipeItem>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Nav></Nav>
        </>
    );
}

export default Save;
