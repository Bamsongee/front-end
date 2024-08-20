import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "../css/Refrigerator.css";
import Ingredient from "../components/Ingredient";
import Modal from "react-modal";
import ref3d from "../img/ref_3d.png";
import { useCookies } from "react-cookie";

function Refrigerator() {
    const [ingredients, setIngredients] = useState([]);
    const [modalType, setModalType] = useState(null);
    const [fileName, setFileName] = useState("");
    const [filePreview, setFilePreview] = useState(null);
    const [file, setFile] = useState(null);
    const [ingredientName, setIngredientName] = useState("");
    const [responseMessage, setResponseMessage] = useState([]);
    const [showResponseModal, setShowResponseModal] = useState(false);
    const [cookies] = useCookies(["accessToken", "username"]);

    const getCookie = (name) => {
        const cookieValue = document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)");
        return cookieValue ? decodeURIComponent(cookieValue.pop()) : "";
    };

    const fetchIngredients = useCallback(() => {
        const token = getCookie("accessToken");

        axios
            .get("https://ohmea-backend.store/ingredients", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            })
            .then((response) => {
                const data = response.data;
                if (data.success) {
                    setIngredients(data.data);
                }
            })
            .catch((error) => {
                console.error("Error fetching ingredients:", error);
            });
    }, []);

    useEffect(() => {
        fetchIngredients();
    }, [fetchIngredients]);

    const openAddModal1 = () => {
        setModalType("modal1");
        setFileName("");
        setFilePreview(null);
        setFile(null); // 업로드된 파일 초기화
    };

    const openAddModal2 = () => {
        setModalType("modal2");
    };

    const closeAddModal = () => {
        setModalType(null);
        setFileName("");
        setFilePreview(null);
        setFile(null); // 업로드된 파일 초기화
    };

    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFileName(selectedFile.name);
            setFile(selectedFile); // 파일 상태 저장

            const reader = new FileReader();
            reader.onloadend = () => {
                setFilePreview(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleSubmitImage = () => {
        const token = getCookie("accessToken");

        if (!file) {
            setResponseMessage(["이미지를 선택해주세요."]);
            setShowResponseModal(true);
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        axios
            .post("https://ohmea-backend.store/detection", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: token,
                },
            })
            .then((response) => {
                const data = response.data.data.results;
                const newItems = data.filter((item) => item.isExists === false).map((item) => item.ingredients);
                const existingItems = data.filter((item) => item.isExists === true).map((item) => item.ingredients);

                let messageParts = [];

                if (newItems.length > 0) {
                    messageParts.push(`등록 완료: ${newItems.join(", ")}`);
                }

                if (existingItems.length > 0) {
                    messageParts.push(`이미 존재하는 식재료: ${existingItems.join(", ")}`);
                }

                setResponseMessage(messageParts);
                setShowResponseModal(true);

                if (newItems.length > 0) {
                    // 새로운 항목들을 냉장고에 등록
                    fetchIngredients();
                }
            })
            .catch((error) => {
                console.error("Error uploading image:", error);
                setResponseMessage(["이미지 업로드 실패"]);
                setShowResponseModal(true);
            });

        closeAddModal();
    };

    const handleInputChange = (event) => {
        setIngredientName(event.target.value);
    };

    const handleSubmit = () => {
        const token = getCookie("accessToken");

        if (ingredientName.trim() === "") {
            setResponseMessage(["식재료명을 입력해주세요."]);
            setShowResponseModal(true);
            return;
        }

        axios
            .post(
                "https://ohmea-backend.store/ingredients",
                {
                    ingredient: ingredientName,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token,
                    },
                }
            )
            .then((response) => {
                const data = response.data;
                setResponseMessage([data.message]);
                setShowResponseModal(true);
                if (data.success) {
                    fetchIngredients();
                }
            })
            .catch((error) => {
                console.error("Error adding ingredient:", error);
                setResponseMessage(["식재료 추가 실패"]);
                setShowResponseModal(true);
            });

        closeAddModal();
        setIngredientName("");
    };

    const handleDeleteIngredient = (ingredientId) => {
        const token = getCookie("accessToken");

        axios
            .delete(`https://ohmea-backend.store/ingredients/${ingredientId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            })
            .then(() => {
                fetchIngredients(); // 삭제 후 새로고침
            })
            .catch((error) => {
                console.error("Error deleting ingredient:", error);
                setResponseMessage(["식재료 삭제 실패"]);
                setShowResponseModal(true);
            });
    };

    const closeResponseModal = () => {
        setShowResponseModal(false);
    };

    return (
        <div className="page">
            <div className="ref_page">
                <div className="ref_box">
                    <div className="MyPageBoldTitle">{cookies.username}님의 냉장고</div>
                    <div className="ref_button">
                        <div className="ref_button_1" onClick={openAddModal1}>
                            자동 추가
                        </div>
                        <div className="ref_button_2" onClick={openAddModal2}>
                            수동 추가
                        </div>
                    </div>
                </div>

                {ingredients.length === 0 ? (
                    <div className="ref_no_ingredients_message">
                        <img src={ref3d} alt="ref3d"></img>
                        <div>식재료를 추가하여 냉장고를 채워보세요!</div>
                    </div>
                ) : (
                    <div className="ref_list">
                        <div className="ref_ingredient">
                            {ingredients.map((ingredient) => (
                                <Ingredient
                                    key={ingredient.id}
                                    name={ingredient.ingredients}
                                    ingredientId={ingredient.id}
                                    onDelete={() => handleDeleteIngredient(ingredient.id)}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* 식재료 자동 입력 모달 */}
                <Modal
                    isOpen={modalType === "modal1"}
                    onRequestClose={closeAddModal}
                    contentLabel="식재료 자동 입력 모달"
                    className="modal"
                    overlayClassName="modal_overlay"
                >
                    <h2>식재료 사진</h2>
                    <div className="modal_ing">
                        <label htmlFor="file">
                            <div className="modal_img_add_ing">사진 업로드</div>
                        </label>
                        <input type="file" accept="image/*" onChange={handleImageChange} id="file" />
                        {fileName && (
                            <div
                                className="modal_img_name"
                                style={{
                                    wordWrap: "break-word",
                                    wordBreak: "break-all",
                                    whiteSpace: "normal",
                                }}
                            >
                                {fileName}
                            </div>
                        )}
                        {filePreview && (
                            <div className="modal_img_preview">
                                <img
                                    src={filePreview}
                                    alt="미리보기"
                                    className="preview_image"
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "300px",
                                        objectFit: "contain",
                                    }}
                                />
                            </div>
                        )}
                    </div>

                    <div className="modal_add_button_container">
                        <div className="modal_add_button" onClick={handleSubmitImage}>
                            추가
                        </div>
                    </div>
                </Modal>

                {/* 식재료 수동 입력 모달 */}
                <Modal
                    isOpen={modalType === "modal2"}
                    onRequestClose={closeAddModal}
                    contentLabel="식재료 수동 입력 모달"
                    className="modal"
                    overlayClassName="modal_overlay"
                >
                    <h2>식재료명</h2>
                    <div className="modal_ing">
                        <input
                            type="text"
                            className="modal_text_add_ing"
                            value={ingredientName}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="modal_add_button_container">
                        <div className="modal_add_button" onClick={handleSubmit}>
                            추가
                        </div>
                    </div>
                </Modal>

                {/* 응답 메시지 모달 */}
                <Modal
                    isOpen={showResponseModal}
                    onRequestClose={closeResponseModal}
                    contentLabel="응답 메시지 모달"
                    className="modal"
                    overlayClassName="modal_overlay"
                >
                    <h2>알림</h2>
                    <div className="modal_response_message">
                        {responseMessage.map((part, index) => (
                            <p key={index}>{part}</p>
                        ))}
                    </div>
                    <div className="modal_add_button_container">
                        <div className="modal_add_button" onClick={closeResponseModal}>
                            닫기
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default Refrigerator;
