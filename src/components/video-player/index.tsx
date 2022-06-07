import React from 'react';
import ReactPlayer from "react-player";

const VideoPlayer = ({
  url,
}: {
  url: string
}) => {

  return (
    <div
      className="w-full video-thumb-player"
    >
      <ReactPlayer
        url={url}
        controls={true}
        onReady={() => console.log('ready to play')}
        loop={true}
        width="100%"
        height="100%"
      />
    </div>
  )
}

export default VideoPlayer;
