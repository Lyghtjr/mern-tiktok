import { Favorite,  FavoriteBorder,  Message, ShareOutlined } from '@material-ui/icons';
import React from 'react';
import { useState } from 'react';
import "../styles/VideoSidebar.css";

const VideoSidebar = ({likes,shares,messages}) => {
    const [liked,setLiked] = useState(false);
    return (
        <div className="videoSidebar">
        <div className="videoSidebar_button">
            {
                liked ? (
                    <Favorite fontSize="large" onClick={(e)=>setLiked(false)}/>
                ) :(
                    <FavoriteBorder fontSize="large" onClick={(e)=>setLiked(true)}/>
                )
            }
           
            <p>{liked ? likes + 1 : likes}</p>
        </div>
         <div className="videoSidebar_button">
            <Message fontSize="large"/>
            <p>{messages}</p>
         </div>
          <div className="videoSidebar_button">
         <ShareOutlined fontSize="large"/>   
         <p>{shares}</p>
          </div>
          </div>
    )
}

export default VideoSidebar
