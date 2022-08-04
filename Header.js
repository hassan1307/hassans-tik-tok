import React from 'react'
import {MdArrowBack,MdCameraAlt,MdSearch,MdPersonPin} from "react-icons/md"
import "./header.css"
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="back" style={{fontSize:"2rem"}}>
                    <MdArrowBack/>
                </div>
                <div className="header-stuff">
                    <div className="camera">
                        <div className="icon">
                            <MdCameraAlt/>
                        </div>
                    </div>
                    <div className="search">

                    <MdSearch/>
                    </div>
                    <div className="person">

                    <MdPersonPin />
                    </div>
                </div>
            </div>
        </>
)
}

export default Header
