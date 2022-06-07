import React, { useState } from "react";
import ReactPlayer from "react-player";

import { VideoMeta } from "../../interface";

import './index.css';

const VideoThumb = ({ url, title, category, tags }: VideoMeta) => {
  const [playing, setPlaying] = useState(false);

  const handleMouseEnter = () => {
    // console.log('entering mouse')
    setPlaying(true);
  }

  const handleMouseLeave = () => {
    // console.log('mouse leave')
    setPlaying(false);
  }

  return (
    <>
      <div
        className="w-full h-3/4 video-thumb-player"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ReactPlayer
          url={url}
          playing={playing}
          loop={true}
          width="100%"
          height="100%"
          muted={true}
        />
      </div>
      <div className="py-4 h-1/4">
        <p className="mt-2 block font-medium truncate pointer-events-none text-white">
          {title}
        </p>
        <p className="block text-sm font-medium text-slate-500 pointer-events-none">
          {category}
        </p>
      </div>
    </>
  );
};

export default VideoThumb;
