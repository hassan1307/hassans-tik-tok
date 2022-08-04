import React,{useState} from 'react'
import "./comment_panel.css"
import { IoMdArrowDown } from 'react-icons/io'
import {MdPersonPin} from 'react-icons/md'
const Comment_Panel = ({ show, setShow,comment,setComment }) => {
    const [text, setText] = useState('');
    const [readMore, setReadMore] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text) {
            
            const list = { id: new Date().getTime().toString, item: text };
            setComment([...comment, list]);
            setText('');
        }
    }



    return(
        <>
            <div className={`${show ? 'comment-panel hello' : 'comment-panel'}`}
            style={{
                zIndex: "1000",
                width:"100%",
                heigth:"100%"
                }}>
                <IoMdArrowDown
                    onClick={()=>setShow(false)}
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "50%",
                            zIndex:"1000000",
                            color:"white",
                            cursor:"pointer",
                            fontSize:"1.3rem"
                        }}      
                    />
                <div className="input"
                    style={{
                        display: "flex",
                        width: "50%",
                        zIndex: "1000000",
                        

                }}>
                <input type="text"
                        placeholder='Add a comment...'
                        value={text}
                        onChange={(e)=>setText(e.target.value)}
                    style={{
                        position: "absolute",
                        bottom: "10px",
                        width: "50%",
                        borderRadius: "25px",
                        padding:"0.4rem",
                        border: "none",
                        margin: "auto",
                        outlineWidth:"0",
                        wordBreak: "break-word",
                        left:"20px"
                        }}
                />
                    <button type='submit' onClick={handleSubmit}
                        style={{
                        position: "absolute",
                        bottom: "10px",
                        width: "20%",
                        borderRadius: "6px",
                        padding:"0.4rem",
                        border: "2px solid white",
                        margin: "auto",
                        outlineWidth: "0",
                        right:"10px",
                        color: "white",
                        background:"transparent"
                        
                    }}>Post</button>
                </div>
                    {comment.map((data) => {
                        const { item } = data;
                        return (
                            <div className="comment-box">
                                <>
                                    <MdPersonPin style={{
                                        fontSize: "3rem",
                                }}/>
                                    <p>
                                        {readMore ? item : `${item.substring(0, 10)}`}
                                       
                                    </p>
                                    
                            </>
                    </div>
                        )})}
            </div>
        </>
    )
}

export default Comment_Panel
