import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useCookies } from "react-cookie"; 
import "../css/Save.css";
import Nav from "../components/Nav";
import Header from "../components/Header";
import RecipeItem from "../components/RecipeItem";

function Save() {
    const [recipes, setRecipes] = useState({ 한식: [], 양식: [], 중식: [], 일식: [] });
    const [cookies] = useCookies(["accessToken"]);

    const fetchRecipes = useCallback(async (category) => {
        try {
            const response = await axios.get(`https://ohmea-backend.store/like/filter?category=${category}`, {
                headers: {
                    Authorization: `${cookies.accessToken}`,
                },
            });

            if (response.data.success) {
                setRecipes(prev => ({ ...prev, [category]: response.data.data }));
            } else {
                alert(`"${category}" 카테고리의 레시피를 불러오는데 실패했습니다.`);
            }
        } catch (error) {
            console.error(`${category} 레시피를 불러오는 중 오류 발생:`, error);
            alert(`${category} 레시피를 불러오는 중 오류가 발생했습니다.`);
        }
    }, [cookies.accessToken]);

    useEffect(() => {
        const categories = ["한식", "양식", "중식", "일식"];
        categories.forEach(category => fetchRecipes(category));
    }, [fetchRecipes]);

    return (
        <>
            <Header />
            <div className="page">
                <div className="SaveBox">
                    <div className="DetailPage-title">
                        <div className="DetailPage-title-des">밤송이님이 직접 고른</div>
                        <div className="DetailPage-title-name">찜한 레시피</div>
                    </div>
                    {Object.keys(recipes).map(category => (
                        <div className="Save-CategoryContainer" key={category}>
                            <div className="Save-CategoryTitle">
                                <div className="Save-CategoryTitleText">{category}</div>
                            </div>
                            <div className="Save-CategoryList">
                            {recipes[category].length > 0 ? (
                                recipes[category].map(recipe => (
                                    <div className="RecipeItemMargin" key={recipe.id}>
                                        <RecipeItem 
                                            id={recipe.id}
                                            name={recipe.name}
                                            imageUrl={recipe.imageUrl}
                                            category={recipe.category}
                                            time={recipe.time}
                                            difficulty={recipe.difficulty}
                                        />
                                    </div>
                                ))
                            ) : (
                                <div className="Save-NoItemContainer">
                                    <div className="Save-NoItem">찜한 레시피가 없습니다.</div>
                                </div>
                            )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Nav />
        </>
    );
}

export default Save;
