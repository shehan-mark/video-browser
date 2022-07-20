import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Overview from '../overview';
import TransitionModal from '../TransitionModal';
import Watch from '../watch';

import { addToWatch, selectWatch, storeVideos } from '../../redux/app-state';

import VideoData from '../../data/videos.json';

const Dashboard = () => {
  const [openWatchModal, setOpenWatchModal] = useState(false);
  
  const currentWatch = useSelector(selectWatch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(storeVideos(VideoData));
  }, [])

  useEffect(() => {
    if (currentWatch !== null) {
      setOpenWatchModal(true);
    } else {
      setOpenWatchModal(false);
    }
  }, [currentWatch]);

  const handleModalClose = () => {
    dispatch(addToWatch(null));
  }

  return (
    <div className="max-w-screen-2xl mx-auto sm:px-6 lg:px-8">
      <div className="py-8 px-4 text-left">
        <h1 className="text-3xl leading-tight text-white">Home</h1>
        <Overview />
        <TransitionModal isOpen={openWatchModal} closeControl={handleModalClose}>
          <Watch />
        </TransitionModal>
      </div>
    </div>
  )
}

export default Dashboard;
