import React from "react";
import { Link } from "react-router-dom";
import "../css/Menu.css";
import Logo from "../img/logo.png";
import HamX from "../img/ham_x.png";
import HamGo from "../img/ham_go.png";

function Menu({ closeMenu }) {
    return (
        <>
            <div className="MenuBack">
                <div className="MenuBox">
                    <img className="hamX" src={HamX} alt="hamX" onClick={closeMenu}></img>
                    <img className="hamLogo" src={Logo} alt="hamLogo"></img>
                    <div className="hamUser">밤송이님, 안녕하세요!</div>
                    <div className="hamBox">
                        <div className="hamBox-category">레시피</div>
                        <Link className="hamBox-Link" to="/custom" onClick={closeMenu}>
                            <div className="hamBox-page">맞춤 레시피</div>
                            <img className="HamGo" src={HamGo} alt="HamGo"></img>
                        </Link>
                        <Link className="hamBox-Link" to="/make" onClick={closeMenu}>
                            <div className="hamBox-page">만들 수 있는 레시피</div>
                            <img className="HamGo" src={HamGo} alt="HamGo"></img>
                        </Link>
                        <Link className="hamBox-Link" to="/recipe/search" onClick={closeMenu}>
                            <div className="hamBox-page">레시피 검색</div>
                            <img className="HamGo" src={HamGo} alt="HamGo"></img>
                        </Link>
                    </div>
                    <div className="hamBox">
                        <div className="hamBox-category">식재료</div>
                        <Link className="hamBox-Link" to="/products" onClick={closeMenu}>
                            <div className="hamBox-page">식재료 구매</div>
                            <img className="HamGo" src={HamGo} alt="HamGo"></img>
                        </Link>
                    </div>
                    <div className="hamBox">
                        <div className="hamBox-category">MY</div>
                        <Link className="hamBox-Link" to="/mypage" onClick={closeMenu}>
                            <div className="hamBox-page">마이페이지</div>
                            <img className="HamGo" src={HamGo} alt="HamGo"></img>
                        </Link>
                        <Link className="hamBox-Link" to="/save" onClick={closeMenu}>
                            <div className="hamBox-page">내가 찜한 레시피</div>
                            <img className="HamGo" src={HamGo} alt="HamGo"></img>
                        </Link>
                        <Link className="hamBox-Link" to="/refrigerator" onClick={closeMenu}>
                            <div className="hamBox-page">나의 냉장고</div>
                            <img className="HamGo" src={HamGo} alt="HamGo"></img>
                        </Link>
                        <Link className="hamBox-Link" to="/review" onClick={closeMenu}>
                            <div className="hamBox-page">나의 리뷰</div>
                            <img className="HamGo" src={HamGo} alt="HamGo"></img>
                        </Link>
                        <div className="hamBox-Link" onClick={closeMenu}>
                            <div className="hamBox-page">로그아웃</div>
                            <img className="HamGo" src={HamGo} alt="HamGo"></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;
