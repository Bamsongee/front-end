import React, { useState } from "react";
import "../css/Login.css";
import "../css/Signup.css";
import Logo from "../img/logo.png";

function Signup() {
    const [selectedGender, setSelectedGender] = useState("남");

    const handleGenderChange = (gender) => {
        setSelectedGender(gender);
    };

    const [selectedSkill, setSelectedSkill] = useState("상");

    const handleSkillChange = (skill) => {
        setSelectedSkill(skill);
    };

    return (
        <div className="SignupBox">
            <img src={Logo} alt="logo" className="login-logo"></img>
            <form className="signup-form">
                <input type="text" id="username" className="id" placeholder="아이디" />
                <input type="password" id="password" className="pwd" placeholder="비밀번호" />
                <input type="password" id="passwordCheck" className="pwdC" placeholder="비밀번호 확인" />

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
                        for="man"
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
                        for="woman"
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
                        name="upper"
                        className="skill"
                        checked={selectedSkill === "상"}
                        onChange={() => handleSkillChange("상")}
                    />
                    <label
                        for="upper"
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
                        name="middle"
                        className="skill"
                        checked={selectedSkill === "중"}
                        onChange={() => handleSkillChange("중")}
                    />
                    <label
                        for="middle"
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
                        name="lower"
                        className="skill"
                        checked={selectedSkill === "하"}
                        onChange={() => handleSkillChange("하")}
                    />
                    <label
                        for="lower"
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
                <input type="text" id="budget" className="budget" placeholder="요리 예산 (원)" />
                <button className="SignupBtn">회원가입</button>
            </form>
        </div>
    );
}

export default Signup;
