import { Comment } from './comment';

interface VideoMeta {
  title: string;
  url: string;
  category: string;
  tags: string[];
  comments?: Comment[];
}

export type { 
  VideoMeta
};