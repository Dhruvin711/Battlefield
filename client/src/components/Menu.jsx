import React, { useState } from "react";
import "../css/styles.css";

function MenuButton(props) {
    return (
        <a className={`menu-btn ${props.active ? "active-btn" : ""}`} onClick={props.onClick}>
            <div>{props.value}</div>
        </a>
    )
}

function Menu() {
    const [activeBtn, setActiveBtn] = useState("SOLDIER");

    function handleClick(value) {
        setActiveBtn(value);
    }

    const menu_btns = ["HOME", "MULTIPLAYER", "CAMPAIGN", "SOLDIER", "STORE", "MORE"];

    return (
        <div className="BF-menu">
            <div className="menu-container">
                {menu_btns.map(menu_btn => (
                    <MenuButton 
                        key={menu_btn} 
                        value={menu_btn}
                        active={activeBtn === menu_btn}
                        onClick={() => handleClick(menu_btn)}
                    />
                ))}
            </div>

            <div className="menu-bar"></div>
        </div>
    )
}

export default Menu;