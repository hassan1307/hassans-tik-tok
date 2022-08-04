import React from 'react'
import VideoComponent from './VideoComponent'
import "./video.css"
const Video = ({video}) => {
    return (
        <>
                {video.map((data) => {
                    return (
                        <>
                            <VideoComponent {...data} key={data.id} />
                        </>
                    )
                })}
        </>
)
}

export default Video
