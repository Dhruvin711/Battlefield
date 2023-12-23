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
                opacity: `${props.active ? (isHover ? "1" : "0.7") : (isHover ? "1" : "0.3")}`
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
            onClick={props.onQuit}
        >
            <img src={props.src} alt={props.alt} />
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
    
    const [quit, setQuit] = useState(false);

    return (
        <div>
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
                        onQuit={() => setQuit(true)}
                    />
                </div>

            </div>

            <div className='quit-container' style={{ display: `${quit ? 'flex' : 'none'}` }}>
                <div className='quit-option-w'>
                    <div className='quit-text-w'>
                        <div className='quit-text'>quit</div>
                        <div className='quit-text-2'>Do you really want to quit?</div>
                    </div>
                    <div className='quit-buttons-w'>
                        <div className='quit-button' onClick={() => setQuit(false)}>yes</div>
                        <div className='quit-button quit-button--nomargin' onClick={() => setQuit(false)}>no</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideMenu;