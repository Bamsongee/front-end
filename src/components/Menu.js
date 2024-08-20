import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom"; // useHistory 대신 useNavigate 사용
import axios from "axios";
import { useCookies } from "react-cookie";
import "../css/Menu.css";
import Logo from "../img/logo.png";
import HamX from "../img/ham_x.png";
import HamGo from "../img/ham_go.png";

function Menu({ closeMenu }) {
    const [cookies, removeCookie] = useCookies(["accessToken", "refreshToken"]);
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    // username 가져오기
    const fetchUserInfo = useCallback(async () => {
        try {
            const response = await axios.get("https://ohmea-backend.store/mypage", {
                headers: {
                    Authorization: `${cookies.accessToken}`,
                },
            });
            if (response.data.success) {
                setUsername(response.data.data.username);
            } else {
                alert("사용자 정보를 가져오는데 실패했습니다.");
            }
        } catch (error) {
            console.error("사용자 정보를 가져오는 중 오류 발생:", error);
            alert("사용자 정보를 가져오는 중 오류가 발생했습니다.");
        }
    }, [cookies.accessToken]);

    useEffect(() => {
        fetchUserInfo();
    }, [fetchUserInfo]);

    // 로그아웃
    const handleLogout = useCallback(async () => {
        const refreshToken = cookies.refreshToken.startsWith("Bearer ")
            ? cookies.refreshToken.replace("Bearer ", "")
            : cookies.refreshToken;

        try {
            console.log("Access Token:", cookies.accessToken);
            console.log("Refresh Token:", refreshToken);

            const response = await axios.post(
                "https://ohmea-backend.store/logout",
                {},
                {
                    headers: {
                        Authorization: `${cookies.accessToken}`,
                        refresh: refreshToken,
                    },
                }
            );

            if (response.data.success) {
                removeCookie("accessToken");
                removeCookie("refreshToken");

                navigate("/login");
            } else {
                alert("로그아웃에 실패했습니다.");
            }
        } catch (error) {
            console.error("로그아웃 중 오류 발생:", error);
            alert("로그아웃 중 오류가 발생했습니다.");
        }
    }, [cookies.accessToken, cookies.refreshToken, navigate, removeCookie]);

    const handleBackgroundClick = (event) => {
        if (event.target.classList.contains("MenuBack")) {
            closeMenu();
        }
    };

    return (
        <>
            <div className="MenuBack" onClick={handleBackgroundClick}>
                <div className="MenuBox">
                    <img className="hamX" src={HamX} alt="hamX" onClick={closeMenu}></img>
                    <img className="hamLogo" src={Logo} alt="hamLogo"></img>
                    <div className="hamUser">{username}님, 안녕하세요!</div>
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
                        <div className="hamBox-Link" onClick={handleLogout}>
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
