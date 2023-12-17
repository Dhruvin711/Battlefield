import React, { useState } from "react";

import profile1_svg from "../assets/invite/profile-1.svg";
import profile2_svg from "../assets/invite/profile-2.svg";
import join_default_svg from "../assets/invite/join_default.svg";
import join_black_svg from "../assets/invite/join_black.svg";
import squad_svg from "../assets/invite/squad.svg";
import online_svg from "../assets/invite/online.svg";
import offline_svg from "../assets/invite/offline.svg";

function InviteHeader(props) {
    return (
        <div className={`invite-${props.name}-container invite-header`}>
            <img src={props.img}
                loading="lazy" alt="" className={`invite-${props.name}-icon`} />

            <div className="invite-squad-h" style={{ opacity: `${props.active ? '1' : '0'}` }}>
                {props.name}
            </div>
        </div>
    )
}

function FriendTab(props) {
    const [isHover, setIsHover] = useState(false);

    return (
        <div className={`invite-${props.status}-friend`}
            onMouseOver={() => setIsHover(true)}  
            onMouseOut={() => setIsHover(false)}
            style={{opacity : `${props.status==="online" ? (isHover ? "1" : "0.8") : (isHover ? "1" : "0.4")}`}}
        >
            <div className="invite-friend-profile-w">
                <div className={`invite-${props.status}-bar`}></div>

                <img src={props.img}
                    loading="eager" alt="" className="invite-friend-profile" />
            </div>

            <div className="invite-friend-info" style={{ opacity: `${props.active ? '1' : '0'}`, backgroundColor:`${isHover ? 'rgb(255,255,255)' :'rgba(0, 0, 0, 0)'}` }}>
                <div className="invite-friend-name" style={{color: `${isHover ? 'rgb(16,16,16)':'rgb(255, 255, 255)'}`}}>{props.name}</div>
                <div className="invite-friend-status" style={{color:`${isHover ? 'rgba(16,16,16,0.6)': 'rgba(255,255,255,0.7)'}`}}>{props.status}</div>
            </div>
        </div>
    )
}

function Invite() {
    const [isHover, setIsHover] = useState(false);
    const [isHoverJoin, setIsHoverJoin] = useState(false);

    return (
        <div className="invite"
            style={{
                backgroundColor: `${isHover ? 'rgba(16, 16, 16, .8)' : 'rgba(0, 0, 0,0)'}`,
                transform: `${isHover ? 'translate3d(0vh, 0px, 0px)' : 'translate3d(19vh, 0px, 0px)'} scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`, 
                cursor: "default"
            }}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
        >
            <div className="invite-line"></div>

            {/* SQUAD */}
            <div className="invite-squad">
                <InviteHeader
                    name="squad"
                    img={squad_svg}
                    active={isHover}
                />

                <div className="invite-join"
                    onMouseOver={() => setIsHoverJoin(true)}  
                    onMouseOut={() => setIsHoverJoin(false)}
                    style={{backgroundColor:`${isHoverJoin ? 'rgb(255,255,255)' :'rgba(0, 0, 0, 0)'}`}}
                >
                    <img src={join_black_svg}
                        loading="lazy" alt="" className="invite-join-icon invite-join-icon--black"
                        style={{ display: `${isHoverJoin ? "block" : "none"}` }} />

                    <img src={join_default_svg}
                        loading="eager" alt="" className="invite-join-icon invite-join-icon--default" 
                        style={{ display: `${isHoverJoin ? "none" : "block"}` }} 
                    />

                    <div className="invite-join-h" 
                        style={{ opacity: `${isHover ? '1' : '0'}`, 
                        color: `${isHoverJoin ? "rgb(16,16,16)" : "rgb(255, 255, 255)"}`}}
                    >
                        squad join
                    </div>
                </div>
            </div>

            <div className="invite-line" style={{ opacity: `${isHover ? '1' : '0'}` }}></div>

            {/* ONLINE FRIENDS */}
            <div className="invite-online">
                <InviteHeader
                    name="online"
                    img={online_svg}
                    active={isHover}
                />

                <FriendTab
                    status="online"
                    name="MaryJane"
                    active={isHover}
                    img={profile1_svg}
                />
            </div>

            <div className="invite-line" style={{ opacity: `${isHover ? '1' : '0'}` }}></div>

            {/* OFFLINE FRIENDS */}
            <div className="invite-offline">
                <InviteHeader
                    name="offline"
                    img={offline_svg}
                    active={isHover}
                />

                <FriendTab
                    status="offline"
                    name="420"
                    active={isHover}
                    img={profile2_svg}
                />
            </div>
        </div>
    )
}

export default Invite;