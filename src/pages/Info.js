import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Info.css";
import InfoEdit from "../img/infoEdit.png";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

Modal.setAppElement("#root");

function Main() {
    const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
    const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState("");
    const [budget, setBudget] = useState("");
    const [username, setUsername] = useState("");
    const [gender, setGender] = useState("");
    const [tempSkill, setTempSkill] = useState("");
    const [tempBudget, setTempBudget] = useState(""); 
    const [cookies] = useCookies(["accessToken"]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get("https://ohmea-backend.store/mypage", {
                    headers: {
                        Authorization: `${cookies.accessToken}`,
                    },
                });

                if (response.data.success) {
                    const { username, gender, cookingSkill, cookingBudget } = response.data.data;
                    setUsername(username);
                    setGender(gender === "WOMAN" ? "여성" : "남성");
                    setSelectedSkill(cookingSkill === "MIDDLE" ? "중" : cookingSkill === "UPPER" ? "상" : "하");
                    setBudget(cookingBudget.toLocaleString());
                } else {
                    alert("사용자 정보를 불러오는 데 실패했습니다.");
                }
            } catch (error) {
                console.error("사용자 정보를 가져오는 중 오류 발생:", error);
                alert("사용자 정보를 가져오는 중 오류가 발생했습니다.");
            }
        };

        fetchUserInfo();
    }, [cookies.accessToken]);

    const openSkillModal = () => {
        setTempSkill(selectedSkill);
        setIsSkillModalOpen(true);
    };
    const closeSkillModal = () => {
        setSelectedSkill(tempSkill);
        setIsSkillModalOpen(false);
    };
    const openBudgetModal = () => {
        setTempBudget(budget.replace(/,/g, ''));
        setIsBudgetModalOpen(true);
    };
    const closeBudgetModal = () => {
        setBudget(tempBudget.toLocaleString());
        setIsBudgetModalOpen(false);
    };

    const handleSkillChange = (skill) => setTempSkill(skill);
    const handleBudgetChange = (event) => setTempBudget(event.target.value.replace(/,/g, '')); 

    const updateUserInfo = async () => {
        try {
            const response = await axios.put(
                "https://ohmea-backend.store/update",
                {
                    cookingSkill: tempSkill === "상" ? "UPPER" : tempSkill === "중" ? "MIDDLE" : "LOWER",
                    cookingBudget: parseInt(tempBudget, 10),
                },
                {
                    headers: {
                        Authorization: `${cookies.accessToken}`,
                    },
                }
            );

            if (response.data.success) {
                alert("회원 정보가 성공적으로 수정되었습니다.");
                navigate("/mypage");
            } else {
                alert("회원 정보 수정에 실패했습니다.");
            }
        } catch (error) {
            console.error("회원 정보 수정 중 오류 발생:", error);
            alert("회원 정보 수정 중 오류가 발생했습니다.");
        }
    };

    return (
        <div className="page">
            <div className="info_page">
                <div className="info_edit_box">
                    <div className="info_row">
                        <p className="info_title">닉네임</p>
                        <p className="info_content">{username}</p>
                    </div>
                    <div className="info_row">
                        <p className="info_title">성별</p>
                        <p className="info_content">{gender}</p>
                    </div>

                    <div className="info_row" id="info_row">
                        <p className="info_title">요리 실력</p>
                        <p className="info_content">{selectedSkill}</p>
                        <img src={InfoEdit} alt="infoEdit" className="info_edit" onClick={openSkillModal} />
                    </div>
                    <div className="info_skill_box">
                        <p className="info_notice">자신의 요리 실력을 입력해주세요!</p>
                    </div>
                    <div className="info_row" id="info_row">
                        <p className="info_title">요리 예산</p>
                        <p className="info_content">{budget}원</p>
                        <img src={InfoEdit} alt="infoEdit" className="info_edit" onClick={openBudgetModal} />
                    </div>
                    <div className="info_budget_box">
                        <p className="info_notice">한끼 기준으로 입력해주세요!</p>
                    </div>
                    <div className="info_edit_button_container">
                        <div className="info_edit_button" onClick={updateUserInfo}>수정 완료</div>
                    </div>
                </div>
                {/* 요리 실력 수정 모달 */}
                <Modal
                    isOpen={isSkillModalOpen}
                    onRequestClose={closeSkillModal}
                    contentLabel="요리 실력 수정 모달"
                    className="modal"
                    overlayClassName="modal_overlay"
                >
                    <h2>요리 실력</h2>
                    <div className="modal_skill_box">
                        <input
                            type="radio"
                            value="상"
                            id="upper"
                            name="skill"
                            className="skill"
                            checked={tempSkill === "상"}
                            onChange={() => handleSkillChange("상")}
                        />
                        <label
                            htmlFor="upper"
                            className="skillText"
                            style={{
                                backgroundColor: tempSkill === "상" ? "#ff7a00" : "#f5f7fa",
                                color: tempSkill === "상" ? "#000000" : "#a0a0a0",
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
                            checked={tempSkill === "중"}
                            onChange={() => handleSkillChange("중")}
                        />
                        <label
                            htmlFor="middle"
                            className="skillText"
                            style={{
                                backgroundColor: tempSkill === "중" ? "#ff7a00" : "#f5f7fa",
                                color: tempSkill === "중" ? "#000000" : "#a0a0a0",
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
                            checked={tempSkill === "하"}
                            onChange={() => handleSkillChange("하")}
                        />
                        <label
                            htmlFor="lower"
                            className="skillText"
                            style={{
                                backgroundColor: tempSkill === "하" ? "#ff7a00" : "#f5f7fa",
                                color: tempSkill === "하" ? "#000000" : "#a0a0a0",
                            }}
                        >
                            하
                        </label>
                    </div>
                    <div className="info_edit_button_container">
                        <div className="modal_info_edit_button" onClick={closeSkillModal}>
                            확인
                        </div>
                    </div>
                </Modal>
                {/* 요리 예산 수정 모달 */}
                <Modal
                    isOpen={isBudgetModalOpen}
                    onRequestClose={closeBudgetModal}
                    contentLabel="요리 예산 수정 모달"
                    className="modal"
                    overlayClassName="modal_overlay"
                >
                    <h2>요리 예산</h2>
                    <div className="modal_budget">
                        <input
                            type="text"
                            className="modal_edit_budget"
                            value={tempBudget.toLocaleString()}
                            onChange={handleBudgetChange}
                        /> 원
                    </div>
                    <div className="info_edit_button_container">
                        <div className="modal_info_edit_button" onClick={closeBudgetModal}>
                            수정 완료
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default Main;
