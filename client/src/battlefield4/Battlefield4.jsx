import React, { useState } from "react";

import BF4Header from "./BF4Header";
import soldier__BFemblem from "../assets/soldier__BFemblem.svg";
import soldier_look from "../assets/battlefield4/soldier_look.svg";
import dogtag1 from "../assets/battlefield4/dogtag1.svg";
import dogtag2 from "../assets/battlefield4/dogtag2.svg";
import bf4_level from "../assets/battlefield4/bf4_level.svg";
import weapon1_white from "../assets/battlefield4/weapon1_white.svg";
import weapon1_black from "../assets/battlefield4/weapon1_black.svg";
import weapon2_white from "../assets/battlefield4/weapon2_white.svg";
import weapon2_black from "../assets/battlefield4/weapon2_black.svg";
import weapon3_white from "../assets/battlefield4/weapon3_white.svg";
import weapon3_black from "../assets/battlefield4/weapon3_black.svg";
import weapon4_white from "../assets/battlefield4/weapon4_white.svg";
import weapon4_black from "../assets/battlefield4/weapon4_black.svg";

import "../css/battlefield4.css";

function SoldierMenuStats(props) {
    const [isHover, setIsHover] = useState(false);

    return (
        <a className="soldier-menu w-inline-block"
            style={{ backgroundColor: `${isHover ? "rgb(255, 255, 255)" : "rgba(0,0,0,0)"}` }}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
        >
            <div className="soldier-menu-h" style={{ color: `${isHover ? "rgb(16, 16, 16)" : "rgb(255, 255, 255)"}` }}>
                {props.name}
            </div>

            <div className="soldier-menu-stats">
                <div className="soldier-menu-stats-h" style={{ color: `${isHover ? "rgb(16, 16, 16)" : "rgb(255, 255, 255)"}` }}>
                    {props.points}/{props.totalPoints}
                </div>

                <div className="soldier-menu-stats-bar">
                    <div className="soldier-stats-bar-orange"
                        style={{width: `${(props.points / props.totalPoints * 100) + "%"}`}}
                    ></div>
                    <div className="soldier-menu-stats-bar-black" style={{ backgroundColor: `${isHover ? "rgba(16, 16, 16, 0.3)" : "rgba(16, 16, 16, 0.5)"}` }}></div>
                </div>
            </div>
        </a>
    );
}

function SoldierMenu(props) {
    const [isHover, setIsHover] = useState(false);

    return (
        <a className="soldier-menu w-inline-block"
            style={{ backgroundColor: `${isHover ? "rgb(255, 255, 255)" : "rgba(0,0,0,0)"}` }}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
        >
            <div className="soldier-menu-h" style={{ color: `${isHover ? "rgb(16, 16, 16)" : "rgb(255, 255, 255)"}` }}>
                {props.name}
            </div>
        </a>
    );
}

function SoldierStats(props) {
    return (
        <div className="soldier-stats">
            <div className="soldier-stats-h">{props.name}</div>
            <div className="soldier-stats-percent">{props.value}</div>
        </div>
    );
}

function SoldierTopStats(props) {
    const [isHover, setIsHover] = useState(false);

    return (
        <a className="soldier-top-stats w-inline-block"
            style={{ backgroundColor: `${isHover ? "rgb(255, 255, 255)" : "rgba(16,16,16,0.5)"}` }}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
        >
            <div className="soldier-top-stats-h" style={{ color: `${isHover ? "rgb(16, 16, 16)" : "rgba(255, 255, 255, 0.7)"}` }}>
                {props.name}
            </div>

            <div className="soldier-top-stats-info">
                <div className="soldier-top-stats-weapon" style={{ color: `${isHover ? "rgb(16, 16, 16)" : "rgb(255,255,255)"}` }}>
                    {props.weapon}
                </div>
                <div className="soldier-top-stats-weapon-s" style={{ color: `${isHover ? "rgb(16, 16, 16)" : "rgba(255,255,255,0.5)"}` }}>
                    {props.weapon_s}
                </div>
            </div>

            <img src={props.src1} style={{ display: `${isHover ? "none" : "block"}` }} className={"soldier-" + props.classTag + "-white"} alt="weapon-img"/>
            <img src={props.src2} style={{ display: `${isHover ? "block" : "none"}` }} className={"soldier-" + props.classTag + "-black"} alt="weapon-img"/>
        </a>
    );
}

function Battlefield4() {
    return (
        <div className="battlefield4-page">
            <BF4Header />

            <div className="bf4-content-w w-tab-content">
                <div className="bf4-soldier w-tab-pane w--tab-active">
                    <div className="soldier-content">
                        <div className="soldier-look">
                            <div className="soldier-dogtags">
                                <img src={dogtag2} loading="eager" alt="" class="soldier-dogtags-left" />
                                <img src={dogtag1} loading="eager" alt="" class="soldier-dogtags-right" />
                            </div>
                            <img src={soldier_look} loading="eager" alt="" class="soldier-pic" />
                        </div>

                        <div className="soldier-content-w">
                            <div className="soldier-info">
                                <div className="soldier-level">
                                    <div className="soldier-level-bar"></div>

                                    <img src={bf4_level} loading="eager" alt="" class="soldier-level-icon"></img>
                                </div>

                                <div className="soldier-level-info">
                                    <div className="soldier-level-info-h">cookie</div>

                                    <div className="soldier-level-stats">
                                        <div className="soldier-level-no">
                                            <div className="soldier-level-text">63</div>
                                        </div>

                                        <div className="soldier-level-current">69,840 / 110,000</div>

                                        <div className="soldier-level-estimate">- Estimated rank up in 1h</div>
                                    </div>
                                </div>
                            </div>

                            <div className="soldier-select">
                                <div className="soldier-menu-w">
                                    <SoldierMenuStats
                                        name="weapons"
                                        points="134" totalPoints="185"
                                    />
                                    <SoldierMenuStats
                                        name="kits"
                                        points="46" totalPoints="64"
                                    />
                                    <SoldierMenuStats
                                        name="vehicles"
                                        points="77" totalPoints="182"
                                    />
                                    <SoldierMenuStats
                                        name="medals"
                                        points="11" totalPoints="64"
                                    />
                                    <SoldierMenuStats
                                        name="assignments"
                                        points="21" totalPoints="110"
                                    />
                                    <SoldierMenuStats
                                        name="dog tags"
                                        points="357" totalPoints="720"
                                    />
                                    <SoldierMenu name="battlepacks" />
                                </div>

                                <div className="soldier-game-stats">
                                    <div className="soldier-stats-w">
                                        <SoldierStats name="wins" value="44%" />
                                        <SoldierStats name="score/min" value="592" />
                                        <SoldierStats name="kills/min" value="0.60" />
                                    </div>

                                    <div className="soldier-top-stats-w">
                                        <SoldierTopStats
                                            name="top vehicle"
                                            weapon="Main Battle Tank" weapon_s="33 kills"
                                            src1={weapon1_white} src2={weapon1_black}
                                            classTag="tank"
                                        />
                                        <SoldierTopStats
                                            name="top primary"
                                            weapon="ACW-R" weapon_s="496 kills"
                                            src1={weapon2_white} src2={weapon2_black}
                                            classTag="acw"
                                        />
                                        <SoldierTopStats
                                            name="top class"
                                            weapon="ENGINEER" weapon_s="828,514 score"
                                            src1={weapon3_white} src2={weapon3_black}
                                            classTag="engineer"
                                        />
                                        <SoldierTopStats
                                            name="top sidearm"
                                            weapon="M9" weapon_s="112 kills"
                                            src1={weapon4_white} src2={weapon4_black}
                                            classTag="m9"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img className="soldier-BFemblem" src={soldier__BFemblem} alt="soldier__BFemblem" />
                </div>
            </div>
        </div>
    );
}

export default Battlefield4;