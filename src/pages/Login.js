import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie"; 
import { useNavigate } from "react-router-dom";
import Logo from "../img/logo.png"; 

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [, setCookie] = useCookies(["accessToken", "refreshToken", "username"]);

    const handleLogin = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        try {
            const response = await axios.post("https://ohmea-backend.store/login", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });

            console.log("Response headers:", response.headers); 

            const accessToken = response.headers["accesstoken"];
            const refreshToken = response.headers["refreshtoken"];

            console.log("Access Token:", accessToken); 
            console.log("Refresh Token:", refreshToken);

            if (accessToken && refreshToken) {
                setCookie("accessToken", accessToken, { path: "/" });
                setCookie("refreshToken", refreshToken, { path: "/" });
                setCookie("username", username, { path: "/" });
                
                navigate("/main");
            } else {
                alert("로그인 실패: 서버에서 반환된 토큰이 없습니다.");
            }
        } catch (error) {
            console.error("로그인 실패:", error);
            if (error.response && error.response.data) {
                console.log("Error data:", error.response.data);
                alert(`로그인 실패: ${error.response.data.message}`);
            } else {
                alert("로그인 실패: 서버에 연결할 수 없습니다.");
            }
        }
    };

    return (
        <div className="loginBox">
            <img src={Logo} alt="logo" className="login-logo" />
            <form className="login-form" onSubmit={handleLogin}>
                <input
                    type="text"
                    id="username"
                    className="id"
                    placeholder="아이디"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    className="pwd"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="loginBtn" type="submit">
                    로그인
                </button>
            </form>
            <div className="ToSignup">
                계정이 없으신가요?
                <b onClick={() => navigate("/signup")} style={{ color: "black", marginLeft: "8px" }}>
                    회원가입 하러가기
                </b>
            </div>
        </div>
    );
}

export default Login;
