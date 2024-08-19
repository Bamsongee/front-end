import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import "../css/Save.css";
import RecipeItem from "../components/RecipeItem";

function Save() {
    const [cookies] = useCookies(["accessToken"]);
    const [category, setCategory] = useState("전체");
    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = useCallback(async (category) => {
        try {
            
            const url = category === "" || category === "전체"
                ? "https://ohmea-backend.store/like"
                : `https://ohmea-backend.store/like/filter?category=${category}`;

            const response = await axios.get(url, {
                headers: {
                    Authorization: `${cookies.accessToken}`,
                },
            });

            if (response.data.success) {
                setRecipes(response.data.data);
            } else {
                setRecipes([]);
                alert("레시피를 불러오는데 실패했습니다.");
            }
        } catch (error) {
            console.error("레시피를 가져오는 중 오류 발생:", error);
            setRecipes([]);
            alert("레시피를 가져오는 중 오류가 발생했습니다.");
        }
    }, [cookies.accessToken]);

    useEffect(() => {
        fetchRecipes(category); 
    }, [fetchRecipes, category]);

    const handleCategoryChange = (event) => {
        setCategory(event.target.value); 
    };

    return (
        <div className="page">
            <div className="SaveBox">
                <div className="MyPageBoldTitle">내가 찜한 레시피</div>
                <div className="Save-CategoryContainer">
                    <div className="Save-filter">
                        <select value={category} onChange={handleCategoryChange}>
                            <option value="" disabled hidden>카테고리</option>
                            <option value="전체">전체</option>
                            <option value="한식">한식</option>
                            <option value="양식">양식</option>
                            <option value="중식">중식</option>
                            <option value="일식">일식</option>
                        </select>
                    </div>
                </div>
                <div className="Save-DetailPage-contents">
                    {recipes.length > 0 ? (
                        recipes.map((recipe, index) => (
                            <RecipeItem key={index} recipe={recipe} />
                        ))
                    ) : (
                        <div className="Save-NoResultBox">
                            <div>찜한 레시피가 없습니다.</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Save;
