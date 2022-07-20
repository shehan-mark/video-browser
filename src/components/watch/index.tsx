import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import VideoPlayer from '../video-player';
import VideoThumb from '../video-thumb';
import CommentSection from '../comment-section';

import { VideoMeta } from '../../interface';

import { selectWatch, selectVideos, addToWatch } from '../../redux/app-state';

const Watch = () => {
  const currentWatch: VideoMeta = useSelector(selectWatch);
  const allVideos: VideoMeta[] = useSelector(selectVideos);
  const dispatch = useDispatch();

  if (!currentWatch) return null;

  // console.log("CURRENT WATCH", currentWatch);

  const pickRelatedVideoToPlay = (relatedVideo: VideoMeta) => {
    dispatch(addToWatch(relatedVideo));
  }

  const renderRelatedVideos = () => {
    const relatedVideos = allVideos.filter((vid: VideoMeta) => vid.category === currentWatch.category && vid.title !== currentWatch.title);

    return relatedVideos.map((item: VideoMeta, i: number) => {
      return (
        <div key={`${item.title}-${i}`} onClick={() => pickRelatedVideoToPlay(item)} className="bg-zinc-800 hover:bg-zinc-700 transition-all p-2 mb-4">
          <VideoThumb
            url={item.url}
            category={item.category}
            title={item.title}
            tags={item.tags}
          />
        </div>
      )
    })
  };

  return (
    <div className="w-full">
      <div className="player-and-related-wrapper mb-4 sm:mb-0 sm:flex sm:flex-row">
        <div className="w-full mb-4 sm:mb-0 sm:w-8/12">
          <VideoPlayer url={currentWatch.url} />
          <h1 className="py-4 text-white text-xl">{currentWatch?.title}</h1>
          <div className="comment-section w-full">
            <CommentSection />
          </div>
        </div>
        <div className="w-full sm:w-4/12">
          <div className="sm:pl-6">
            <p className="text-white text-right text-sm mb-4">Related Videos - <span className="text-slate-400 text-sm">{currentWatch.category}</span></p>
            {renderRelatedVideos()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Watch;
