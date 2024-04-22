import React from "react";
import "./text.css"
export const Maintext = () =>{
    return(
        <div className="background">
            <h1 className="Welcome">Добро пожаловать!!!</h1>
            <h1 className="all-text-muzufa">В нашем магазине, вы найдете лучшее музыкальное оборудование, 
            музыкальные инструменты и аксессуары для них по НИЗКИМ ЦЕНАМ !</h1>
            <a href="/catalog" className="button-next-catalog">Магазин</a>
        </div>
    )
}