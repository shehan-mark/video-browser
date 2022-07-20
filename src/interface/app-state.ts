import { VideoMeta } from './video-meta';

interface AppState {
  watch: VideoMeta | null;
  videos: VideoMeta[];
  enableComments: boolean;
}

export type {
  AppState
}