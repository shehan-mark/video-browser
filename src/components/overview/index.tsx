import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import VideoThumb from "../video-thumb";

import { addToWatch, selectVideos } from '../../redux/app-state';

import { VideoMeta } from "../../interface";

const Overview = () => {
  const dispatch = useDispatch();
  const allVideos: VideoMeta[] = useSelector(selectVideos);

  const watchVideo = (watch: VideoMeta) => {
    // console.log('WATCH VIDEO', watch);
    dispatch(addToWatch(watch));
  }

  const listVideos = () => {
    return allVideos.map((mediaItem: VideoMeta, i: number) => {
      return (
        <div
          className="group block w-full bg-zinc-800 hover:bg-zinc-700 transition-all p-2"
          key={`${mediaItem.title}-${i}`}
          onClick={() => watchVideo(mediaItem)}
        >
          <VideoThumb
            url={mediaItem.url}
            title={mediaItem.title}
            category={mediaItem.category}
            tags={mediaItem.tags}
          />
        </div>
      );
    });
  };

  return (
    <div className="py-8 grid grid-cols-1 gap-4 sm:grid-cols-3 ">
      {listVideos()}
    </div>
  );
};

export default Overview;
