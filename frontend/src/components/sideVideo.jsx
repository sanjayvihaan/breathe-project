import React from 'react';

const VideoComponent =  ({ SideImage }) => {
    return (
        <video className="w-full h-full hidden md:block object-cover" autoPlay muted loop>
            <source src={SideImage} type="video/mp4"/>
        </video>
    )
}

export default VideoComponent