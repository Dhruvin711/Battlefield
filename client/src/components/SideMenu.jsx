import React, { useState } from "react";
import { Link } from "react-router-dom";

import sideMenuData from "../assets/side_menu_data";
import quitSVG from '../assets/side_menu/quit.svg';
import helpSVG from '../assets/side_menu/help.svg';

function SideMenuBtn(props) {
    const buttonData = props.buttonData;
    const [isHover, setIsHover] = useState(false);

    return (
        <Link to={`${buttonData.tag.toLowerCase()}`}
            className="side-menu-btn"
            style={{ 
                backgroundImage: `url(${require(`../assets/side_menu/${buttonData.tag}.svg`)})`,
                borderLeft: `${props.active ? "3px solid #ee930e" : "3px solid #00000000"}`,
                opacity: `${props.active ? (isHover ? "1" : "1") : (isHover ? "1" : "0.5")}`
            }}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
            onClick={props.onClick}
        >
            <div className='popup'
                style={{ display: `${isHover ? 'block' : 'none'}`, opacity: `${isHover ? "1" : "0"}` }}
            >
                <div className='popup-text'>
                    {buttonData.name}
                </div>
            </div>
        </Link>
    )
}

function SideMenuFooterBtn(props) {
    const [isHover, setIsHover] = useState(false);

    return (
        <a className="side-menu-btn"
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
        >
            <img src={props.src} alt={props.alt}/>
            <div className='popup'
                style={{ display: `${isHover ? 'block' : 'none'}`, opacity: `${isHover ? 1 : 0}` }}
            >
                <div className='popup-text'>
                    {props.name}
                </div>
            </div>
        </a>
    )
}

function SideMenu() {
    const [activeBtn, setActiveBtn] = useState("BF_4")
    function handleClick(value) {
        setActiveBtn(value);
        console.log(value);
    }

    return (
        <div className="side-menu">
            <div className="side-menu-container">
                {sideMenuData.map((sideMenuBtn, id) => (
                    <SideMenuBtn
                        key={id}
                        buttonData={sideMenuBtn}
                        active={activeBtn === sideMenuBtn.tag}
                        onClick={() => handleClick(sideMenuBtn.tag)}
                    />
                ))}
            </div>

            <div className="footer-btns">
                <SideMenuFooterBtn 
                    src={helpSVG} 
                    alt="Help Icon" 
                    name="HELP"
                />
                <SideMenuFooterBtn 
                    src={quitSVG} 
                    alt="Quit Icon"
                    name="QUIT"
                />
            </div>

        </div>
    )
}

export default SideMenu;