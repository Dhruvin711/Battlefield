import React, { useState } from "react";
import "../css/styles.css";
import Battlefield4 from "../battlefield4/Battlefield4";
import TempPage from "./TempPage";

function MenuButton(props) {
    return (
        <a className={`menu-btn ${props.active ? "active-btn" : ""}`} onClick={props.onClick}>
            <div>{props.value}</div>
        </a>
    )
}

function Menu() {
    const path = window.location.pathname;
    console.log(path);

    const [activeBtn, setActiveBtn] = useState("SOLDIER");
    const [activePage, setActivePage] =  useState("SOLDIER");

    function handleClick(value) {
        setActiveBtn(value);

        if(path === '/' || path === '/bf_4'){
            setActivePage(value);
        }
        else{
            setActiveBtn("");
        }
    }

    function menuContent() {
        switch(activePage) {
            case "SOLDIER" :
                return <Battlefield4 />;
            default :
                return <TempPage />;
        }
    }

    const menu_btns = ["HOME", "MULTIPLAYER", "CAMPAIGN", "SOLDIER", "STORE", "MORE"];

    return (
        <div>
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

            {menuContent()}
        </div>
    )
}

export default Menu;