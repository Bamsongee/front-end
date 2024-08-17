import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "../css/Custom.css";
import RecipeItem from "../components/RecipeItem";

function Custom() {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [time, setTime] = useState("");

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleDifficultyChange = (event) => {
        setDifficulty(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    return (
        <>
            <div className="page">
                <div className="CustomBox">
                    <div className="DetailPage-title">
                        <div className="DetailPage-title-des">밤송이님의 취향에 딱 맞는</div>
                        <div className="DetailPage-title-name">밤송이님의 맞춤 레시피</div>
                    </div>
                    <div className="DetailPage-filter">
                        <select value={category} onChange={handleCategoryChange}>
                            <option value="" disabled hidden>
                                카테고리
                            </option>
                            <option value="한식">한식</option>
                            <option value="양식">양식</option>
                            <option value="중식">중식</option>
                        </select>

                        <select value={difficulty} onChange={handleDifficultyChange}>
                            <option value="" disabled hidden>
                                난이도
                            </option>
                            <option value="쉬움">쉬움</option>
                            <option value="보통">보통</option>
                            <option value="어려움">어려움</option>
                        </select>

                        <select value={time} onChange={handleTimeChange}>
                            <option value="" disabled hidden>
                                요리 소요 시간
                            </option>
                            <option value="30분 미만">30분 미만</option>
                            <option value="1시간 미만">1시간 미만</option>
                            <option value="1시간 이상">1시간 이상</option>
                        </select>
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
        </>
    );
}

export default Custom;