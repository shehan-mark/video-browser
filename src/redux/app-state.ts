import { createSlice } from '@reduxjs/toolkit'

import { AppState } from '../interface';

const initialState: AppState = {
  watch: null,
  videos: [],
  enableComments: true,
}

export const AppStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    authenticate: (state) => {

    },
    storeVideos: (state, action) => {
      state.videos = [...action.payload.videos];
    },
    addToWatch: (state, action) => {
      if (action.payload) {
        state.watch = {
          url: action.payload.url,
          category:  action.payload.category,
          title:  action.payload.title,
          tags:  action.payload.tags,
          comments: action.payload.comments
        };
      } else {
        state.watch = null;
      }
    },
    updateVideo: (state, action) => {
      if (action.payload) {
        const updatedVids = state.videos.map((vid) => {
          if (vid.title === action.payload.title) {
            return {...action.payload};
          }
          return vid;
        });
        state.videos = updatedVids;
        state.watch = action.payload;
      }
    },
    toggleComments: (state, action) => {
      state.enableComments = action.payload;
    }
  },
})

export const selectWatch = (state: any) => state.appState.watch;
export const selectVideos = (state: any) => state.appState.videos;
export const selectCommentToggle = (state: any) => state.appState.enableComments;

export const {
  authenticate,
  addToWatch,
  storeVideos,
  updateVideo,
  toggleComments
} = AppStateSlice.actions

export default AppStateSlice.reducer