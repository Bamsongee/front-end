import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import "../css/Mypage.css";
import Update from "../img/update.png";
import MyRecipe from "../img/myRecipe.png";
import MyRefrigerator from "../img/myRefrigerator.png";
import MyReview from "../img/myReview.png";

function Mypage() {
    const [cookies] = useCookies(["accessToken", "username"]);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        console.log("Access Token:", cookies.accessToken);

        const fetchUserInfo = async () => {
            try {
                const response = await axios.get("https://ohmea-backend.store/mypage", {
                    headers: {
                        Authorization: `${cookies.accessToken}`,
                    },
                });

                if (response.data.success) {
                    setUserInfo(response.data.data);
                } else {
                    alert("유저 정보를 불러오는데 실패했습니다.");
                }
            } catch (error) {
                console.error("유저 정보를 가져오는 중 오류 발생:", error);
                alert("유저 정보를 가져오는 중 오류가 발생했습니다.");
            }
        };

        fetchUserInfo();
    }, [cookies.accessToken]);

    if (!userInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div className="page">
            <div className="mypage_page">
                <div className="mypage_box">
                    <div className="mypage_name">
                        <p>{userInfo.username}님</p>
                        <a href="/info">
                            <img src={Update} alt="update" className="mypage_update" />
                        </a>
                    </div>
                    <div className="mypage_filter_box">
                        <p className="mypage_filter">맞춤 필터링 적용 중</p>
                    </div>

                    <div className="mypage_info_row">
                        <div className="mypage_info_item1">
                            <p className="mypage_title">성별</p>
                            <p className="mypage_content">{userInfo.gender === "WOMAN" ? "여성" : "남성"}</p>
                        </div>
                        <div className="mypage_info_item2">
                            <p className="mypage_title">요리 실력</p>
                            <p className="mypage_content">
                                {userInfo.cookingSkill === "UPPER" ? "상" : 
                                userInfo.cookingSkill === "MIDDLE" ? "중" : 
                                userInfo.cookingSkill === "LOWER" ? "하" : "미정"}
                            </p>
                        </div>
                    </div>
                    <div className="mypage_info_row">
                        <div className="mypage_info_item3">
                            <p className="mypage_title">요리 예산</p>
                            <p className="mypage_content">{userInfo.cookingBudget.toLocaleString()}원</p>
                        </div>
                    </div>
                </div>

                <div className="mypage_list">
                    <div className="mypage_box1">
                        <p>찜한 레시피</p>
                        <img src={MyRecipe} alt="myRecipe" className="mypage_recipe" />
                    </div>
                    <div className="mypage_box2">
                        <p>나의 냉장고</p>
                        <img src={MyRefrigerator} alt="myRefrigerator" className="mypage_refrigerator" />
                    </div>
                    <div className="mypage_box3">
                        <p>나의 리뷰</p>
                        <img src={MyReview} alt="myReview" className="mypage_review" />
                    </div>
                </div>

                <div className="mypage_mypageNotion">
                    <p>고객센터</p>
                    <p>공지사항</p>
                    <p>개인정보처리방침</p>
                    <p>고객센터</p>
                </div>
            </div>
        </div>
    );
}

export default Mypage;
