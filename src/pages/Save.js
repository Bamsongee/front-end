import React from "react";
import { Link } from "react-router-dom";
import "../css/Save.css";
import RecipeItem from "../components/RecipeItem";

function Save() {
    return (
        <>
            <div className="page">
                <div className="SaveBox">
                    <div className="MyPageBoldTitle">내가 찜한 레시피 </div>
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
        </>
    );
}

export default Save;
