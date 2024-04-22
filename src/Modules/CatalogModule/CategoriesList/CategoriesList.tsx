import React from "react";
import "./CategoriesList.css";

export const CategoriesList = ({ onCategoryChange }) => {
    return(
        <div className="categories-content">
            <div className="guitar categories-text" onClick={() => onCategoryChange('guitar')}>Гитары</div>
            <hr/>
            <div className="ukulele categories-text" onClick={() => onCategoryChange('ukulele')}>Укулеле</div>
            <hr/>
            <div className="duhov categories-text" onClick={() => onCategoryChange('duh')}>Духовые</div>
            <hr/>
            <div className="piano categories-text" onClick={() => onCategoryChange('piano')}>Клавишные</div>
            <hr/>
            <div className="drum categories-text" onClick={() => onCategoryChange('drum')}>Ударные</div>
            <hr/>
            <div className="apparat categories-text" onClick={() => onCategoryChange('equipment')}>Оборудование</div>
        </div>
        )
}
