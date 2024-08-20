import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "../css/Review.css";
import MoreRecipe from "../img/ham_go.png";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie"; 

function Review() {
    const navigate = useNavigate();
    const [comments, setComments] = useState([]);
    const [cookies] = useCookies(["accessToken"]);

    const fetchComments = useCallback(async () => {
        try {
            const response = await axios.get("https://ohmea-backend.store/mypage/comments", {
                headers: {
                    Authorization: `${cookies.accessToken}`,
                },
            });

            if (response.data.success) {
                setComments(response.data.data);
            } else {
                alert("댓글을 불러오는데 실패했습니다.");
            }
        } catch (error) {
            console.error("댓글을 불러오는 중 오류 발생:", error);
            alert("댓글을 불러오는 중 오류가 발생했습니다.");
        }
    }, [cookies.accessToken]);

    useEffect(() => {
        fetchComments();
    }, [fetchComments]);

    const handleImageClick = useCallback((recipeId) => {
        navigate(`/recipe/${recipeId}`);
    }, [navigate]);

    return (
        <div className="page">
            <div className="ReviewBox">
                <div className="MyPageBoldTitle">나의 리뷰</div>
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <div key={comment.id} className="ReviewContainer">
                            <div className="Review-recipe">
                                <div className="Review-recipeName">{comment.recipeName}</div>
                                <img 
                                    src={MoreRecipe} 
                                    alt="MoreRecipe" 
                                    className="MoreRecipe" 
                                    onClick={() => handleImageClick(comment.recipeId)} 
                                />
                            </div>
                            <div className="Review-comment">
                                <div className="Review-time">{comment.createdAt}</div>
                                <div className="Review-content">{comment.comment}</div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>댓글이 없습니다.</div>
                )}
            </div>
        </div>
    );
}

export default Review;
