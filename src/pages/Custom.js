import React, { useState, useEffect, useCallback } from "react";
// import { Link } from "react-router-dom";
import "../css/Custom.css";
import RecipeItem from "../components/RecipeItem";
import axios from "axios";
import { useCookies } from "react-cookie";

function Custom() {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [time, setTime] = useState("");
    const [cookies] = useCookies(["accessToken", "username"]);
    const [recipeList, setRecipeList] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            const token = cookies.accessToken;

            if (!token) {
                console.error("No access token found in cookies");
                return;
            }
            console.log("Using token:", token);

            const response = await axios.get(`https://ohmea-backend.store/algorithm`, {
                headers: {
                    Authorization: `${token}`,
                },
            });

            if (response.data.success) {
                console.log("success fetch data:", response.data.message);
                setRecipeList(response.data.data);
            } else {
                console.error("Failed to fetch data:", response.data.message);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, [cookies]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleDifficultyChange = (event) => {
        setDifficulty(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const getTimeBoundary = (timeRange) => {
        switch (timeRange) {
            case "15분 이내":
                return 15;
            case "30분 이내":
                return 30;
            case "60분 이내":
                return 60;
            case "1시간 초과":
                return 61;
            default:
                return null;
        }
    };

    useEffect(() => {
        const timeBoundary = getTimeBoundary(time);

        const filtered = recipeList.filter((recipe) => {
            const recipeTime = recipe.time;

            return (
                (!category || recipe.category === category) &&
                (!difficulty || recipe.difficulty === difficulty) &&
                (timeBoundary === null || (timeBoundary === 61 ? recipeTime > 60 : recipeTime <= timeBoundary))
            );
        });

        setFilteredRecipes(filtered);
    }, [category, difficulty, time, recipeList]);

    const username = cookies.username;

    return (
        <>
            <div className="page">
                <div className="CustomBox">
                    <div className="DetailPage-title">
                        <div className="DetailPage-title-des">{username}님의 취향에 딱 맞는</div>
                        <div className="DetailPage-title-name">맞춤 레시피</div>
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
                            <option value="15분 이내">15분 이내</option>
                            <option value="30분 이내">30분 이내</option>
                            <option value="60분 이내">60분 이내</option>
                            <option value="1시간 초과">1시간 초과</option>
                        </select>
                    </div>
                    <div className="DetailPage-contents">
                        {filteredRecipes.map((recipe, index) => (
                            <RecipeItem
                                key={index}
                                id={recipe.id}
                                name={recipe.name}
                                imageUrl={recipe.imageUrl}
                                category={recipe.category}
                                time={recipe.time}
                                difficulty={recipe.difficulty}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Custom;
