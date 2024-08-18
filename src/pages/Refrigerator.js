import React, { useState, useEffect, useCallback } from "react";
import "../css/Refrigerator.css";
import Ingredient from "../components/Ingredient";
import Modal from "react-modal";

function Refrigerator() {
  const [ingredients, setIngredients] = useState([]);
  const [modalType, setModalType] = useState(null);
  const [fileName, setFileName] = useState("");
  const [filePreview, setFilePreview] = useState(null);
  const [ingredientName, setIngredientName] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [showResponseModal, setShowResponseModal] = useState(false);

  const getCookie = (name) => {
    const cookieValue = document.cookie.match(
      "(^|;)\\s*" + name + "\\s*=\\s*([^;]+)"
    );
    return cookieValue ? decodeURIComponent(cookieValue.pop()) : "";
  };

  const fetchIngredients = useCallback(() => {
    const token = getCookie("accessToken");

    fetch("https://ohmea-backend.store/ingredients", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
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
  };

  const openAddModal2 = () => {
    setModalType("modal2");
  };

  const closeAddModal = () => {
    setModalType(null);
    setFileName("");
    setFilePreview(null);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);

      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (event) => {
    setIngredientName(event.target.value);
  };

  const handleSubmit = () => {
    const token = getCookie("accessToken");

    if (ingredientName.trim() === "") {
      setResponseMessage("식재료명을 입력해주세요.");
      setShowResponseModal(true);
      return;
    }

    fetch("https://ohmea-backend.store/ingredients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        ingredient: ingredientName,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setResponseMessage(data.message);
        setShowResponseModal(true);
        if (data.success) {
          fetchIngredients();
        }
      })
      .catch((error) => {
        console.error("Error adding ingredient:", error);
      });

    closeAddModal();
    setIngredientName("");
  };

  const closeResponseModal = () => {
    setShowResponseModal(false);
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
              <Ingredient key={index} name={ingredient.ingredients} />
            ))}
          </div>
        </div>

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
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="file"
            />
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
            <div className="modal_add_button" onClick={closeAddModal}>
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
          <div className="modal_response_message">{responseMessage}</div>
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
