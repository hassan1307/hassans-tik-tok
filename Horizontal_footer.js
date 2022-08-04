import React,{useState} from 'react'
import "./horizontal_footer.css"
import {MdPersonPin} from 'react-icons/md'
import {FaGlobe,FaMusic} from 'react-icons/fa'
import Vertical_Footer from './Vertical_Footer'
const Horizontal_footer = ({ song, show, setShow,comment,setComment }) => {
    const [follow,setFollow] = useState(false)
    return (
        <>
            <div className="both-container">
                
        <div className="complete-footer">
            <div className="user-info">
                <div className="avatar" style={{fontSize:"3rem",marginRight:"1rem"}}>
                    <MdPersonPin/>
                </div>
                <div className="name" style={{marginRight:"1rem",marginTop:"0.7rem"}}>
                    <p>username</p>
                </div>
                <div className="globe" >
                            <FaGlobe style={{
                                marginRight: "1rem",
                                marginBottom: "0.5rem",
                                fontSize:"0.8rem"
                            }} />
                </div>
                <div className="follow" style={{marginBottom:"0.7rem"}} >
                            <button onClick={()=>setFollow(!follow)}
                                style={{
                                    border: "0.3px solid grey",
                                    padding: "0.2rem 0.4rem",
                                    background: "transparent",
                                    color: "white",
                                    borderRadius: "5px",
                                    fontSize:"0.6rem",
                                    cursor:"pointer"
                                }}>{follow?'unfollow':'Follow'}</button>
                </div>
            </div>
                    
                    <div className="song-container"
                        style={{
                            padding:"0",
                            width:"auto",
                            height:"26px",
                            padding: "0 10px"
                        }}>
                        <div className="icon"
                            style={{
                                fontSize:"1rem"
                            }}>
                                <FaMusic/>
                            </div>
                        <div className="song-name"
                            style={{
                                alignSelf: "start",
                                marginLeft:"1rem"
                            }}>
                                <p>{song}</p>
                            </div>
                        </div>
                    
                
                </div>
                <Vertical_Footer show={show} setShow={setShow} comment={comment} />
            </div>
        </>
)
}

export default Horizontal_footer
