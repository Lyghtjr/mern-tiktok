import React, { useRef, useState } from 'react';
import "../styles/Video.css";
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

const Video = ({url,channel,description,song,likes,messages,shares}) => {
    const [playing ,setPlaying]=useState(false);
    const videoRef = useRef(null);
    const handleVideoPress = () =>{
        if(playing){
        videoRef.current.pause();
        setPlaying(false);
        }else{
            videoRef.current.play();
            setPlaying(true);
        }
    }
    return (
        <div className="video">
            <iframe loop 
            onClick={handleVideoPress}
            ref={videoRef}
            className="video_player"
            src={url}  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen type="video/mp4"  controls  >
            </iframe>

            <VideoFooter channel={channel}
            description={description}
            song={song}
            />
            <VideoSidebar likes={likes} shares={shares} messages={messages}/>
        </div>
    )
}

export default Video;
