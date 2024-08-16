import React from "react";
import "../css/Review.css";
import MoreRecipe from "../img/ham_go.png";
import { useNavigate } from "react-router-dom";

function Review() {
    const navigate = useNavigate();

    const handleImageClick = () => {
        const recipeId = 1; // 예시 id 값
        navigate(`/recipe/${recipeId}`);
    };

    return (
        <>
            <div className="page">
                <div className="ReviewBox">
                    <div className="MyPageBoldTitle">나의 리뷰</div>
                    <div className="ReviewContainer">
                        <div className="Review-recipe">
                            <div className="Review-recipeName">영양 만점! 우리 아이가 좋아하는 불고기 레시피</div>
                            <img src={MoreRecipe} alt="MoreRecipe" className="MoreRecipe" onClick={handleImageClick} />
                        </div>
                        <div className="Review-comment">
                            <div className="Review-time">2024-12-09 10:30AM</div>
                            <div className="Review-content">레시피 감사합니다!</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Review;
