import { User } from './user';

interface Comment {
  user: User;
  comment: string;
  dateTime: number;
};

export type { Comment };