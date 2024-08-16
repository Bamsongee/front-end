import React from "react";
import { Link } from "react-router-dom";
import "../css/Mypage.css";
import Update from "../img/update.png";
import MyRecipe from "../img/myRecipe.png";
import MyRefrigerator from "../img/myRefrigerator.png";
import MyReview from "../img/myReview.png";

function Mypage() {
    return (
        <>
            <div className="page">
                <div className="mypage_page">
                    <div className="mypage_box">
                        <div className="mypage_name">
                            <p>김은서님</p>
                            <Link to="/info">
                                <img src={Update} alt="update" className="mypage_update" />
                            </Link>
                        </div>
                        <div className="mypage_filter_box">
                            <p className="mypage_filter">맞춤 필터링 적용 중</p>
                        </div>

                        <div className="mypage_info_row">
                            <div className="mypage_info_item1">
                                <p className="mypage_title">성별</p>
                                <p className="mypage_content">여성</p>
                            </div>
                            <div className="mypage_info_item2">
                                <p className="mypage_title">요리 실력</p>
                                <p className="mypage_content">상</p>
                            </div>
                        </div>
                        <div className="mypage_info_row">
                            <div className="mypage_info_item1">
                                <p className="mypage_title">나이</p>
                                <p className="mypage_content">22세</p>
                            </div>
                            <div className="mypage_info_item2">
                                <p className="mypage_title">요리 예산</p>
                                <p className="mypage_content">20,000원</p>
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
        </>
    );
}

export default Mypage;
