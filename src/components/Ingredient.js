import React from "react";
import "../css/Ingredient.css";
import Cancel from "../img/cancel.png";

function Ingredient({ name, ingredientId, onDelete }) {
  return (
    <div className="ing_box">
      <span className="ing_name">{name}</span>
      <img
        src={Cancel}
        alt="Cancel"
        className="ing_cancel_icon"
        onClick={() => onDelete(ingredientId)} // 클릭 시 삭제 요청 실행
      />
    </div>
  );
}

export default Ingredient;
