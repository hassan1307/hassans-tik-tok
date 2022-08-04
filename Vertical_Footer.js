import React, { useState,useContext,useEffect } from 'react'
import { MdFavoriteBorder, MdComment, MdShareAlt,MdFavorite } from 'react-icons/md';
import { RiShareForwardFill } from "react-icons/ri";
import { FiMoreHorizontal } from "react-icons/fi";
import "./comment_panel.css"
import Comment_Panel from './Comment_Panel';
const Vertical_Footer = ({ show, setShow,comment }) => {
    const [click, setClick] = useState(false)
    const [comm, setComm] = useState(0);
    let count = 247;
    useEffect(() => {
        setComm(comment.length)
        console.log(comm);
    },[<MdComment/>])
    return (
        <>
            <div className="vertical-container">
                <div className="like" onClick={()=>setClick(!click)}>
                    {click ? <MdFavorite
                        style={{
                            color:"red"
                        }} /> : <MdFavoriteBorder />}
                    <div className="likeCount">
                        <p>{click?count+1:count}</p>
                    </div>
                </div>
                <div className="comment">
                    <MdComment
                        onClick={() => setShow(!show)} />
                <div className="likeCount">
                        <p>{comm}</p>
                </div>
                </div>
                <div className="share">
                    <RiShareForwardFill/>
                <div className="likeCount">
                        <p>{count}</p>
                    </div>
                </div>
                <div className="more">
                    <FiMoreHorizontal/>
                </div>
            </div>
        </>
)
}

export default Vertical_Footer
