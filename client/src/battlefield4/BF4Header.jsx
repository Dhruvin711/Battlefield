import React from "react";

import bf4_level from "../assets/battlefield4/bf4_level.svg";
import bf4_logo from "../assets/battlefield4/bf4_logo.svg";

function BF4Header() {
    return (
        <div className="bf4-header-container">
            <div className="bf4-level">
                <div className="bf4-level-bar"></div>
                <img
                    src={bf4_level}
                    className="bf4-level-icon"
                />

                <div className="bf4-level-flare"></div>
                <div className="bf4-level-shadow"></div>
            </div>

            <img 
                src={bf4_logo}
                className="bf4-logo-icon"
            />
        </div>
    )
}

export default BF4Header;