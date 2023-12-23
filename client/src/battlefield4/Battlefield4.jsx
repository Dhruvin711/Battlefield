import React, { useState, useEffect } from "react";
import axios from "axios";

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
import {BarLoader} from "react-spinners";

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
                        style={{ width: `${(props.points / props.totalPoints * 100) + "%"}` }}
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

            <img src={props.src1} style={{ display: `${isHover ? "none" : "block"}` }} className={"soldier-" + props.classTag + "-white"} alt="weapon-img" />
            <img src={props.src2} style={{ display: `${isHover ? "block" : "none"}` }} className={"soldier-" + props.classTag + "-black"} alt="weapon-img" />
        </a>
    );
}

function Battlefield4() {
    const [soldierData, setSoldierData] = useState({});
    const [levelStats, setLevelStats] = useState({});
    const [loading, setLoading] = useState(true)

    const getSoldierInfo = async (req, res) => {
        const apiURL = 'https://battlefield4-server.onrender.com/bf_4/soldier-data/';
        try {
            setLoading(true)
            const { data } = await axios.get(apiURL);
            
            setSoldierData((prevData) => ({...prevData, ...data.soldierData}));
            setLevelStats((prevData) => ({...prevData, ...data.levelStats}));
            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }

        const localApiURL = 'http://127.0.0.1:8000/bf_4/soldier-data/';
        try {
            setLoading(true)
            const { data } = await axios.get(localApiURL);
            
            setSoldierData((prevData) => ({...prevData, ...data.soldierData}));
            setLevelStats((prevData) => ({...prevData, ...data.levelStats}));
            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSoldierInfo();
    }, []);

    return (
        <div className="battlefield4-page">
            <BF4Header />


            <div className="bf4-content-w w-tab-content">
                <div className="bf4-soldier w-tab-pane w--tab-active">
                    <div className="loader-container" style={{display: `${loading ? "" : "none"}`}}>
                        <BarLoader color="white" />
                    </div>
                    
                    <div className="soldier-content" style={{display: `${loading ? "none" : ""}`}}>
                        <div className="soldier-look">
                            <div className="soldier-dogtags">
                                <img src={dogtag2} loading="eager" alt="" className="soldier-dogtags-left" />
                                <img src={dogtag1} loading="eager" alt="" className="soldier-dogtags-right" />
                            </div>
                            <img src={soldier_look} loading="eager" alt="" className="soldier-pic" />
                        </div>

                        <div className="soldier-content-w">
                            <div className="soldier-info">
                                <div className="soldier-level">
                                    <div className="soldier-level-bar"></div>

                                    <img src={bf4_level} loading="eager" alt="" className="soldier-level-icon"></img>
                                </div>

                                <div className="soldier-level-info">
                                    <div className="soldier-level-info-h">cookie</div>

                                    <div className="soldier-level-stats">
                                        <div className="soldier-level-no">
                                            <div className="soldier-level-text">{Math.floor(soldierData.soldierPoints / levelStats.totalPoints * 100)}</div>
                                        </div>

                                        <div className="soldier-level-current">{soldierData.soldierPoints} / {levelStats.totalPoints}</div>

                                        <div className="soldier-level-estimate">- Estimated rank up in 1h</div>
                                    </div>
                                </div>
                            </div>

                            <div className="soldier-select">
                                <div className="soldier-menu-w">
                                    <SoldierMenuStats
                                        name="weapons"
                                        points={soldierData.weapons} totalPoints={levelStats.totalWeapons}
                                    />
                                    <SoldierMenuStats
                                        name="kits"
                                        points={soldierData.kits} totalPoints={levelStats.totalKits}
                                    />
                                    <SoldierMenuStats
                                        name="vehicles"
                                        points={soldierData.vehicals} totalPoints={levelStats.totalVehicals}
                                    />
                                    <SoldierMenuStats
                                        name="medals"
                                        points={soldierData.medals} totalPoints={levelStats.totalMedals}
                                    />
                                    <SoldierMenuStats
                                        name="assignments"
                                        points={soldierData.assignments} totalPoints={levelStats.totalAssignments}
                                    />
                                    <SoldierMenuStats
                                        name="dog tags"
                                        points={soldierData.dogTags} totalPoints={levelStats.totalDogTags}
                                    />
                                    <SoldierMenu name="battlepacks" />
                                </div>

                                <div className="soldier-game-stats">
                                    <div className="soldier-stats-w">
                                        <SoldierStats name="wins" value={`${soldierData.winsPercentage ? soldierData.winsPercentage : "-"}%`} />
                                        <SoldierStats name="score/min" value={soldierData.scorePerMin ? soldierData.scorePerMin.toFixed(0) : ""} />
                                        <SoldierStats name="kills/min" value={soldierData.killsPerMin ? soldierData.killsPerMin.toFixed(2) : ""} />
                                    </div>

                                    <div className="soldier-top-stats-w">
                                        <SoldierTopStats
                                            name="top vehicle"
                                            weapon={soldierData.topVehical} weapon_s={`${soldierData.topVehicalKills} kills`}
                                            src1={weapon1_white} src2={weapon1_black}
                                            classTag="tank"
                                        />
                                        <SoldierTopStats
                                            name="top primary"
                                            weapon={soldierData.topPrimary} weapon_s={`${soldierData.topPrimaryKills} kills`}
                                            src1={weapon2_white} src2={weapon2_black}
                                            classTag="acw"
                                        />
                                        <SoldierTopStats
                                            name="top class"
                                            weapon={soldierData.topClass} weapon_s={`${soldierData.topClassScore} scores`}
                                            src1={weapon3_white} src2={weapon3_black}
                                            classTag="engineer"
                                        />
                                        <SoldierTopStats
                                            name="top sidearm"
                                            weapon={soldierData.topSidearm} weapon_s={`${soldierData.topSidearmKills} kills`}
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