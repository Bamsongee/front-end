import React from "react";
import "../css/Mypage.css";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Update from "../img/update.png";
import MyRecipe from "../img/myRecipe.png";
import MyRefrigerator from "../img/myRefrigerator.png";
import MyReview from "../img/myReview.png";

function Mypage() {
    return (
        <div className="page">
            <Header />

            <div className="mypageBox">
                <div className="name">
                    <p>김은서님</p>
                    <img src={Update} alt="update" className="update"/>
                </div>
                <div className="filterBox">
                    <p className='filter'>맞춤 필터링 적용 중</p>
                </div>

                <div className="infoRow"> 
                    <div className="infoItem1">
                        <p className="title">성별</p>
                        <p className="content">여성</p>
                    </div>
                    <div className="infoItem2">
                        <p className="title">요리 실력</p>
                        <p className="content">상</p>
                    </div>
                </div>
                <div className="infoRow"> 
                    <div className="infoItem1">
                        <p className="title">나이</p>
                        <p className="content">35세</p>
                    </div>
                    <div className="infoItem2">
                        <p className="title">요리 예산</p>
                        <p className="content">20,000원</p>
                    </div>
                </div>
            </div>

            <div className="mypageList">
                <div className="box1">
                    <p>찜한 레시피</p>
                    <img src={MyRecipe} alt="myRecipe" className="myRecipe" />
                </div>
                <div className="box2">
                    <p>나의 냉장고</p>
                    <img src={MyRefrigerator} alt="myRefrigerator" className="myRefrigerator" />
                </div>
                <div className="box3">
                    <p>나의 리뷰</p>
                    <img src={MyReview} alt="myReview" className="myReview" />
                </div>
            </div>
            

            <div className="mypageNotion">
                <p>고객센터</p>
                <p>공지사항</p>
                <p>개인정보처리방침</p>
                <p>고객센터</p>
            </div>

            <Nav/>
        </div>
    );
}

export default Mypage;

