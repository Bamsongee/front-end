import React, { useState } from "react";
import "../css/Info.css";
import InfoEdit from "../img/infoEdit.png";
import Modal from "react-modal";

Modal.setAppElement("#root");

function Main() {
    const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
    const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);

    const openSkillModal = () => {
        setIsSkillModalOpen(true);
    };

    const closeSkillModal = () => {
        setIsSkillModalOpen(false);
    };

    const openBudgetModal = () => {
        setIsBudgetModalOpen(true);
    };

    const closeBudgetModal = () => {
        setIsBudgetModalOpen(false);
    };

    const [selectedSkill, setSelectedSkill] = useState("상");

    const handleSkillChange = (skill) => {
        setSelectedSkill(skill);
    };

    return (
        <div className="page">
            <div className="info_page">
                <div className="info_edit_box">
                    <div className="info_row">
                        <p className="info_title">닉네임</p>
                        <p className="info_content">김은서</p>
                    </div>

                    <div className="info_row">
                        <p className="info_title">성별</p>
                        <p className="info_content">여성</p>
                    </div>

                    <div className="info_row">
                        <p className="info_title">나이</p>
                        <p className="info_content">22세</p>
                    </div>

                    <div className="info_row" id="info_row">
                        <p className="info_title">요리 실력</p>
                        <p className="info_content">상</p>
                        <img src={InfoEdit} alt="infoEdit" className="info_edit" onClick={openSkillModal} />
                    </div>
                    <div className="info_skill_box">
                        <p className="info_notice">자신의 요리 실력을 입력해주세요!</p>
                    </div>

                    <div className="info_row" id="info_row">
                        <p className="info_title">요리 예산</p>
                        <p className="info_content">20,000원</p>
                        <img src={InfoEdit} alt="infoEdit" className="info_edit" onClick={openBudgetModal} />
                    </div>
                    <div className="info_budget_box">
                        <p className="info_notice">한끼 기준으로 입력해주세요!</p>
                    </div>

                    <div className="info_edit_button_container">
                        <div className="info_edit_button">수정 완료</div>
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
                    {/* 선택지 선택 */}
                    <div className="modal_skill_box">
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
                            {" "}
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
                            {" "}
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
                            {" "}
                            하
                        </label>
                    </div>

                    {/* 수정 완료 */}
                    <div className="info_edit_button_container">
                        <div className="modal_info_edit_button" onClick={closeSkillModal}>
                            수정 완료
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
                    {/* 예산 입력 */}
                    <div className="modal_budget">
                        <input type="text" className="modal_edit_budget" /> 원
                    </div>

                    {/* 수정 완료 */}
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
