import React, { useState,useContext } from 'react'
import "./compile.css"
import Testing from './Testing'
import Video from './Video'
import { videoData } from "./videoData"
import { data } from "../Birthday reminder//data.js"
const UserContext = React.createContext()
const Compile = () => {
    const [video, setVideo] = useState(videoData)

    return (
        <>
            <Video video={video}></Video>
            {/* <Testing video={video} /> */}
        </>
)
}

export default Compile
