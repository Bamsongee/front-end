import React from "react";
import "../css/Ingredient.css";
import Cancel from "../img/cancel.png";

function Ingredient({ name }) {
    return (
        <div className="ing_box">
            <span className="ing_name">{name}</span>
            <img src={Cancel} alt="Cancel" className="ing_cancel_icon" />
        </div>
    );
}

export default Ingredient;
