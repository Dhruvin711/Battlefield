import React from "react";
import Menu from "./Menu";

function MenuButton(props) {

    return (
        <a className={`menu-btn ${props.active && "active-btn"}`} onClick={props.onClick}>
            <div>{props.value}</div>
        </a>
    )
}

export default MenuButton;