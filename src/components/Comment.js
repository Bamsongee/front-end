import React, { useState, useEffect, useCallback } from "react";
import "../css/Comment.css";
import CommentItem from "./CommentItem";
import sendComment from "../img/send_comment.png";
import axios from "axios";
import { useCookies } from "react-cookie";

const Comment = ({ id }) => {
    const [cookies] = useCookies(["accessToken", "username"]);
    const [comments, setComments] = useState([]);
    const [review, setReview] = useState([]);

    // 댓글 조회
    const fetchCommentData = useCallback(
        async (id) => {
            try {
                const token = cookies.accessToken;

                if (!token) {
                    console.error("No access token found in cookies");
                    return;
                }
                console.log("Using token:", token);

                const response = await axios.get(`https://ohmea-backend.store/posts/${id}/comments`, {
                    headers: {
                        Authorization: `${token}`,
                    },
                });

                if (response.data.success) {
                    console.log("success fetch data:", response.data.message);
                    setComments(response.data.data);
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
            fetchCommentData(id);
        }
    }, [id, fetchCommentData]);

    // 댓글 작성
    const submitReview = async () => {
        try {
            const token = cookies.accessToken;

            if (!token) {
                console.error("No access token found in cookies");
                return;
            }
            console.log("Using token:", token);

            const response = await axios.post(
                `https://ohmea-backend.store/posts/${id}/comments`,
                { comment: review, recipe_id: id },
                {
                    headers: {
                        Authorization: `${token}`,
                    },
                }
            );

            if (response.data.success) {
                console.log(response.data.message);
                fetchCommentData(id);
                setReview("");
            } else {
                console.error("Failed to post comment:", response.data.message);
            }
        } catch (error) {
            console.error("Error posting comment:", error);
        }
    };

    return (
        <div className="Comment">
            <div className="commentTitle">리뷰</div>
            <div className="commentItemBox">
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <CommentItem
                            key={index}
                            author={comment.username}
                            content={comment.comment}
                            createdAt={comment.createdAt}
                        />
                    ))
                ) : (
                    <div className="NoCommentBox">첫 번째 리뷰를 작성해 보세요!</div>
                )}
            </div>
            <form
                className="CommentForm"
                onSubmit={(e) => {
                    e.preventDefault();
                    submitReview();
                }}
            >
                <input
                    className="CommentInput"
                    type="text"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                ></input>
                <button className="CommentInputBtn" type="button" onClick={submitReview}>
                    <img src={sendComment} alt="sendComment" />
                </button>
            </form>
        </div>
    );
};

export default Comment;
