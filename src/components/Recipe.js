import React, { useState, useEffect, useCallback } from "react";
import "../css/Recipe.css";
import Like from "../img/recipeLike.png";
import Unlike from "../img/recipeUnlike.png";
import axios from "axios";
import { useCookies } from "react-cookie";

const Recipe = ({ id }) => {
    const [cookies] = useCookies(["accessToken", "username"]);
    const [recipeDetail, setRecipeDetail] = useState({});
    const [isLiked, setIsLiked] = useState(false);

    // 레시피 정보 불러오기
    const fetchData = useCallback(
        async (id) => {
            try {
                const token = cookies.accessToken;

                if (!token) {
                    console.error("No access token found in cookies");
                    return;
                }
                console.log("Using token:", token);

                const response = await axios.get(`https://ohmea-backend.store/recipe/detail/${id}`, {
                    headers: {
                        Authorization: `${token}`,
                    },
                });

                if (response.data.success) {
                    console.log("success fetch data:", response.data.message);
                    setRecipeDetail(response.data.data);
                    console.log(response.data.data);
                    setIsLiked(response.data.data.liked);
                } else {
                    console.error("Failed to fetch data:", response.data.message);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
        [cookies]
    );

    useEffect(() => {
        if (id) {
            fetchData(id);
        }
    }, [id, fetchData]);

    // 레시피 정보 양식 맞추기
    const getTimeRangeText = (time) => {
        if (time <= 15) {
            return "15분 이내";
        } else if (time <= 30) {
            return "30분 이내";
        } else if (time <= 60) {
            return "60분 이내";
        } else {
            return "1시간 초과";
        }
    };

    // 레시피 찜 & 해제
    const handleLikeClick = async () => {
        try {
            const token = cookies.accessToken;

            if (!token) {
                console.error("No access token found in cookies");
                return;
            }

            if (isLiked) {
                const response = await axios.delete(`https://ohmea-backend.store/recipe/delete/${id}`, {
                    headers: {
                        Authorization: `${token}`,
                    },
                });
                if (response.data.success) {
                    setIsLiked(false);
                    console.log("찜 해제 성공:", response.data.message);
                } else {
                    console.error("찜 해제 실패:", response.data.message);
                }
            } else {
                const response = await axios.post(`https://ohmea-backend.store/recipe/like/${id}`, "", {
                    headers: {
                        Authorization: `${token}`,
                    },
                });
                if (response.data.success) {
                    setIsLiked(true);
                    console.log("찜 성공:", response.data.message);
                } else {
                    console.error("찜 실패:", response.data.message);
                }
            }
        } catch (error) {
            console.error("찜 상태 변경 중 오류 발생:", error);
            console.error("서버 응답:", error.response?.data);
        }
    };

    const ingredients = recipeDetail.ingredients || []; // Use empty array if undefined
    const ingredientsHalf = Math.ceil(ingredients.length / 2);

    return (
        <div className="Recipe">
            <img className="foodImg" src={recipeDetail.imageUrl} alt="Food" />
            <div className="recipeCategory">
                <div className="CategoryButton">{recipeDetail.category}</div>
                <div className="CategoryButton">{recipeDetail.difficulty}</div>
                <div className="CategoryButton">{getTimeRangeText(recipeDetail.time)}</div>
            </div>
            <div className="recipeMain">
                <div className="recipeTitle">{recipeDetail.name}</div>
                <div className="heart" onClick={handleLikeClick}>
                    <img src={isLiked ? Like : Unlike} alt="heart" />
                </div>
            </div>
            <hr />
            <div className="RecipeSubBox">
                <div className="recipeSubTitle">분량</div>
                <div className="recipeSubContent">{recipeDetail.serving}</div>
            </div>
            <hr />
            <div className="RecipeSubBox">
                <div className="recipeSubTitle">비용 (1인 기준)</div>
                <div className="recipeSubContent">{recipeDetail.oneBudget}원</div>
            </div>
            <hr />
            <div className="RecipeSubBox">
                <div className="recipeSubTitle">소요 시간</div>
                <div className="recipeSubContent">{recipeDetail.time}분</div>
            </div>
            <hr />
            <div className="RecipeSubBox">
                <div className="recipeSubTitle">난이도</div>
                <div className="recipeSubContent">{recipeDetail.difficulty}</div>
            </div>
            <hr />
            <div className="RecipeSubBox">
                <div className="recipeSubTitle">재료</div>
                <div className="ingredientsTwoSection">
                    <ul className="ingredients">
                        {ingredients.slice(0, ingredientsHalf).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <ul className="ingredients">
                        {ingredients.slice(ingredientsHalf).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <hr />
            <div className="RecipeSubBox">
                <div className="recipeSubTitle">조리 순서</div>
                <div className="order">{recipeDetail.recipe}</div>
            </div>
        </div>
    );
};

export default Recipe;
