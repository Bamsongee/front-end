import React, { useState } from "react";
import "../css/Refrigerator.css";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Ingredient from '../components/Ingredient';
import Modal from 'react-modal';

function Refrigerator() {
    const ingredients = Array(10).fill("재료");

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const openAddModal = () => {
        setIsAddModalOpen(true);
    };

    const closeAddModal = () => {
        setIsAddModalOpen(false);
    };

    return (
        <div className="ref_page">
            <Header />

            <div className="ref_box">
                <div className="ref_name">김은서님의 식재료</div>
                <div className="ref_button">
                    <div className="ref_button_1">자동 추가</div>
                    <div className="ref_button_2" onClick={openAddModal}>수동 추가</div>
                </div>
            </div>

            <div className="ref_list">
                <div className="ref_ingredient">
                    {ingredients.map((ingredient, index) => (
                        <Ingredient key={index} name={ingredient} />
                    ))}
                </div>
            </div>

            <Nav />

            {/* 식재료 수동 입력 모달 */}
            <Modal 
                isOpen={isAddModalOpen}
                onRequestClose={closeAddModal}
                contentLabel="식재료 수동 입력 모달"
                className="modal"
                overlayClassName="modal_overlay">

                <h2>식재료명</h2>
                {/* 식재료 입력 */}
                <div className="modal_ing">
                    <input type="text" className="modal_add_ing"/>
                </div>

                {/* 입력 완료 */}
                <div className="modal_add_button_container" >
                    <div className="modal_add_button" onClick={closeAddModal}>
                        추가
                    </div>
                </div>

            </Modal>
            
        </div>
    );
}

export default Refrigerator;
