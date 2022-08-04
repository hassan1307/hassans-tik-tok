import React from 'react'
import { videoTagString, VideoTag } from 'react-video-tag'
const Testing = ({ source }) => {
    return (
        <>
              
            <video
          style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
          playsInline
          loop
          muted
          autoPlay
          alt="All the devices"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            ></video>
        </>
)
}

export default Testing
