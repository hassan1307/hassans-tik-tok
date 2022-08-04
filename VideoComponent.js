import React,{useState,useEffect} from 'react'
import Comment_Panel from './Comment_Panel'
import Header from './Header'
import "./comment_panel.css"
import Horizontal_footer from './Horizontal_footer'
import "./video.css"
import { videoTagString, VideoTag } from 'react-video-tag'
const VideoComponent = ({ id, source, song }) => {
    const [show, setShow] = useState(false);
    const [comment, setComment] = useState([]);
    return (
        <>
            <div className="video-container">
                {/* header */}
                <Header />
                {/* video */}
                <div className="video" 
                style={{
                        height: "100vh"    
                        }}
                >
                <video 
                        style={{
                            height: "100%",
                            
                        }}
                    loop
                    autoPlay
                    alt="All the devices"
                    src={source}
                    ></video>
                </div>
                {/* horizontal-footer */}
                <Horizontal_footer song={song} show={show}  setShow={setShow} comment={comment} setComment={setComment} />
                <Comment_Panel show={show} setShow={setShow} comment={comment} setComment={setComment} />
            </div>
        </>
)
}

export default VideoComponent
