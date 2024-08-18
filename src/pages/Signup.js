import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import "../css/Signup.css";
import Logo from "../img/logo.png";

function Signup() {
    const [selectedGender, setSelectedGender] = useState("남");
    const [selectedSkill, setSelectedSkill] = useState("상");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [cookingBudget, setCookingBudget] = useState("");
    const navigate = useNavigate();

    const handleGenderChange = (gender) => {
        setSelectedGender(gender);
    };

    const handleSkillChange = (skill) => {
        setSelectedSkill(skill);
    };

    const handleSignup = async (event) => {
        event.preventDefault();

        if (password !== passwordCheck) {
            alert("비밀번호 확인이 일치하지 않습니다.");
            return;
        }

        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        formData.append("gender", selectedGender === "남" ? "MAN" : "WOMAN");
        formData.append("cookingBudget", cookingBudget);

        const cookingSkillValue = selectedSkill === "상" ? "UPPER" : selectedSkill === "중" ? "MIDDLE" : "LOWER";
        formData.append("cookingSkill", cookingSkillValue);

        try {
            const response = await axios.post("https://ohmea-backend.store/join", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data.success) {
                alert("회원가입 성공");
                navigate("/login");
            } else {
                alert(`회원가입 실패: ${response.data.message}`);
            }
        } catch (error) {
            console.error("회원가입 중 오류 발생:", error);
            alert("회원가입 중 오류가 발생했습니다.");
        }
    };

    return (
        <div className="SignupBox">
            <img src={Logo} alt="logo" className="login-logo" />
            <form className="signup-form" onSubmit={handleSignup}>
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
                <input
                    type="password"
                    id="passwordCheck"
                    className="pwdC"
                    placeholder="비밀번호 확인"
                    value={passwordCheck}
                    onChange={(e) => setPasswordCheck(e.target.value)}
                />

                <div className="radioTitle">성별</div>
                <div className="genderBox">
                    <input
                        type="radio"
                        value="남"
                        id="man"
                        name="gender"
                        className="gender"
                        checked={selectedGender === "남"}
                        onChange={() => handleGenderChange("남")}
                    />
                    <label
                        htmlFor="man"
                        className="genderText"
                        style={{
                            backgroundColor: selectedGender === "남" ? "#ff7a00" : "#f5f7fa",
                            color: selectedGender === "남" ? "#000000" : "#a0a0a0",
                        }}
                    >
                        남
                    </label>
                    <input
                        type="radio"
                        value="여"
                        id="woman"
                        name="gender"
                        className="gender"
                        checked={selectedGender === "여"}
                        onChange={() => handleGenderChange("여")}
                    />
                    <label
                        htmlFor="woman"
                        className="genderText"
                        style={{
                            backgroundColor: selectedGender === "여" ? "#ff7a00" : "#f5f7fa",
                            color: selectedGender === "여" ? "#000000" : "#a0a0a0",
                        }}
                    >
                        여
                    </label>
                </div>

                <div className="radioTitle">요리 실력</div>
                <div className="skillBox">
                    <input
                        type="radio"
                        value="상"
                        id="upper"
                        name="skill"
                        className="skill"
                        checked={selectedSkill === "상"}
                        onChange={() => handleSkillChange("상")}
                    />
                    <label
                        htmlFor="upper"
                        className="skillText"
                        style={{
                            backgroundColor: selectedSkill === "상" ? "#ff7a00" : "#f5f7fa",
                            color: selectedSkill === "상" ? "#000000" : "#a0a0a0",
                        }}
                    >
                        상
                    </label>
                    <input
                        type="radio"
                        value="중"
                        id="middle"
                        name="skill"
                        className="skill"
                        checked={selectedSkill === "중"}
                        onChange={() => handleSkillChange("중")}
                    />
                    <label
                        htmlFor="middle"
                        className="skillText"
                        style={{
                            backgroundColor: selectedSkill === "중" ? "#ff7a00" : "#f5f7fa",
                            color: selectedSkill === "중" ? "#000000" : "#a0a0a0",
                        }}
                    >
                        중
                    </label>
                    <input
                        type="radio"
                        value="하"
                        id="lower"
                        name="skill"
                        className="skill"
                        checked={selectedSkill === "하"}
                        onChange={() => handleSkillChange("하")}
                    />
                    <label
                        htmlFor="lower"
                        className="skillText"
                        style={{
                            backgroundColor: selectedSkill === "하" ? "#ff7a00" : "#f5f7fa",
                            color: selectedSkill === "하" ? "#000000" : "#a0a0a0",
                        }}
                    >
                        하
                    </label>
                </div>

                <div className="radioTitle">요리 예산 (한 끼 기준)</div>
                <input
                    type="text"
                    id="budget"
                    className="budget"
                    placeholder="요리 예산 (원)"
                    value={cookingBudget}
                    onChange={(e) => setCookingBudget(e.target.value)}
                />
                <button className="SignupBtn">회원가입</button>
            </form>
        </div>
    );
}

export default Signup;
