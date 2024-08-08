import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Main.css";
import Nav from "../components/Nav";
import Header from "../components/Header";
import RecipeItem from "../components/RecipeItem";
import FoodItem from "../components/FoodItem";
import GoToImg from "../img/goto.png";

function Main() {
    return (
        <>
            <Header></Header>
            <div className="page">
                <div className="MainBox">
                    <form className="RecipeSearch">
                        <input
                            className="RecipeSearchInput"
                            type="text"
                            placeholder="원하는 레시피를 검색해보세요"
                        ></input>
                    </form>
                    <div className="Main-My">
                        <div className="Main-My-Top">
                            <div className="Main-userName">밤송이 님, 안녕하세요!</div>
                            <Link to="/mypage" className="MainToMy">
                                MY
                            </Link>
                        </div>
                        <div className="Main-My-Mid">
                            <div className="Main-userInfo">
                                <div className="userInfo-Name">성별</div>
                                <div className="userInfo-Info">여</div>
                            </div>
                            <div className="Main-userInfo">
                                <div className="userInfo-Name">요리 실력</div>
                                <div className="userInfo-Info">하</div>
                            </div>
                        </div>
                        <div className="Main-My-Bottom">
                            <div className="Main-userInfo">
                                <div className="userInfo-Name">한 끼 예산</div>
                                <div className="userInfo-Info">20,000 원</div>
                            </div>
                        </div>
                    </div>
                    <div className="Container">
                        <div className="ConTitle">
                            <div className="ConTitleText">밤송이님의 맞춤 레시피</div>
                            <Link to="">
                                <img className="GoToDetail" src={GoToImg} alt="GoToImg"></img>
                            </Link>
                        </div>
                        <div className="ConList">
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

                    <div className="Container">
                        <div className="ConTitle">
                            <div className="ConTitleText">핫딜 특가 🔥</div>
                            <Link to="">
                                <img className="GoToDetail" src={GoToImg} alt="GoToImg"></img>
                            </Link>
                        </div>
                        <div className="ConList-food">
                            <FoodItem></FoodItem>
                            <FoodItem></FoodItem>
                            <FoodItem></FoodItem>
                            <FoodItem></FoodItem>
                        </div>
                    </div>

                    <div className="Container">
                        <div className="ConTitle">
                            <div className="ConTitleText">만들 수 있는 레시피</div>
                            <Link to="">
                                <img className="GoToDetail" src={GoToImg} alt="GoToImg"></img>
                            </Link>
                        </div>
                        <div className="ConList">
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

                    <div className="Container">
                        <div className="ConTitle">
                            <div className="ConTitleText">인기 레시피 TOP 10</div>
                        </div>
                        <div className="ConList">
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

export default Main;
