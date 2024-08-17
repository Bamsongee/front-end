import React, { useState } from "react";
import "../css/Refrigerator.css";
import Ingredient from "../components/Ingredient";
import Modal from "react-modal";

function Refrigerator() {
    const ingredients = Array(10).fill("재료");

    const [modalType, setModalType] = useState(null);
    const [fileName, setFileName] = useState("");

    const openAddModal1 = () => {
        setModalType('modal1');
        setFileName(""); // 파일명 초기화
    };

    const openAddModal2 = () => {
        setModalType('modal2');
    };

    const closeAddModal = () => {
        setModalType(null); 
        setFileName("");
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    return (
        <div className="page">
            <div className="ref_page">
                <div className="ref_box">
                    <div className="MyPageBoldTitle">나의 냉장고</div>
                    <div className="ref_button">
                        <div className="ref_button_1" onClick={openAddModal1}>
                            자동 추가
                        </div>
                        <div className="ref_button_2" onClick={openAddModal2}>
                            수동 추가
                        </div>
                    </div>
                </div>

                <div className="ref_list">
                    <div className="ref_ingredient">
                        {ingredients.map((ingredient, index) => (
                            <Ingredient key={index} name={ingredient} />
                        ))}
                    </div>
                </div>

                {/* 식재료 자동 입력 모달 */}
                <Modal
                    isOpen={modalType === 'modal1'}
                    onRequestClose={closeAddModal}
                    contentLabel="식재료 자동 입력 모달"
                    className="modal"
                    overlayClassName="modal_overlay"
                >
                    <h2>식재료 사진</h2>
                    {/* 식재료 사진 업로드 */}
                    <div className="modal_ing">
                        <label htmlFor="file">
                            <div className="modal_img_add_ing">사진 업로드</div>
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            id="file"
                        />
                        {fileName && <div className="modal_img_name">{fileName}</div>}
                    </div>

                    {/* 입력 완료 */}
                    <div className="modal_add_button_container">
                        <div className="modal_add_button" onClick={closeAddModal}>
                            추가
                        </div>
                    </div>
                </Modal>

                {/* 식재료 수동 입력 모달 */}
                <Modal
                    isOpen={modalType === 'modal2'}
                    onRequestClose={closeAddModal}
                    contentLabel="식재료 수동 입력 모달"
                    className="modal"
                    overlayClassName="modal_overlay"
                >
                    <h2>식재료명</h2>
                    {/* 식재료 입력 */}
                    <div className="modal_ing">
                        <input type="text" className="modal_text_add_ing" />
                    </div>

                    {/* 입력 완료 */}
                    <div className="modal_add_button_container">
                        <div className="modal_add_button" onClick={closeAddModal}>
                            추가
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default Refrigerator;
